var bcrypt = require('bcrypt')

class Auth {
  constructor ({ db, logger, mailer }) {
    this.db = db
    this.logger = logger
    this.mailer = mailer
  }

  async signUp ({ email, password }) {
    var user = await this.db.getUser({ email })

    if (!user) {
      var hash = await bcrypt.hash(password, 10)
      user = await this.db.createUser({ email, password: hash })
      this.mailer.send({ email, type: 'welcome', { code: user.code }})
      return user
    }

    throw new Error('This email already used')
  }

  async signIn ({ email, password }) {
    var user = await this.db.getUser({ email })

    if (user) {
      var authorized = await bcrypt.compare(password, user.password)

      if (authorized) {
        return user
      }
    }

    throw new Error('Incorrect auth')
  }

  async confirm ({ code }) {
    var user = await this.db.getUser({ code })

    if (user) {
      return user
    }

    throw new Error('Incorrect code')
  }

  async restore ({ id }) {

  }

  async reset ({ id, password, newPassword }) {

  }
}

module.exports = Auth
