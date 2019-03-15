const conn = require('../mysqlconn');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM loginuser", (err, data) => {  //table name
            cb(err, data);
        });
    },
    get(id, cb){
        conn.query("SELECT * FROM loginuser WHERE Id=?", id, (err, data) => { //table name
            cb(err, data[0]);
        });
    },
    add(input, cb){
        if(input.password.length < 4){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO loginuser (id,Firstname,Lastname,age) VALUES (?)",
                    [[input.id, input.Firstname, input.lastname, input.age, new Date()]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertid, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );
    }
};

module.exports = model;
