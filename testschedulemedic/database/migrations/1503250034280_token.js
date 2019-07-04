'use strict'

const SuperSchema = require('../SuperSchema')

class TokensSchema extends SuperSchema {
  up () {
    this.create('user_tokens', table => {
      table.increments();
      // START - Foreing Keys
      table.integer('user_id').notNullable().unsigned();
      table.foreign('user_id').references('users.id');
      // END - Foreing Keys
      table.string('token').notNullable().unique().index();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').defaultTo(false);
      this._timestamps(table);
    });
  }

  down () {
    this.drop('user_tokens')
  }
}

module.exports = TokensSchema
