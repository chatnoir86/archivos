var rcLn = { PL : "Participants", BS : "Send", GCL : "Group Chat", PCL : "[Private chat with {0}]", PCC : "Close Tab", TTL : " in ", SI : "I am available", SIA : "I am away", TBB : "_Bold (Ctrl-B)", TBI : "_Italic (Ctrl-I)", TBU : "_Underline (Ctrl-U)", TBC : "_Color", TBE : "_Emoticon", TBN : "_Clear", TBR : "_Save", TBA : "_Pause", TBS : "_Settings", TBG : "_Change room", TBH : "_Help", TBX : "_Exit", CSH : "Saved chat session", CST : "saved on", SDH : "Settings", SDCA : "Chat area:", SDSS : "Show emoticons", SDSA : "Show avatars", SDIF : "Show custom fonts and colors", SDLF : "Use large fonts", SDPL : "Participants List:", SDPA : "Sort alphabetically", SDPSA: "Show avatars", SDG : "General:", SDEL : "Show people joining/leaving", SDIP : "Ignore private messages", SDS : "Alert sounds on:", SDSEL: "People joining", SDSPU: "Public messages", SDSPV: "Private messages", SBA : "Apply Settings", HDH : "+Positive Mind+", HDB : "<h3>CICADA</h3><p>...</p>" + "<h3>+...+</h3>", HBA : "Close", RDH : "Rooms", RPR : "Public Rooms", RUR : "User Rooms", RNT : "no topic", ROW : "Room Owner", RTJ : "", RBC : "Create Room", RBX : "Close", RFL : "Full Rooms", IRP : "Invalid room password.", IRAD : "Room access denied.", RPDH : "Password Protected Room", RPDP : "Password:", RPDJ : "Enter", RPDC : "Cancel", CRDH : "Create Room", CRDN : "Name:", CRDT : "Topic:", CRDP : "Password:", CRDPO: "Contraseña, (Opcional)", CRDJ : "Create", CRDC : "Cancel", LDN : "Nickname:", LDO : "Advanced options", LDPU : "Profile URL:", LDPT : "e.g. personal website", LDAU : "Avatar URL:", LDAT : "an image up to 80x80 pixels", LDLB : "Join Chat", LDC : "Connecting...", LDE1 : "Connect failed.", LDE2 : "Disconnected.", LDE3 : "This nickname is in use.", LDE4 : "Server closed.", LDE5 : "Server full.", LDE6 : "Invalid input.", LDE7 : "Invalid server.", LDE8 : "Authentication failed.", LDE9 : "Room closed.", LDE10: "This nickname or IP address is banned.", LDE11: "You have been kicked for flooding.", LDE12: "You have been kicked for profanity.", LDE13: "You have been kicked by chat operator.", LDE14: "You have logged on from another location.", W3C1 : "You need an W3C DOM support browser.", W3C2 : "Upgrade your browser", AFL1 : "This application requires Flash.", AFL2 : "Instal this: <a href='http:\/\/www.adobe.com/go/getflashplayer/'>Download<\/a>", CTY : "tells you", CYT : "You tell", CUJ : "{0} joined the room.", CUL : "{0} left the room. (Logged out)", CUR : "{0} left the room. (Going to {1})", CRI : "There are {0} people in {1} rooms.", CRJ : "You entered {0}.", CRT : "Room topic is: {1}.", CUA : "{0} went away.", CUB : "{0} came back.", CNU : "User is not connected.", UMWH : "Whisper", UMPM : "Private chat", UMPR : "View profile", UMBL : "Block user", UMUB : "Unblock user", UMYU : "You", WFD : "Warning! You may be kicked for flooding.", WID : "Warning! You may be kicked for inactivity.", WPD : "Warning! You may be kicked for profanity.", WFW : "Input rate limit.", ROLES: { 0:"administrator", 1:"operator", 2:"room operator", 3:"regular user" }, AMW : "Warn", AMF : "Freeze", AMK : "Kick", AMB : "Ban", AMI : "Whois", ARC : "{0} is now {1}.", AWB : "{0} has been warned by {1}.", AFB : "{0} has been frozen by {1}.", AYWB : "You have been warned by {0}.", AYFB : "You have been frozen by {0}.", AKB : "{0} has been kicked by {1}.", AYF : "You are frozen. {0} seconds left.", AWH : "User: {0}, login time: {1}, remote host: {2}", ARM : "This room is moderated by {0}. All messages are forwarded to the moderator for review.", ARO : "This room is no longer being moderated.", ARMF : "Your message has been forwarded to the moderator.", MDH : "Moderator message queue", MBDA : "Discard All", MBC : "Stop Moderation" };
var tsrc='#000000,#000000,#FFFFFF,#DEDEDE,#B0B0B0,#222222,#8AD5B2,#8AD5B2,#00B3B3,#8AD5B2,#C0C0C0,#8AD5B2,#3333BB,#8AD5B2,#808080,#BF5A5A,#000000,#AB120D,#0D2EAB,#616060,#0D2EAB,#000000,#545c61,#9b9477,#AB120D,#AB890D,#610DAB,#909090,#FF0300,#FF9A00,#FFCD00,#C5EA35,#4BE22C,#2CAFE2,#353CC4,#992CE2,#E22C9A,#000000,#CE1918,#CE5D18,#CEAB18,#FFBFFF,#35A31F,#1F7EA3,#1F54A3,#6E1FA3,#A31F6E,1';

//Creando los elementos y dandoles estilo.
var clientHTML="   <div id=\"WRP\">   <div id=\"WRP1\"> <div id=\"AP\"> <div class=\"pN\" id=\"OT\"> <div class=\"pH br\" id=\"APO\"> <div class=\"pHT\" id=\"RNL\"> <span id=\"RN\"></span>&nbsp;<span id=\"PCLL\"></span> </div> <div class=\"pHP\" id=\"hBTNS\"> </div> </div> <div class=\"pB\"> <div class=\"sH pIN\" id=\"AS\"> <div id=\"CA\"> </div> </div> </div> </div>   <div id=\"TABS\"></div> </div> <div id=\"IP\"> <div class=\"pN\"> <div id=\"IPO\" class=\"pH br\"> <div class=\"pHT\" id=\"fBTNS\"> </div> <div class=\"pHP\" id=\"sBTNS\"> </div> </div> <div class=\"pB br\"> <iframe id=\"CI\" name=\"CI\" class=\"pIN\" frameborder=\"0\"></iframe> <a id=\"BS\" class=\"btn\"></a> </div> </div> </div> </div>   <div id=\"LP\"> <div class=\"pN\"> <div class=\"pH br\" id=\"LPO\"> <div class=\"pHT\"> <span id=\"PL\"></span>&nbsp;<span id=\"PC\"></span> </div> <div class=\"pHP\"> </div> </div> <div class=\"pB\"> <div class=\"sH pIN\" id=\"LS\"> <div id=\"UL\"> </div> </div> </div> <div id=\"LPCA\"> <a class=\"btn\" id=\"SI\"></a> </div> </div> </div> </div>     <div id=\"FC\" class=\"dlg\"> </div>   <div id=\"CD\" class=\"dlg\"> <div class=\"body\"> <div id=\"CP\"> </div> </div> </div>   <div id=\"ED\" class=\"dlg\"> <div class=\"body\"> <div id=\"EP\"> </div> </div> </div>   <iframe style=\"visibility:hidden;\" id=\"CH\" name=\"CH\" frameborder=\"0\" width=\"1\" height=\"1\"></iframe>   <div id=\"GB\"></div>   <div id=\"SD\" class=\"dlg\"> <div class=\"head\" id=\"SDH\"> </div> <div class=\"body\"> <table border=\"0\" cellspacing=\"20\" cellpadding=\"10\"> <tr valign=\"top\"> <td> <fieldset> <legend id=\"SDCA\"></legend> <input id=\"s0\" type=\"checkbox\"/> <label id=\"SDSA\" for=\"s0\"></label> <input id=\"s1\" type=\"checkbox\"/> <label id=\"SDSS\" for=\"s1\"></label> <br/> <input id=\"s2\" type=\"checkbox\"/> <label id=\"SDIF\" for=\"s2\"></label> </fieldset> </td> <td> <fieldset> <legend id=\"SDPL\"></legend> <input id=\"s3\" type=\"checkbox\"/> <label id=\"SDPSA\" for=\"s3\"></label> <br/> <input id=\"s4\" type=\"checkbox\"/> <label id=\"SDPA\" for=\"s4\"></label> </fieldset> </td> </tr> <tr valign=\"top\"> <td> <fieldset> <legend id=\"SDG\"></legend> <input id=\"s5\" type=\"checkbox\"/> <label id=\"SDEL\" for=\"s5\"></label> <br/> <input id=\"s6\" type=\"checkbox\"/> <label id=\"SDIP\" for=\"s6\"></label> <br/> <input id=\"s7\" type=\"checkbox\"/> <label id=\"SDLF\" for=\"s7\"></label> </fieldset> </td> <td> <fieldset> <legend id=\"SDS\"></legend> <input id=\"s8\" type=\"checkbox\"/> <label id=\"SDSEL\" for=\"s8\"></label> <br/> <input id=\"s9\" type=\"checkbox\"/> <label id=\"SDSPU\" for=\"s9\"></label> <br/> <input id=\"s10\" type=\"checkbox\"/> <label id=\"SDSPV\" for=\"s10\"></label> </fieldset> </td> </tr> </table> <div class=\"bgrp\"> <a class=\"btn\" id=\"SBA\"></a> </div> </div> </div>   <div id=\"HD\" class=\"dlg\"> <div class=\"head\" id=\"HDH\"> </div> <div class=\"body\"> <div class=\"inn\"> <div id=\"HDB\"> </div> </div> <div id=\"HDA\"> </div> <div class=\"bgrp\" style=\"text-align:right;\"> <a class=\"btn\" id=\"HBA\"></a> </div> </div> </div>   <div id=\"RD\" class=\"dlg\"> <div class=\"head\" id=\"RDH\"> </div> <div class=\"body\"> <div class=\"inn\"> <div class=\"sH pIN\" id=\"RS\"> <div id=\"RL\"> </div> </div> </div> <div id=\"RTJ\"> </div> <div class=\"bgrp\" style=\"text-align:right;\"> <a class=\"btn\" id=\"RBC\"></a>&nbsp;<a class=\"btn\" id=\"RBX\"></a> </div> </div> </div>   <div id=\"CRD\" class=\"dlg\"> <div class=\"head\" id=\"CRDH\"> </div> <div class=\"body\"> <div class=\"inn\" style=\"text-align:right;\"> <label style=\"font-weight: bold;\" id=\"CRDN\" for=\"CRDRN\"></label> &nbsp;<input class=\"in\" id=\"CRDRN\" type=\"text\"/> <br/><br/> <label style=\"font-weight: bold;\" id=\"CRDT\" for=\"CRDRT\"></label> &nbsp;<input class=\"in\" id=\"CRDRT\" type=\"text\"/> <br/><br/> <label style=\"font-weight: bold;\" id=\"CRDP\" for=\"CRDRP\"></label> &nbsp;<input class=\"in\" id=\"CRDRP\" type=\"text\"/> <br/> <span class=\"inr\" id=\"CRDPO\"></span> <br/>&nbsp; </div> <div class=\"bgrp\" style=\"text-align:right;\"> <a class=\"btn\" id=\"CRDJ\"></a>&nbsp;<a class=\"btn\" id=\"CRDC\"></a> </div> </div> </div>   <div id=\"RPD\" class=\"dlg\"> <div class=\"head\" id=\"RPDH\"> </div> <div class=\"body\"> <div class=\"inn\"> <label style=\"font-weight: bold;\" id=\"RPDP\" for=\"RPDI\"></label> &nbsp;<input id=\"RPDI\" type=\"password\"/> </div> <div class=\"bgrp\" style=\"text-align:right;\"> <a class=\"btn\" id=\"RPDJ\"></a>&nbsp;<a class=\"btn\" id=\"RPDC\"></a> </div> </div> </div>   <div id=\"UM\" class=\"dlg\"> <div class=\"head\" id=\"UMH\"> </div> <div class=\"body\" id=\"UMB\"> </div> </div>   <div id=\"BD\" class=\"dlg\"> <div class=\"head\" id=\"BDH\"> </div> <div class=\"body\"> <div class=\"inn\"> <label style=\"font-weight: bold;\" id=\"BDBR\" for=\"BDBRI\">Reason:</label> &nbsp;<input id=\"BDBRI\" type=\"text\"/> <br/> <label style=\"font-weight: bold;\" id=\"BDBT\" for=\"BDBTI\">Timeout:</label> &nbsp;<select id=\"BDBTI\"> <option value=\"10\">10 minutes</option> <option value=\"30\">30 minutes</option> <option value=\"60\">1 hour</option> <option value=\"360\">6 hours</option> <option value=\"1440\">24 hours</option> <option value=\"-1\">Permanent</option> </select> <label style=\"font-weight: bold;\" id=\"BDBS\" for=\"BDBSI\">Type:</label> &nbsp;<select id=\"BDBSI\"> <option value=\"0\">Single IP</option> <option value=\"1\">IP Subnet</option> </select> <br/> <input type=\"hidden\" id=\"BID\"/> </div> <div class=\"bgrp\" style=\"text-align:right;\"> <a class=\"btn\" id=\"BDB\">Ban</a>&nbsp;<a class=\"btn\" id=\"BDC\">Cancel</a> </div> </div> </div>   <div id=\"MD\" class=\"dlg\"> <div class=\"head\" id=\"MDH\"> </div> <div class=\"body\"> <div class=\"inn\"> <div class=\"sH pIN\" id=\"MS\"> <div id=\"ML\"> </div> </div> </div> <div class=\"bgrp\"> <a class=\"btn\" id=\"MBDA\"></a>&nbsp;<a class=\"btn\" id=\"MBC\"></a> </div> </div> </div>   <div id=\"DM\"></div>   <div id=\"LD\" style=\"text-align:center;\"> <div id=\"LDD\" style=\"width: 247px;\"> <div style=\"text-align:left;\"><label style=\"font-weight: bold;\" id=\"LDN\" for=\"LDNN\"></label></div> <input class=\"in\" id=\"LDNN\" type=\"text\"/> <div id=\"LO\" style=\"display:none;\"> <div class=\"inr\"></div> <div style=\"text-align:left;\"><label style=\"font-weight: bold;\" id=\"LDPU\" for=\"LDPUU\"></label></div> <input class=\"in\" id=\"LDPUU\" type=\"text\"/> <div class=\"inr\" id=\"LDPT\"></div> <div style=\"text-align:left;\"><label style=\"font-weight: bold;\" id=\"LDAU\" for=\"LDAUU\"></label></div> <input class=\"in\" id=\"LDAUU\" type=\"text\"/> <div class=\"inr\" id=\"LDAT\"></div> </div> <div style=\"text-align:right; margin: 5px 1px 5px 0\">&nbsp;<a class=\"btn\" id=\"LDLB\"></a></div> <div style=\"text-align:right; font-size: 14px; margin: 15px 1px 5px 0\"><a style=\"cursor: pointer;\" id=\"LDO\"></a> </div> </div> <div style=\"font-weight: bold; width: 247px; text-align:center; margin-top: 50px;\" id=\"LDM\">  </div>   <div id=\"LDAC\" style=\"visibility: hidden; width: 1px; height: 1px; overflow: hidden;\">&nbsp;</div> </div> ";
var clientCSS=" * { margin: 0; padding: 0; border-style: none; text-decoration: none; border: 0; } html {   overflow: hidden; }   #WRP { width: 1px; height: 1px; visibility: hidden; margin: auto; overflow: hidden; } #WRP1 { float: left; overflow: hidden; }   #AP { padding: 10px; float: left; } #AS, #MS { overflow: auto;   }   #CA table { width: 100%; } #CA .MB { padding: 0 3px; } #CA .MI, #CA .MIO { vertical-align: top; text-align: right; font-weight: bold; padding: 0; } #CA .AV { display: block; } #CA .AV img { padding: 1px; }   #LP { padding: 10px 10px 10px 0; float: right; }   #LS { overflow: auto; } #UL span { float: left; white-space: nowrap; overflow: hidden; padding: 1px; } #UL div { vertical-align: middle; padding: 1px 3px; cursor: pointer; white-space: nowrap; } #UL img.avatar { padding: 1px; vertical-align: middle; float: right; }   #RS { overflow: auto; } #RL span { float: left; white-space: nowrap; overflow: hidden; } #RL div { vertical-align: middle; padding: 3px 5px 3px 20px; white-space: nowrap; overflow: hidden; }   #LPCA { padding: 10px 0 0 0; } #SI { display: block; }   #IP { clear: left; padding: 0 10px 10px 10px; } #CI { float: left; height: 58px; } #BS { float: right; height: 28px; line-height: 28px; font-size: 14px; padding: 2px 10px; }   .pN { padding: 10px; } .pH { margin: 0; padding: 0 0 6px 0; position: relative;   } .pHT { float: left; padding: 3px; font-size: 14px; font-weight: bold; overflow: hidden; white-space: nowrap; cursor: default; } #fBTNS, #sfBTNS { padding: 0; } .pHT a:hover { text-decoration: underline; } .pHP { float: right; overflow: hidden; white-space: nowrap; text-align: right; } .pIN { margin: 1px; }   #GB { position: absolute; visibility: hidden; margin: 0; padding: 0; top: 0; left: 0; background: #000; opacity: 0.6; filter: alpha( opacity = 60 ); }   a.btn, a.btnt { margin: 0; cursor: pointer; display: inline-block; padding: 4px 10px; font-size: 13px; font-weight: bold; text-align: center; height: 16px; line-height: 16px; } a.tbtn, a.tbtnt { display: block; cursor: pointer; font-size: 0; padding: 1px; width: 20px; height: 20px; } a.tbtn span, a.tbtnt span { display: block; width: 18px; height: 18px; font-size: 0; } a.tbtn span { padding: 1px; } a.tbtn:hover { padding: 0; } a.tbtnt { padding: 0; } a.tbtnt span { padding: 1px 1px 0 1px; } #TABS { padding: 0; margin: 2px 0; display: none; } #TABS li { text-align: left; } .tab, .tabt, .tabf { display: inline; margin: 1px 0; padding: 2px 6px 2px 4px; font-size: 13px; white-space: nowrap; font-weight: bold; cursor: pointer; text-align: left; } .tabt { padding-bottom: 4px; } .idl, .idlpc, .msg, .typ { padding: 0 5px 0 7px; height: 14px; width: 12px; font-size: 13px; margin: 0; vertical-align: text-top; background-position: -270px 0; } .nn, .off { padding: 0; margin: 0; display: -moz-inline-stack;   display: inline-block; width: auto; overflow: hidden; } .off { text-decoration: line-through; font-style: italic; } .idl:hover, .msg:hover, .typ:hover { background-position: -252px 0; } .idlpc { background-position: -288px 0; } .typ { background-position: -216px 0; } .msg { background-position: -234px 0; }   .dlg { visibility: hidden; position: absolute; overflow: visible; } .dlg .head { cursor: move; padding: 2px 10px; font-size: 14px; line-height: 20px; font-weight: bold; vertical-align: text-bottom; } .dlg .body { padding: 5px; } .dlg .inn { padding: 10px; font-size: 14px; } .bgrp { padding: 5px 10px 15px 10px; text-align: center; } #HDA, #RTJ { padding: 2px 10px; font-size: 12px; float: left; } #RTJ { font-size: 14px; } #HDB h1 { padding: 10px 0; } #HDB p { padding: 10px 0 30px 0; } #HDB b { font-family: monospace; }   input, fieldset, label, legend { font-size: 14px; padding: 2px; margin: 0; } legend { font-weight: bold; } .inp { border: 1px solid; font-size: 15px; width: 80%; }   .dlg li { display: inline; font-size: 13px; font-weight: bold; } .dlg li a { white-space: nowrap; cursor: default; display: block; padding: 3px 6px; }   #DM { position: absolute; visibility: hidden; margin: 0; padding: 0; top: 0; left: 0; } #LD { padding: 0; font-size: 15px; position: absolute; visibility: hidden; overflow: auto; } #LD input, #RPD input, #CRD input { border: 1px solid; } #LD .in, #CRD .in { width: 240px; height: 18px; padding: 2px; font-size: 15px; } #LD .inr, #CRD .inr { width: 240px; height: 18px; padding: 2px; font-size: 12px; text-align: right; }   #CP, #EP { cursor: pointer; }   .em, .ico { margin: 0; padding: 0 7px 0 7px; height: 20px; width: 20px; font-size: 17px; vertical-align: middle; }   .br:after { content: \".\"; display: block; height: 0; clear: both; visibility: hidden; } .br { display: inline-block; } .br { display: block; } * html .br { height: 1px; } ";

