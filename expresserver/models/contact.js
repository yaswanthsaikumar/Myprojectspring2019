const conn = require('../mysqlconn');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM contact", (err, data) => {
            cb(err, data);
        });
    },
    get(phone, cb){
        conn.query("SELECT * FROM contact WHERE id=?", id, (err, data) => {
            cb(err, data[0]);
        });
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO contact (id,phone,Address,Email,) VALUES (?)",
                    [[input.id,input.phone,input.Address,input.Email]],
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