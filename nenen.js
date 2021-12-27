const http = require("http");
const { connect } = require("http2");
var blacklist = new Map();
const fs = require('fs') // file system

// GENERATE CONFIG
const { MoveText, Background_Color, Discord, ProtectBy } = require('./config.json')
// ended

let req_URL = "req.method";
let Post_Method = "POST";
let Get_Method = "GET";
const tanggal = new Date();
// then => {
// let res = "res";
// }
// eter and path
var eter = 0;
let path = "/growtopia/server_data.php";
fs.writeFileSync(
    "frenzy_http_logs.txt",
    ""
);
const your_http = http.createServer(function(req, res) {
    // var koneksi = "connection";
var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
req.connection.remoteAddress || 
req.socket.remoteAddress || 
req.connection.socket.remoteAddress  
    if (req_URL == path) {
        if (req.method = Get_Method) {
            var visit = 0;
            visit++;
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            res.writeHead(200, `${ProtectBy}`);
            res.write(`
server|$ip
port|17091
type|1
#maint|Currently server is maintenance, try again later AGanzGT     
#fixbug|Currently server is under repair, try again later :3                               

http_dns|servers.privategt.net
http_port|80
beta_server|127.0.0.1
beta_port|17091

solo_test|127.0.0.1
beta_port|17091
beta_type|1
meta|localhost
RTENDMARKERBS1001`);
            res.end();
            console.log(`
${tanggal}
=====================================
- Announcement
Ip : ${ipAddress}
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
fs.appendFile('frenzy_http_log.txt', `[${tanggal}] ${ipAddress} Just sending ${req.method} in ${req.url}\n`, function (err) {
    if (err) throw err;
    console.log('Logs Updated!');
  });
        } else {
            if(req.method == Post_Method) {
                var visit = 0;
                visit++;
                let ipAddress = req.connection.remoteAddress;
                ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
                res.writeHead(404, `${ProtectBy}`);
                res.write(`
    server|$ip
    port|17091
    type|1
    #maint|Currently server is maintenance, try again later AGanzGT     
    #fixbug|Currently server is under repair, try again later :3                               
    
    http_dns|servers.privategt.net
    http_port|80
    beta_server|127.0.0.1
    beta_port|17091
    
    solo_test|127.0.0.1
    beta_port|17091
    beta_type|1
    meta|localhost
    RTENDMARKERBS1001`);
                res.end();
                console.log(`
    ${tanggal}
    =====================================
    - Announcement
    Ip : ${ipAddress}
    Send a : ${req.method}
    in : ${req.url}
    - Ethernet
    Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
    Sending : 0 Kbps, 0 Mbps, 0 Gbps
    =====================================`);
    fs.appendFile('frenzy_http_log.txt', `[${tanggal}] ${ipAddress} Just sending ${req.method} in ${req.url}\n`, function (err) {
        if (err) throw err;
        console.log('Logs Updated!');
      });
            }
        }
    } else {
        if(req.method == Get_Method) {
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            res.writeHead(404, `${ProtectBy}`);
            console.log(`
            ${tanggal}
=====================================
- Announcement
Ip : ${ipAddress}
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
fs.appendFile('frenzy_http_log.txt', `[${tanggal}] ${ipAddress} Just sending ${req.method} in ${req.url}\n`, function (err) {
    if (err) throw err;
    console.log('Logs Updated!');
  });
            res.write(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><meta name="viewport" content="width=device-width, initial-scale=1" /> <head>	<title>Protected By AGanz</title><meta property="og:description" content="ENTERTRAINER"/>		<meta property="og:image" content="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU"/><link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU"/><link href="https://fonts.googleapis.com/css?family=&display=swap" type="text/css" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" type="text/css" rel="stylesheet"></head><body oncontextmenu="return false" onkeydown="return false" onmousedown="return false"><script type="text/javascript">var snowmax=35var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF")var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")var snowletter="*"var sinkspeed=0.6var snowmaxsize=22var snowminsize=8var snowingzone=1// Do not edit below this linevar snow=new Array()var marginbottomvar marginrightvar timervar i_snow=0var x_mv=new Array();var crds=new Array();var lftrght=new Array();var browserinfos=navigator.userAgent var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)var ns6=document.getElementById&&!document.allvar opera=browserinfos.match(/Opera/) var browserok=ie5||ns6||operafunction randommaker(range) {			rand=Math.floor(range*Math.random()) return rand}function initsnow() {	if (ie5 || opera) {		marginbottom = document.body.clientHeight		marginright = document.body.clientWidth	}	else if (ns6) {		marginbottom = window.innerHeight		marginright = window.innerWidth	}	var snowsizerange=snowmaxsize-snowminsize	for (i=0;i<=snowmax;i ) {		crds[i] = 0; 	lftrght[i] = Math.random()*15; 	x_mv[i] = 0.03 Math.random()/10;		snow[i]=document.getElementById("s" i)		snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]		snow[i].size=randommaker(snowsizerange) snowminsize		snow[i].style.fontSize=snow[i].size		snow[i].style.color=snowcolor[randommaker(snowcolor.length)]		snow[i].sink=sinkspeed*snow[i].size/5		if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}		if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}		if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/4}		if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/2}		snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)		snow[i].style.left=snow[i].posx		snow[i].style.top=snow[i].posy	}	movesnow()}function movesnow() {	for (i=0;i<=snowmax;i ) {		crds[i] = x_mv[i];		snow[i].posy =snow[i].sink		snow[i].style.left=snow[i].posx lftrght[i]*Math.sin(crds[i]);		snow[i].style.top=snow[i].posy		if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){			if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}			if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}			if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/4}			if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/2}			snow[i].posy=0		}	}	var timer=setTimeout("movesnow()",50)}for (i=0;i<=snowmax;i ) {	document.write("<span id='s" i "' style='position:absolute;top:-" snowmaxsize "'>" snowletter "</span>")}if (browserok) {	window.onload=initsnow}</script><head> <title>DBXC</title><style type="text/css">.lagu{background:transparent;border:1px solid red;font-family:Share\ Tech\ Mono;color:;font-size:10px;font-weight:normal;padding:2px 25px;text-decoration:none;text-shadow:0 0 0px #15cff4}</style><script> function play(){var audio=document.getElementById('lagu');audio.play();}function liat(){document.getElementById('galiat').style.visibility='visible';}</script><script src="https://cdn.rawgit.com/bungfrangki/efeksalju/2a7805c7/efek-salju.js" type="text/javascript"></script><style>img[alt="www.000webhost.com"]{display:none;}</style></style><style type='text/css'>HTML,BODY{cursor: none;}</style><body BGCOLOR="black"><center><body background="" height="" width=""><center><style> h1 { text-align: center; color: #3335cf; font-size: 35px; font-family: Arial Narrow, sans-serif; font-style: garamond; text-shadow: 100vmax #f00505;> text-shadow: 0px 0px 0px #f00505;> </style> <center><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU" height="150" width="200"><br><br></center><center><font color=red size="3" face=audiowide>AGanz Protect<font color=white><br><font color=white>Not Good</font></center><br><center><font color=white size=2 face="courier New">This IP is protected</font><br><font color="white" size="2" face="courier New">[!]No Team[!]</font><br><br><center><button class="lagu" onclick="play();liat();"><font face="courier new" size="2" color="white">CLICK TO PLAY MUSIC</font></button><audio id="lagu" src="https://i.top4top.io/m_1514ezdpk0.m4a"></audio><br><font face="nosifer" color="white" font="" size="3"> <font face="courier New" color="white" font="" size="3"><br> THANKS TO </font><br> <marquee behavior="alternate" scrollamount="5" style="border:1px solid;" width="75%"> <font face="courier New" color="white" font="" size="3">----------:[ AGanz Protect ]:----------</font> </marquee><br> </font></b></i></td> </tr> </tbody> </table> </center> </body></html>`);
            res.end();
        } else {
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            console.log(`
            ${tanggal}
=====================================
- Announcement
Ip : ${ipAddress}
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
fs.appendFile('frenzy_http_log.txt', `[${tanggal}] ${ipAddress} Just sending ${req.method} in ${req.url}\n`, function (err) {
    if (err) throw err;
    console.log('Logs Updated!');
  });
            // `)
            res.writeHead(404, `${ProtectBy}`);
            res.write(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><meta name="viewport" content="width=device-width, initial-scale=1" /> <head>	<title>Protected By AGanz</title><meta property="og:description" content="ENTERTRAINER"/>		<meta property="og:image" content="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU"/><link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU"/><link href="https://fonts.googleapis.com/css?family=&display=swap" type="text/css" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" type="text/css" rel="stylesheet"></head><body oncontextmenu="return false" onkeydown="return false" onmousedown="return false"><script type="text/javascript">var snowmax=35var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF")var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")var snowletter="*"var sinkspeed=0.6var snowmaxsize=22var snowminsize=8var snowingzone=1// Do not edit below this linevar snow=new Array()var marginbottomvar marginrightvar timervar i_snow=0var x_mv=new Array();var crds=new Array();var lftrght=new Array();var browserinfos=navigator.userAgent var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)var ns6=document.getElementById&&!document.allvar opera=browserinfos.match(/Opera/) var browserok=ie5||ns6||operafunction randommaker(range) {			rand=Math.floor(range*Math.random()) return rand}function initsnow() {	if (ie5 || opera) {		marginbottom = document.body.clientHeight		marginright = document.body.clientWidth	}	else if (ns6) {		marginbottom = window.innerHeight		marginright = window.innerWidth	}	var snowsizerange=snowmaxsize-snowminsize	for (i=0;i<=snowmax;i ) {		crds[i] = 0; 	lftrght[i] = Math.random()*15; 	x_mv[i] = 0.03 Math.random()/10;		snow[i]=document.getElementById("s" i)		snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]		snow[i].size=randommaker(snowsizerange) snowminsize		snow[i].style.fontSize=snow[i].size		snow[i].style.color=snowcolor[randommaker(snowcolor.length)]		snow[i].sink=sinkspeed*snow[i].size/5		if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}		if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}		if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/4}		if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/2}		snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)		snow[i].style.left=snow[i].posx		snow[i].style.top=snow[i].posy	}	movesnow()}function movesnow() {	for (i=0;i<=snowmax;i ) {		crds[i] = x_mv[i];		snow[i].posy =snow[i].sink		snow[i].style.left=snow[i].posx lftrght[i]*Math.sin(crds[i]);		snow[i].style.top=snow[i].posy		if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){			if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}			if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}			if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/4}			if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size) marginright/2}			snow[i].posy=0		}	}	var timer=setTimeout("movesnow()",50)}for (i=0;i<=snowmax;i ) {	document.write("<span id='s" i "' style='position:absolute;top:-" snowmaxsize "'>" snowletter "</span>")}if (browserok) {	window.onload=initsnow}</script><head> <title>DBXC</title><style type="text/css">.lagu{background:transparent;border:1px solid red;font-family:Share\ Tech\ Mono;color:;font-size:10px;font-weight:normal;padding:2px 25px;text-decoration:none;text-shadow:0 0 0px #15cff4}</style><script> function play(){var audio=document.getElementById('lagu');audio.play();}function liat(){document.getElementById('galiat').style.visibility='visible';}</script><script src="https://cdn.rawgit.com/bungfrangki/efeksalju/2a7805c7/efek-salju.js" type="text/javascript"></script><style>img[alt="www.000webhost.com"]{display:none;}</style></style><style type='text/css'>HTML,BODY{cursor: none;}</style><body BGCOLOR="black"><center><body background="" height="" width=""><center><style> h1 { text-align: center; color: #3335cf; font-size: 35px; font-family: Arial Narrow, sans-serif; font-style: garamond; text-shadow: 100vmax #f00505;> text-shadow: 0px 0px 0px #f00505;> </style> <center><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJic60K4aNSkM_IAcGLDmX5FI-GpipbFgA&usqp=CAU" height="150" width="200"><br><br></center><center><font color=red size="3" face=audiowide>AGanz Protect<font color=white><br><font color=white>Not Good</font></center><br><center><font color=white size=2 face="courier New">This IP is Portected</font><br><font color="white" size="2" face="courier New">[!]No Team[!]</font><br><br><center><button class="lagu" onclick="play();liat();"><font face="courier new" size="2" color="white">CLICK TO PLAY MUSIC</font></button><audio id="lagu" src="https://i.top4top.io/m_1514ezdpk0.m4a"></audio><br><font face="nosifer" color="white" font="" size="3"> <font face="courier New" color="white" font="" size="3"><br> THANKS TO </font><br> <marquee behavior="alternate" scrollamount="5" style="border:1px solid;" width="75%"> <font face="courier New" color="white" font="" size="3">----------:[ AGanz Protect ]:----------</font> </marquee><br> </font></b></i></td> </tr> </tbody> </table> </center> </body></html>`);
            res.end();
        }
    }
})

your_http.listen(17091)
console.log(`Waiting a logs...`)
