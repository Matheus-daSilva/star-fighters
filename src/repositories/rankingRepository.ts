import connection from "../config/db.js";

export function getRankingRepository() {
    return connection.query(`
    SELECT * 
    FROM fighters 
    ORDER BY wins DESC, draws DESC
    `)
}