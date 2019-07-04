'use strict'

const SuperSchema = require('../SuperSchema')

class PatientSchema extends SuperSchema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned();
      table.foreign('user_id').references('users.id');
      table.datetime('disponibility').notNullable()
      this._timestamps(table);
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
