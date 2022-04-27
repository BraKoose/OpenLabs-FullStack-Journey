var codeBoy = {
    name: "Koose",
    age : 120,
    profession: "Android Associate Google Dev",

    handledDeveloper: function(profession, handler){
        handler(profession);
    },
    recieve: function(){
        this.handledDeveloper("Android Developer", profession => console.log(profession + this.name));
    }
}
codeBoy.recieve();