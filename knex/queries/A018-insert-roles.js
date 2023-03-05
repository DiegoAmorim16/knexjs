
const knex = require('../../knex/config/database');
const insert = knex('roles')
  .insert([
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'DELETE'},
    {name: 'GET'},
  ]
  )



//console.log(select.toString());


insert.then((data) => {
  console.log(data);

}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
