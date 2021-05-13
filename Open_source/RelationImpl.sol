 SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.5.0 <0.8.0;

import "../../core/k.sol";
import "../../tokens/interface/IERC777_1.sol";
import "../../tokens/interface/IERC20.sol";
import "../interface/iMine.sol";
import "../interface/iPin.sol";
import "../../just/IJustswapFactory.sol";
import "../../just/IJustswapExchange.sol";


contract RelationStorage is KStoragePayable {

    address internal rootAddress = address(0xdead);

    uint internal totalAddresses;

    mapping (address => address payable) internal _recommerMapping;

    mapping (address => address[]) internal _recommerList;

    mapping (bytes6 => address) internal _shortCodeMapping;

    mapping (address => bytes6) internal _addressShotCodeMapping;

    mapping (address => bytes16) internal _nickenameMapping;

    mapping (address => uint) internal _depthMapping;

    mapping (address => uint8) internal _levelMapping;

    
    mapping(address => bool) internal isSupperNode;

    
    address[] internal supperNodes;

    
    mapping(address => address) internal mySupperNode;

    struct SupperNodePower{
        uint firstRecommer;
        uint v1Num;V1
        bool hasShareAward;
        bool hasPromoteV1Award;V1
    }

    mapping(address => SupperNodePower) internal supperNodePowers;

     
    mapping (address => uint8) internal  _chilrenLevelMaxMapping;

    mapping(address => AchievementInfo) internal achievementInfoMapping;

    struct AchievementInfo {
        uint itself;
        uint large;
        uint total;
    }

    uint internal depth = 10;
    uint8 internal maxLevel = 3;

    struct PromoteLevel{
        uint level;
        uint payment;
        uint limitAmount;
        uint firstRecommerAward;
        uint supperNodeAward;
        uint vNodeAward;
    }
    
    PromoteLevel[] internal promoteLevels;

    address payable internal receiver;
    iERC20 internal usdt;

    uint256 internal activeNeedTrx = 300e6;
    uint internal shareAward = 30e6;

    uint internal superNodeNumLimit = 21;
    uint internal promoteSupperNodeNeedU = 10000e6;

    mapping(address =>uint256) internal shareAwards;

    iMine internal mine;

    mapping(address =>mapping(uint =>bool)) internal partakeFlags;


    constructor(iERC20 _usdt,address _receiver,iMine _mine) public {
        _shortCodeMapping[0x305844454144] = rootAddress;
        _addressShotCodeMapping[rootAddress] = 0x305844454144;

        _recommerMapping[rootAddress] = address(0xdeaddead);

        usdt = _usdt;
        receiver = address(uint160(_receiver));

        promoteLevels.push(PromoteLevel(0,0,0,0,0,0));
        promoteLevels.push(PromoteLevel(1,1000e6,10000,300e6,200e6,100e6));

        mine = _mine;
    }
}


