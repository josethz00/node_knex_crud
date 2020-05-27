
exports.up = function(knex) { //create table
  return knex.schema.createTable('users', function(table){  //1º parametro = nome da tabela      2º parametro = passa a tabela em fomra de variavel
        table.increments('id');
        table.text('username').unique().notNullable();

        table.timestamp('created_at').default(knex.fn.now());    //adicona o campo timestamp na tabela, e toda vez que for 
                                                                //criado um novo usuario, sera registrada a data exata de sua criação

        table.timestamp('updated_at').default(knex.fn.now());  //td vez q houver uma atualização
  })
};

exports.down = function(knex) { //delete, voltar atras, arrumar algo
        return knex.schema.dropTable('users');
};
