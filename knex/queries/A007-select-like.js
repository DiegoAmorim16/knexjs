const knex = require('../../knex/config/database');


const selectLike = knex('users')
.select('id', 'first_name')
.where('first_name', 'like', '___')
.orWhere('first_name', 'like', '%na');

selectLike.then(data => {
    console.log(data);
}).catch(e =>{
    console.log('Errr', e);
}).finally(() =>{
    knex.destroy();
});