const knex = require('../../knex/config/database');


const selectLimit = knex('users')
.select('id', 'first_name')
.orderBy('id', 'asc')
.limit(5)
.offset(10);

selectLimit.then(data => {
    console.log(data);
}).catch(e =>{
    console.log('Errr', e);
}).finally(() =>{
    knex.destroy();
});