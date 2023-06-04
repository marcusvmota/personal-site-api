
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.NODE_ENV === 'production' ? true : false
})

const initDatabase = async () => {

        await pool.query('CREATE TABLE IF NOT EXISTS experiencias (id SERIAL PRIMARY KEY, titulo VARCHAR(255) NOT NULL, tipo VARCHAR(255) NOT NULL, descricao TEXT NOT NULL, "anoInicio" INT NOT NULL, "anoFim" INT NOT NULL);');



    await pool.query('CREATE TABLE IF NOT EXISTS portfolio (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL);');


    await pool.query('CREATE TABLE IF NOT EXISTS informacoes (id INT PRIMARY KEY, foto VARCHAR(255) NOT NULL, nome VARCHAR(255) NOT NULL, cargo VARCHAR(255) NOT NULL, resumo TEXT NOT NULL);');
    console.log('Banco de dados foi inicializado com sucesso!');

    await pool.query(`CREATE TABLE IF NOT EXISTS usuarios (id INT PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);`);


}

module.exports = {pool, initDatabase};