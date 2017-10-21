var pkg = require('../package.json')
var service = require('commander')

service
  .version(pkg.version)
  .parse(process.argv)
