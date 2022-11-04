import { DateTime } from 'luxon'
import { BaseModel, column, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Gym from './Gym';

export default class User extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public gym: HasOne<typeof Gym>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

}
