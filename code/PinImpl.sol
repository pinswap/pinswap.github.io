// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.5.0 <0.8.0;

import "../../core/k.sol";
import "../../tokens/interface/IERC777_1.sol";
import "../../tokens/interface/IERC20.sol";
import "../interface/iMine.sol";
import "../interface/iPin.sol";
import "../interface/iRelation.sol";
import "../../just/IJustswapFactory.sol";
import "../../just/IJustswapExchange.sol";


contract PinStorage is KStoragePayable {

    event AwardEvent(address indexed owner,uint indexed amount,uint indexed time,uint8 aType);

    event EarnestEvent(address indexed owner,uint indexed amount,uint indexed time,uint8 eType);

    iERC20 internal usdt;

    struct Award{
        uint256 drawAward;//
        uint256 partakeAward;//
        uint256 recommendAward;//
        uint256 teamAward;//
    }

    mapping(address => Award) internal playerAwards;//

     enum RoundStatus {
        NotInit, //
        Matching, //
        Clearing, //
        Openable,//
        Finish,//
        Invalid //
        }


    struct Round{
        uint256 prepareBlock;//
        uint256 luckyBlock;//
        uint256 invalidBlock;//
        uint256 power;//
        bytes32 luckyHash;//hash
        uint8 stallIndex;//
        uint8 status;//
        uint8 luckyValue;//
        address[] players;//
    }
    mapping(uint256 => Round) internal rounds;//

    uint256[] internal worldRounds; //


    struct Stall{
        uint256 payment;//
        uint256 pinValue;//
        uint256 lastUpdateTime;//
        uint256 inrRate;//
        uint256 partakeAward;//
        uint256 firstRecommendAward;//
        uint256 nodeAward;//
        uint256 superNodeAward;//
        uint256 repurchase;//
        uint256 senderAward;//
    }

    Stall[] internal stalls;//
    mapping(uint256 => uint256) internal roundNumbers;//


    mapping(address => uint256) internal earnestAmounts;//
    mapping(address =>uint256[]) internal myRounds;//


    address payable internal receiver;

    iERC777_1 internal pin;

    iMine internal mine;

    IJustswapExchange internal usdtExchange;
    IJustswapExchange internal pinExchange;

    iRelation internal relation;

    mapping(address => bool) internal isAutoDoPins;

    address[] internal autoDoPinPlayers;

    uint internal autoDoPinIndex;

    bool internal pinSwitch = false;


    constructor(
        iERC20 _usdt,
        address _receiver,
        iERC777_1 _pin,
        iMine _mine,
        address _usdtExchange,
        address _pinE,
        iRelation _relation) public {

        usdtExchange = IJustswapExchange(_usdtExchange);
        pinExchange = IJustswapExchange(_pinE);

        usdt = _usdt;
        receiver = address(uint160(_receiver));
        pin = _pin;

        //
        uint time = timestempZero();
        stalls.push(Stall(20e6,200,time,1.002e6,0.4e6,0.2e6,0.2e6,1e6,10.6e6,0.4e6));
        stalls.push(Stall(50e6,500,time,1.002e6,1e6,0.5e6,0.5e6,2.5e6,26.5e6,1e6));
        stalls.push(Stall(100e6,1000,time,1.002e6,2e6,1e6,1e6,5e6,53e6,2e6));

        //200e6,2000,4e6,2e6,2e6,10e6,100e6,10e6

        //
        for(uint8 i = 0; i < stalls.length; i++){
            roundNumbers[i] = i +10000;
        }

        mine = _mine;

        relation = _relation;
        //
        address(usdt).call(abi.encodeWithSelector(0x095ea7b3, address(usdtExchange), 1e6 * 10 ** 12));

    }
}

