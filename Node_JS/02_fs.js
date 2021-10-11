var fs = require('fs') 
// console.log('ASYNC 1');
// fs.readdir('./', function (err, files) {
//     if (err) {
//         console.log('Err: ', err)
//     } else {
//         console.log('Files: ', files);
//     }
// })
// console.log('ASYNC 2');


// ** SYNC **
console.log('SYNC 1 ')
var files = fs.readdirSync('./');  // 10min IO BLOCK
console.log('SYNC 2', files);