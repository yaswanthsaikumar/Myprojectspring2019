const conn = require('../mysqlconn');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Register", (err, data) => {  //table name
            cb(err, data);
        });
    },
    get(id, cb){
        conn.query("SELECT * FROM Register WHERE Id = ?", id, (err, data) => { //table name
            cb(err,data);
        });
    },
    add(input, cb){
        if(input.password.length < 4){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO Register (id,firstname,lastname,email,password) VALUES ( ? )",
                    [[input.id, input.firstname, input.lastname, input.email, input.password]],
                    (err, data) => {
                        if(err){
                            console.log("your email already exists!")
                            cb(err);
                            return;
                        }
                        model.get(data.id, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );
    }
};

module.exports = model;