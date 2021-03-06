function constroller (auth) {
  async function signUp (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var user = await auth.signUp({ email, password })
    } catch (error) {
      res
        .status(400)
        .json({ message: error.message })
    }
  }

  async function signIn (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var user = await auth.signIn({ email, password })
    } catch (error) {
      res
        .status(401)
        .json({ message: error.message })
    }
  }

  async function confirm (req, res) {
    var code = req.params.code

    try {
      var user = await auth.confirm({ code })
    } catch (error) {
      res
        .status(400)
        .json({ message: error.message })
    }
  }

  async function restore (req, res) {

  }

  async function reset (req, res) {

  }

  return {
    signUp
    signIn
    confirm
    restore
    reset
  }
}

module.exports = constroller
