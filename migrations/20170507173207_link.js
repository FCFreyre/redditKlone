
exports.up = function(knex, Promise) {
  return knex.schema.createTable('link', (table) => {
    table.increments().notNullable()
    table.integer('votes').defaultTo(0).notNullable()
    table.string('url').notNullable()
    table.string('title').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('link')
};
