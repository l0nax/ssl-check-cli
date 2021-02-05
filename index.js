import sslChecker from "ssl-checker";

var args = process.argv;
var target = args[args.length - 1];
var port;

if target.includes(':') {
    var split = target.split(':');
    target = split[0];
    port = split[1];
}


const getSslDetails = async (hostname: string) =>
  await sslChecker(target { method: "GET", port: port }).then(console.info);
