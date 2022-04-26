var num = 1000

function test()
{
    var num = 90
    console.log("This is the var local the fun because of Global" + num)

}
console.log("This is the Global variable of the test()" + num)
test()