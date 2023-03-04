const knex = require('../../knex/config/database');


const select = knex('users as u')
.select('u.email as uemail', 'u.id as uid');
console.log(select.toString());
select.then(data => {
    for(const user of data){
        console.log(user);
    }
    
}).catch(err => {
    console.error('ERRO:', err);
}).finally(() => {
    knex.destroy();
});