const path = require('path')
const fs = require('fs')
const textFile = 'keyboard.txt'
// const data = fs.readFileSync(textFile, 'utf8')

// console.log(data)
fs.readFile(textFile, function (err, data) {
                    if (err) throw err;

    console.log(data);
});