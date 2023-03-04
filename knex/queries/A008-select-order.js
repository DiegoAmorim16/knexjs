const knex = require('../../knex/config/database');


const selectOrderBy = knex('users')
.select('id', 'first_name')
.where('first_name', 'like', '___')
.orWhere('first_name', 'like', '%na')
.orderBy('id', 'desc');

selectOrderBy.then(data => {
    console.log(data);
}).catch(e =>{
    console.log('Errr', e);
}).finally(() =>{
    knex.destroy();
});