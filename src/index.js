const sslChecker = require("ssl-checker");
const {Command, flags} = require('@oclif/command')

class SslCheckCliCommand extends Command {
  async run() {
    var args = process.argv;
    var target = args[args.length - 1];

    sslChecker(target, { method: "GET", port: 443 }).then(console.info);
  }
}

SslCheckCliCommand.description = `Describe the command here
...
Extra documentation goes here
`

SslCheckCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
}

module.exports = SslCheckCliCommand
