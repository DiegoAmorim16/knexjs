const knex = require('../../knex/config/database');


const selectBetween = knex('users').select('id', 'first_name').whereBetween('id', [5,50]).orWhereBetween('id', [3, 10]);
selectBetween.then(data => {
    console.log(data);
}).catch(e =>{
    console.log('Errr', e);
}).finally(() =>{
    knex.destroy();
});