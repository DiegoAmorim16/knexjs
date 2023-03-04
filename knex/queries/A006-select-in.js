const knex = require('../../knex/config/database');


const selectIn = knex('users')
.select('id', 'first_name')
.whereIn('id', [3, 6, 9, 12, 15, 99999])
.whereBetween('id', [1, 20]);

selectIn.then(data => {
    console.log(data);
}).catch(e =>{
    console.log('Errr', e);
}).finally(() =>{
    knex.destroy();
});