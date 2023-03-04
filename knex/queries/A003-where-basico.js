const knex = require('../../knex/config/database');


const select = knex('users')
.select('id', 'first_name').where({id: 10});

console.log(select.toString());

select.then(data => {
console.log(data)
    
}).catch(err => {
    console.error('ERRO:', err);
}).finally(() => {
    knex.destroy();
});