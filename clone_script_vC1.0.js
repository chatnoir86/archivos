/////////////////////////////////////////////////////////////////////////////////////
/*
				(Version para clienteLT: v: C1.0) Script para ('clonar') Copiar nick y escribir con él.		
				®Maquinito.
*/



/////////////////////////////////////////////////////////////////////////////////////


var nuevaAncla1 = document.createElement("a");
var anclaTexto1 = document.createTextNode('');nuevaAncla1.appendChild(anclaTexto1);
var nuevaAncla2 = document.createElement("a");
var anclaTexto2 = document.createTextNode('');nuevaAncla2.appendChild(anclaTexto2);
var nuevaAncla3 = document.createElement("a");
var anclaTexto3 = document.createTextNode('');nuevaAncla3.appendChild(anclaTexto3);
var nuevaAncla4 = document.createElement("a");
var anclaTexto4 = document.createTextNode('');nuevaAncla4.appendChild(anclaTexto4);
var nuevaAncla5 = document.createElement("a");
var anclaTexto5 = document.createTextNode('');nuevaAncla5.appendChild(anclaTexto5);
var nuevaAncla7 = document.createElement("a");
var anclaTexto7 = document.createTextNode('');nuevaAncla7.appendChild(anclaTexto7);
var nuevaAncla6 = document.createElement("a");
var anclaTexto6 = document.createTextNode('');nuevaAncla6.appendChild(anclaTexto6);
var nuevaAncla8 = document.createElement("a");
var anclaTexto8 = document.createTextNode('');nuevaAncla8.appendChild(anclaTexto8);

var anclaExistente = document.getElementById("sBTNS");var padre = anclaExistente.parentNode;

var nuevoHijo1 = padre.insertBefore(nuevaAncla1, anclaExistente);
var nuevoHijo2 = padre.insertBefore(nuevaAncla2, anclaExistente);
var nuevoHijo3 = padre.insertBefore(nuevaAncla3, anclaExistente);
var nuevoHijo4 = padre.insertBefore(nuevaAncla4, anclaExistente);
var nuevoHijo5 = padre.insertBefore(nuevaAncla5, anclaExistente);
var nuevoHijo7 = padre.insertBefore(nuevaAncla7, anclaExistente);
var nuevoHijo6 = padre.insertBefore(nuevaAncla6, anclaExistente);
var nuevoHijo8 = padre.insertBefore(nuevaAncla8, anclaExistente);

var ctrl1=0; var ctrl2=0; var ctrl3=0;
function negrita(){
if (ctrl1==0){ctrl1=1;document.getElementById("bt_b").style.background="rgb(213, 255, 115)";}else
{ctrl1=0;document.getElementById("bt_b").style.background="transparent";}
}
function cursiva(){
if (ctrl2==0){ctrl2=1;document.getElementById("bt_i").style.background="rgb(213, 255, 115)";}else
{ctrl2=0;document.getElementById("bt_i").style.background="transparent";}
}
function subrayado(){
if (ctrl3==0){ctrl3=1;document.getElementById("bt_u").style.background="rgb(213, 255, 115)";}else
{ctrl3=0;document.getElementById("bt_u").style.background="transparent";}
}
function cl_text(){
var myText=document.getElementById("text_in").value;
var u_nick=document.getElementById("cl_nick").value;
var bo0; var bo1; var it0; var it1; var un0; var un1; 
if (ctrl1==1){bo0 = "[/b]"; bo1 = "[b]";}else{bo0 = ""; bo1 = "";}
if (ctrl2==1){it0 = "[/i]"; it1 = "[i]";}else{it0 = ""; it1 = "";}
if (ctrl3==1){un0 = "[/u]"; un1 = "[u]";}else{un0 = ""; un1 = "";}
var T_1 = un1 + it1 + bo1 + "[c=" + colorN + "]" + myText + "[/c]" + bo0 + it0 + un0;
var chekk=ULS.getID(u_nick); 
	if (chekk!==null && T_1!="[c=" + colorN + "]"+"[/c]" && T_1!="[b]"+"[c=" + colorN + "]"+"[/c]"+"[/b]" && T_1!="[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]" && T_1!="[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]" && T_1!="[b]"+"[i]"+"[c=" + colorN + "]"+"[/c]"+"[/i]"+"[/b]" && T_1!="[b]"+"[u]"+"[c=" + colorN + "]"+"[/c]"+"[/u]"+"[/b]")
	{
	rcFC.send("500","612",chekk,T_1);
	myText=document.getElementById("text_in").value="";
	}

};

//en la cabecera:
var crearScript=document.createElement('script');
crearScript.src='https://github.com/Usagi86/ClienteLT/raw/master/clone_script_cab_vC1.0.js';//vC1.0
var head=document.getElementsByTagName('head')[0];
head.appendChild(crearScript);

