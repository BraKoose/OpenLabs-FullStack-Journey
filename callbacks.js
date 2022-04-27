var welcomeMsg = function(){
    console.log("Hello Welcome to Node Koose");
   
}
var start = function(callback){
    callback()
}
start(welcomeMsg)

var look = function(dir){
    if(dir ==='west')
    {
        console.log
        ("There is a small mailbox here.");
    if (dir === 'east');
    {
        console.log("You are standing next a white house.");
    }    
    }
}