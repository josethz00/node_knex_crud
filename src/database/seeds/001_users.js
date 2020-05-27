
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'jose.thz00' },
        { username: 'maykbrito' },
        { username: 'diegosf' }
      ]);
    });
};
