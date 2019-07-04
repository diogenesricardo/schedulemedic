'use strict'

const SuperSchema = require('../SuperSchema')

class UserSchema extends SuperSchema {
  up () {

    this.create('users', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.string('email', 200).notNullable().unique()
      table.string('password', 100).notNullable()
      this._timestamps(table);
    });


  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
