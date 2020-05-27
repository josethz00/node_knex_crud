
exports.up = function(knex) { //create table
    return knex.schema.createTable('projects', function(table){  //1º parametro = nome da tabela      2º parametro = passa a tabela em fomra de variavel
          table.increments('id');
          table.text('title').notNullable();

          table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE').onUpdate('CASCADE');

          table.timestamps(true, true);  //da na mesma

          /*table.timestamp('created_at').default(knex.fn.now());
          table.timestamp('updated_at').default(knex.fn.now());*/
    })
  };
  
exports.down = function(knex) { //delete, voltar atras, arrumar algo
          return knex.schema.dropTable('projects');
  };
  