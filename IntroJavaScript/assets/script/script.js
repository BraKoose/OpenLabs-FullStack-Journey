var html ={
    test1 :null,
    test2:null,
    total: null
}


function htmlfun(){
    html.test1 = parseInt( document.getElementById("ht_1").value);
    html.test2 = parseInt( document.getElementById("ht_2").value);
    
    html.total = html.test1 + html.test2;
    document.getElementById("ht_total").innerHTML = html.total;

}

function Cssfun(){
    html.test1 = parseInt( document.getElementById("ht_3").value);
    html.test2 = parseInt( document.getElementById("ht_4").value);
    
    html.total = html.test1 + html.test2;
    document.getElementById("css_total").innerHTML = html.total;

}

function JavaScriptfun(){
    html.test1 = parseInt( document.getElementById("ht_5").value);
    html.test2 = parseInt( document.getElementById("ht_6").value);
    
    html.total = html.test1 + html.test2;
    document.getElementById("javascript_total").innerHTML = html.total;

}
