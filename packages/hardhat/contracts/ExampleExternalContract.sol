// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; //Do not change the solidity version as it negatively impacts submission grading

contract ExampleExternalContract {
     address public vaultOwner;
    bool public completed;
    constructor (address _vaultOwner){
        vaultOwner = _vaultOwner;
        completed = false;
    }

    receive() external payable {}
     function execute() external{
        require (!completed, "already executed");
        completed = true;
        (bool sent, )= payable(vaultOwner).call{value: address(this).balance}("");
        require (sent, "failed to send Ether");
     }
}


