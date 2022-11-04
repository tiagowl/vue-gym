import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'workouts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("repetitions")
      table.integer("load")
      table.string("separation", 1)
      table.integer("exercicie").unsigned().references("exercicies.id").onDelete("CASCADE")
      table.integer("student").unsigned().references("students.id").onDelete("CASCADE")
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
