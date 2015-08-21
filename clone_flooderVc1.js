//+ 
/*
	Version para el cliente (ClienteLT) hecho en c# .NET 
	Tomado de la version original 3.4.3E
	20/08/2015
	Maquinito
	+Positivo+
*/


//++ Anti-Kick:
rcFC.send("700","750"); BL.pingSent=new Date().getMilliseconds();
var ver = setInterval('rcFC.send("700","750")',600000);
ver;
//clearInterval(ver);

//++ Cambiar el contenido de la ventana help y mostrar ahi los nuevos elementos:
document.getElementById('HDB').innerHTML = ' <h3>Spam-Flooder(Usar con cuidado):</h3><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acá el texto que quieras que se envíe" style="border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo(milisegundos): <input id="tiempo" size=5 title="Escribe un número a partir de 1250. Mientras mayor sea más tiempo tardará." value="1250" style="border:2px solid #000000"><i> [Escribir un número no menor a 1250.]</i></input></div> <div>&nbsp;</div><div>Iniciar/Parar: <button id="bts1" title="Estado" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35">OFF</button></div><hr size="6" width="100%" align="left" style="color: #0056b2;"></hr> <div>aqui irá el script de clonar</div> ';


//++ ScriptMultiSpam:(Flooder)
function multiSpam()
{
	var myText=document.getElementById("spamText").value
	var us_lista = ULS.users.length;
	var uS = Math.floor((Math.random()*us_lista)+0);
	var u_nick=ULS.users[uS].nick;
	var T_1="[b][c="+IN.clr+"]"+myText+"[/c][/b]";
	var textO=T_1;
	var chekk=ULS.getID(u_nick); 
	if (chekk!==null) {rcFC.send("500","612",chekk,textO)}
}

var spamm;
function presbts1(){
if (document.getElementById("bts1").innerHTML=="ON..")
	{
		rcFC.playSound("msg");
		document.getElementById("bts1").innerHTML="OFF";
		clearInterval(spamm);
	}
else
	{
		rcFC.playSound("join");
		document.getElementById("bts1").innerHTML="ON..";
		spamm = setInterval('multiSpam();',document.getElementById("tiempo").value);
	}
}
//Fin_del_MultiFlooder


////++++ AQUI IRA EL SCRIPT PARA CLONAR ++++////
