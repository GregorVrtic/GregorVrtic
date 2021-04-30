var gost = window.prompt("Pozdravljeni, kako vam je ime?");

alert("Pozravljeni " + gost + " lepo da ste prišli  našo trgovino, prosim vas da si ne pozabite ogledat izdelkov v akcijah");

function validate()
{
var ime=document.getElementById("ime").Value;
var geslo=document.getElementById("geslo").Value; 
if(ime=="admin"&& geslo=="user") {
    alert("uspešno ste se vpisali");
    return false;
} else {
    alert("napačno ime ali geslo")
}


}

