 SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.5.0 <0.8.0;

import "../../core/k.sol";
import "../../core/library/PinTimelineValue.sol";
import "../../tokens/interface/IERC777_1.sol";
import "../../tokens/interface/IERC20.sol";
import "../interface/iMine.sol";


contract MineStorage is KStoragePayable {

    event PowerEvent(address indexed owner,uint indexed amount,uint indexed time);

    event DrawEvent(address indexed owner,uint indexed amount,uint indexed time);

    
    using PinTimeLineValue for PinTimeLineValue.Data;
    
    struct ReleaseInfo {
        uint latestCutDownTime; 
        uint initValue;
        uint degree;
        uint oneDayInrValue;
    }
    ReleaseInfo internal releaseInfo;
    
    struct PowerConfig{
        uint total;
        uint mined;
    }
    
    PowerConfig[] internal powerConfigs;
    
    struct MinerInfo {
        PinTimeLineValue.Data value;
        uint lastDrawTime; 
        uint mined;
        bool isMiner;
    }
    
    PinTimeLineValue.Data internal networkValue;

    struct NetworkInfo{
        uint mined;
        uint total;
    }
    NetworkInfo internal networkInfo;
    mapping (address => MinerInfo) internal minerInfos;
    
    iERC777_1 internal pinAddress;

    iERC20 internal usdtAddress;

    uint internal everyDegreeMineable = 1000000e6;


    constructor(
        iERC777_1 _pinAddress,iERC20 _usdtAddress
    ) public {
        pinAddress = _pinAddress;
        usdtAddress = _usdtAddress;

        networkInfo = NetworkInfo(0,19950000e6);

        networkValue.init(1 days, timestempZero(), 0);

        releaseInfo = ReleaseInfo(
            timestempZero(),
            1000e6,
            0,
            10e6
        ); 
        
        uint len = networkInfo.total / everyDegreeMineable;

        for( uint i = 0; i < len; i++){
            powerConfigs.push(PowerConfig(everyDegreeMineable,0));
        }

        uint remainder = networkInfo.total % everyDegreeMineable;
        if( remainder > 0){
            powerConfigs.push(PowerConfig(remainder,0));
        }

    } 
}

