'use strict'

const SuperSchema = require('../SuperSchema')

class AttendanceSchema extends SuperSchema {
  up () {
    this.create('attendances', (table) => {
      table.increments()
      table.integer('patient_id').notNullable().unsigned();
      table.foreign('patient_id').references('patients.id');
      table.integer('medic_id').notNullable().unsigned();
      table.foreign('medic_id').references('medics.id');
      table.datetime('schedule').notNullable()
      table.enu('status', ['CANCELED', 'DONE', 'SCHEDULED']).notNullable().defaultTo('SCHEDULED');
      this._timestamps(table);
    })
  }

  down () {
    this.drop('attendances')
  }
}

module.exports = AttendanceSchema
