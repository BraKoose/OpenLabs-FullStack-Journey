const removeSubdocs = require("mongoose/lib/plugins/removeSubdocs");

var arr = new Array(1, 2, 3, 4, 5, 6, 8, 9, 10)

let koose = new Array(['Auntie Mumuni', 'Reggie RockStone', 'Koko King']);

function foodSellers(f) {
    return f + 1;

}

result = koose.map(foodSellers)
console.log(result)