'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  skills () {
    return this.hasMany('App/Models/Skill')
  }
}

module.exports = Client
