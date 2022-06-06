document.querySelector("form").addEventListener("click",function(event){
    event.preventDefault()
    var bname=document.getElementById("name").value
    console.log(name)
    var select=document.getElementById("department").value
    var exp=document.getElementById("exp").value
    var email=document.getElementById("email").value
    var mbl=document.getElementById("mbl").value

})


var inpname=document.getElementById("inpname")
inpname.textContent= bname
var inpexp=document.getElementById("inpexp")
inpexp.textContent=select

var inpdep=document.getElementById("inpdep")
inpdep.textContent=select
var inpexp=document.getElementById("impexp")
inpexp.textContent=exp

var inpema=document.getElementById("impema")
inpema.textContent=email
var inpmbl=document.getElementById("impmbl")
inpmbl.textContent=mbl


