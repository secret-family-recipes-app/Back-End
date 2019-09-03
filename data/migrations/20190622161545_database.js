
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl
      .string('username', 255)
      .notNullable()
      .unique();

    tbl
      .string('password', 128)
      .notNullable();
    
    tbl.string('title', 128);
    
    tbl.string('tagline', 128);

    tbl.float('timeLength');
  });

  await knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .string('title')
      .notNullable()
      .unique();
    
    tbl.string('source');

    tbl.string('notes');
  });

  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
      .string('name')
      .notNullable();
  });

  await knex.schema.createTable('instructions', tbl => {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
      .string('name', 1024)
      .notNullable();
  });

  await knex.schema.createTable('tags', tbl => {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
      .string('tag')
      .notNullable();
  });
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('tags');
};
