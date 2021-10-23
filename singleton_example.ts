import sqlite3 from "sqlite3";

class DBInstance {
    private static instance: DBInstance;
    private db: sqlite3.Database;

    private constructor() {
        this.db = new sqlite3.Database('./sqlite/chinook.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Connected to the SQlite database.');
        });
    }

    public static getInstance(): DBInstance {
        if (!DBInstance.instance) {
            DBInstance.instance = new DBInstance();
        }
        return DBInstance.instance;
        
    }

    public query(sql: string): void {
        this.db.each(sql, ['USA'], (err, row) => {
            if (err) {
                throw err;
            }
            console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
        });
    }
}

export default DBInstance;