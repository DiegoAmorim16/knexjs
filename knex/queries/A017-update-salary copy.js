/*
-- Update - Atualiza registros
update users set 
first_name = 'Luiz',
last_name = 'Miranda'
where id = 29;

select * from users where id = 29;
*/
const knex = require('../../knex/config/database');
const update = knex('users as u')
  .update(
    {
    salary: knex.raw('round(rand() * ??, ??)', [10000,2])
    }
  )



//console.log(select.toString());


update.then((data) => {
  console.log(data);

}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
