var person = {
    name: 'Koose',
    getName: function () {
        return this.name
    }
}

var person1 = {
    name: 'Baddest'

}

console.log(person.getName.call(person1))