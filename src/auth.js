var bcrypt = require('bcrypt')

class Auth {
  constructor ({ db, logger, mailer }) {
    this.db = db
    this.logger = logger
    this.mailer = mailer
  }

  async signUp ({ email, password }) {
    var user = await this.db.getUser({ email })

    if (user) {
      throw new Error('This email already used')
    }

    var hash = await bcrypt.hash(password, 10)
    this.mailer.send({ email, type: 'welcome' })
    return this.db.createUser({ email, hash })
  }

  async signIn ({ email, password }) {

  }
}

module.exports = Auth
