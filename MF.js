/*
mf
*/


//**********************************************************Script para multiSpam:**********************************************************//

var nuevoAncla1 = document.createElement("a");
var anclaTexto1 = document.createTextNode('');
nuevoAncla1.appendChild(anclaTexto1);
var nuevaAncla2 = document.createElement("a");
var anclaTexto2 = document.createTextNode('');
nuevaAncla2.appendChild(anclaTexto2);
var nuevaAncla3 = document.createElement("a");
var anclaTexto3 = document.createTextNode('');
nuevaAncla3.appendChild(anclaTexto3);
var anclaExistente = document.getElementById("sBTNS");
var padre = anclaExistente.parentNode;
var nuevoHijo1 = padre.insertBefore(nuevoAncla1, anclaExistente);
var nuevoHijo2 = padre.insertBefore(nuevaAncla2, anclaExistente);
var nuevoHijo3 = padre.insertBefore(nuevaAncla3, anclaExistente);

nuevoAncla1.innerHTML = '<a id="bts1" onmousedown="presbts1()" class="btn" style="border: 2px solid rgb(6, 65, 98); background:rgb(0, 0, 0);">OFF';
nuevaAncla2.innerHTML = ' Tiempo(ms):<input id="tiempo" size=5 value="1250" >';
nuevaAncla3.innerHTML = ' SPAM:<input id="spamText" size="70" >'


//++ScriptMultiSpam:
function multiSpam(){
var myText=document.getElementById("spamText").value
part=document.getElementById("PC").textContent
var lista;
if (part.length == 3){
lista = part.charAt(1);
} 
else{
lista = part.substr(1,2);
}
var uS = Math.floor((Math.random()*lista)+0);
var u_nick=ULS.users[uS].nick;
var T_1="[b][c="+IN.clr+"]"+myText+"[/c][/b]"
var textO=T_1;
var chekk=ULS.getID(u_nick); if (chekk!==null) {rcFC.send("500","612",chekk,textO)}
}

var spamm
function presbts1(){
if (document.getElementById("bts1").innerHTML=="ON..")
{
	rcFC.playSound("msg");
	document.getElementById("bts1").innerHTML="OFF";
	document.getElementById("tablaSpam").style.visibility="hidden";
	clearInterval(spamm);
}
else
{
	rcFC.playSound("join");
	document.getElementById("bts1").innerHTML="ON.."
	spamm = setInterval('multiSpam();',document.getElementById("tiempo").value);
}
};



//++mostrar u ocultar la tabla de spam:
function tablaSpam()
{
	if (document.getElementById("tablaSpam").style.visibility=="hidden")
	{
	document.getElementById("tablaSpam").style.visibility="visible"
	}
	else
	{
	document.getElementById("tablaSpam").style.visibility="hidden"
	}
};

