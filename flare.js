const Database = require('./database');

const db = new Database('chain.json');

db.getBlockAtPos(0);