import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("students", 255)
      table.string("age", 255)
      table.string("email", 255)
      table.string("wheight", 255),
      table.string("height", 255),
      table.string("ocupation", 255),
      table.text("notes")
      table.integer("gym").unsigned().references("gyms.id").onDelete("CASCADE")
      table.integer("objectives").unsigned().references("objectives.id").onDelete("CASCADE")
      table.integer("plan").unsigned().references("plans.id").onDelete("CASCADE")
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
