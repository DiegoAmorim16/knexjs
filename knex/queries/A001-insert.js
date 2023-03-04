const knex = require('../../knex/config/database');

const data = 
[
    {
        first_name: 'Juan',
        last_name: 'Augusto',
        email: 'juana@email.com',
        password_hash: 'sdasdasdasdasd1',
        salary: 1235.22,    
    },
    {
        first_name: 'Marcio',
        last_name: 'Alvaro',
        email: 'marcioalavro@email.com',
        password_hash: 'sdasdasdasdasd2',
        salary: 2000.22,      
    },
    {
        first_name: 'Bianca',
        last_name: 'Rosa',
        email: 'brosa12123@email.com',
        password_hash: 'sdasdasdasdasd3123',
        salary: 988.223,      
    },
]

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(err => {
    console.error('ERRO:', err);
}).finally(() => {
    knex.destroy();
});