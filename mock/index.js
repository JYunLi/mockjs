const fs = require('fs');
const path = require('path');
const json5 = require('JSON5');
const Mock = require('mockjs');

//读取文件函数
function getFile(filePath) {
    let json = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
    
    let obj = json5.parse(json);
    return obj;
}

module.exports = function (app) {
    console.log('这个app是', app);
    
    app.get('/user/userinfo', function(rep, res) {
        var json = getFile('./userInfo.json5');
        res.json(Mock.mock(json));
    })
}