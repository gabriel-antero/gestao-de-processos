'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('cpf', 14).notNullable().unique()
      table.string('phone', 15)
      table.string('isValid').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
