/*
-- Update - Atualiza registros
update users set 
first_name = 'Luiz',
last_name = 'Miranda'
where id = 29;

select * from users where id = 29;
*/
const knex = require('../../knex/config/database');
const select = knex('users as u')
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .rightJoin('profiles as p', 'u.id', 'p.user_id')
  .orderBy('u.id', 'asc')
  .limit(5);



//console.log(select.toString());


select.then((data) => {
  console.log(data);

}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
