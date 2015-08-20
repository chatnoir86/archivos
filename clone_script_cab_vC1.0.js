//script a usar en la cabecera.
//contiene la variable que guardará el codigo del color
//una funcion para ocultar el elemento tablaSimple y otra funcion con la sentencia if/else para comprobarlo
//y los eventos onclick para los colores.

var colorN="#000000"; 

function ocultar(){document.getElementById("tablaSimple").style.visibility="hidden"};

function mostrar_1()
{
	if (document.getElementById("tablaSimple").style.visibility=="hidden")
	{
	document.getElementById("tablaSimple").style.visibility="visible"
	}
	else
	{
	document.getElementById("tablaSimple").style.visibility="hidden"
	}
};

document.getElementById("bt1").onclick=function() {colorN="#909090";};
document.getElementById("bt2").onclick=function() {colorN="#FF0300";};
document.getElementById("bt3").onclick=function() {colorN="#FF9A00";};
document.getElementById("bt4").onclick=function() {colorN="#FFCD00";};
document.getElementById("bt5").onclick=function() {colorN="#C5EA35";};
document.getElementById("bt6").onclick=function() {colorN="#4BE22C";};
document.getElementById("bt7").onclick=function() {colorN="#2CAFE2";};
document.getElementById("bt8").onclick=function() {colorN="#353CC4";};
document.getElementById("bt9").onclick=function() {colorN="#992CE2"; };
document.getElementById("bt10").onclick=function() {colorN="#E22C9A";};
document.getElementById("bt11").onclick=function() {colorN="#000000";};
document.getElementById("bt12").onclick=function() {colorN="#CE1918";};
document.getElementById("bt13").onclick=function() {colorN="#CE5D18";};
document.getElementById("bt14").onclick=function() {colorN="#CEAB18";};
document.getElementById("bt15").onclick=function() {colorN="#97B71C";};
document.getElementById("bt16").onclick=function() {colorN="#35A31F";};
document.getElementById("bt17").onclick=function() {colorN="#1F7EA3";};
document.getElementById("bt18").onclick=function() {colorN="#1F54A3";};
document.getElementById("bt19").onclick=function() {colorN="#6E1FA3";};
document.getElementById("bt20").onclick=function() {colorN="#A31F6E";};

