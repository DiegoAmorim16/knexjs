const knexfile = require('../../knexfile.js');
const  knex = require('knex')(knexfile);

knex('users').then(data => {
    console.log(data);
});
module.exports = knex;