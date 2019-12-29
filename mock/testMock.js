const Mock = require('mockjs');

let id = Mock.mock('@id');

console.log(id);

let obj = Mock.mock({
    id: '@id()',
    userName: '@cname()',
    date: '@date()',
    avater: '@image("200x200","yellow", "#fff", "hellow")',
    description: '@cparagraph()',
    ip: '@ip()',
    email: '@email()',
})

console.log(obj);
