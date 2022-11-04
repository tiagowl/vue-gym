import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {name: "Tiago Landi", email: "winkellandi123@gmail.com", password: "123"},
      {name: "Luiz Landi", email: "luizlandi@gmail.com", password: "123456"},
      {name: "Karin Landi", email: "karinlandi@gmail.com", password: "1234"},
    ])
  }
}
