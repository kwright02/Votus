import { Blockchain } from '@kwright02/blockchain';

class Database {

    constructor(database) { 
        this.database = require(database); 
        this.chain = new Blockchain();
        this.chain.push(database.chain);
    }

    getBlockAtPos(index){
        return this.chain.chain[index];
    }

    addBlock(data){
        this.chain.addBlock(data);
    }

    saveDatabase(){
        this.database.chain = this.chain.chain;
    }

}

module.exports = Database;