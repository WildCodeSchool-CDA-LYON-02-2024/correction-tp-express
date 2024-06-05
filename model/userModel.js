import {connection} from "./database.js";
import bcrypt from "bcrypt";

const login = (login, password) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM user WHERE username = ?';
        connection.query(query, [login], (err, result) => {
            if (err) reject(err);
            else {
                bcrypt.compare(password, result[0].password, (err, isMatch) => {
                    if (err) reject(err);
                    else {
                        resolve({
                            isAuthenticated : isMatch,
                            user: {
                                id : result[0].id,
                                username: result[0].username,
                                role: result[0].role
                            }
                        });
                    }
                })
            }
        })
    })
}

const create = (login, password, role = 'USER') => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO user (username, password, role) VALUES (?,?,?)'
        bcrypt.hash(password, 10, (err, hashPassword) => {
            connection.execute(query, [login, hashPassword, role], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    })
}

export {create, login}