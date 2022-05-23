var readline = require ('readline');
const fs = require("fs");

const ACCESS_LOG = "acces.test.log";
ip_1='89.123.1.41';
ip_2='34.48.240.111';

const writeStream1 = fs.createWriteStream(`${ip_1}_access.log`, { flags: 'a', encoding: 'utf8' });
const writeStream2 = fs.createWriteStream(`${ip_2}_access.log`, { flags: 'a', encoding: 'utf8' });
const rl = readline.createInterface({
    input: fs.createReadStream(ACCESS_LOG, 'utf8')
});

rl.on("line", function (input) {
   if (input.includes(ip_1)){
    writeStream1.write('\n' + input);
   };
   if (input.includes(ip_2)){
    writeStream2.write('\n' + input);
   }
});