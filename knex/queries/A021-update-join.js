
const knex = require('../../knex/config/database');

const update = knex('users as u')
.innerJoin('profiles as p', 'u.id', 'p.user_id')
.update({
  'p.bio': knex.raw('CONCAT (p.bio, " atualizando")')
})
.where({
  'u.first_name': 'Diego'
})

console.log(update.toString());

update.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});