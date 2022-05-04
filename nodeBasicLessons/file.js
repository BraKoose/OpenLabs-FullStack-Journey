const fs = require('fs');

// reading files 
fs.readFile('./docs/GSE - Web Development Insight - Godfred A. Amoako Week 3.docx', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});


console.log('last line');

//writing files 

fs.writeFile('./docs/koose.txt', 'Koose, Koko', () => {
    console.log('file was written')
})

//directors 


//deleting files