nuevaAncla1.innerHTML = ' Texto:<input id="text_in" size="5" >';
nuevaAncla2.innerHTML = ' <a id="bt_b" title="Letra en Negrita" onmousedown="negrita();" class="btn" style="border: 2px solid rgb(6, 65, 98); background:transparent;">B';
nuevaAncla3.innerHTML = ' <a id="bt_i" title="Letra en Cursiva" onmousedown="cursiva();" class="btn" style="border: 2px solid rgb(6, 65, 98); background:transparent;">I';
nuevaAncla4.innerHTML = ' <a id="bt_u" title="Letra subrayada" onmousedown="subrayado();" class="btn" style="border: 2px solid rgb(6, 65, 98); background:transparent;">U';
nuevaAncla5.innerHTML = ' <a id="bt_enviar" onmousedown="cl_text();" class="btn">Enviar';
nuevaAncla7.innerHTML = ' <button title="Dale click para elegir los colores" onclick="mostrar_1();"> Colores </button>';
nuevaAncla6.innerHTML = ' Escribir nick:<input id="cl_nick">';
nuevaAncla8.innerHTML = ' <div id="tablaSimple" style="visibility: hidden; position: absolute; top: -100px; left: 500px; "><div><a id="bt1" class="btn" onmouseup="ocultar()" style="background: #909090;">&nbsp;&nbsp;&nbsp;</a><a id="bt2" class="btn" onmouseup="ocultar()" style="background: #FF0300;">&nbsp;&nbsp;&nbsp;</a><a id="bt3" class="btn" onmouseup="ocultar()" style="background: #FF9A00;">&nbsp;&nbsp;&nbsp;</a><a id="bt4" class="btn" onmouseup="ocultar()" style="background: #FFCD00;">&nbsp;&nbsp;&nbsp;</a><a id="bt5" class="btn" onmouseup="ocultar()" style="background: #C5EA35;">&nbsp;&nbsp;&nbsp;</a><a id="bt6" class="btn" onmouseup="ocultar()" style="background: #4BE22C;">&nbsp;&nbsp;&nbsp;</a><a id="bt7" class="btn" onmouseup="ocultar()" style="background: #2CAFE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt8" class="btn" onmouseup="ocultar()" style="background: #353CC4;">&nbsp;&nbsp;&nbsp;</a><a id="bt9" class="btn" onmouseup="ocultar()" style="background: #992CE2;">&nbsp;&nbsp;&nbsp;</a><a id="bt10" class="btn" onmouseup="ocultar()" style="background: #E22C9A;">&nbsp;&nbsp;&nbsp;</a></div><div><a id="bt11" class="btn" onmouseup="ocultar()" style="background: #000000;">&nbsp;&nbsp;&nbsp;</a><a id="bt12" class="btn" onmouseup="ocultar()" style="background: #CE1918;">&nbsp;&nbsp;&nbsp;</a><a id="bt13" class="btn" onmouseup="ocultar()" style="background: #CE5D18;">&nbsp;&nbsp;&nbsp;</a><a id="bt14" onmouseup="ocultar()" class="btn" style="background: #CEAB18;">&nbsp;&nbsp;&nbsp;</a><a id="bt15" class="btn" onmouseup="ocultar()" style="background: #97B71C;">&nbsp;&nbsp;&nbsp;</a><a id="bt16" class="btn" onmouseup="ocultar()" style="background: #35A31F;">&nbsp;&nbsp;&nbsp;</a><a id="bt17" class="btn" onmouseup="ocultar()" style="background: #1F7EA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt18" class="btn" onmouseup="ocultar()" style="background: #1F54A3;">&nbsp;&nbsp;&nbsp;</a><a id="bt19" onmouseup="ocultar()" class="btn" style="background: #6E1FA3;">&nbsp;&nbsp;&nbsp;</a><a id="bt20" class="btn" onmouseup="ocultar()" style="background: #A31F6E;">&nbsp;&nbsp;&nbsp;</a></div></div>';

document.getElementById("CI").style.height="40px";


/*
//+crear una pequeña "ventana"


function mostrar()
{
if (document.getElementById("ss").style.visibility=="hidden")
    {
    document.getElementById("ss").style.visibility="visible"
    }
else
    {
    document.getElementById("ss").style.visibility="hidden"
    }
}

//nuevaAncla1.innerHTML = ' <a id="bt_enviar" onmousedown="mostrar();" class="btn">Enviar';


nuevaAncla2.innerHTML = ' <div id="ss" class="dlg" style="top: -373px; left: 565px;"><div id="ss1" class="head">Titulo</div><div class="body"><div class="inn"><div id="ss2" style="overflow: auto; width: 560px; height: 320px;"><h3>Texto</h3><h3><p>párrafo</p>hola html</h3></div></div></div></div>'

*/
