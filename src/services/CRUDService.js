const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results
} 
const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}
const upDateUserById = async(email, name, city, userId) => {
    let [results, fields] = await  connection.query(
        `
        UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id = ?
        `, [email, name, city, userId]);

}

const deleteUserById = async (id) => {
    let [results, fields] = await  connection.query(
        `DELETE FROM Users Where id = ?;`, [id]);
}



module.exports = {
    getAllUsers, getUserById, upDateUserById, deleteUserById
}