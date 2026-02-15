const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('dogs', {recursive: true}, (err) => {
//     console.log('in the callback');
//     if (err) throw err;
// });
try{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log('error');
    console.log(e);
}