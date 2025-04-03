const mongo = require('./mongoConfig');

const insert = () => {
    const db = mongo();
    console.log(db)
}
insert()