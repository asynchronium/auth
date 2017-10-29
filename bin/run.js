var pkg = require('../package.json')
var service = require('commander')
var http = require('http')
var router = require('../src/router.js')

service
  .version(pkg.version)
  .option('-p, --port <n>', 'Port', Number)
  .option('-c, --config <path>', 'Config path')
  .parse(process.argv)

http.createServer(router()).listen(service.port)
