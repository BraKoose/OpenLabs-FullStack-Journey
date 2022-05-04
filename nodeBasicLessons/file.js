const fs = require('fs');
const { collationNotSupported } = require('mongodb/lib/core/utils');

// reading files 
fs.readFile('./docs/GSE - Web Development Insight - Godfred A. Amoako Week 3.docx', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});


console.log('last line');

//writing files 

fs.writeFile('./docs/ama.txt', 'Koose, Koko', () => {
    console.log('file was written')
})

//directors 
if (!fs.existsSync('./tryfolder')) {
    fs.mkdir('./tryfolder', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder created')
    })
} else {
    fs.rmdir('./tryfolder', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}



//deleting files

if (fs.existsSync('./docs/koose.txt')) {
    fs.unlink('./docs/koose.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}