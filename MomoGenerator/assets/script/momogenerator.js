menu ='<h4>welcome to Mtn momo <br> 1) Transfer Money <br> 2)Momopay <br> 3 Airtime and Bundle</h4>';

 function err() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      }) 
}

var attempt = 0;
async function prompt_alert() {
    const { value: code } = await Swal.fire({
        title: 'Momo money App',
        input: 'text',
        inputLabel: 'Enter Short Code',
        inputPlaceholder: 'Enter your short code'
      })

if(code == "*170#")
{

options()

}
else{
    err()
    while(attempt <= 1){
prompt_alert()
attempt = ++attempt;
    }

 
}
    
}


function start() {

    console.log(prompt_alert())
    

}






async function options() {
    const { value: code } = await Swal.fire({
        title: 'Momo money App',
        input: 'text',
        html: menu,
        inputPlaceholder: 'Enter your short code'
      })

    
}
// learn switch case 
// while loop, do while , for loop

var num = 0;
var ano_num = 5;
// while (num < ano_num ){
// ///do smth
// document.writeln("message");

// // increment
// num = ++num;
// }


// for (x =1; x<=5;x++){

//     document.writeln("for message");


// }