contract Pin  is PinStorage(iERC20(0),address(0),iERC777_1(0),iMine(0),address(0),address(0),iRelation(0)) {
   
   //function setPinExchange(address )
    function getShiftSwitch()external view returns(bool){
        return pinSwitch;
    }
    /////////////////////////////////////////////////////
    function updateStall(
        uint stallIndex,
        uint payment,
        uint pinValue,
        uint partakeAward,
        uint firstRecommendAward,
        uint nodeAward,
        uint superNodeAward,
        uint repurchase,
        uint senderAward)external  returns(bool){

        require(stallIndex < stalls.length);

        Stall storage stall = stalls[stallIndex];
        if( stall.payment != payment){
            stall.payment = payment;
        }

        if( stall.pinValue != pinValue){
            stall.pinValue = pinValue;
        }

        if( stall.partakeAward != partakeAward){
            stall.partakeAward = partakeAward;
        }

        if( stall.firstRecommendAward != firstRecommendAward){
            stall.firstRecommendAward = firstRecommendAward;
        }

        if( stall.nodeAward != nodeAward){
            stall.nodeAward = nodeAward;
        }

        if( stall.superNodeAward != superNodeAward){
            stall.superNodeAward = superNodeAward;
        }

        if( stall.repurchase != repurchase){
            stall.repurchase = repurchase;
        }

        if( stall.senderAward != senderAward){
            stall.senderAward = senderAward;
        }

        return true;
    }

    function getStall() external view returns(
        uint,
        uint,
        uint,
        uint,
        uint,
        uint){


        Stall storage stall = stalls[stalls.length-1];

        return (
            stall.pinValue,
            stall.partakeAward,
            stall.firstRecommendAward,
            stall.nodeAward,
            stall.superNodeAward,
            stall.senderAward
        );
    }

    function shiftSwitch(bool switchStatus)external  returns(bool){
        pinSwitch = switchStatus;
        return true;
    }

    function addApprove()external  returns(bool){
        (bool success, bytes memory data) = address(usdt).call(abi.encodeWithSelector(0x095ea7b3, address(usdtExchange), 1e6 * 10 ** 6));

        require(success && (data.length == 0 || abi.decode(data, (bool))),"approve_faild");
    }

        /////////////////////////////////////////////////////

    function myIsAutoDoPin()external view returns(bool){
        return isAutoDoPins[msg.sender];
    }

    function getStallPowerPerUsdt() external view returns(uint){
        Stall storage stall = stalls[stalls.length -1];

        return stall.pinValue * 1e12 / stall.payment;
    }

    //
    function doDrawAward() external KRejectContractCall returns(bool){

        require(relation.myIsMiner(msg.sender),"not_miner");

        Award storage award = playerAwards[msg.sender];

        uint256 amount = award.partakeAward + award.teamAward + award.recommendAward;

        require( amount > 0 ,"not_value");

        //
        award.drawAward += amount;

        uint time = timestemp();

        if( award.partakeAward > 0){
            emit AwardEvent(msg.sender,award.partakeAward,time,1);
            award.partakeAward = 0;
        }

        if( award.teamAward > 0){
            emit AwardEvent(msg.sender,award.teamAward,time,3);
            award.teamAward = 0;
        }

        if( award.recommendAward > 0){
            emit AwardEvent(msg.sender,award.recommendAward,time,2);
            award.recommendAward = 0;
        }

        usdt.transfer(msg.sender,amount);

        return true;
    }

    //
    function myAwards() external view returns(
        uint canDraw,
        uint drawed,
        uint partakeAmount,
        uint teamAmount,
        uint shareAmount,
        uint earnestAmount){

        Award storage award = playerAwards[msg.sender];

        drawed = award.drawAward;//
        partakeAmount = award.partakeAward;//
        teamAmount = award.teamAward;//
        shareAmount = award.recommendAward;//
        canDraw = partakeAmount + teamAmount + shareAmount;//
        earnestAmount = earnestAmounts[msg.sender];

        return (canDraw,drawed,partakeAmount,teamAmount,shareAmount,earnestAmount);
    }

    //，
    function _actionable(address owner)internal view returns(bool){

        uint[] storage numbers = myRounds[owner];

        if(numbers.length > 0){

            Round storage round = rounds[numbers[numbers.length-1]];

            return  round.status >= uint8(RoundStatus.Finish)
                    ||  (round.status == uint8(RoundStatus.Clearing) && block.number > round.invalidBlock);
        }
        return true;
    }

    //
     function doPin(uint8 stall) external returns(bool){

        require(pinSwitch,"not_open");

        require(stall < stalls.length,"stall_exceed");

        require(_actionable(msg.sender),"has_round");

        Stall storage stallData = stalls[stall];

        uint time = timestempZero();
        _updateStall(stallData,time);

        require(earnestAmounts[msg.sender] >= stallData.payment,"earnest_lock");

        uint256 currentNumber = roundNumbers[stall];

        myRounds[msg.sender].push(currentNumber);

        Round storage round = rounds[currentNumber];
        round.players.push(msg.sender);

        //，
        if( round.status == uint8(RoundStatus.NotInit) ){
            round.stallIndex = stall;
            round.power = stallData.pinValue;
            round.status = uint8(RoundStatus.Matching);
            round.luckyValue = 0xff;
            worldRounds.push(currentNumber);//
        }

        //10，
        if( round.players.length >= 10 ){
            round.prepareBlock = block.number;
            round.status = uint8(RoundStatus.Clearing);
            round.luckyBlock = round.prepareBlock + 10;
            round.invalidBlock = round.luckyBlock + 256;
            //
            roundNumbers[stall] += stalls.length;
        }

        relation.updateachievement(msg.sender,stallData.payment,time,address(0x0));
        return true;
    }



    //
    function _updateStall(Stall storage config,uint time) internal{

        uint256 d = (time - config.lastUpdateTime) / 1 days;

        if( d >= 1 ){
            uint256 rate = config.inrRate;

            for( uint256 i = 1; i < d; i++ ){
                rate = rate * config.inrRate / 1e6;
            }
            config.pinValue = config.pinValue * rate / 1e6;
            config.lastUpdateTime = time;
        }
    }

    //
    function doSettlement(uint256 roundNum,uint deadline) external returns(bool){

        Round storage round = rounds[roundNum];

        require(round.status == uint8(RoundStatus.Clearing),"status_error");

        require(block.number > round.luckyBlock && block.number < round.invalidBlock,"noable_settlement");

        round.luckyHash = blockhash(round.luckyBlock);
        round.luckyValue = _calculateLuckyValue(round.luckyHash);

        round.status = uint8(RoundStatus.Finish);

        Stall storage config = stalls[round.stallIndex];
        address luckyPlayer = round.players[round.luckyValue];

        require(earnestAmounts[luckyPlayer] >= config.payment,"earnest_lock");
        earnestAmounts[luckyPlayer] -= config.payment;

        uint value = config.payment;
        for( uint i = 0; i < 10 ; i++){
            playerAwards[round.players[i]].partakeAward += config.partakeAward;
        }
        value -= config.partakeAward * 10;

        (
            address[] memory recommers,
            address[] memory vNodes,
            uint[] memory nums,
            address supperNode ) = relation.getFirstRecommerAndNode(msg.sender,round.players,round.luckyValue);
        
        
        //
        if( supperNode != address(0x0)){
            playerAwards[supperNode].teamAward += config.superNodeAward;
            value -= config.superNodeAward;
        }
        
        //
        for( uint i = 0; i < recommers.length; i++){
            playerAwards[recommers[i]].recommendAward += config.firstRecommendAward;
            value -= config.firstRecommendAward;
        }

        //
        for( uint i = 1; i < vNodes.length; i ++){
            if( vNodes[i] != address(0x0)){
                uint amount = config.nodeAward * nums[i];
                playerAwards[vNodes[i]].teamAward += amount;
                value -= amount;
            }
        }

        //
        mine.addPower(luckyPlayer,round.power);

        playerAwards[receiver].teamAward += config.repurchase;
        value -= config.repurchase;

        playerAwards[msg.sender].partakeAward += config.senderAward;
        value -= config.senderAward;

        require( value > 0 && value <= config.payment,"award_error");
        usdt.transfer(receiver,value);
        return true;
    }

    function getBuyBackAmount() external view  returns(uint){
        return playerAwards[receiver].teamAward;
    }

    function buyBack(uint amount,uint deadline)external  returns(bool){

        require(playerAwards[receiver].teamAward >= amount,"value_lock");
        playerAwards[receiver].teamAward -= amount;

        usdtExchange.tokenToExchangeTransferInput(amount,1e6,1e6,deadline,address(0xdead),address(pinExchange));
        return true;
    }




    //
    function _calculateLuckyValue(bytes32 txHash)internal pure returns(uint8 value){
        for(uint i = txHash.length - 1; i >= 0; i--){
            value = uint8(txHash[i] & 0x0f);
            if( value < 10) return value;

            value = uint8( txHash[i] >> 4);
            if( value < 10) return value;
        }
        return 0;
    }

    //////////////////////////////////////////////////////////////////////
    //
    function pinDetail(uint256 number)external view returns(
        uint num,
        uint power,
        uint payAmount,
        uint8 status,
        uint startBlock,
        uint luckyBlock,
        bytes32 hashValue,
        uint8 luckyValue,
        uint partakeAward,
        address[] memory players){

        Round storage round = rounds[number];

        num = number;
        status = round.status;
        players = round.players;
        luckyBlock = round.luckyBlock;
        startBlock = round.prepareBlock;

        if( round.status == uint8(RoundStatus.Clearing) && block.number > round.luckyBlock ){

            if(block.number > round.invalidBlock){
                status = uint8(RoundStatus.Invalid);
            }else{
                status = uint8(RoundStatus.Openable);
                hashValue = blockhash(luckyBlock);
                luckyValue = _calculateLuckyValue(hashValue);
            }
        }

        if(status == uint8(RoundStatus.Finish)){
            hashValue = round.luckyHash;
            luckyValue = round.luckyValue;
        }

        Stall storage stall = stalls[round.stallIndex];
        power = round.power;
        payAmount = stall.payment;
        partakeAward = stall.partakeAward;

        return (num,power,payAmount,status,startBlock,luckyBlock,hashValue,luckyValue,partakeAward,players);
    }

    function _getRound(
        uint256[] storage roundNums,
        uint256 numIndex,
        bool personal) internal view returns(Round storage round,uint number){
                
        if( personal ){
            number = roundNums[numIndex];
        }else{
            number = worldRounds[numIndex];
        }
        round = rounds[number];

    }

    function infos(bool personal) external view returns(
        uint256[] memory numbers,
        uint256[] memory blocks,
        bytes32[] memory hashs,
        uint8[] memory status,
        uint8[] memory values){

        uint len = 0;
        uint256 numIndex = 0;
        uint256[] storage roundNums = myRounds[msg.sender];
        if(personal){

            require(roundNums.length > 0,"not_info");

            len = roundNums.length > 10 ? 10 : roundNums.length;
            numIndex = roundNums.length - 1;
        }else{
            require(worldRounds.length > 0,"not_info");

            len = worldRounds.length > 10 ? 10 : worldRounds.length;
            numIndex = worldRounds.length - 1;
        }

        numbers = new uint256[](len);
        blocks = new uint256[](len);
        hashs = new bytes32[](len);
        status = new uint8[](len);
        values = new uint8[](len);

        for(
            uint256 index = 0;
            numIndex >= 0 && index < len;
            (numIndex--,index++)
            ){
                (Round storage round,uint number) = _getRound(roundNums,numIndex,personal);

                numbers[index] = number;
                status[index] = round.status;
                blocks[index] = round.luckyBlock;
                hashs[index] = round.luckyHash;
                values[index] = round.luckyValue;

                if( round.status == uint8(RoundStatus.Clearing) && block.number > round.invalidBlock ){
                    status[index] = uint8(RoundStatus.Invalid);
                }
             }

        return (numbers,blocks,hashs,status,values);
    }


    //////////////////////////////////////////////////////////////////////
    function rechargeEarnestAmount(uint256 amount,bool isAuto) external returns(bool){

        require(relation.myIsMiner(msg.sender),"not_miner");

        require(amount > 0);

        usdt.transferFrom(msg.sender,address(this),amount);

        earnestAmounts[msg.sender] += amount;

        if( isAuto && !isAutoDoPins[msg.sender] && relation.myLevel(msg.sender) >=  1 ){

            require(_actionable(msg.sender),"has_no_clear");

            autoDoPinPlayers.push(msg.sender);
            isAutoDoPins[msg.sender] = true;
        }

        emit EarnestEvent(msg.sender,amount,timestemp(),1);
        return true;
    }

    function drawEarnestAmount(uint256 amount) external KRejectContractCall returns(bool){

        require(relation.myIsMiner(msg.sender),"not_miner");

        require(_actionable(msg.sender),"has_no_clear");

        require(amount > 0);

        require(earnestAmounts[msg.sender] >= amount,"amount_lock");
        earnestAmounts[msg.sender] -= amount;

        if(isAutoDoPins[msg.sender] && earnestAmounts[msg.sender] < 20e6){
            isAutoDoPins[msg.sender] = false;
        }

        usdt.transfer(msg.sender,amount);

        emit EarnestEvent(msg.sender,amount,timestemp(),2);
        return true;
    }



    // function _addOneAutoDoPinPlayer(Round storage round,uint value,uint number) internal returns(address){

    //     uint len = autoDoPinPlayers.length;
    //     for( uint i = 0; autoDoPinIndex < len && i < 10; (autoDoPinIndex++,i++)){

    //         address addr = autoDoPinPlayers[autoDoPinIndex];
    //         if( isAutoDoPins[addr] ){

    //             if( earnestAmounts[addr] >= value){

    //                 autoDoPinPlayers.push(addr);

    //                 if(_actionable(addr)){
    //                     round.players.push(addr);
    //                     myRounds[addr].push(number);
    //                     autoDoPinIndex ++;
    //                     return addr;
    //                 }
    //             }else{
    //                 isAutoDoPins[addr] = false;
    //             }
    //         }
    //     }
    //     return address(0x0);
    // }

}