contract Relation  is RelationStorage(iERC20(0),address(0),iMine(0)) {

    function setMine(address _min)external  returns(bool){
        mine = iMine(_min);
        return true;
    }

    /
    function getConditionLevel(address owner,uint l) external view  returns(uint,uint,uint){
    
        uint effCount = 0;

        if( l == 1){
               effCount =  _recommerList[owner].length;
        }

        if( l == 2){
            effCount = _getChildsLevelCount(owner,1);
        }

        if( l ==3){
             effCount = _getChildsLevelCount(owner,2);
        }
        return (
                effCount,
                achievementInfoMapping[owner].itself,
                (achievementInfoMapping[owner].total - achievementInfoMapping[owner].large)
                );
    }


    function getTotalAddress()external view  returns(uint){
        return totalAddresses;
    }

    function getSupperNodes() external view  returns(address[] memory){
        return supperNodes;
    }

    function setPromoteLevelConfig(uint level,uint p ,uint l,uint f,uint s,uint v) external   returns(bool){
        
        require(level < promoteLevels.length);
        
        PromoteLevel storage pl = promoteLevels[level];

        if( pl.payment != p){
            pl.payment = p;
        }

        if( l > 0){
            pl.limitAmount += l;
        }

        if( pl.firstRecommerAward != f){
            pl.firstRecommerAward = f;
        }

        if( pl.supperNodeAward != s){
            pl.supperNodeAward = s;
        }

        if( pl.vNodeAward != v){
            pl.vNodeAward = v;
        }
        return true;
    }

    function setRegisterNeedTrx(uint trxAmount)external  returns(bool){
        require(trxAmount > 10);
        activeNeedTrx = trxAmount;
        shareAward = trxAmount * 0.1e6 / 1e6;
    }


    function getSupperNodeInfo(address node)external view  returns(uint,uint,uint,bool,bool){
        SupperNodePower storage supperNode = supperNodePowers[node];
        return (supperNode.firstRecommer,supperNode.v1Num,_levelMapping[node],supperNode.hasShareAward,supperNode.hasPromoteV1Award);
    }

    /


     
    function _getChildsLevelCount(address owner ,uint8 level)internal view returns(uint){

        address[] storage childs = _recommerList[owner];

        uint count = 0;
        for ( uint i = 0; i < childs.length; i++) {
            if ( _levelMapping[childs[i]] >= level ) {
                count ++;
            }
        }
        return count;
    }

    function _conditionLevelFinish(address owner,uint8 level)internal view returns(bool){

        if( level > 1 ){
            1
            return achievementInfoMapping[owner].itself >= 10000e6 && _getChildsLevelCount(owner,level-1) >= 3 ;
        }else{
            1
            return _recommerList[owner].length >= 10
            && achievementInfoMapping[owner].itself >= 10000e6
            && (achievementInfoMapping[owner].total - achievementInfoMapping[owner].large) >= 300000e6;
        }

    }

    
    function upgradeable() external view returns(uint){

        uint8 lv = _levelMapping[msg.sender];

        if ( lv >= maxLevel ) return 0;

        if( _conditionLevelFinish(msg.sender,lv+1)){
            return lv +1;
        }
        return 0;
    }

    
    function upgradeLevel() external returns(bool){

        uint8 lv = _levelMapping[msg.sender];

        if ( lv >= maxLevel ) return false;

        if ( _conditionLevelFinish(msg.sender,lv+1)) {
            _upgradeLevelDelegate(msg.sender,lv+1);
        }

        return true;
    }

    
    function _upgradeLevelDelegate(address owner, uint8 lv) internal returns(bool){

        if( _levelMapping[owner] < lv){
            _levelMapping[owner] = lv;
        }

        1，
        if( lv == 1 && isSupperNode[_recommerMapping[owner]]){

            address supperNode = _recommerMapping[owner];

            SupperNodePower storage supperNodePower = supperNodePowers[supperNode];

            supperNodePower.v1Num += 1;

            if(!supperNodePower.hasPromoteV1Award){
                _conditionSupperNodeFinish(supperNodePower,supperNode);
            }
        }
       return true;
    }

    function _conditionSupperNodeFinish(SupperNodePower storage supperNodePower,address supperNode)internal {

        
        if(_recommerList[supperNode].length >= 20 && supperNodePower.v1Num >= 10){
            supperNodePower.hasPromoteV1Award = true;
            supperNodePower.hasShareAward = true;
        }
    }

     
    function payablePromoteLevel(uint8 level) external returns(bool){

        require(_recommerMapping[msg.sender] != address(0x0), "not_introducer" );

        require( _levelMapping[msg.sender] < level, "level_gt" );

        require(!isSupperNode[msg.sender],"is_supper");

        require(level < promoteLevels.length,"level_exceed");

        PromoteLevel storage promoteLevel = promoteLevels[level];

        require(promoteLevel.limitAmount > 0,"limit_lock");
        promoteLevel.limitAmount --;

        usdt.transferFrom(msg.sender,address(this),promoteLevel.payment);

        _upgradeLevelDelegate(msg.sender, level);

        uint value = promoteLevel.payment;
        
        if( _recommerMapping[msg.sender] != rootAddress){
            usdt.transfer(_recommerMapping[msg.sender],promoteLevel.firstRecommerAward);
            value -= promoteLevel.firstRecommerAward;
        }


        && supperNodePowers[mySupperNode[msg.sender]].hasPromoteV1Award
        if( mySupperNode[msg.sender] != address(0x0) ){
            usdt.transfer(mySupperNode[msg.sender],promoteLevel.supperNodeAward);
            value -= promoteLevel.supperNodeAward;
        }

        uint l = 0;
        
        for (
            (address parent, uint d) = ( _recommerMapping[msg.sender], 0);
            parent != rootAddress && d < depth;
            (d++, parent = _recommerMapping[parent])
            ) {

                uint8 lv = _levelMapping[parent];
                if( lv > l ){

                    uint amount = promoteLevel.vNodeAward * ( lv -l);
                    l = lv;
                    usdt.transfer(parent,amount);
                    value -= amount;
                }
            }

        
        usdt.transfer(receiver,value);

        return true;
    }

    
    function recommendInfo() external view returns(
        uint8 level,        
        bool isSupper,      
        bytes6 shotCode,        
        uint256 inviteCount,        
        uint256 shareAward,        
        address[] memory invites        
        ){

        if( _recommerList[msg.sender].length > 0 ){
            invites = new address[](_recommerList[msg.sender].length);

            for(uint8 i = 0; i < _recommerList[msg.sender].length; i++){

                invites[i] = _recommerList[msg.sender][i];
            }
        }

        shareAward = shareAwards[msg.sender];
        level = _levelMapping[msg.sender];
        isSupper = isSupperNode[msg.sender];
        shotCode = _addressShotCodeMapping[msg.sender];
        inviteCount = _recommerList[msg.sender].length;

        return(level,isSupper,shotCode,inviteCount,shareAward,invites);
    }

     
    function shortCodeToAddress(bytes6 shortCode) external view returns (address) {
        return _shortCodeMapping[shortCode];
    }

    / 
    function addressToShortCode(address addr) external view returns (bytes6) {
        return _addressShotCodeMapping[addr];
    }

    / 
    function addressToNickName(address addr) external view returns (bytes16) {
        return _nickenameMapping[addr];
    }

    function addressToNickNames(address[] calldata addrs) external view returns (bytes16[] memory names){

        names = new bytes16[](addrs.length);

        for( uint i = 0; i < addrs.length; i++){
            names[i] = _nickenameMapping[addrs[i]];
        }
        return names;
    }

    function myLevel(address addr) external view returns (uint8) {
        return  _levelMapping[addr];

    }


    function _bindRelation(address owner,address recommer,bytes6 shortCode, bytes16 nickname)internal{
        require(shortCode != bytes6(0x0),"invalid_code");

        require(_shortCodeMapping[shortCode] == address(0x0),"code_exist");

        require(_addressShotCodeMapping[owner] == bytes6(0x0),"has_code");

        require(recommer != owner,"your_self");

        require(_recommerMapping[owner] == address(0x0),"binded");

        require(recommer == rootAddress || _recommerMapping[recommer] != address(0x0),"p_not_bind");

         
        totalAddresses++;

        _shortCodeMapping[shortCode] = owner;
        _addressShotCodeMapping[owner] = shortCode;
        _nickenameMapping[owner] = nickname;

        / 
        _recommerMapping[owner] = address(uint160(recommer));
        _recommerList[recommer].push(owner);

    }

    / 
    function addRelationEx(address recommer, bytes6 shortCode, bytes16 nickname) external payable KRejectContractCall returns (bool) {

        require( msg.value >= activeNeedTrx, "UnableToPay");

        _bindRelation(msg.sender,recommer,shortCode,nickname);

        mySupperNode[msg.sender] = mySupperNode[recommer];

         9  
        for (
            (address payable parent, uint i) = (_recommerMapping[msg.sender], 0);
            i < 9 && parent != rootAddress;
            (i++, parent = _recommerMapping[parent])
        ) {

            if( _recommerList[parent].length > i ){
                shareAwards[parent] += shareAward;
                parent.transfer(shareAward);
            }
        }

        mine.minerInit(msg.sender,0);

        return true;
    }

    function addSupperRelationEx(address recommer, bytes6 shortCode, bytes16 nickname)external  KRejectContractCall returns (bool){

        require(superNodeNumLimit > 0,"num_lock");
        superNodeNumLimit --;

        usdt.transferFrom(msg.sender,receiver,promoteSupperNodeNeedU );

        _bindRelation(msg.sender,recommer,shortCode,nickname);

        
        isSupperNode[msg.sender] = true;
        supperNodes.push(msg.sender);
        mySupperNode[msg.sender] = msg.sender;

        _levelMapping[msg.sender] = maxLevel;

         
        mine.minerInit(msg.sender,0);

        return true;
    }


    function updateachievement(address owner,uint value,uint time ,address autoDoPinAddr) external KDelegateMethod returns(bool){

        require(_addressShotCodeMapping[owner] != bytes6(0x0),"not_miner");

        partakeFlags[owner][time] = true;
         if( autoDoPinAddr != address(0x0)){
             partakeFlags[autoDoPinAddr][time] = true;
         }

        achievementInfoMapping[owner].itself += value;

        for (
            (address child, address parent, uint d) = (owner, _recommerMapping[owner], 0);
            parent != rootAddress && d < depth;
            (d++, child = parent, parent = _recommerMapping[parent])
            ) {

                achievementInfoMapping[parent].total += value;

                uint childValue = achievementInfoMapping[child].itself + achievementInfoMapping[child].total;

                if ( childValue > achievementInfoMapping[parent].large ) {
                    achievementInfoMapping[parent].large = childValue;
                }
            }

        return true;
    }


    function getFirstRecommerAndNode(address owner,address[] calldata players,uint luckyIndex)external view returns(
        address[] memory fRecommer,
        address[] memory vNodes,
        uint[] memory nums,
        address supperNode){

        require(_addressShotCodeMapping[owner] != bytes6(0x0),"not_miner");
    
        uint time = timestempZero() - 1 days;

        fRecommer = new address[](players.length);
        for( uint i = 0; i < players.length; i++){
            address addr = _recommerMapping[players[i]];
            if( addr != rootAddress ){
                fRecommer[i] = addr;
            } partakeFlags[addr][time] &&
        }

        address luckyPlyaer = players[luckyIndex];
        vNodes = new address[](4);
        nums = new uint[](4);
        uint8 level = 0;

        for (
            (address parent, uint d) = ( _recommerMapping[luckyPlyaer], 0);
            parent != rootAddress && d < depth;
            (d++,  parent = _recommerMapping[parent])
            ) {
                  
                uint8 lv = _levelMapping[parent];
                if( lv > level && partakeFlags[parent][time] ){

                    vNodes[lv] = parent;

                    if( level == 0 ){
                        nums[lv] = lv - level + 2;
                    }else{
                        nums[lv] = lv - level;
                    }
                    level = lv;
                }
            }

        address node = mySupperNode[luckyPlyaer];
        if( node != address(0x0) && supperNodePowers[node].hasShareAward){
            supperNode = node;
        }

        return (fRecommer,vNodes,nums,supperNode);
    }

    function myIsMiner(address addr) external view returns(bool){
        
        return _addressShotCodeMapping[addr] != bytes6(0x0);

    }


    

    function withdraw()external  returns(bool){

        uint balance = address(this).balance;
        if( balance > 0){
            receiver.transfer(balance);
        }
        return true;
    }

    function setSupperNodeLevel() external  returns(bool){

        for( uint i = 0; i < supperNodes.length; i++){
            _levelMapping[supperNodes[i]] = maxLevel;
        }
        return true;
    }

    function setSupperNode(address node) external  returns(bool){

        require(superNodeNumLimit > 0,"num_lock");
        superNodeNumLimit --;

        require(!isSupperNode[node],"is_supper");

        isSupperNode[node] = true;
        supperNodes.push(node);
        mySupperNode[node] = node;

        _levelMapping[node] = maxLevel;
    }

    function setSupperNodeChilds(address node,address[] calldata childs)external  returns(bool){

        for( uint i = 0; i < childs.length; i++){
                mySupperNode[childs[i]] = node;
                   
        }
        return true;
    }

    function getSupperNode(address owner)external view returns(address){
        return mySupperNode[owner];
    }

    function getChilds(address addr)external view  returns(address[] memory){
        address[] storage list =  _recommerList[addr];

        address[] memory childs = new address[](list.length);

        for( uint i = 0; i < list.length; i++ ){
            if( !isSupperNode[list[i]]){
                childs[i] = list[i];
            }
        }
        return childs;
    }

}