contract Mine is iMine,MineStorage(iERC777_1(0),iERC20(0)) {



function getPowerConfigs()external view returns(uint[] memory totals,uint[] memory mineds,uint,uint){

    totals = new uint[](powerConfigs.length);
    mineds = new uint[](powerConfigs.length);

    for( uint i = 0; i < powerConfigs.length; i++){
        PowerConfig storage config = powerConfigs[i];
        totals[i] = config.total;
        mineds[i] = config.mined;
    }

    return (totals,mineds,releaseInfo.degree,networkInfo.mined);
}


    function manageSetPower(address owner,uint amount,bool isAdd) external  returns(bool){

        MinerInfo storage minerInfo = minerInfos[owner];

        uint time = timestempZero();

        if( !minerInfo.isMiner){
            return false;
        }

        if( isAdd ){
            networkValue.increase(amount, time);
            minerInfos[owner].value.increase(amount,time); 
        }else{
            networkValue.decrease(amount, time);
            minerInfos[owner].value.decrease(amount,time); 
        }

        return true;
    }


    function manageGetPower(address owner)external  view returns(uint){

        MinerInfo storage minerInfo = minerInfos[owner];

        if( !minerInfo.isMiner){
            return 0;
        }else{
            return minerInfo.value.latestValue();
        }
    }

        
    function todayReleaseInitValue() external view returns(uint){

         =  * 
        return releaseInfo.initValue +  (timestempZero() - releaseInfo.latestCutDownTime) / 1 days * releaseInfo.oneDayInrValue;
    }


    function getNetworkInfo()external view returns(uint networkPower,uint todayNewAdd){
        networkPower = networkValue.latestValue();
        uint yesterday =  networkValue.bestMatchValue(timestempZero() - 1 days);

        if( networkPower >= yesterday){
            todayNewAdd = networkPower - yesterday;
        }
    }



    
    function mineInfo() external view returns(
        uint myPower,
        uint canDraw,
        uint drawed,
        uint todayAmount,
        bool isMiner){

        uint todayZero = timestempZero();

        MinerInfo storage info = minerInfos[msg.sender];

        myPower = info.value.latestValue(); 

        if( myPower > 0 && todayZero > info.lastDrawTime  && networkInfo.total > networkInfo.mined ){
            canDraw = _calculateDrawablePin(info,todayZero);

            if( canDraw + networkInfo.mined > networkInfo.total ){
                canDraw = networkInfo.total - networkInfo.mined;
            }
        }
        drawed = info.mined;      
        todayAmount = 0;_calulateTodayReleaseInitVlue(todayZero); 
        isMiner = info.isMiner;             
    }

    
    function _upgradeReleaseInfo(uint todayZero) internal {

         =  * 
        uint inrV = (todayZero - releaseInfo.latestCutDownTime) / 1 days * releaseInfo.oneDayInrValue;
        
        releaseInfo.initValue = (releaseInfo.initValue + inrV) * 50 / 100;
        releaseInfo.latestCutDownTime = todayZero;
        1
        releaseInfo.degree +=1;
    }


    
    function _calculateDrawablePin(MinerInfo storage minerInfo,uint todayZero)internal view returns(uint v){
        
        
        uint startTime = 
                        minerInfo.lastDrawTime > todayZero - 7 days 
                        ?
                        minerInfo.lastDrawTime 
                        : 
                        todayZero - 7 days;

        
        uint initValue = releaseInfo.initValue;
        
        uint inrTime = releaseInfo.latestCutDownTime;

           
        if( startTime > releaseInfo.latestCutDownTime){
            initValue = releaseInfo.initValue +  (startTime - releaseInfo.latestCutDownTime) / 1 days * releaseInfo.oneDayInrValue;
            inrTime = startTime;
        }
        
        
        
        for(; startTime < todayZero; startTime += 1 days){

            
            uint totalValue = networkValue.bestMatchValue(startTime );

            if( totalValue > 0){

                （）
                if( startTime > inrTime ){
                    initValue += releaseInfo.oneDayInrValue;
                }

                 =  *  / 
                v += initValue  * minerInfo.value.bestMatchValue(startTime) / totalValue;
            }
            
        }
    }

    
    function drawPin() external returns (bool) {        

        MinerInfo storage minerInfo = minerInfos[msg.sender];

        require( minerInfo.isMiner, "not_miner" );

        require(networkInfo.total > networkInfo.mined,"mine_finish");

        uint256 todayZero = timestempZero();

        
        require(minerInfo.lastDrawTime < todayZero,"not_value");

        
        uint v = _calculateDrawablePin(minerInfo,todayZero);

        
        if( v + networkInfo.mined > networkInfo.total ){
            v = networkInfo.total - networkInfo.mined;
        }

          (4)
        if ( v > 0  && releaseInfo.degree < powerConfigs.length ) {
            
            
            PowerConfig storage config = powerConfigs[releaseInfo.degree];

            minerInfo.lastDrawTime = todayZero; 
            minerInfo.mined += v;
            config.mined += v;
            networkInfo.mined += v;

            / 
            pinAddress.operatorSend(
                address(pinAddress),msg.sender,v,"Mined",""
            ); 

              
            if( config.mined >= config.total){
                _upgradeReleaseInfo(todayZero);
            }  

            emit DrawEvent(msg.sender,v,timestemp());
        }
        return true;
    }


    
    function addPower(address owner,uint amount) external KDelegateMethod {

        MinerInfo storage minerInfo = minerInfos[owner];

        uint time = timestempZero();
        if( !minerInfo.isMiner){
            minerInfo.isMiner = true;
            minerInfo.value.init(1 days, time, 0);

            if ( minerInfo.lastDrawTime == 0 ) {
                minerInfo.lastDrawTime = time;
            }
        }
        require( minerInfos[owner].isMiner, "NotMiner" );

        
        networkValue.increase(amount, time);
        minerInfos[owner].value.increase(amount,time);      

        emit PowerEvent(owner,amount,time);  
    }
    
    function minerInit(address owner,uint power) external KDelegateMethod {

        MinerInfo storage minerInfo = minerInfos[owner];
    
        minerInfo.isMiner = true;
        uint time = timestempZero();
        minerInfo.value.init(1 days, time, 0);
        if ( minerInfo.lastDrawTime == 0 ) {
            minerInfo.lastDrawTime = time;
        }

        if( power > 0 ){
            networkValue.increase(power, time);
            minerInfos[owner].value.increase(power,time);      
            emit PowerEvent(owner,power,time); 
        }
    }    

}

