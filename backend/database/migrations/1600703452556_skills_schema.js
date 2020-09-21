'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id')
        .inTable('clients').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('firstSkill').notNullable()
      table.string('secondSkill')
      table.string('thirdSkill')
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
