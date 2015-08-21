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
document.getElementById('HDB').innerHTML = ' <h3>Spam-Flooder(Usar con cuidado):</h3><div>&nbsp;</div> <div>Texto SPAM: <input id="spamText" size="60px" title="Escribe/pega acá el texto que quieras que se envíe" style="border:2px solid #000000" ></input></div><div>&nbsp;</div> <div>Tiempo(milisegundos): <input id="tiempo" size="5" title="Escribe un número a partir de 1250. Mientras mayor sea más tiempo tardará." value="1250" style="border:2px solid #000000"><i> [Escribir un número no menor a 1250.]</i></input></div> <div>&nbsp;</div><div>Iniciar/Parar:&nbsp;<button id="bts1" title="Estado del Flooder" onmouseup="presbts1();" style="cursor: pointer; border: 0.8px solid #000000; background: #C5EA35;">OFF</button></div><hr size="6" width="40%" align="left" style="color: #0056b2;"></hr><div><h3>Clonar:</h3>Texto a mostrar: <input id="text_in" size="40" style="border:2px solid #000000"></input><a id="bt_enviar" onmousedown="cl_text();" class="btn" style="cursor:pointer; border:0.8px solid #000000; background: #C5EA35;"><b>&nbsp;Enviar </b></a><div>&nbsp;</div><div>Nick a clonar: <input id="cl_nick" style="border:2px solid #000000"></input><a>&nbsp;&nbsp;</a><a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><b>&nbsp;B </b></a><a>&nbsp;</a><a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><i>&nbsp;I </i></a><a>&nbsp;</a><a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="cursor:pointer; border:2px solid rgb(6, 65, 98); background:transparent;"><u>&nbsp;U </u></a></div><div>&nbsp;</div>Color del nick a clonar:</div> ';


//++ ScriptMultiSpam:(Flooder)
function multiSpam()
{
	var myText=document.getElementById("spamText").value;
	var us_lista = ULS.users.length;
	var uS = Math.floor((Math.random()*us_lista)+0);
	var u_nick=ULS.users[uS].nick;
	var T_1="[b][c="+IN.clr+"]"+myText+"[/c][/b]";
	var textO=T_1;
	var chekk=ULS.getID(u_nick); 
	if (chekk!==null) 
	{
		rcFC.send("500","612",chekk,textO);
	}
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
