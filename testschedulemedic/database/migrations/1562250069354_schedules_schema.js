'use strict'

const SuperSchema = require('../SuperSchema')

class SchedulesSchema extends SuperSchema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.integer('medic_id').notNullable().unsigned();
      table.foreign('medic_id').references('medics.id');
      table.datetime('schedule').notNullable()
      table.enu('status', ['OPEN', 'CONFIRMED', 'ATTENDING', 'PENDING', 'DONE']).notNullable().defaultTo('OPEN');
      this._timestamps(table);
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = SchedulesSchema
