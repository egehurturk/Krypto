pragma solidity ^0.8.0;

contract Transactions {
    // Number of transactions
    uint256 transactionCount;

    // Event to be emitted when a transaction happens
    event Transfer(address from, address rcvr, uint amount, string message, uint256 timestamp, string keyword);

    
    struct TransferStruct {
        address sender; // sender of the transaction
        address rcvr; // reciever of the transaction
        uint amount; // amount involved in the transaction
        string message; // message associated in the transaction
        uint256 timestamp; // timestamp of the transaction
        string keyword; 
    }

    TransferStruct[] transactions; // keep the transactions in an array

    function addToBlockchain(address payable reciever, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        // msg.sender is the sender of the transaction, block.timestamp is the timestamp of the blockchain
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }

    // Return all the transactions
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}