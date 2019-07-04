'use strict'

const SuperSchema = require('../SuperSchema')

class MedicSchema extends SuperSchema {
  up () {
    this.create('medics', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned();
      table.foreign('user_id').references('users.id');
      
      table.timestamps()
    })
  }

  down () {
    this.drop('medics')
  }
}

module.exports = MedicSchema
