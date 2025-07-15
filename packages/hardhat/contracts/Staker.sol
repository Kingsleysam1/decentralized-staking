// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; //Do not change the solidity version as it negatively impacts submission grading

import "hardhat/console.sol";
import "./ExampleExternalContract.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
 
interface ITrigger {
    function execute() external;
}

contract Staker is Ownable, ReentrancyGuard {
uint256 public immutable deadline;
uint256 public constant threshold= 2 ether;
address public externalTriggerContract;
bool public triggerExecuted;
mapping (address => uint256) public amountStaked;

event Staked(address indexed staker, uint256 amount, uint256 timestamp);
event Triggered (bool success, uint256 balance);
event withdrawn(address indexed user, uint256 amount);


constructor( address _triggercontract) {
    deadline= block.timestamp + 3 days;
    externalTriggerContract = _triggercontract;
     }

function stake() external payable {
    require (msg.value > 0.01 ether , "stake too low" );
    require(block.timestamp <= deadline, "Staking closed");

    amountStaked[msg.sender] += msg.value;
     emit Staked(msg.sender, msg.value, block.timestamp );
}

function WithdrawethifFail() external nonReentrant{
    require (block.timestamp > deadline,        "Staking period active");
    require(!triggerExecuted,                    "funds already triggered");
    require ((address(this).balance) < threshold,   "staking successful, withdrawal disabled");
    uint256 amount = amountStaked[msg.sender];
    require(amount > 0, "no amount staked");
    amountStaked[msg.sender] = 0;
    (bool success, ) = payable(msg.sender).call{value: amount}("");
    require(success, "trasfer failed");
    emit withdrawn(msg.sender, amount);
}

function triggerExternal() external onlyOwner{
    require (deadline < block.timestamp, "staking active");
    require (address(this).balance >= threshold, "threshold not me");
    require(!triggerExecuted, "already triggered");
    triggerExecuted = true;

    (bool sent, ) = externalTriggerContract.call{value: address(this).balance}("");
    require(sent, "trigger failed");
    emit Triggered(true, address(this).balance);
}
function getContractBalance() external view returns (uint256){
    return address(this).balance;
}
}