//+Inicio de la configuracion.
var ExtremelyUglyCode=true; 
function $(id){ return (typeof id=="string")?document.getElementById(id):id; }

var E={hide:function(id){ $(id).style.visibility="hidden"; },
show:function(id){ $(id).style.visibility="visible"; },
setVisible:function(id,_5){ if(_5){ E.show(id); }else{ E.hide(id); } },
setOpacity:function(id,o){ if(o>0){ $(id).style.opacity=""+o; $(id).style.filter="alpha(opacity="+o*100+")"; } },
getPosition:function(id){ var o=(typeof id=="string")?$(id):id; var x=0; var y=0; if(o.offsetParent){ x=o.offsetLeft; y=o.offsetTop; while(o=o.offsetParent){ x+=o.offsetLeft; y+=o.offsetTop; } } return [x,y]; },
setText:function(id,_d){ $(id).innerHTML=_d; },
get:function(id){ return $(id).value; },
set:function(id,_10){ $(id).value=_10; },
check:function(id,_12){ $(id).checked=(_12==true||_12=="true"); }};
//+reconociendo el navegador.
var rcBR={W3CDOMSupported:document.getElementById&&document.createElement,
PNG:!(navigator.appVersion.indexOf("MSIE")!=-1&&parseFloat(navigator.appVersion.split("MSIE")[1])<=6),
ie8:navigator.appVersion.indexOf("MSIE")!=-1&&parseFloat(navigator.appVersion.split("MSIE")[1])>7,
ie:navigator.appVersion.indexOf("MSIE")!=-1,
op:window.opera,
sf:(navigator.appVersion.indexOf("Safari")!=-1)||(navigator.appVersion.indexOf("Konqueror")!=-1)};
//+cookies.
rcCookie={set:function(_13,_14,_15){ if(_15){ var _16=new Date(); _16.setTime(_16.getTime()+(_15*24*60*60*1000));
var _17="; expires="+_16.toGMTString(); }else{ var _17=""; } document.cookie=_13+"="+escape(_14)+_17+"; path=/"; },
get:function(_18){ var _19=_18+"=";
var ca=document.cookie.split(";"); for(var i=0;i<ca.length;i++){ var c=unescape(ca[i]); while(c.charAt(0)==" "){ c=c.substring(1,c.length); } if(c.indexOf(_19)==0){ return c.substring(_19.length,c.length); } } return null; },
del:function(_1d){ this.set(_1d,"",-1); }}; 

//++Conexion
var rcFC={socket:null,onSuccess:null,flashVersion:null,id:"rcSocket",
createObject:function(_1e){ this.onSuccess=_1e; var _1f="<div id=\""+this.id+"C\" style=\""+"position: fixed; left: -1px;"+((rcBR.op)?"top: -1px;":"top:-2px;")+"\"><object id=\""+this.id+"\" type=\"application/x-shockwave-flash\""+"data=\"rcSocket.swf!120617083118\" width=\"2\" height=\"2\">"+"<param name=\"movie\" value=\"rcSocket.swf!120617083118\" />"+"</object></div>"; 
document.write(_1f); 
setTimeout("rcFC.objectCreated()",30000); },
objectCreated:function(_20){ if(_20){ this.flashVersion=_20; this.socket=$(this.id); this.onSuccess(_20.substring(_20.indexOf(" ")+1,_20.indexOf(","))>=8); }else{ if(!this.flashVersion){ this.onSuccess(false); } } },
connect:function(_21,_22){ this.socket.connect(_21,_22); },
disconnect:function(){ this.socket.disconnect(); },
send:function(){ var _23="0"; for(var i=0;i<arguments.length;i++){ _23+=arguments[i]; if(i<arguments.length-1){ _23+=rcMTP.US; } } this.socket.send(_23); },
playSound:function(id){ this.socket.playSound(id); },
connectionEstablished:null,
connectFailed:null,
connectionLost:null,
receive:function(_26){ if(_26.charAt(0)=="0"){ _26=_26.substring(1); } var _27=_26.split(rcMTP.US); var _28=new Array(); if(_27.length>=2){ for(var i=2;i<_27.length;i++){ _28[i-2]=rcUtil.escapeHTML(_27[i]); } } this.messageReceived(_27[0],_27[1],_28); },
messageReceived:null}; 

//++
rcMTP={GS:"\x1d",RS:"\x1e",US:"\x1f"}; 
var rcQuery={q:location.search.substring(1,location.search.length),
query:new Object(),
parse:function(){ this.q=this.q.replace(/\+/g," "); var _2a=this.q.split("&"); for(var i=0;i<_2a.length;i++){ var tmp=_2a[i].split("="); var n=tmp[0]; this.query[n]=tmp[1]; } },
get:function(_2e,def){ return (this.query[_2e]==null||this.query[_2e]=="undefined")?def:this.query[_2e]; }}; 

