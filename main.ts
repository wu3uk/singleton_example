import DBInstance from "./singleton_example";

let s1: DBInstance = DBInstance.getInstance();
let s2: DBInstance = DBInstance.getInstance();

s1.query(`SELECT FirstName firstName,
LastName lastName,
Email email
FROM customers
WHERE Country = ?
ORDER BY FirstName`);

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}