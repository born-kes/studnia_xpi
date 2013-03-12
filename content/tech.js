function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}


gN(gid_kes('techs_table'),'th')[0].innerHTML += '<input type="submit" value="ukryj rozbudowane" onclick="teh_off();"/>'

var sc=document.createElement('style');
sc.innerHTML = '.rtt.brown{height:30px;width:30px;background:none repeat;background-image:url("http://cdn2.tribalwars.net/graphic/dots/brown.png?b441b");}' ;
document.getElementsByTagName('head')[0].appendChild(sc);
