'use strict';
/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 5 }] */
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SuperSchema extends Schema {
  _timestamps(table) {
    table.dateTime('created_at').notNullable().defaultTo(this.fn.now());
    table.dateTime('updated_at').defaultTo(this.db.knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
    table.dateTime('deleted_at');
  }
}

module.exports = SuperSchema;
