const knex = require('../../knex/config/database');

const select = knex('users').select('id', 'first_name');
const deleteSQL = knex('users').delete().whereBetween('id', [30, 35]);


console.log(select.toString());

deleteSQL.then((data) => {
  console.log(data);
  
  select.then((data) => {
    console.log(data);
  }).catch((e) => {
    console.log(e.message);
  });
  
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});

