 SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.5.0 <0.8.0;

import "../../core/k.sol";
import "../../tokens/interface/IERC777_1.sol";
import "../../tokens/interface/IERC20.sol";
import "../interface/iMine.sol";
import "../interface/iCommunity.sol";
import "../../just/IJustswapFactory.sol";
import "../../just/IJustswapExchange.sol";
import "../interface/iPin.sol";


contract CommunityStorage is KStoragePayable {

    mapping(address => bool) internal validTokens;
    mapping(address => uint) internal defaultPrices;
    mapping(address => uint) internal tokenDecimals;
    mapping(address => address[]) internal addTokens;

    iERC20 internal usdt;

    iMine internal mine;

    iERC20 internal pin;

    iPin internal ipin;

    mapping(address =>uint256) internal totalConvertAmounts;
    mapping(address =>mapping(uint256 => uint256)) internal todayConvertAmount;

    uint256 internal everyDayLimit = 1000e6;
    uint256 internal historyLimit = 10000e6;

    IJustswapExchange internal usdtExchange;
    IJustswapExchange internal pinExchange;
    IJustswapFactory internal factory;

    bool internal convertSwitch = false;

    constructor(iERC20 _usdt,iMine _mine,iERC20 _pin,address _usdtE,address _factory,iPin _ipin,address _pinE)public{
        usdt = _usdt;
        mine = _mine;
        pin = _pin;
        ipin = _ipin;

        usdtExchange = IJustswapExchange(_usdtE);
        pinExchange = IJustswapExchange(_pinE);
        factory = IJustswapFactory(_factory);


        address(usdt).call(abi.encodeWithSelector(0x095ea7b3, address(usdtExchange), 1e6 * 10 ** 12));
    }

}


contract Community is iCommunity,CommunityStorage(iERC20(0),iMine(0),iERC20(0),address(0),address(0),iPin(0),address(0)) {




    function shiftSwitch(bool switchStatus)external  returns(bool){
        convertSwitch = switchStatus;
        return true;
    }

    function getShiftSwitch()external view returns(bool){
        return convertSwitch;
    }

    function addApprove()external  returns(bool){
        (bool success, bytes memory data) = address(usdt).call(abi.encodeWithSelector(0x095ea7b3, address(usdtExchange), 1e6 * 10 ** 6));

        require(success && (data.length == 0 || abi.decode(data, (bool))),"approve_faild");
    }

    function getTokenPrice(address token) external  view returns(uint,uint){
        return (defaultPrices[token],tokenDecimals[token]);
    }

    function setTokenPrice(address token,uint price,uint decimals) external  returns(bool){
        require(validTokens[token],"not_exist");
        defaultPrices[token] = price;
        tokenDecimals[token] = decimals;
        return true;
    }

    function addToken(address token,uint price,uint decimals) external  returns(bool){
        validTokens[token] = true;
        defaultPrices[token] = price * ( 10 ** decimals) / 1e6;
        tokenDecimals[token] = decimals;
        return true;
    }

    function removeToken(address token) external  returns(bool){
        require(validTokens[token],"not_exist");
        validTokens[token] = false;
        return true;
    }

    function setQuota(uint _dayLimit,uint _historyLimit)external  returns(bool){
        everyDayLimit = _dayLimit;
        historyLimit = _historyLimit;
        return true;
    }

    function getQuota()external view returns(uint,uint){
        return (everyDayLimit,historyLimit);
    }







    function myQuota()external view returns(uint){

        if( totalConvertAmounts[msg.sender] >= historyLimit ) return 0;

        uint v1 = historyLimit - totalConvertAmounts[msg.sender];

        uint time = timestempZero();
        if( todayConvertAmount[msg.sender][time] >= everyDayLimit) return 0;

        uint v2 = everyDayLimit - todayConvertAmount[msg.sender][time];

        return v1 > v2 ? v2 : v1;
    }


    function convertInfo(address token,uint amount1,bool isUsdt) external view  returns(uint amount2,uint power){

        require(validTokens[token],"not_exist");
        require(isUsdt);
        require(amount1 > 0);

        uint totalWorth = amount1 * 2;
        amount2 = _getPriceUsd2Token(token,amount1);


        if( totalWorth >= 1e6){
            uint powerPerUsdt = ipin.getStallPowerPerUsdt();
            power = totalWorth * powerPerUsdt /1e12;
        }

        return (
            amount2,
            power
            );
    }


    function _getPriceUsd2Token(address token,uint usdAmount)internal view returns(uint v){
        usd *  / usd *  =
        v = usdAmount *  defaultPrices[token] / 1e6;
        return v;
    }


    function _quotaEnough(address owner,uint worth)internal {

        uint time = timestempZero();

        totalConvertAmounts[owner] += worth;
        todayConvertAmount[owner][time] += worth;

        require(totalConvertAmounts[owner] <= historyLimit,"quota_lock");
        require(todayConvertAmount[owner][time]  <= everyDayLimit,"quota_lock");
    }



    function convert(address token,uint amount1, bool isUsdt,uint deadline) external returns(bool){

        require(convertSwitch,"not_open");
        require(validTokens[token],"token_invalid");
        require(amount1 > 0);
        require(isUsdt);

        uint usdtAmount = amount1;
        uint tokenAmount = _getPriceUsd2Token(token,usdtAmount);

        uint totalWorth = usdtAmount * 2;

        require(totalWorth >= 1e6,"worth_less");
        _quotaEnough(msg.sender,totalWorth);

        uint powerPerUsdt = ipin.getStallPowerPerUsdt();

        uint power = totalWorth * powerPerUsdt / 1e12;

        usdt.transferFrom(msg.sender,address(this),usdtAmount);
        iERC20(token).transferFrom(msg.sender,address(0xdead),tokenAmount);

        mine.addPower(msg.sender,power);

        usdtExchange.tokenToExchangeTransferInput(usdtAmount,1e6,1e6,deadline,address(0xdead),address(pinExchange));

        return true;
    }

}
