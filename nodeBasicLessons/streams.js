const fs = require('fs')

const readStream = fs.createReadStream('./docs/koose.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chuck) => {

//     console.log('____NEW CHUCK_____');
//     console.log(chuck);
//     writeStream.write('\n New KOose\n');
//     writeStream.write(chuck)

// });

//pipeline
readStream.pipe(writeStream)