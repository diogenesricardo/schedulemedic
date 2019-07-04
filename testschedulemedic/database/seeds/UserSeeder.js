'use strict'

const Database = use('Database');
const Hash = use('Hash');

class UserSeeder {
  async run() {
    const encryptedPassword2 = await Hash.make('dio!2019');
    await this.createUser('Diógenes Ricardo', encryptedPassword2,'diogenesr.freitas@gmail.com');
  }

  async createUser(name, encryptedPassword, email) {
    await Database.table('users').insert({
      name: name,
      email: email,
      password: encryptedPassword
    });
  }
}

module.exports = UserSeeder
