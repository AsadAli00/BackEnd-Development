var fs = require('fs');

function readFile(srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
        (err) ? console.log('Read Err ', err) : console.log('Read ', data);
    });
}
function writeFile(savPath, data) {
    fs.writeFile(savPath, data, function (err) {
        (err) ? console.log('Write Err: ', err) : console.log('Write Successfully!!');
    });
}
function appendFile(savPath, data) {
    fs.appendFile(savPath, data, function (err) {
        (err) ? console.log('Append Err: ', err) : console.log('Append Successfully!!');
    });
}

// writeFile('./abc.txt', 'Abc Yhaoo My First File...');
// readFile('./abc.txt');
// readFile('abc.txt')
appendFile('./abc.txt', ' Abc Yhaoo My First File... 123');
readFile('./abc.txt')