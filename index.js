
const fs = require('fs')
const textFile = 'keyboard.txt'


fs.readFile(textFile,'utf8', function (err, data) {
                    if (err) throw err;

    console.log(data);
});