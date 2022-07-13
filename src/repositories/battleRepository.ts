import connection from "../config/db.js";

export function getFighter(username: string) {
    return connection.query(`
    SELECT * 
    FROM fighters
    WHERE username=$1
    `, [username])
}