//++
var rcUtil={trim:function(src){ src=src.replace(/[\u00a0\u00ad\s]+/g," "); return src.replace(/^[ \s]+|[ \s]+$/,""); },
html2bb:function(src){ return rcUtil.trim(rcUtil.rgb2hexC(rcUtil.re(src,new Array({m:/&nbsp;/gi,r:" "},{m:/&amp;/gi,r:"&"},{m:/class="Apple-style-span"/gi,r:""},{m:/<br>|<br\/>/gi,r:""},{m:/<b>(.+?)<\/b>/gi,r:"[b]$1[/b]"},{m:/<i>(.+?)<\/i>/gi,r:"[i]$1[/i]"},{m:/<strong>(.+?)<\/strong>/gi,r:"[b]$1[/b]"},{m:/<em>(.+?)<\/em>/gi,r:"[i]$1[/i]"},{m:/<u>(.+?)<\/u>/gi,r:"[u]$1[/u]"},{m:/<span\s+(style="[^<>]*?)font-style:\s*italic\s*;([^<>]*?")>([^<]+?)<\/span>/gi,r:"<span $1 $2>[i]$3[/i]</span>"},{m:/<span\s+(style="[^<>]*?)font-weight:\s*bold\s*;([^<>]*?")>([^<]+?)<\/span>/gi,r:"<span $1 $2>[b]$3[/b]</span>"},{m:/<span\s+(style="[^<>]*?)text-decoration:\s*underline\s*;([^<>]*?")>([^<]+?)<\/span>/gi,r:"<span $1 $2>[u]$3[/u]</span>"},{m:/<span\s+(style="[^<>]*?)color:\s*(.+?)\s*;([^<>]*?")>(.+?)<\/span>/gi,r:"<span $1 $3>[c=$2]$4[/c]</span>"},{m:/<span\s+style="\s*">(.*?)<\/span>/gi,r:"$1"},{m:/<font\s+color="?(.+?)"?>(.+?)<\/font>/gi,r:"[c=$1]$2[/c]"},{m:/<(.|\n)+?>/gi,r:""})))); },
stripHTML:function(src){ return src.replace(/<(.|\n)+?>/gi,""); },
escapeHTML:function(src){ return rcUtil.re(src.replace(/&/g,"&amp;"),new Array({m:/</g,r:"&#60;"},{m:/>/g,r:"&#62;"},{m:/'/g,r:"&#39;"},{m:/"/g,r:"&#34;"})); },
unescapeHTML:function(src){ return rcUtil.re(src.replace(/&amp;/g,"&"),new Array({m:/&#60;/g,r:"&lt;"},{m:/&#62;/g,r:"&gt;"},{m:/&#39;/g,r:"'"},{m:/&#34;/g,r:"\""})); },
bb2html:function(src){ return rcUtil.re((src),new Array({m:/\[b\](.+?)\[\/b\]/gi,r:"<span style=\"font-weight: bold;\">$1</span>"},{m:/\[i\](.+?)\[\/i\]/gi,r:"<span style=\"font-style: italic;\">$1</span>"},{m:/\[u\](.+?)\[\/u\]/gi,r:"<span style=\"text-decoration: underline;\">$1</span>"},{m:/\[c=(#[a-f\d]{6})\](.+?)\[\/c\]/gi,r:"<span style=\"color: $1;\">$2</span>"})); },
bb2plain:function(src){ return rcUtil.trim(rcUtil.re((src),new Array({m:/\[b\](.+?)\[\/b\]/gi,r:"$1"},{m:/\[i\](.+?)\[\/i\]/gi,r:"$1"},{m:/\[u\](.+?)\[\/u\]/gi,r:"$1"},{m:/\[c=(#[a-f\d]{6})\](.+?)\[\/c\]/gi,r:"$2"}))); },
addLinks:function(src){ var res=""; var b=src.indexOf("http://"); if(b!=-1){ var e=src.indexOf(" ",b); var _3b=src.substring(b,e!=-1?e:src.length); res=src.substring(0,b)+"<a target=\"_blank\" href=\""+_3b.replace(/&shy;|<wbr\/>/g,"")+"\">"+_3b+"</a> "; if(e!=-1){ res+=src.substring(e); } return res; }else{ return src; } },
re:function(src,re,cl){ var res=src,res1=res,c=0; do{ res=res1; for(var i=0;i<re.length;i++){ res1=res1.replace(re[i].m,re[i].r); } if(c==cl){ break; } c++; }while(res1!=res); return rcUtil.trim(res); },
filter:function(_41,_42){ for(var i=0;i<_41.length;i++){ _42=_42.replace(new RegExp(_41[i],"gi"),"---"); } return _42; },
wrap:function(src,mwl){ var _46=""; var lws=0; for(var i=0;i<src.length;i++){ var c=src.charAt(i); if(c==" "){ lws=i; } if(c=="h"&&src.substr(i,4)=="http"){ lws=i; } _46+=c; if((i-lws)>mwl){ _46+=(rcBR.ie||rcBR.op||rcBR.sf)?"&shy;":"<wbr/>"; lws=i; } } return _46; },
rgb2hexC:function(src){ var r2h=function(_4c){ var hex="0123456789abcdef"; _4c=_4c.substring(4,_4c.indexOf(")")); var c=_4c.split(","); var res="#"; for(var i=0;i<3;i++){ res+=hex.charAt(Math.floor(c[i]/16)); res+=hex.charAt(c[i]%16); } return res; }; var res=""; var b=src.indexOf("[c=rgb("); var e=-1; while(b!=-1){ res+=src.substring(e+1,b+3); e=src.indexOf(")]",b); var rgb=src.substring(b+3,e+1); res+=r2h(rgb); b=src.indexOf("[c=rgb(",e); } res+=src.substring(e+1); return res; }}; 

//++
var CA={sE:false,
sA:false,
iF:false,
sJ:false,
aS:true,
psM:true,
psP:true,
psJ:true,
piP:true,
fs:14,mb:new Array(),
cb:null,
hL:500,
bL:50,
clear:function(){ for(var i=0;i<CA.hL;i++){ CA.cb[i]=null; } CA.redraw(); setTimeout("L.doLayout();",10); },
addUserMessage:function(_56,id,_58){ var _59=ULS.getUser(id); if(_59==null){ return; } if(_59.bl){ return; } var bf=rcUtil.bb2html(_58); var bp=rcUtil.bb2plain(_58); var nof=false; var pu=false; var flt=rcUtil.filter(BL.sw,bp); if(bp!=flt){ bf=flt; bp=flt; nof=true; if(BL.pul>-1){ pu=true; } } var wrp=rcUtil.wrap(bp,30); if(bp!=wrp){ bf=wrp; bp=wrp; nof=true; } if(bp.charAt(0)==":"&&bp.length>5&&EP.addEm(bp.substring(0,4)).length==rcUtil.trim(bp.substring(0,4)).length){ var pb=CA.mb; if(_56==4){ pb=CA.cb; } if(_56==2){ var pt=TB.getTab(id); if(pt!=null){ pb=pt.mb; if(id!=TB.aT){ pt.state=2; TB.redraw(); }else{ if(pt.state==3){ pt.state=0; TB.redraw(); } } }else{ if(CA.iP){ return; } } }else{ if(TB.aT!=-1&&id!=BL.uID){ TB.mT.state=2; TB.redraw(); } } CA.addServerMessage(pb,"<i>{0} "+bp.substr(1)+"</i>",_59.nick); return; } bf=rcUtil.addLinks(bf); bp=rcUtil.addLinks(bp); if(CA.psM&&_56==1&&!BL.pR){ rcFC.playSound("msg"); } if(!CA.iP&&CA.psP&&_56==2&&!BL.pR){ rcFC.playSound("pmsg"); } var pb=CA.mb; if(_56==4){ pb=CA.cb; if(pu){ BL.puc++; if(BL.puc==(BL.pul-1)){ rcFC.send("500","107"); } if(BL.puc>=(BL.pul)){ rcFC.send("500","108"); } } } if(_56==2){ var pt=TB.getTab(id); if(pt!=null){ pb=pt.mb; _56=1; if(id!=TB.aT){ pt.state=2; TB.redraw(); }else{ if(pt.state==3){ pt.state=0; TB.redraw(); } } }else{ if(CA.iP){ return; } } }else{ if(TB.aT!=-1&&id!=BL.uID){ TB.mT.state=2; TB.redraw(); } } pb.shift(); pb[CA.hL-1]={type:_56,sid:id,nick:_59.nick,body:bf,bodyPlain:bp,bodyEm:"",bodyPlainEm:"",avatar:(_56==4)?BL.lau:_59.avatar,ts:CA.timeStamp()}; pb[CA.hL-1].bodyEm=nof?pb[CA.hL-1].body:EP.addEm(pb[CA.hL-1].body); pb[CA.hL-1].bodyPlainEm=nof?pb[CA.hL-1].bodyPlain:EP.addEm(pb[CA.hL-1].bodyPlain); CA.delayedRedraw(); },
addServerMessage:function(pb,_63,_64){ var b=_63.replace(/{(0)}/g,"<span class='HL'>"+arguments[2]+"</span>").replace(/{(1)}/g,"<span class='HL'>"+arguments[3]+"</span>").replace(/{(2)}/g,"<span class='HL'>"+arguments[4]+"</span>"); b=rcUtil.addLinks(b); pb.shift(); pb[CA.hL-1]={type:0,body:b,bodyPlain:b,bodyEm:b,bodyPlainEm:b,ts:CA.timeStamp()}; CA.delayedRedraw(); },
timeStamp:function(){ var now=new Date(); var h=now.getHours(); var m=now.getMinutes(); if(m<10){ m="0"+m; } return h+":"+m; },
rdt:0,delayedRedraw:function(){ clearTimeout(CA.rdt); CA.rdt=setTimeout("CA.redraw()",100); },
redraw:function(){ var now=(new Date()).getTime(); var cnt=""; var j=0; var s=0; var st=CA.cb.length>CA.bL?CA.cb.length-CA.bL:0; for(var i=st;i<CA.cb.length;i++){ var m=CA.cb[i]; if(m==null){ continue; } var _70=(i<CA.cb.length-1&&m.type!=0&&m.type!=3&&CA.cb[i+1]!=null&&CA.cb[i+1].type!=0&&CA.cb[i+1].type==m.type&&CA.cb[i+1].nick==m.nick); var _71=(i>st&&m.type!=0&&m.type!=3&&CA.cb[i-1]!=null&&CA.cb[i-1].type!=0&&CA.cb[i-1].type==m.type&&CA.cb[i-1].nick==m.nick&&s<3); if(s>2){ s=0; cnt+="</table></div>"; } if(_71){ s++; }else{ j++; } if(!_70){ s=0; } if(!_71){ cnt+="<div class=\""+((m.type!=0&&m.type!=3)?"UM":"SM")+((m.type!=2&&j%2==0)?" shaded":"")+((m.type==2)?" WH":"")+"\" style=\"font-size: "+CA.fs+"px;\">"; cnt+="<table><tr><td class=\"MI\" style=\"width: "+(CA.sA?"40px":"10px")+";\">"; if(CA.sA&&m.avatar){ cnt+="<span class=\"AV\"><span onmousedown=\"return false;\" onselectstart=\"return false;\" oncontextmenu=\"return false;\""+"onmouseup=\"return IN.to('"+m.nick+"',event);\">"+"<img style=\"width:"+CA.fs*2.3+"px;height:"+CA.fs*2.3+"px;\" src=\""+m.avatar+"\" alt=\"\"/></span>"; } cnt+="</td><td class=\"MB\">"; cnt+="<span class=\"TS\" style=\"font-size: "+(CA.fs-4)+"px;\">"+m.ts+"&nbsp;</span>"; if(m.type!=0&&m.type!=3){ cnt+=((m.type==4&&BL.nick!=m.nick)?"<span class='PM'>"+rcLn["CYT"]+"</span>&nbsp;":"")+"<span onmousedown=\"return false;\" onselectstart=\"return false;\" oncontextmenu=\"return false;\""+((m.type==2)?"onmouseup=\"return IN.wh('"+m.nick+"',event);\"":"onmouseup=\"return IN.to('"+m.nick+"',event);\"")+"class=\""+((m.type==4&&BL.nick==m.nick)?"OWN":"UN")+"\" style=\"font-size: "+CA.fs+"px;\">"+m.nick+(((m.type==4&&BL.nick!=m.nick)||(!CA.sA&&m.type!=2))?":":"")+"&nbsp;</span>"+((m.type==2)?"<span class='PM'>"+rcLn["CTY"]+":</span>&nbsp;":""); } if(m.type!=0&&m.type!=3&&CA.sA){ cnt+="<br/>"; } cnt+=(CA.sE==1)?(CA.sF=="1")?m.bodyEm:m.bodyPlainEm:(CA.sF=="1")?m.body:m.bodyPlain; cnt+="</td></tr>"; }else{ cnt+="<tr><td class=\""+((m.type==4&&BL.nick==m.nick)?"MIO":"MI")+"\" style=\"font-size: "+(CA.fs-2)+"px; width: "+(CA.sA?"40px":"10px")+";\">&#187;</td><td class=\"MB\">"; cnt+=(CA.sE==1)?(CA.sF=="1")?m.bodyEm:m.bodyPlainEm:(CA.sF=="1")?m.body:m.bodyPlain; cnt+="</td></tr>"; } if(!_70){ cnt+="</table></div>"; } } E.setText(CA.CA,cnt); if(CA.aS){ CA.AS.scrollTop=CA.CA.offsetHeight-CA.AS.offsetHeight; } },
history:function(){ var cnt="- "+rcLn["CST"]+" "+(new Date())+" -<hr size='1'/>"; for(var i=0;i<CA.cb.length;i++){ if(CA.cb[i]!=null){ cnt+="<p>"+((CA.cb[i].type!=0&&CA.cb[i].type!=3)?"<b>"+CA.cb[i].nick+((CA.cb[i].type==1)?":":"")+" </b>":"")+CA.cb[i].bodyPlain+"</p>"; } } return cnt; },
bind:function(){ CA.CA=$("CA"); CA.AS=$("AS"); CA.PCL=$("PCLL"); CA.RN=$("RN"); CA.cb=CA.mb; }}; 

//
var CP={bind:function(){ var cnt="<table cellspacing=\"2\" border=\"0\" cellpadding=\"0\"><tr>"; for(var i=27;i<47;i++){ if(i>27&&(i+3)%10==0){ cnt+="</tr><tr>"; } cnt+="<td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: "+T.c[i]+";\" onclick=\"return IN.sCol("+i+");\">&nbsp;</a></td>"; } cnt+="</tr></table>"; $("CP").innerHTML=cnt; }}; 
var DD={stop:0,
xy:function(e,v){ return (v?(rcBR.ie?event.clientY+document.body.scrollTop:e.pageY):(rcBR.ie?event.clientX+document.body.scrollTop:e.pageX)); },
drag:function(e){ if(!e){ e=(window.event); } var el=$(this.id.substr(0,this.id.length-1)); if(!el){ return; } var tX,tY,oX,oY,eX,eY,stop; 
function dd(e){ if(!DD.stop){ el.style.top=(tX=DD.xy(e,1)+oY-eY+"px"); el.style.left=(tY=DD.xy(e)+oX-eX+"px"); } return false; } oX=parseInt(el.style.left); oY=parseInt(el.style.top); eX=DD.xy(e); eY=DD.xy(e,1); document.onmousemove=dd; document.onmouseup=function(){ stop=1; document.onmousemove=""; document.onmouseup=""; return false; }; return false; }}; 

var EP={em:new Array(":)",":D",":))",";)",":P",":*)",":*","]:)",":|",":\\","X(",":(",":((",":X",":O","B)",":@",":$",":#","O:)","]:}"),
emR:new Array({m:/\]:-*\)+/,r:"<span class=\"em\" style=\"background-position: -140px -20px;\">&nbsp;</span>"},{m:/O:-*\)+/i,r:"<span class=\"em\" style=\"background-position: -380px -20px;\">&nbsp;</span>"},{m:/:-*\*\)+/,r:"<span class=\"em\" style=\"background-position: -100px -20px;\">&nbsp;</span>"},{m:/:-*\)\)+/,r:"<span class=\"em\" style=\"background-position: -40px -20px;\">&nbsp;</span>"},{m:/:-*\)+/,r:"<span class=\"em\" style=\"background-position: 0px -20px;\">&nbsp;</span>"},{m:/:-*D+/i,r:"<span class=\"em\" style=\"background-position: -20px -20px;\">&nbsp;</span>"},{m:/;-*\)+/,r:"<span class=\"em\" style=\"background-position: -60px -20px;\">&nbsp;</span>"},{m:/(:|;)-*P+/i,r:"<span class=\"em\" style=\"background-position: -80px -20px;\">&nbsp;</span>"},{m:/:-*\*+/,r:"<span class=\"em\" style=\"background-position: -120px -20px;\">&nbsp;</span>"},{m:/:-*\|+/,r:"<span class=\"em\" style=\"background-position: -160px -20px;\">&nbsp;</span>"},{m:/:-*\\+/,r:"<span class=\"em\" style=\"background-position: -180px -20px;\">&nbsp;</span>"},{m:/X-*\(+/i,r:"<span class=\"em\" style=\"background-position: -200px -20px;\">&nbsp;</span>"},{m:/:-*\(\(+/,r:"<span class=\"em\" style=\"background-position: -240px -20px;\">&nbsp;</span>"},{m:/:-*\(+/,r:"<span class=\"em\" style=\"background-position: -220px -20px;\">&nbsp;</span>"},{m:/:-*X+/i,r:"<span class=\"em\" style=\"background-position: -260px -20px;\">&nbsp;</span>"},{m:/:-*O+/i,r:"<span class=\"em\" style=\"background-position: -280px -20px;\">&nbsp;</span>"},{m:/B-*\)+/i,r:"<span class=\"em\" style=\"background-position: -300px -20px;\">&nbsp;</span>"},{m:/:-*@+/,r:"<span class=\"em\" style=\"background-position: -320px -20px;\">&nbsp;</span>"},{m:/:-*\$+/,r:"<span class=\"em\" style=\"background-position: -340px -20px;\">&nbsp;</span>"},{m:/:-*#+/,r:"<span class=\"em\" style=\"background-position: -360px -20px;\">&nbsp;</span>"},{m:/\]:-*}+/,r:"<span class=\"em\" style=\"background-position: -400px -20px;\">&nbsp;</span>"}),icoR:new Array(),bind:function(){ var cnt="<table cellspacing=\"2\" border=\"0\" cellpadding=\"0\"><tr>"; for(var i=0;i<21;i++){ if(i>0&&i%7==0){ cnt+="</tr><tr>"; } cnt+="<td><a class=\"em\" style=\"background-position: -"+(i)*20+"px -20px;\" title=\""+EP.em[i]+"\" onclick=\"return IN.sEm(' "+EP.em[i].replace("\\","\\\\")+" ');\">&nbsp;</a></td>"; } cnt+="</tr><tr>"; for(var i=0;i<14;i++){ if(i>0&&i%7==0){ cnt+="</tr><tr>"; } cnt+="<td><a class=\"ico\" style=\"background-position: -"+(i)*20+"px 0;\" title=\"//"+i+"\" onclick=\"return IN.sEm(' //"+i+" ');\">&nbsp;</a></td>"; EP.icoR[i]={m:new RegExp("//"+(i)+"\\b",""),r:"<span class=\"ico\" style=\"background-position: -"+(i)*20+"px 0;\">&nbsp;</span>"}; } cnt+="</tr></table>"; $("EP").innerHTML=cnt; },
addEm:function(src){ var tmp=rcUtil.re(src,EP.emR,2); return rcUtil.re(tmp,EP.icoR,2); }}; 


//+++
var IN={c:false,
e:false,
tb:new Array(null,"Bold",null,"Italic",null,"Underline"),
clr:0,

bind:function()
{ 
	IN.clr=rcCookie.get("c"); 
	if(IN.clr==null)
	{ 
	IN.clr=T.c[16]; 
	}
	
	var _80=document.getElementsByTagName("a"); 
	for(var i=0;i<_80.length;i++){ if(_80[i].className=="btn"||_80[i].className=="tbtn"||_80[i].className=="tbtnt"){ _80[i].onclick=IN.bPress; } } 
	IN.tb[0]=$("TBB"); IN.tb[2]=$("TBI"); IN.tb[4]=$("TBU"); IN.tbas=$("TBA"); IN.si=$("SI"); IN.CIF=$("CI"); IN.CI=IN.CIF.contentWindow; IN.CI.document.designMode="on"; 
var tmp=IN.CI.document; tmp.open(); tmp.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">"+"<html><style type='text/css'>* {margin: 0;padding: 0;border-style: none;}</style><body id='B' "+"style='"+T.input+"'> </body></html>"); tmp.close(); IN.CB=IN.CI.document.getElementById("B"); if(rcBR.ie){ IN.CB.attachEvent("onkeydown",IN.kPress); IN.CB.attachEvent("onmouseup",IN.uTBS); IN.CB.attachEvent("onpaste",IN.onPaste); IN.CB.attachEvent("onmousedown",L.hideMenus); }else{ if(rcBR.sf){ IN.CI.addEventListener("keydown",IN.kPress,false); }else{ IN.CI.addEventListener("keypress",IN.kPress,false); } IN.CI.addEventListener("mouseup",IN.uTBS,false); IN.CI.addEventListener("mousedown",L.hideMenus,false); } },

qcs:function(a){ if(!L.hIP){ return; } return IN.CI.document.queryCommandState(a); },
ec:function(a,b,c){ if(!L.hIP){ return; } return IN.CI.document.execCommand(a,b,c); },
//bold, italic and underline:
bPress:function(e){ if(!e){ e=(window.event); } var el=this.id; if(el=="TBB"){ IN.toggle(0,el); }else{ if(el=="TBI"){ IN.toggle(2,el); }else{ if(el=="TBU"){ IN.toggle(4,el); }else{ if(el=="TBA"){ IN.tbas.className=(IN.tbas.className=="tbtn")?"tbtnt":"tbtn"; CA.aS=(IN.tbas.className=="tbtn"); }else{ if(el=="TBC"){ IN.tBC(); }else{ if(el=="TBE"){ IN.tBE(); }else{ if(el=="TBN"){ CA.clear(); }else{ if(el=="TBR"){ var hh="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">"+"<html><head><title>"+rcLn["CSH"]+"</title><style type='text/css'>* {margin: 0;padding: 0; font-size: 14px; font-family: sans-serif;}</style></head><body>"+CA.history()+"</body></html>"; if(rcBR.ie){ IN.CH=$("CH").contentWindow; IN.CH.document.open(); IN.CH.document.write(hh); IN.CH.document.close(); IN.CH.document.execCommand("SaveAs",false,"chat-history"); }else{ var hw=window.open("about:blank","ch","width=500,height=500,status=no,toolbar=no,menubar=yes,location=no,resizable=yes,scrollbars=yes"); hw.document.open(); hw.document.write(hh); hw.document.close(); } }else{ if(el=="TBS"){ E.show(L.sD); }else{ if(el=="SBA"){ L.hideDialogs(); SD.apply(); }else{ if(el=="BS"){ IN.submit(); }else{ if(el=="SI"){ if(IN.disabled){ return; } IN.disable(500); var aw=(IN.si.className=="btnt"); IN.si.className=(aw)?"btn":"btnt"; E.setText(IN.si,(aw)?rcLn["SI"]:rcLn["SIA"]); BL.setAway(!aw); }else{ if(el=="TBX"){ BL.doLogout(); }else{ if(el=="TBH"){ L.hDB.style.overflow="auto"; E.show(L.hD); }else{ if(el=="HBA"){ L.hideDialogs(); }else{ if(el=="TBG"){ L.rS.style.overflow="auto"; if(rcBR.PNG){ E.show(L.gB); } E.show(L.rD); RLS.poll(); if(RLS.empty){ RLS.empty=false; rcFC.send("300","301"); } }else{ if(el=="RBX"){ L.hideDialogs(); }else{ if(el=="RBC"){ L.hideDialogs(); if(rcBR.PNG){ E.show(L.gB); } E.show(L.cRD); }else{ if(el=="CRDJ"){ RLS.create(); }else{ if(el=="CRDC"){ L.hideDialogs(); }else{ if(el=="RPDJ"){ RLS.go(RLS.pprid); }else{ if(el=="RPDC"){ E.set(RLS.RPDI,""); L.hideDialogs(); }else{ if(el=="MBC"){ E.hide(L.mD); rcFC.send("700","760"); }else{ if(el=="MBDA"){ MP.clear(); MP.redraw(); }else{ if(el=="BDB"){ L.hideDialogs(); ULS.kck(E.get("BID"),$("BDBTI").options[$("BDBTI").selectedIndex].value,E.get("BDBRI"),$("BDBSI").selectedIndex); }else{ if(el=="BDC"){ L.hideDialogs(); }else{ if(el=="WBA"){ L.hideDialogs(); }else{ alert(el); } } } } } } } } } } } } } } } } } } } } } } } } } } } 
if(e.returnValue){ e.returnValue=false; }else{ if(e.preventDefault){ e.preventDefault(); } } return false; },

kPress:function(e){ var pd; if(!e){ e=(window.event)?window.event:IN.CI.event; } var c=e.keyCode||e.charCode; if(c==27){ if(IN.c){ IN.tBC(); } if(IN.e){ IN.tBE(); } L.hideMenus(); L.hideDialogs(); }else{ if(IN.CI.document.body.innerHTML.length>BL.mL&&c!=8&&c!=13&&c!=3){ pd=true; }else{ if(c==13||c==3){ L.hideDialogs(); IN.submit(); pd=true; }else{ if(e.ctrlKey){ if(c==66||c==98){ IN.toggle(0,"TBB"); pd=true; } if(c==73||c==105){ IN.toggle(2,"TBI"); pd=true; } if(c==85||c==117){ IN.toggle(4,"TBU"); pd=true; }else{ setTimeout("IN.uTBS()",5); } }else{ if(e.altKey){ if(c==37||c==63234){ TB.next(true); pd=true; } if(c==39||c==63235){ TB.next(); pd=true; } if(c==49){ if(TB.lT!=-1){ TB.selTab(TB.lT); }else{ TB.selTab(-1); } pd=true; } if(c>49&&c<59){ var tt=TB.tabs[c-49]; if(tt){ TB.selTab(tt.id); } pd=true; } }else{ if(c==8||c==9||c==37||c==39||c==63234||c==63235){ setTimeout("IN.uTBS()",0); }else{ if(CA.cb!=CA.mb){ IN.tNotify(); } } } } } } } if(pd){ if(e.returnValue){ e.returnValue=false; }else{ if(e.preventDefault){ e.preventDefault(); } } return false; } },
onPaste:function(){ setTimeout("IN.CI.document.body.innerHTML=rcUtil.stripHTML(IN.CI.document.body.innerHTML)",20); },
tBC:function(){ if(IN.e){ IN.tBE(); } E.setVisible(L.cD,!IN.c); IN.c=!IN.c; },
tBE:function(){ if(IN.c){ IN.tBC(); } E.setVisible(L.eD,!IN.e); IN.e=!IN.e; },
clear:function(){ IN.ec("SelectAll",false,null); IN.ec("Delete",false,null); if(!rcBR.sf){ if(IN.tb[0].className=="tbtnt"){ IN.ec("Bold",false,null); } if(IN.tb[2].className=="tbtnt"){ IN.ec("Italic",false,null); } if(IN.tb[4].className=="tbtnt"){ IN.ec("Underline",false,null); } } if(IN.clr!=T.c[16]){ IN.ec("ForeColor",false,IN.clr); } IN.doFocus(); },
doFocus:function(){ if(rcBR.op||rcBR.sf){ IN.CIF.focus(); }else{ IN.CI.focus(); } },
uTBS:function(){ IN.tb[0].className=(IN.qcs("Bold"))?"tbtnt":"tbtn"; IN.tb[2].className=(IN.qcs("Italic"))?"tbtnt":"tbtn"; IN.tb[4].className=(IN.qcs("Underline"))?"tbtnt":"tbtn"; },
toggle:function(id){ IN.doFocus(); IN.tb[id].className=(IN.tb[id].className=="tbtn")?"tbtnt":"tbtn"; IN.ec(IN.tb[id+1],false,null); },
submit:function(){ if(IN.disabled){ return; } IN.disable(500); BL.sendMessage(TB.aT,rcUtil.html2bb(IN.CB.innerHTML)); IN.clear(); },
dt:0,
disabled:false,
enable:function(){ IN.disabled=false; clearTimeout(IN.dt); },
disable:function(t){ clearTimeout(IN.dt); IN.disabled=true; IN.dt=setTimeout("IN.enable()",t); },
tn:0,
typing:false,
tNotify:function(){ if(IN.typing){ return; } IN.typing=true; clearTimeout(IN.tn); IN.tn=setTimeout("IN.ctn()",5000); rcFC.send("500","603",TB.aT); },
ctn:function(){ IN.typing=false; clearTimeout(IN.tn); },
sCol:function(c){ IN.tBC(); IN.doFocus(); IN.clr=T.c[c]; rcCookie.set("c",IN.clr,365); IN.ec("ForeColor",false,IN.clr); return false; },
sEm:function(c){ IN.tBE(); IN.set(c); },
set:function(c){ IN.doFocus(); if(rcBR.ie){ IN.CI.document.selection.createRange().text=c; }else{ IN.ec("insertHTML",false,c); } return false; },
wh:function(n){ E.hide(ULS.uM); IN.clear(); IN.set("/msg "+n+(rcBR.ie?": ":":&nbsp;")); return false; },
to:function(c){ IN.set(c+(rcBR.ie?": ":":&nbsp;")); return false; }}; 

var Lang={apply:function(){ for(var id in rcLn){ if($(id)!=null){ if(rcLn[id].charAt(0)=="_"){ $(id).title=rcLn[id].substring(1); }else{ $(id).innerHTML=rcLn[id]; } } } }}; 

var L={initDone:false,
wW:0,
wH:0,
minW:600,
minH:400,
pad:10,
minLPW:190,
maxLPW:250,
lpP:0.2,
lpW:190,
ipH:110,
tpH:22,
sbW:19,v:"11111111111111111111",

doLayout:function(){ var t=this; if(!L.initDone){ return; } L.getWindowSize(); L.pW=(L.hAP)?L.minW:L.minLPW; L.pH=L.minH; if(L.wW>L.pW){ L.pW=L.wW; } if(L.wH>L.pH){ L.pH=L.wH; } L.lpW=L.pW*L.lpP; if(L.lpW<L.minLPW){ L.lpW=L.minLPW; } if(L.lpW>L.maxLPW){ L.lpW=L.maxLPW; } if(!L.hAP){ L.lpW=L.pW-2*L.pad; L.lP.style.padding=L.pad+"px"; L.hide(L.aP); L.hIP=false; } if(!L.hAO){ L.hide(L.aPO); } if(!L.hLP){ L.lpW=0; L.hide(L.lP); } if(!L.hLO){ L.hide(L.lPO); } if(!L.hIP){ L.ipH=-3; L.hide(L.iP); } if(!L.hIO){ L.ipH=81; L.hide(L.iPO); } if(!L.hBS){ L.hide(L.bS); } if(!L.hCA){ L.hide(L.lPCA); } L.wrp.style.width=L.pW+"px"; L.wrp.style.height=L.pH+"px"; L.gB.style.width=L.pW+"px"; L.gB.style.height=L.pH+"px"; L.dM.style.width=L.pW+"px"; L.dM.style.height=L.pH+"px"; var _99=(L.hLP?3:2)*L.pad; var _9a=(L.hIP?3:2)*L.pad; if(L.hAP){ L.aP.style.width=L.pW-_99-L.lpW+"px"; L.aP.style.height=L.pH-_9a-L.ipH-2+"px"; L.aS.style.width=L.pW-_99-L.lpW-26+"px"; L.aS.style.height=L.pH-_9a-L.ipH-(L.hAO?56:27)-2-((TB.tabs.length>1)?L.tpH:0)+"px"; L.cA.style.width=L.aS.offsetWidth-2-L.sbW+"px"; L.rNL.style.width=L.aP.offsetWidth-160+"px"; } if(L.hLP){ L.lP.style.width=L.lpW+"px"; L.lP.style.height=L.pH+"px"; L.lS.style.width=L.lpW-26+"px"; L.lS.style.height=L.pH-2*L.pad-(L.hLO?56:27)-(L.hCA?L.lPCA.offsetHeight:0)+1+"px"; } if(L.hIP){ L.iP.style.height=L.ipH+"px"; L.iP.style.width=L.aP.style.width; L.cI.style.width=(L.hBS)?L.pW-_99-L.pad-L.lpW-26-L.bS.offsetWidth+"px":L.pW-_99-L.lpW-28+"px"; } L.sD.style.top=(L.pH-L.sD.offsetHeight)/2+"px"; L.sD.style.left=(L.pW-L.sD.offsetWidth)/2+"px"; L.hDB.style.width=L.minW-40+"px"; L.hDB.style.height=L.minH-80+"px"; L.hD.style.top=(L.pH-L.hD.offsetHeight)/2+"px"; L.hD.style.left=(L.pW-L.hD.offsetWidth)/2+"px"; L.rS.style.width=L.minW-40+"px"; L.rS.style.height=L.minH-80+"px"; L.rD.style.top=(L.pH-L.rD.offsetHeight)/2+"px"; L.rD.style.left=(L.pW-L.rD.offsetWidth)/2+"px"; L.cRD.style.top=(L.pH-L.cRD.offsetHeight)/2+"px"; L.cRD.style.left=(L.pW-L.cRD.offsetWidth)/2+"px"; L.rPD.style.top=(L.pH-L.rPD.offsetHeight)/2+"px"; L.rPD.style.left=(L.pW-L.rPD.offsetWidth)/2+"px"; L.bD.style.top=(L.pH-L.bD.offsetHeight)/2+"px"; L.bD.style.left=(L.pW-L.bD.offsetWidth)/2+"px"; L.cD.style.top=(L.pH-L.ipH-L.cD.offsetHeight)+"px"; L.cD.style.left=E.getPosition($("TBC"))[0]+"px"; L.eD.style.top=(L.pH-L.ipH-L.eD.offsetHeight)+"px"; L.eD.style.left=E.getPosition($("TBE"))[0]+"px"; L.lD.style.top=(L.pH-L.lD.offsetHeight)/2.5+"px"; L.lD.style.left=(L.pW-L.lD.offsetWidth)/2+"px"; L.mS.style.width=L.minW-40+"px"; L.mS.style.height=L.minH-80+"px"; L.mD.style.top=E.getPosition(L.aP)[1]+L.pad+"px"; L.mD.style.left=(L.aP.offsetWidth-L.mD.offsetWidth-L.pad)+"px"; L.hideMenus(); ULS.redraw(); CA.redraw(); TB.redraw(); IN.doFocus(); },

hide:function(id){ $(id).style.display="none"; },
show:function(id){ $(id).style.display=""; },
init:function(){ var q=function(i){ return L.v.charAt(i)=="1"; }; L.hAP=q(0); L.hAO=q(1); L.hIP=q(2); L.hIO=q(3); L.hLP=q(4); L.hLO=q(5); L.hBS=q(6); L.hCA=q(19); if(!L.hLP){ L.minW-=L.lpW; } if(!L.hIP){ L.minH-=L.ipH; } var btn=function(id,_a1,_a2){ return "<td height=\"22\"><a"+(_a2?"":"style=\"display: none;\"")+" class=\"tbtn\" id=\""+id+"\">"+"<span style=\"background-position: -"+_a1*18+"px 0; background-image:url('./gl/glyphs"+((rcBR.PNG)?".png":".gif")+"!120617083118');\"></span></a></td>"; }; var tb="<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td></td></tr><tr>"; var te="</tr></table>"; var p="<td width=\"20\">&nbsp;&nbsp;&nbsp;&nbsp;</td>"; $("fBTNS").innerHTML=tb+btn("TBB",0,q(7))+btn("TBI",1,q(8))+btn("TBU",2,q(9))+p+btn("TBC",3,q(10))+btn("TBE",4,q(11))+p+btn("TBN",5,q(12))+btn("TBR",6,q(13))+te; $("sBTNS").innerHTML=tb+btn("TBA",7,q(14))+te; $("hBTNS").innerHTML=tb+btn("TBG",8,q(15))+"<td width=\"10\">&nbsp;&nbsp;</td>"+btn("TBS",9,q(16))+btn("TBH",10,q(17))+btn("TBX",11,q(18))+te; if(BL.ur.charAt(0)=="0"){ E.hide("RBC"); } if(BL.ur.charAt(1)=="0"){ E.hide("TBG"); } if(BL.ur.charAt(2)=="0"){ BL.pmp=true; } if(BL.ur.charAt(3)=="0"){ E.hide($("LDO")); } L.initDone=true; },
bind:function(){ L.wrp=$("WRP"); L.wrp1=$("WRP1"); L.aP=$("AP"); L.aPO=$("APO"); L.rNL=$("RNL"); L.aS=$("AS"); L.cA=$("CA"); L.lP=$("LP"); L.lPO=$("LPO"); L.lS=$("LS"); L.uL=$("UL"); L.lPCA=$("LPCA"); L.tP=$("TABS"); L.iP=$("IP"); L.iPO=$("IPO"); L.cI=$("CI"); L.bS=$("BS"); L.gB=$("GB"); E.hide(L.gB); L.sD=$("SD"); E.hide(L.sD); L.hD=$("HD"); L.hDB=$("HDB"); E.hide(L.hD); L.hDB.style.overflow="hidden"; L.rD=$("RD"); L.rS=$("RS"); E.hide(L.rD); L.rS.style.overflow="hidden"; L.cRD=$("CRD"); E.hide(L.cRD); L.rPD=$("RPD"); E.hide(L.rPD); L.bD=$("BD"); E.hide(L.bD); L.cD=$("CD"); E.hide(L.cD); L.eD=$("ED"); E.hide(L.eD); L.lD=$("LD"); E.hide(L.lD); L.dM=$("DM"); L.mD=$("MD"); L.mS=$("MS"); E.hide(L.mD); L.aP.onmousedown=L.hideMenus; L.lP.onmousedown=L.hideMenus; L.wrp.onkeydown=L.hideMenus; window.onresize=function(){ L.doLayoutLater(); }; var _a6=document.getElementsByTagName("div"); for(var i=0;i<_a6.length;i++){ if(_a6[i].className=="head"){ _a6[i].onmousedown=DD.drag; } } L.doLayout(); },
rdt:0,
doLayoutLater:function(){ clearTimeout(L.rdt); CA.rdt=setTimeout("L.doLayout()",100); },
showLogin:function(){ E.hide(L.wrp); E.show(L.dM); E.show(L.lD); CA.clear(); ULS.clear(); RLS.clear(); TB.clear(); BL.clear(); IN.si.className="btn"; E.setText(IN.si,rcLn["SI"]); setTimeout("LDL.clear()",10); document.title="Chat"; },
showClient:function(){ CA.clear(); ULS.clear(); RLS.clear(); TB.clear(); E.hide(L.lD); E.hide(L.dM); E.show(L.wrp); setTimeout("IN.clear()",10); },
hideMenus:function(){ E.hide(ULS.uM); },
hideDialogs:function(){ E.hide(ULS.uM); E.hide(L.hD); L.hDB.style.overflow="hidden"; L.rS.style.overflow="hidden"; E.hide(L.rD); clearTimeout(RLS.pt); RLS.showing=false; E.hide(L.rPD); E.hide(L.cRD); E.hide(L.sD); E.hide(L.gB); E.hide(L.bD); },
getWindowSize:function(){ var d=document; var de=d.documentElement; if(typeof (window.innerWidth)=="number"){ L.wW=window.innerWidth; L.wH=window.innerHeight; }else{ if(de&&(de.clientWidth||de.clientHeight)){ L.wW=de.clientWidth; L.wH=de.clientHeight; }else{ if(d.body&&(d.body.clientWidth||d.body.clientHeight)){ L.wW=d.body.clientWidth; L.wH=d.body.clientHeight; } } } }}; 

//+++
var BL={appName:"RCH: "+navigator.userAgent+" "+navigator.platform,
loggedIn:null,
pingTimeoutTask:null,
connectTimeoutTask:null,
host:window.location.hostname,
port:window.location.port,
url:window.location,
pR:false,
dL:false,
dE:false,
sID:"",
rID:"",
pID:"",
uID:"",
nick:"",
room:"",
rL:0,
nL:50,
puL:200,
auL:200,
mL:2000,
sw:new Array(),
puc:0,
pul:-1,
ur:"111",

clear:function(){ 
	if(!BL.port||BL.port=="")
	{ BL.port=80; } BL.nick=rcQuery.get("nn",""); 
	BL.pu=rcQuery.get("pu",""); 
	BL.au=rcQuery.get("au",""); 
	BL.cu=rcQuery.get("cu",""); 
	BL.cu=decodeURIComponent(BL.cu.replace("%21","!")); 
	BL.hmac=rcQuery.get("hmac",""); 
	BL.rPW=rcQuery.get("rp",""); 
	BL.dL=(BL.nick!=null&&BL.nick.length>0); 
	BL.rL=0; 
	BL.pR=rcQuery.get("pre",""); },
	
init:function(){ 
	rcFC.connectionEstablished=function(){ 
		BL.connectTimeoutTask=setTimeout("BL.connectTimedOut()",5000); 
		rcFC.send("50","51"); }; 
rcFC.connectFailed=function(){ LDL.warn(rcLn["LDE1"]); }; 

rcFC.connectionLost=function(){ 
	if(!BL.dE){ 
		clearTimeout(BL.pingTimeoutTask); 
		L.showLogin(); 
		LDL.warn(rcLn["LDE2"]); } }; 
rcFC.messageReceived=BL.messageReceived; 
BL.clear(); 
	if(BL.dL){ 
	BL.dE=false; 
	if(BL.hmac.length>0){ 
		rcFC.connect(BL.host,BL.port); }
	else{ 
		LDL.aC(); } }
	else{ 
	if(BL.pR!=""){ 
		BL.nick="Themer"; 
		BL.rL=0; 
		BL.uID=0; 
		BL.au="http://"+BL.host+":"+BL.port+"/gl/avatar.png"; 
		L.showClient(); 
		CA.addServerMessage(CA.cb,"RealChat Server"); 
		CA.addServerMessage(CA.cb,"<b>Welcome to theme preview!</b>"); 
		BL.room="Test Room"; 
		E.setText(CA.RN,BL.room); 
		document.title=BL.nick+rcLn["TTL"]+BL.room; 
		CA.addServerMessage(CA.cb,rcLn["CRJ"]+" "+rcLn["CRT"],BL.room,"Theme development"); 
		ULS.addUser("0"+rcMTP.RS+"Themer"+rcMTP.RS+"0"+rcMTP.RS+"4"+rcMTP.RS+BL.au+rcMTP.RS+""+rcMTP.RS+""); 
		ULS.addUser("5"+rcMTP.RS+"Lorem Ipsum"+rcMTP.RS+"0"+rcMTP.RS+"4"+rcMTP.RS+""+rcMTP.RS+""+rcMTP.RS+""); 
		ULS.addUser("1"+rcMTP.RS+"inMinim"+rcMTP.RS+"0"+rcMTP.RS+"0"+rcMTP.RS+""+rcMTP.RS+""+rcMTP.RS+""); 
		ULS.addUser("4"+rcMTP.RS+"CulpaQui"+rcMTP.RS+"0"+rcMTP.RS+"4"+rcMTP.RS+""+rcMTP.RS+""+rcMTP.RS+""); 
		ULS.delayedRedraw(); TB.addTab(4,"CulpaQui"); TB.selTab(-1); 
		CA.addUserMessage(1,1,"Reprehenderit in voluptate velit esse!"); 
		CA.addUserMessage(4,0,"proident sunt in culpa qui ;)"); 
		CA.addServerMessage(CA.mb,rcLn["CUJ"],ULS.addUser("2"+rcMTP.RS+"Laboris_nisi"+rcMTP.RS+"0"+rcMTP.RS+"4"+rcMTP.RS+""+rcMTP.RS+""+rcMTP.RS+"")); 
		CA.addUserMessage(2,2,"Enim ad minim?"); 
		CA.addUserMessage(4,2,"reprehenderit in voluptate velit esse!"); 
		CA.addServerMessage(CA.mb,rcLn["CUJ"],ULS.addUser("3"+rcMTP.RS+"DolorSit0233"+rcMTP.RS+"0"+rcMTP.RS+"4"+rcMTP.RS+""+rcMTP.RS+""+rcMTP.RS+"")); 
		CA.addServerMessage(CA.mb,rcLn["CUL"],"Amet"); }
		else{ 
		L.showLogin(); } } },
		
connectTimedOut:function(){ 
	rcFC.disconnect(); 
	LDL.warn(rcLn["LDE2"]); },
		
ping:function(){ 
	clearTimeout(BL.pingTimeoutTask); 
	rcFC.send("50","99"); 
	BL.pingTimeoutTask=setTimeout("BL.ping()",10000); },
//-->extenso1		
messageReceived:function(_aa,cID,_ac){ 
	if(_aa=="100"){ 
		if(cID=="101"){
		CA.addServerMessage(CA.cb,"<b>"+_ac[0]+"</b>"); }
	else{ 
		if(cID=="102"){ IN.disable(1500); 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["WFD"]+"</b>"); }
	else{ 
		if(cID=="104"){
		CA.addServerMessage(CA.cb,"<b>"+rcLn["WID"]+"</b>"); }
	else{ 
		if(cID=="107"){ 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["WPD"]+"</b>"); }
	else{ 
		if(cID=="106"){ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE9"]); 
		BL.dE=true; }
	else{ 
		if(cID=="103"){ 
		BL.dE=true; 
			if(_ac[0]!=""){ 
			window.location=_ac[0]; } 
			L.showLogin(); 
			LDL.warn(rcLn["LDE11"]); }
		else{ 
			if(cID=="108"){ 
			BL.dE=true; if(_ac[0]!=""){ 
			window.location=_ac[0]; } 
			L.showLogin(); 
			LDL.warn(rcLn["LDE12"]); }
		else{ 
			if(cID=="109"){ 
			BL.dE=true; 
			if(_ac[0]!=""){ 
			window.location=_ac[0]; } 
			L.showLogin(); 
			LDL.warn(rcLn["LDE13"]); }
		else{ 
			if(cID=="207"){ 
			BL.dE=true; 
			if(_ac[0]!=""){ 
			window.location=_ac[0]; } 
			L.showLogin(); 
			LDL.warn(rcLn["LDE14"]); }
			} 
			} 
			} 
		} 
		} 
		} 
		} 
		} 
	}//ext->
	else{ 
	if(_aa=="50"){ 
		if(cID=="51"){ }
		else{ 
			if(cID=="52"){ 
			rcFC.send("50","52"); }
		else{ 
			if(cID=="53"){ 
			clearTimeout(BL.connectTimeoutTask); 
			rcFC.send("200","201",BL.nick,BL.sID,BL.pu,BL.au,BL.pID,BL.hmac,BL.appName); 
			BL.lau=decodeURIComponent(BL.au.replace("%21","!")); }
		else{ rcFC.connectFailed(); } 
			} 
			} 
	}
	else{ 
	if(_aa=="200")
	{ 
	if(cID=="203"){ 
	BL.pingTimeoutTask=setTimeout("BL.ping()",10000); 
	BL.loggedIn=true; 
	BL.uID=_ac[0]; 
	BL.nick=_ac[1]; 
	BL.rL=_ac[2]; 
	E.setText("HDA","<b>"+_ac[3]+"</b><br/>"+_ac[4]); 
	L.showClient(); 
	CA.addServerMessage(CA.cb,_ac[3]+" "+_ac[4]); 
		if(_ac[5]!=""){ 
		CA.addServerMessage(CA.cb,"<b>"+_ac[5]+"</b>"); } 
		if(BL.ur.charAt(1)=="1"){ 
		CA.addServerMessage(CA.cb,rcLn["CRI"],_ac[6],_ac[7]); } 
		rcFC.send("300","303",BL.rID,BL.rPW); 
	}
	else{ 
		if(cID=="204")
		{		
		BL.loggedIn=false; 
		}
	else{ 
		if(cID=="206")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE3"]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="212")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE4"]+"<br/>"+_ac[0]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="211")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE5"]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="213")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE7"]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="208")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE6"]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="205")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE8"]); 
		BL.dE=true; 
		}
	else{ 
		if(cID=="210")
		{ 
		L.showLogin(); 
		LDL.warn(rcLn["LDE10"]); 
		BL.dE=true; 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
	}
	else{ 
	if(_aa=="400")
	{ 
		if(cID=="401")
		{ 
		BL.sw=_ac[0].split(", "); 
		BL.pul=_ac[1]; 
		}
	else{ 
	if(cID=="402")
	{ 
	BL.mL=_ac[0]; 
	} 
	} 
	}
	else{ 
	if(_aa=="300")
	{ 
		if(cID=="304")
		{ 
		BL.pingTimeoutTask=setTimeout("BL.ping()",10000); 
		BL.loggedIn=true; 
		BL.rID=_ac[0]; 
		BL.room=_ac[1]; 
		E.setText(CA.RN,BL.room); 
		document.title=BL.nick+rcLn["TTL"]+BL.room; 
			if(rcUtil.trim(_ac[2]).length>0)
			{ 
			CA.addServerMessage(CA.cb,rcLn["CRJ"]+" "+rcLn["CRT"],BL.room,_ac[2]); 
			}
			else{ 
			CA.addServerMessage(CA.cb,rcLn["CRJ"],BL.room); } 
				if(L.mD.style.visibility=="visible")
				{ 
				E.hide(L.mD); 
				} 
		}
		else{ 
		if(cID=="320")
		{ 
		ULS.setUsers(_ac[0]); 
		ULS.delayedRedraw(); 
		}
		else{ 
		if(cID=="321")
		{ 
		var nn=ULS.addUser(_ac[0]); 
		ULS.delayedRedraw(); 
			if(CA.sJ)
			{ 
			CA.addServerMessage(CA.mb,rcLn["CUJ"],nn); 
			} 
			if(CA.psJ&&!BL.pR)
			{ 
			rcFC.playSound("join"); 
			} 
		}
		else{ 
		if(cID=="322")
		{ 
		var u=ULS.getUser(_ac[0]); 
			if(u&&CA.sJ)
			{ 
				if(_ac[1]!="")
				{ 
				CA.addServerMessage(CA.mb,rcLn["CUR"],u.nick,_ac[1]); 
				}
				else{ 
				CA.addServerMessage(CA.mb,rcLn["CUL"],u.nick); 
				} 
			} 
		ULS.removeUser(_ac[0]); ULS.delayedRedraw(); 
		}
		else{ 
		if(cID=="302")
		{ 
		RLS.setRooms(_ac[0]); 
		RLS.redraw(); 
		}
		else{ 
		if(cID=="312")
		{ 
		RLS.updateCounts(_ac[0]); 
		RLS.redraw(); 
		}
		else{ 
		if(cID=="305")
		{ 
		RLS.addRoom(_ac[0]); 
		RLS.redraw(); 
		}
		else{ 
		if(cID=="306"||cID=="308")
		{ 
		RLS.removeRoom(_ac[0]); 
		RLS.redraw(); 
		}
		else{ 
		if(cID=="307")
		{ 
		RLS.updateRoom(_ac[0]); 
		RLS.redraw(); 
		}
		else{ 
		if(cID=="309")
		{ 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["IRP"]+"</b>"); 
		}
		else{ 
		if(cID=="314")
		{ 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["IRAD"]+"</b>"); 
		}
		else{ 
		if(cID=="323")
		{ 
		if(_ac[0]==BL.uID)
		{ 
		BL.rL=_ac[1]; 
		} 
		ULS.setRole(_ac[0],_ac[1],_ac[2]); 
		ULS.delayedRedraw(); 
		}
		else{ 
		if(cID=="315")
		{ 
			if(_ac[0]==BL.nick)
			{ 
			MP.clear(); 
			E.show(L.mD); 
			}
			if(_ac[0]!="")
			{ 
			CA.addServerMessage(CA.mb,rcLn["ARM"],_ac[0]); 
			}
			else{ 
			CA.addServerMessage(CA.mb,rcLn["ARO"]); 
			MP.clear(); 
			E.hide(L.mD); 
			} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
	}
	else{ 
	if(_aa=="500")
	{ 
		if(cID=="501")
		{ 
		CA.addServerMessage(CA.cb,_ac[0]); 
		}
		else{ 
		if(cID=="502")
		{ 
		CA.addUserMessage(1,_ac[0],_ac[1]); 
		}
		else{ 
		if(cID=="503")
		{ 
		CA.addUserMessage(2,_ac[0],_ac[1]); 
		}
		else{ 
		if(cID=="505")
		{ 
		CA.addServerMessage(CA.cb,rcLn["CNU"]); 
		}
		else{ 
		if(cID=="602"||cID=="601")
		{ 
		ULS.setAway(_ac[0],cID=="602"); 
		ULS.delayedRedraw(); 
		}
		else{ 
		if(cID=="603")
		{ 
		var pt=TB.getTab(_ac[0]); 
			if(pt!=null&&pt.state!=2)
			{ 
			pt.state=3; 
			TB.redraw(); 
			setTimeout("TB.rtn("+_ac[0]+")",3000); 
			} 
		} 
		} 
		} 
		} 
		} 
		} 
	if(cID=="611")
	{ 
	CA.addServerMessage(CA.cb,rcLn["ARMF"]); 
	} 
	if(cID=="610")
	{ 
	MP.addMessage(_ac[0],_ac[1]); 
	} 
	}
	else{ 
	if(_aa=="700")
	{ 
		if(cID=="703")
		{ 
		BL.rL=_ac[0]; 
		}
		else{ 
		if(cID=="711")
		{ 
			if(_ac[0]==BL.uID)
			{ 
			CA.addServerMessage(CA.cb,"<b>"+rcLn["AYWB"]+"</b>",ULS.getUser(_ac[1]).nick); 
			}
			else
			{ 
			CA.addServerMessage(CA.cb,rcLn["AWB"],ULS.getUser(_ac[0]).nick,ULS.getUser(_ac[1]).nick); 
			}
		}
		else{ 
		if(cID=="715")
		{ 
			if(_ac[0]==BL.uID)
			{ 
			CA.addServerMessage(CA.cb,"<b>"+rcLn["AYFB"]+"</b>",ULS.getUser(_ac[1]).nick); 
			}
			else
			{ 
			CA.addServerMessage(CA.cb,rcLn["AFB"],ULS.getUser(_ac[0]).nick,ULS.getUser(_ac[1]).nick); 
			} 
		}
		else{ 
		if(cID=="713")
		{ 
			if(_ac[0]==BL.uID)
			{ 
			CA.addServerMessage(CA.cb,"<b>"+rcLn["AKB"]+"</b>",ULS.getUser(_ac[0]).nick,ULS.getUser(_ac[1]).nick); 
			}
			else{ 
			CA.addServerMessage(CA.cb,rcLn["AKB"],ULS.getUser(_ac[0]).nick,ULS.getUser(_ac[1]).nick); 
			} 
		}
		else
		{ 
		if(cID=="716")
		{ 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["AYF"]+"</b>",_ac[0]); 
		}
		else
		{ 
		if(cID=="717")
		{ 
		CA.addServerMessage(CA.cb,"<b>"+rcLn["AWH"]+"</b>",_ac[0],_ac[1],_ac[2]); 
		}else
		{ 
		if(cID=="750")
		{ 
		CA.addServerMessage(CA.cb,"<b>ping: "+(new Date().getMilliseconds()-BL.pingSent)+" ms.</b>"); 
		} 
		} 
		} 
		} 
		} 
		} 
		} 
	if(cID=="719")
	{ 
	CA.addServerMessage(CA.cb,"<span style=\"font-weight: bold; color: "+T.c[24]+";\">"+_ac[0]+" </span>"); 
	} 
	} 
	} 
	} 
	} 
	} 
	} 
	}//<-ext 
	},
//<--extenso1
	
doLogout:function(){ clearTimeout(BL.pingTimeoutTask); clearTimeout(BL.autoUpdateTask); rcFC.send("200","202"); LDL.warn(""); if(BL.cu!=""){ if(BL.cu=="cw"){ window.close(); }else{ window.location=BL.cu; } }else{ L.showLogin(); } },
//+
sendMessage:function(to,msg){ if(msg.length>BL.mL){ msg=msg.substring(0,BL.mL); } var pl=rcUtil.bb2plain(msg); if(pl.length<1){ return; } var _b3=true; if(pl.charAt(0)=="/"&&pl.length>1&&pl.charAt(1)!="/"){ _b3=false; var cmd=pl.substring(1); var arg=""; var si=cmd.indexOf(" "); if(si!=-1){ arg=cmd.substring(si+1); cmd=cmd.substring(0,si); } if(cmd=="pass"){ rcFC.send("700","701",arg); }else{ if(cmd=="user"){ rcFC.send("700","702"); }else{ if(cmd=="stealth"){ rcFC.send("700","718"); }else{ if(cmd=="bc"){ rcFC.send("700","719",arg); }else{ if(cmd=="ping"){ rcFC.send("700","750"); BL.pingSent=new Date().getMilliseconds(); }else{ if(cmd=="moderate"){ rcFC.send("700","760"); }else{ if(cmd=="highlight"){ var id=ULS.getID(arg); if(id!=null){ rcFC.send("700","761",id); } } } } } } } } if(cmd=="me"){ _b3=true; msg=msg.replace("/me",":"); }else{ if(cmd=="msg"){ var _b8=""; var ci=arg.indexOf(":"); if(ci!=-1){ _b8=arg.substring(0,ci); if(_b8==BL.nick){ return; } var id=ULS.getID(_b8); if(id!=null){ var _ba=msg.replace("/msg ",""); _ba=rcUtil.trim(_ba.replace(_b8+":","")); if(rcUtil.bb2plain(_ba).length<1){ return; } rcFC.send("500","503",id,_ba); CA.addUserMessage(4,id,_ba.replace("& ","&amp; ")); } } } } } if(_b3){ if(to!=-1){ rcFC.send("500","503",to,msg); }else{ rcFC.send("500","502","",msg); } CA.addUserMessage(4,BL.uID,msg.replace("& ","&amp; ")); } },

setAway:function(_bb){ rcFC.send("500",(_bb)?"602":"601"); }}; var LDL={o:false,bind:function(){ LDL.lDNN=$("LDNN"); LDL.lDPU=$("LDPUU"); LDL.lDAU=$("LDAUU"); LDL.lDLB=$("LDLB"); LDL.lDD=$("LDD"); LDL.lDM=$("LDM"); LDL.lDLB.onclick=LDL.doLogin; LDL.lO=$("LO"); $("LDO").onclick=LDL.shOpts; LDL.lDNN.setAttribute("autocomplete","off"); if(rcBR.ie){ LDL.lDNN.attachEvent("onkeydown",LDL.kPress); }else{ LDL.lDNN.addEventListener("keypress",LDL.kPress,false); } E.hide(LDL.lDD); },
clear:function(){ var nn=rcCookie.get("n"); var pu=rcCookie.get("pu"); var au=rcCookie.get("au"); if(!BL.dL){ E.show(LDL.lDD); LDL.lDNN.focus(); E.set(LDL.lDNN,(nn!=null)?nn:""); E.set(LDL.lDPU,(pu!=null)?pu:""); E.set(LDL.lDAU,(au!=null)?au:""); } },
shOpts:function(){ if(LDL.o){ L.hide(LDL.lO); }else{ L.show(LDL.lO); } LDL.o=!LDL.o; L.doLayout(); LDL.lDNN.focus(); },
warn:function(msg){ E.setText(LDL.lDM,msg); },
kPress:function(e){ if(!e){ e=window.event; } var c=e.keyCode||e.charCode; if(c==13||c==3){ LDL.doLogin(); } },
doLogin:function(){ var nn=rcUtil.trim(E.get(LDL.lDNN)); var pu=rcUtil.trim(E.get(LDL.lDPU)); var au=rcUtil.trim(E.get(LDL.lDAU)); if(au.length>3&&au.indexOf("http://")!=0){ au="http://"+au; } if(pu.length>3&&pu.indexOf("http://")!=0){ pu="http://"+pu; } if(nn.length<1||nn.length>BL.nL||pu.length>BL.puL||au.length>BL.auL){ return; } E.set(LDL.lDNN,nn); E.set(LDL.lDPU,pu); E.set(LDL.lDAU,au); rcCookie.set("n",nn,365); rcCookie.set("pu",pu,365); rcCookie.set("au",au,365); LDL.warn(rcLn["LDC"]); if(LDL.o){ LDL.shOpts(); } E.hide(LDL.lDD); BL.nick=nn; BL.pu=pu; BL.au=au; BL.dE=false; LDL.aC(); },aCP:false,aC:function(){ if(BL.au.length<10){ rcFC.connect(BL.host,BL.port); }else{ LDL.aCP=false; setTimeout("LDL.aCL(true)",5000); E.setText("LDAC","<img id=\"aii\" onload=\"LDL.aCL(false)\" onerror=\"LDL.aCL(true)\" src=\""+BL.au+"\"/>"); } },
aCL:function(err){ if(LDL.aCP){ return; } LDL.aCP=true; if(err){ BL.au=""; }else{ var i=$("aii"); if(i.width>200||i.height>200){ BL.au=""; } } rcFC.connect(BL.host,BL.port); }}; var MP={mb:new Array(),bL:50,cid:0,
clear:function(){ MP.mb.splice(0,MP.bL); MP.redraw(); MP.cid=0; },

addMessage:function(id,_c8){ var _c9=ULS.getUser(id); if(_c9==null){ return; } if(_c9.bl){ return; } var bp=rcUtil.bb2plain(_c8); MP.mb.shift(); MP.mb[MP.bL-1]={id:MP.cid,sid:id,nick:_c9.nick,body:bp}; MP.cid++; MP.delayedRedraw(); },
rdt:0,
delayedRedraw:function(){ clearTimeout(MP.rdt); MP.rdt=setTimeout("MP.redraw()",100); },
redraw:function(){ var btn=function(id){ return "<a class=\"tbtn\" id=\""+id+"\">"+"<span style=\"background-position: -"+16*18+"px 0; background-image:url('./gl/glyphs"+((rcBR.PNG)?".png":".gif")+"!120617083118');\"></span></a>"; }; var cnt=""; var j=0; for(var i=0;i<MP.mb.length;i++){ if(MP.mb[i]!=null){ cnt+="<div class=\"UM"+((j%2==0)?" shaded":"")+"\" style=\"font-size: "+CA.fs+"px;\">"; cnt+="<span class=\"TS\" style=\"font-size: "+(CA.fs-4)+"px;\">"; cnt+="<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><a class=\"tbtn\" onclick=\"MP.ap('"+MP.mb[i].id+"');\">"; cnt+="<span style=\"background-position: -"+306+"px 0; background-image:url('./gl/glyphs.png!120617083118');\"></span></a>"; cnt+="</td><td><a class=\"tbtn\" onclick=\"MP.dc('"+MP.mb[i].id+"');\">"; cnt+="<span style=\"background-position: -"+324+"px 0; background-image:url('./gl/glyphs.png!120617083118');\"></span></a>"; cnt+="</td></tr></table></span>"; cnt+="<span class=\"UN\" style=\"font-size: "+CA.fs+"px;\">"+MP.mb[i].nick+"</span><br/>"; cnt+=MP.mb[i].body; cnt+="</div>"; j++; } } E.setText(MP.ML,cnt); MP.MS.scrollTop=MP.ML.offsetHeight-MP.MS.offsetHeight; },
ap:function(id){ for(var i=0;i<MP.mb.length;i++){ if(MP.mb[i]!=null&&MP.mb[i].id==id){ rcFC.send("500","612",MP.mb[i].sid,rcUtil.unescapeHTML(MP.mb[i].body)); MP.mb.splice(i,1); break; } } MP.redraw(); },dc:function(id){ for(var i=0;i<MP.mb.length;i++){ if(MP.mb[i]!=null&&MP.mb[i].id==id){ rcFC.send("500","613",MP.mb[i].sid,rcUtil.unescapeHTML(MP.mb[i].body)); MP.mb.splice(i,1); break; } } MP.redraw(); },
bind:function(){ MP.MD=$("MD"); MP.ML=$("ML"); MP.MS=$("MS"); }}; var RLS={fs:14,rooms:new Array(),
clear:function(){ RLS.rooms.splice(0,RLS.rooms.length); RLS.redraw(); RLS.empty=true; RLS.showing=false; clearTimeout(RLS.pt); },

//+rooms
setRooms:function(r){ RLS.clear(); var rr=r.split(rcMTP.GS); for(var i=0;i<rr.length;i++){ if(rr[i].length>0){ RLS.addRoom(rr[i]); } } },
addRoom:function(rr){ var p=rr.split(rcMTP.RS); if(!p[2]||rcUtil.trim(p[2])==""){ p[2]=rcLn["RNT"]; } RLS.rooms.splice(0,0,{id:p[0],name:p[1],topic:p[2],owner:p[3],passw:p[4],full:p[5],users:p[6]}); },
removeRoom:function(id){ for(var i=0;i<RLS.rooms.length;i++){ if(RLS.rooms[i].id==id){ RLS.rooms.splice(i,1); break; } } },
updateRoom:function(rr){ var p=rr.split(rcMTP.RS); RLS.removeRoom(p[0]); if(!p[2]||rcUtil.trim(p[2])==""){ p[2]=rcLn["RNT"]; } RLS.rooms.splice(0,0,{id:p[0],name:p[1],topic:p[2],owner:p[3],passw:p[4],full:p[5],users:p[6]}); },
updateCounts:function(r){ var rr=r.split(rcMTP.GS); for(var i=0;i<rr.length;i++){ if(rr[i].length>0){ var p=rr[i].split(rcMTP.RS); for(var j=0;j<RLS.rooms.length;j++){ if(RLS.rooms[j].id==p[0]){ RLS.rooms[j].users=p[1]; } } } } },
getRoom:function(id){ for(var i=0;i<RLS.rooms.length;i++){ if(RLS.rooms[i].id==id){ return RLS.rooms[i]; } } return null; },
redraw:function(){ RLS.sort(); var cnt="<div class=\"hd\">"+rcLn["RPR"]+"</div>"; var tt=false; var ttt=false; for(var i=0;i<RLS.rooms.length;i++){ var r=RLS.rooms[i]; if(!tt&&r.owner){ tt=true; cnt+="<div class=\"hd\" style=\"margin-top: 30px;\"><span style=\"float: right;\">"+rcLn["ROW"]+"</span>"+rcLn["RUR"]+"</div>"; } if(!ttt&&r.full=="true"){ ttt=true; cnt+="<div class=\"hd\" style=\"margin-top: 30px;\">"+rcLn["RFL"]+"</div>"; } var cc=(i%2==1)?"shaded":""; cnt+="<div class=\""+cc+"\" "+(ttt?"":"onclick=\"return RLS.go('"+r.id+"',event);\"")+"style=\"height:"+(RLS.fs*2+6)+"px;"+"font-size: "+RLS.fs+"px;\" id=\"u"+r.id+"\">"; var ccc="nm"; if(r.id==BL.rID){ ccc+=" s-"; } if(r.full=="true"){ ccc+=" s1"; } cnt+="<a class=\""+ccc+"\">"+r.name+" ("+r.users+")</a>"; if(r.owner!=""){ cnt+="<span class=\"ow\">"+r.owner+"</span>"; } cnt+="<br/><span class=\"tp\">"+r.topic+"</span>"; cnt+="</div>"; } E.setText(RLS.RL,cnt); },pprid:null,
go:function(id){ L.hideDialogs(); var r=RLS.getRoom(id); if(r==null){ return; } if(r.passw=="true"){ var p=E.get(RLS.RPDI); if(p==null||p==""){ if(rcBR.PNG){ E.show(L.gB); } E.show(L.rPD); RLS.RPDI.focus(); RLS.pprid=id; return; } RLS.pprid=null; E.set(RLS.RPDI,""); rcFC.send("300","303",id,p); }else{ rcFC.send("300","303",id); } return false; },
create:function(){ L.hideDialogs(); var rn=rcUtil.html2bb(E.get(RLS.CRDRN)); var rt=rcUtil.html2bb(E.get(RLS.CRDRT)); var rp=rcUtil.html2bb(E.get(RLS.CRDRP)); if(rn!=null&&rn!=""){ rcFC.send("300","313",rn,rt,rp); } },
sort:function(){ RLS.rooms.sort(function(a,b){ return (a.full+(a.owner!="")+a.name.toLowerCase()>b.full+(b.owner!="")+b.name.toLowerCase())?1:-1; }); },
pt:null,poll:function(){ clearTimeout(RLS.pt); rcFC.send("300","311"); RLS.pt=setTimeout("RLS.poll()",5000); },
kPress:function(e){ if(!e){ e=window.event; } var c=e.keyCode||e.charCode; if(c==13||c==3){ RLS.go(RLS.pprid); }else{ if(c==27){ E.set(RLS.RPDI,""); L.hideDialogs(); } } },
bind:function(){ RLS.RL=$("RL"); RLS.CRDRN=$("CRDRN"); RLS.CRDRT=$("CRDRT"); RLS.CRDRP=$("CRDRP"); RLS.RPD=$("RPD"); RLS.RPDI=$("RPDI"); RLS.RPDI.setAttribute("autocomplete","off"); if(rcBR.ie){ RLS.RPDI.attachEvent("onkeydown",RLS.kPress); }else{ RLS.RPDI.addEventListener("keypress",RLS.kPress,false); } }}; 


var SD={s:"01110101001",
init:function(){ if(L.v.charAt(16)=="0"){ rcCookie.del("s"); } var cs=rcCookie.get("s"); if(cs!=null){ SD.s=cs; } for(var i=0;i<11;i++){ $("s"+i).checked=(SD.s.charAt(i)==1); } SD.apply(); },
apply:function(){ SD.s=""; for(var i=0;i<11;i++){ SD.s+=($("s"+i).checked)?1:0; } rcCookie.set("s",SD.s,365); ULS.fs=(SD.s.charAt(7)=="1")?15:13; ULS.sA=(SD.s.charAt(3)=="1"); ULS.sM=(SD.s.charAt(4)=="1")?1:0; ULS.sort(); ULS.redraw(); RLS.fs=(SD.s.charAt(7)=="1")?15:13; RLS.sort(); RLS.redraw(); CA.sA=(SD.s.charAt(0)=="1"); CA.sE=(SD.s.charAt(1)=="1"); CA.sF=(SD.s.charAt(2)=="1"); CA.sJ=(SD.s.charAt(5)=="1"); CA.iP=(SD.s.charAt(6)=="1"); CA.psJ=(SD.s.charAt(8)=="1"); CA.psM=(SD.s.charAt(9)=="1"); CA.psP=(SD.s.charAt(10)=="1"); CA.fs=(SD.s.charAt(7)=="1")?15:13; CA.redraw(); IN.fs=(SD.s.charAt(7)=="1")?15:13; IN.CB.style.fontSize=IN.fs+"px"; IN.doFocus(); }}; 

var TB={tabs:new Array(),
aT:0,
lT:0,
clear:function(){ TB.tabs=new Array(); TB.addTab(-1,rcLn["GCL"]); TB.selTab(-1); TB.mT=TB.tabs[0]; TB.OT.style.borderBottom="1px solid "+T.c[4]; TB.TABS.style.display="none"; },
addTab:function(a,b){ if(TB.getTab(a)!=null){ TB.selTab(a); return; } TB.tabs.splice(TB.tabs.length,TB.tabs.length,{id:a,nick:b,state:0,off:0,mb:new Array()}); TB.selTab(a); if(TB.tabs.length==2){ TB.OT.style.borderBottom="none"; TB.TABS.style.display="block"; L.doLayout(); } },
removeTab:function(id){ for(var i=0;i<TB.tabs.length;i++){ if(TB.tabs[i].id==id){ TB.tabs.splice(i,1); if(TB.aT==id){ TB.selTab(-1); } break; } } TB.redraw(); if(TB.tabs.length==1){ TB.selTab(-1); TB.OT.style.borderBottom="1px solid "+T.c[4]; TB.TABS.style.display="none"; L.doLayout(); } return false; },
getTab:function(id){ for(var i=0;i<TB.tabs.length;i++){ if(TB.tabs[i].id==id){ return TB.tabs[i]; } } return null; },
fonTab:function(nn,id){ for(var i=0;i<TB.tabs.length;i++){ if(TB.tabs[i].nick==nn){ if(TB.aT==TB.tabs[i].id){ TB.aT=id; } TB.tabs[i].id=id; CA.addServerMessage(TB.tabs[i].mb,rcLn["CUJ"],nn); TB.tabs[i].off=0; TB.redraw(); break; } } },
foffTab:function(nn,id){ for(var i=0;i<TB.tabs.length;i++){ if(TB.tabs[i].id==id){ CA.addServerMessage(TB.tabs[i].mb,rcLn["CUL"],nn); TB.tabs[i].off=1; TB.redraw(); break; } } },
selTab:function(id){ TB.lT=(id==-1)?TB.aT:-1; TB.aT=id; var tm=TB.getTab(id); CA.PCL.innerHTML=(id==-1||tm==null)?"":rcLn["PCL"].replace(/{(0)}/g,tm.nick); CA.cb=(id==-1||tm==null)?CA.mb:tm.mb; if(tm!=null){ tm.state=0; } TB.redraw(); CA.redraw(); IN.doFocus(); return false; },
next:function(left){ var id=TB.aT; for(var i=0;i<TB.tabs.length;i++){ if(TB.tabs[i].id==id){ if(left){ TB.selTab((i>0)?TB.tabs[i-1].id:TB.tabs[TB.tabs.length-1].id); }else{ TB.selTab((i<TB.tabs.length-1)?TB.tabs[i+1].id:-1); } } } },
redraw:function(){ var tw="auto"; var cnt=""; var tl=TB.tabs.length; if(TB.tabs.length>1){ cnt="<ul>"; var w=TB.OT.offsetWidth-19; tw=w/TB.tabs.length; if(tw>180){ tw=180; } var rw=Math.ceil(tw); var e=(tw-rw)*tl; var ww=(rw-30); if(ww<10){ ww=10; } cnt+="<li class=\"tabf\"><span class=\"nn\" style=\"width:1px;\">&nbsp;</span></li>"; for(var i=0;i<tl;i++){ var u=TB.tabs[i]; cnt+="<li title=\""+u.nick+((i<9)?(" (Alt+"+(i+1)+")"):"")+"\" onselectstart=\"return false;\" onmousedown=\"return TB.selTab('"+u.id+"');\" id=\"t"+u.id+"\" class=\""+(TB.aT==u.id?"tabt":"tab")+"\">"; var cl=((i>0)?"idl":"idlpc"); if(u.state==2){ cl="msg"; } if(u.state==3){ cl="typ"; } cnt+="<span class=\""+cl+"\" "; if(i>0){ cnt+="title=\""+rcLn["PCC"]+"\" onmouseup=\"return TB.removeTab('"+u.id+"');\""; } cnt+=">&nbsp;</span>"; cnt+="<span class=\"nn"+((u.off==1)?", off":"")+"\" style=\"width:"+((i==tl-1)?Math.ceil(ww+e):ww)+"px;\">"+u.nick+"</span>"; cnt+="</li>"; } var ltw=Math.floor(w-(tl*rw)-e); if(ltw<1){ ltw=0; } cnt+="<li class=\"tabf\"><span class=\"nn\" style=\"width:"+ltw+"px;\"></span></li>"; cnt+="</ul>"; } E.setText(TB.TABS,cnt); },
rtn:function(id){ var pt=TB.getTab(id); if(pt!=null&&pt.state==3){ pt.state=0; TB.redraw(); } },
bind:function(){ TB.TABS=$("TABS"); TB.TS=$("TS"); TB.OT=$("OT"); TB.clear(); }}; 

var T={c:"",input:"",
apply:function(){ T.ff="Verdana, Arial, Helvetica, sans-serif;"; T.c=tsrc.split(","); T.e3d=T.c[47]=="1"; T.dW("body, #DM {background:"+T.c[0]+"; font-family:"+T.ff+";}"); T.sT(".pIN, #LD input, #RPD input, #CRD input",T.c[4],T.c[16],T.c[13]); T.sT(".pN",T.c[4],T.c[2],T.c[1]); if(rcBR.PNG){ if(T.e3d){ T.dW(".pN {background-image: url(\"./gl/glyphs.png!120617083118\"); background-repeat: repeat-x; background-position: 0 -97px;}"); } }else{ if(T.e3d){ T.dW(".pN {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='./gl/ie6p.png!120617083118', sizingMethod='crop'); zoom:1; }"); } } T.dW("#LD {color: "+T.c[2]+";}"); T.sT(".btn",T.c[4],T.c[2],T.c[1]); T.sT("a.tbtn:hover",T.c[4],T.c[2],T.c[1]); T.dW(".dlg .cb, .idl, .idlpc, .msg, .typ, .em {background-image: url(\"./gl/glyphs."+(rcBR.PNG?"png":"gif")+"!120617083118\");}"); T.dW(".ico {background-image: url(\"./gl/icons."+(rcBR.PNG?"png":"gif")+"!120617083118\");}"); T.sT("a.tbtnt",T.c[4],T.c[2],T.c[3]); T.sT(".btnt",T.c[4],T.c[2],T.c[3]); if(rcBR.PNG){ if(T.e3d){ T.dW(".btn, a.tbtn:hover {background-image: url(\"./gl/glyphs.png!120617083118\"); background-repeat: repeat-x; background-position: 0 -41px;}"); } }else{ if(T.e3d){ T.dW(".btn, a.tbtn:hover {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='./gl/ie6b.png!120617083118', sizingMethod='crop'); zoom:1; }"); } } T.sT(".tab",null,T.c[2],T.c[3]); if(rcBR.PNG&&T.e3d){ T.dW(".tab  {background-image: url(\"./gl/glyphs.png!120617083118\"); background-repeat: repeat-x; background-position: 0 -76px;}"); } if(rcBR.ie){ T.dW(".tab, .tabt, .tabf { vertical-align: top;}"); } T.sT(".tabt",T.c[4],T.c[2],T.c[1]); T.dW(".tabt {border-top: none; border-bottom: 2px solid "+T.c[2]+"; }"); T.dW(".tab {border: 1px solid "+T.c[4]+";}"); T.dW(".tabf {border-top: 1px solid "+T.c[4]+";}"); if(rcBR.sf){ T.dW(".tab, .tabt {display: inline-block;}"); T.dW("#TABS {margin-top: -2px;}"); } T.sT(".dlg .body",T.c[4],T.c[2],T.c[1]); T.sT(".dlg .head",null,T.c[6],T.c[5]); if(rcBR.PNG&&T.e3d){ T.dW(".dlg .head {background-image: url(\"./gl/glyphs.png!120617083118\"); background-repeat: repeat-x; background-position: 0 -116px;}"); } T.dW(".dlg .head {border: 1px solid "+T.c[5]+";}"); T.dW(".legend, .inp {color: "+T.c[2]+";}"); T.sT("#HDB",T.c[4],T.c[16],T.c[13]); T.dW("#HDB {padding: 10px; overflow: auto;}"); T.dW(".dlg li a {color: "+T.c[2]+";}"); T.dW(".dlg li a:hover {color: "+T.c[2]+"; background: "+T.c[2]+"; color: "+T.c[1]+";}"); T.sT("#LS",null,null,T.c[13]); T.dW("#UL div {border-bottom: 1px solid "+T.c[9]+";}"); T.sT("#UL div.shaded",null,null,T.c[7]); T.sT("#UL div:hover",null,null,T.c[8]); T.dW("#UL img.avatar {border: 1px solid "+T.c[10]+";}"); T.dW(".s- {font-weight: bold; color: "+T.c[20]+";}"); T.dW(".s0 {color: "+T.c[21]+";}"); T.dW(".s1 {font-style: italic; color: "+T.c[22]+";}"); T.dW(".bl {text-decoration: line-through; color: "+T.c[23]+";}"); T.dW(".r0 {font-weight: bold; color: "+T.c[24]+";}"); T.dW(".r1 {font-weight: bold; color: "+T.c[25]+";}"); T.dW(".r2 {font-weight: bold; color: "+T.c[26]+";}"); T.sT("#RS",null,null,T.c[13]); T.dW("#RL div {cursor: pointer; border-bottom: 1px solid "+T.c[9]+";}"); T.sT("#RL div.shaded",null,null,T.c[7]); T.sT("#RL div:hover",null,null,T.c[8]); T.dW("#RL img.avatar {border: 1px solid "+T.c[10]+";}"); T.sT("#RL .hd, #RL .hd:hover",null,T.c[1],T.c[2]); T.dW("#RL .hd {padding-left: 5px; color: "+T.c[21]+"; }"); T.dW("#RL .nm {font-weight: bold;}"); T.dW("#RL .nm:hover {text-decoration: underline;}"); T.dW("#RL .tp {color: "+T.c[22]+"; float: left;}"); T.dW("#RL .ow {color: "+T.c[21]+"; float: right;}"); T.sT("#CA",null,T.c[16],T.c[13]); T.dW("#CA div {padding: 3px; margin: 0; border-bottom: 1px solid "+T.c[9]+";}"); T.sT("#CA div.shaded",null,null,T.c[7]); T.sT("#CA div:hover",null,null,T.c[8]); T.dW(".AV img {cursor: pointer; border: 1px solid "+T.c[10]+";}"); T.dW(".dlg img.avatar {padding: 1px; border: 1px solid "+T.c[10]+";}"); T.dW("#CA .SM {color: "+T.c[14]+";}"); T.dW("#CA .SM .HL {color: "+T.c[15]+";}"); T.dW("#CA .WH {background: "+T.c[8]+";}"); T.dW("#CA .UM {color: "+T.c[16]+";}"); T.dW("#CA .UM .UN {cursor: pointer; font-weight: bold; color: "+T.c[17]+";}"); T.dW("#CA .UM .OWN {cursor: pointer; font-weight: bold; color: "+T.c[18]+";}"); T.dW("#CA .UM .PM {font-weight: bold; color: "+T.c[19]+";}"); T.dW("#CA .TS {float: right; color: "+T.c[11]+";}"); T.dW("#CA .MI {color: "+T.c[17]+";}"); T.dW("#CA .MIO {color: "+T.c[18]+";}"); T.dW("#CA a {text-decoration: underline; color: "+T.c[12]+";}"); T.dW("#CA a:visited {color: "+T.c[12]+";}"); T.sT("#ML",null,T.c[16],T.c[13]); T.dW("#ML div {padding: 3px; margin: 0; border-bottom: 1px solid "+T.c[9]+";}"); T.sT("#ML div.shaded",null,null,T.c[7]); T.sT("#ML div:hover",null,null,T.c[8]); T.dW("#ML .UM {color: "+T.c[16]+";}"); T.dW("#ML .UM .UN {font-weight: bold; color: "+T.c[17]+";}"); T.dW("#ML .TS {float: right; color: "+T.c[11]+";}"); T.input+="padding: 0px; margin: "+(rcBR.ie8?"0":"2")+"px; background:"+T.c[13]+"; color: "+T.c[16]+"; font-family:"+T.ff+";"; },
dW:function(str){ clientCSS+=str; },
sT:function(id,br,fg,bg){ T.dW(id+"{"+((br!=null)?"border: 1px solid "+br+";":"")+((fg!=null)?"color: "+fg+" !important;":"")+"background:"+bg+";}"); } }; 

var ULS={sM:0,
sA:false,
fs:14,
users:new Array(),
cU:null,
blocked:new Array(),
clear:function(){ ULS.users.splice(0,ULS.users.length); ULS.redraw(); setTimeout("L.doLayout();",10); },
setUsers:function(u){ ULS.users.splice(0,ULS.users.length); var uu=u.split(rcMTP.GS); for(var i=0;i<uu.length;i++){ if(uu[i].length>0){ ULS.addUser(uu[i]); } } },
addUser:function(uu){ var p=uu.split(rcMTP.RS); if(p[0]==BL.uID){ p[2]="-"; } TB.fonTab(p[1],p[0]); var bl=ULS.isBlocked(p[1]); ULS.users.splice(0,0,{id:p[0],nick:p[1],status:p[2],role:p[3],bl:bl,avatar:p[4],profile:p[5]}); return p[1]; },
removeUser:function(id){ for(var i=0;i<ULS.users.length;i++){ if(ULS.users[i].id==id){ TB.foffTab(ULS.users[i].nick,ULS.users[i].id); ULS.users.splice(i,1); break; } } },
getUser:function(id){ for(var i=0;i<ULS.users.length;i++){ if(ULS.users[i].id==id){ return ULS.users[i]; } } return null; },
getID:function(nick){ for(var i=0;i<ULS.users.length;i++){ if(ULS.users[i].nick==nick){ return ULS.users[i].id; } } return null; },
rdt:0,
delayedRedraw:function(){ clearTimeout(ULS.rdt); ULS.rdt=setTimeout("ULS.redraw(1)",100); },
redraw:function(sort){ if(sort){ ULS.sort(); } var cnt=""; var as=ULS.fs*1.5; var mW=L.lpW-((ULS.sA)?64:36)-L.sbW; for(var i=0;i<ULS.users.length;i++){ var u=ULS.users[i]; var cc=(i%2==0)?"shaded":""; cnt+="<div title=\""+u.nick+(u.role==3?"":" ("+rcLn["ROLES"][u.role]+")")+"\" class=\""+cc+"\" style=\"height:"+((ULS.sA)?(as+4):(ULS.fs+6))+"px;"+"font-size: "+ULS.fs+"px;\" id=\"u"+u.id+"\" "+"onmousedown=\"return false;\" onselectstart=\"return false;\" oncontextmenu=\"return false;\""+"onmouseup = \"return ULS.menu('"+u.id+"',event);\">"; if(ULS.sA&&u.avatar&&!u.bl){ cnt+="<img class=\"avatar\" style=\"width:"+as+"px;height:"+as+"px;\" src=\""+u.avatar+"\" alt=\"\"/>"; } var c="s"+u.status+" "+"r"+u.role; if(u.bl){ c+=" bl"; } cnt+="<span class=\""+c+"\" style=\"width:"+mW+"px\">"+u.nick+"</span>"; cnt+="</div>"; } E.setText(ULS.UL,cnt); E.setText(ULS.PC,"("+ULS.users.length+")"); },
sort:function(){ this.users.sort((this.sM==0)?function(a,b){ return (a.bl+a.status+a.role+a.nick.toLowerCase()>b.bl+b.status+b.role+b.nick.toLowerCase())?1:-1; }:function(a,b){ return (a.nick.toLowerCase()>b.nick.toLowerCase())?1:-1; }); },
bind:function(){ ULS.UL=$("UL"); ULS.LS=$("LS"); ULS.PC=$("PC"); ULS.sort(); ULS.uM=$("UM"); ULS.uMB=$("UMB"); ULS.uMH=$("UMH"); E.hide(ULS.uM); },
cM:function(id){ var u=ULS.getUser(id); if(u==null){ return; } var am=function(t,a){ return "<li><a onclick=\"return "+a+"\">"+t+"</a></li>"; }; var cnt=(ULS.sA&&u.avatar)?"<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td><img class=\"avatar\" style=\"margin-right: 5px;width: 80px;height: 80px;\" src=\""+u.avatar+"\" alt=\"\"/></td><td><ul>":"<ul>"; if(u.id!=BL.uID){ if(!BL.pmp){ cnt+=am(rcLn["UMWH"],"IN.wh('"+u.nick+"')"); } if(!BL.pmp){ cnt+=am(rcLn["UMPM"],"ULS.pm('"+id+"')"); } if(u.profile){ cnt+=am(rcLn["UMPR"],"ULS.pr('"+u.profile+"')"); } cnt+=am((u.bl)?rcLn["UMUB"]:rcLn["UMBL"],"ULS.bl('"+id+"')"); if(BL.rL<=2){ cnt+="<li>-----</li>"; cnt+=am(rcLn["AMW"],"ULS.wrn('"+id+"')"); if(BL.rL!=2){ cnt+=am(rcLn["AMF"],"ULS.frz('"+id+"')"); } cnt+=am(rcLn["AMK"],"ULS.kck('"+id+"', '', '')"); cnt+=am(rcLn["AMI"],"ULS.who('"+id+"')"); } if(BL.rL==0){ cnt+="<li>-----</li>"; cnt+=am(rcLn["AMB"],"ULS.pb('"+id+"')"); } }else{ cnt+=am(rcLn["UMYU"],"E.hide(ULS.uM)"); } cnt+=(ULS.sA&&u.avatar)?"</ul></td></tr></table>":"</ul>"; ULS.uMB.innerHTML=cnt; },dct:0,lx:-1,
menu:function(id,e){ var now=(new Date()).getTime(); ULS.cM(id); if(!e){ e=(window.event); } var x=0; var y=0; if(e.pageX||e.pageY){ x=e.pageX; y=e.pageY; }else{ if(e.clientX||e.clientY){ x=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft; y=e.clientY+document.body.scrollTop+document.documentElement.scrollTop; } } if((!BL.pmp)&&(id!=BL.uID)&&(now-ULS.dct)<1000&&x==ULS.lx){ IN.wh(ULS.getUser(id).nick); return false; } ULS.dct=now; ULS.lx=x; var m=ULS.uM; var un=$("u"+id); var dy=L.pH-y; if(dy<m.offsetHeight){ y-=m.offsetHeight+5; } m.style.top=y+1+"px"; var dx=L.pW-x; if(dx<m.offsetWidth){ x-=m.offsetWidth-dx; } m.style.left=x-40+"px"; E.show(m); return false; },
pm:function(id,nick){ if(BL.pmp){ return; } var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } TB.addTab(id,u.nick); return false; },
pr:function(pr){ E.hide(ULS.uM); window.open(pr,"_blank",""); return false; },
bl:function(id){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } if(!u.bl){ u.bl=true; ULS.addBlocked(u.nick); TB.removeTab(id); }else{ u.bl=false; ULS.removeBlocked(u.nick); } ULS.redraw(1); return false; },
addBlocked:function(name){ ULS.blocked.splice(0,0,name); },
removeBlocked:function(name){ for(var i=0;i<ULS.blocked.length;i++){ if(ULS.blocked[i]==name){ ULS.blocked.splice(i,1); break; } } },
isBlocked:function(name){ for(var i=0;i<ULS.blocked.length;i++){ if(ULS.blocked[i]==name){ return true; } } return false; },
setAway:function(id,away){ if(id==BL.uID){ return; } var u=ULS.getUser(id); if(u==null){ return; } if(u.bl){ return; } if(CA.sJ){ CA.addServerMessage(CA.mb,away?rcLn["CUA"]:rcLn["CUB"],u.nick); } var t=TB.getTab(u.id); if(t!=null){ CA.addServerMessage(t.mb,away?rcLn["CUA"]:rcLn["CUB"],u.nick); } u.status=away?"1":"0"; },

setRole:function(id,role,cel)
{ 
var u=ULS.getUser(id); 
	if(u==null)
	{ 
	return; 
	} 
u.role=role; 
	if(cel!="c")
	{ 
	CA.addServerMessage(CA.mb,rcLn["ARC"],u.nick,rcLn["ROLES"][u.role]); 
	} 
},
wrn:function(id){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } rcFC.send("700","710",id); return false; },
frz:function(id){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } rcFC.send("700","714",id); return false; },
kck:function(id,bt,br,bsn){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } rcFC.send("700","712",id,bt,br,bsn); return false; },
who:function(id){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } rcFC.send("700","717",id); return false; },
pb:function(id){ var u=ULS.getUser(id); E.hide(ULS.uM); if(u==null){ return; } E.show(L.bD); E.set($("BID"),u.id); E.setText($("BDH"),"Ban "+u.nick); return false; }}; if(rcBR.W3CDOMSupported){ rcQuery.parse(); var pre=rcQuery.get("pre",""); if(pre){ tsrc=unescape(pre); } T.apply(); document.write("<style type=\"text/css\">"+clientCSS+"</style>"); document.write(clientHTML); rcFC.createObject(init); }else{ die("<b>"+rcLn["W3C1"]+"</b><br/>"+rcLn["W3C2"]); } function init(_162){ if(_162){ L.init(); Lang.apply(); CA.bind(); ULS.bind(); RLS.bind(); MP.bind(); CP.bind(); EP.bind(); IN.bind(); TB.bind(); LDL.bind(); L.bind(); BL.init(); SD.init(); }else{ die("<b>"+rcLn["AFL1"]+"</b><br/>"+rcLn["AFL2"]); } }

function die(why)
{ 
document.open(); 
document.write(why); 
document.close(); 
}  
BL.sID='0';
BL.rID='0';
BL.pID='0';
BL.ur='1110';
SD.s='01101100001';
L.v='11111111111111111111';
