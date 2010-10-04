<script language="JavaScript">
<!--
function $(id){return document.getElementById(id);}
function CCoordlist(){
	this.activationKeya = 'a';
	this.activationKeys = 's';
	this.activationKeyd = 'd';
	this.activationKeyf = 'f';
	this.activationKeyw = 'w';
	
	function gN(a,b) {
        return a.getElementsByTagName(b);
        }
	function dane(s)
	{var s1,s2;     s = s.innerHTML;
	  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
	     s2= s.lastIndexOf(')');
	  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
	      s= dels(s);
	return s;
	}
	function potega(podstawa)
	{   var wynik = podstawa; var i = 1;
	    while (i++ < 2)
	        wynik *= podstawa;
	return wynik;
	}
	function dels(s) {
	s = s.replace(new RegExp("[^\\d|]+","g"),"");
	return s;
	}
	function czas_marszu(odleglosc,pik, mie, axe, luk, zw, lk, kl, ck, tar, kat, ry, sz)
	{       var t;
	     if(sz>0) t=35;
	else if(tar>0||kat>0)t=30;
	else if(mie>0)t=22;
	else if(pik>0||axe>0||luk>0)t=18;
	else if(ck>0)t=11;
	else if(lk>0||kl>0)t=10;
	else if(zw>0)t=9;
	//var godzin = (Math.round(odleglosc)*t)/60 % 60; //minut
	//var min = (Math.round(odleglosc)*t)/60; //minut
	return formatTime_kes(odleglosc*t*60);
	}
	function formatTime_kes(time) {
                 var timeString='';
        var dni =   Math.floor(time/86400);
	var hours = Math.floor(time/3600) % 24;
	var minutes = Math.floor(time/60) % 60;
        if(dni>0) timeString = dni +' dni ';

	timeString += hours + ":";
	if(minutes < 10)
		timeString += "0";
	timeString += minutes;
	return timeString;
	}
var all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(1);
    if(table.innerHTML){
     e=gN(table,'td');
     e[e.length-1].innerHTML = e[e.length-1].innerHTML.replace("href=",' accesskey="x" href=');
     f=gN(table,'a');
     f[0].href ='javascript:pops(\''+f[0].href+'&ukryjmenu=tak\');';
           if(f[1].innerHTML.indexOf('Skasuj')>-1){/*brak KP*/}
      else if(f[2].innerHTML.indexOf('Skasuj')>-1){var del = f[2].href;}
     }

}

function noweOkno(){
var all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
        if(table.style){ alert(table.style.width);}

}

(function __construct() {
	// nachschauen, ob ein neues Update verfügbar ist
	checkForUpdate();
	
	// window-Objekt von außerhalb der GM-Sandbox ermitteln
	win = (typeof(unsafeWindow) != 'undefined') ? unsafeWindow : window;
	
	// Aktivierungs-Display erzeugen
	display = new CActivationDisplay();
	display.create();
	
	// Coordliste laden
	coordList = new CCoordlist();
	coordList.init();
})();

//-->
</script>
