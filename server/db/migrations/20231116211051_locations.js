export async function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id')
    table.string('city')
    table.string('country')
    table.integer('latitude')
    table.integer('longitude')
    table.string('imageURL')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('locations')
}
