const fs = require('fs');
const path = require('path');
const json5 = require('JSON5')

let json = fs.readFileSync(path.join(__dirname, './userInfo.json5'), 'utf-8');
let obj = json5.parse(json)
console.log(obj);

