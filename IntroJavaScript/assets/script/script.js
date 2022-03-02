var calculate = {
    A1 : null,
    A2 :null,
    A3:null,
}


function total()
{
        calculate.A1 = document.getElementById("A1").value;
        calculate.A2 = document.getElementById("A2").value;
        calculate.A3 = calculate.A1 + calculate.A2;
        document.getElementById("result").innerHTML = calculate.A3
}