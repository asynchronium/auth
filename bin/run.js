var pkg = require('../package.json')
var service = require('commander')

service
  .version(pkg.version)
  .option('-p, --port <n>', 'Port', Number)
  .option('-c, --config <path>', 'Config path')
  .parse(process.argv)
