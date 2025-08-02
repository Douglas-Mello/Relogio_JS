let msg = document.getElementById("msg")
var c = new Date().getHours()
function att(){
    
var agora= new Date()
let hora = agora.getHours().toString().padStart(2,"0");
let min =agora.getMinutes().toString().padStart(2,"0");
let seg= agora.getSeconds().toString().padStart(2,"0");
var tela = document.getElementById("Relogio")
tela.innerHTML = `${hora}: ${min}: ${seg}`

}
if(c <=17){
    msg.innerHTML = "Boa tarde"
    document.body.style.backgroundColor ="#cb873b"
    document.body.style.font= "normal 40px Arial" 

}
else if(c<=12){
    msg.innerHTML = "Bom dia"
    document.body.style.backgroundColor ="yellow"
    document.body.style.font= "normal 40px Arial" 
}
else{
    msg.innerHTML = "Boa noite"
    document.body.style.backgroundColor ="#04042b"
    document.body.style.font= "normal 40px Arial" 
}


setInterval(att,1000)
