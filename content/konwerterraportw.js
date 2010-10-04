/* Funkcje do wychwycenia danych */

function gid_kes(id){return document.getElementById(id);}

function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } return false; }
function Explode(str){
  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)

function gN(a,b) { return a.getElementsByTagName(b);}
function wojsko(a,b) {var c = a.innerHTML - b.innerHTML;  return c;}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
 return s;}
function dane(s){
var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}/**/
function potega(podstawa){
   var wynik = podstawa; var i = 1;
    while (i++ < 2)
        wynik *= podstawa;
    return wynik;
}
function typ_w(arra){
if(arra[4]>4000){return 3;}
else if( (arra[2].innerHTML + (arra[6].innerHTML*4)+(arra[6].innerHTML*4)) > 300){return 1;}
else if( (arra[0].innerHTML + arra[1].innerHTML + arra[3].innerHTML + (arra[8].innerHTML*4)) > 300){return 2;}
return 0;
}                                      //  1   2    3     4   5    6   7   8    9  10   11  12
function czas_marszu(odleglosc,arra){  // pik, mie, axe, luk, zw, lk, kl, ck, tar, kat, ry, sz
       var t;
     if(arra[12].innerHTML>0 ) t=35;
else if(arra[9].innerHTML>0 || arra[10].innerHTML>0 ) t=30;
else if(arra[2].innerHTML>0 ) t=22;
else if(arra[1].innerHTML>0 || arra[3].innerHTML>0 || arra[4].innerHTML>0 ) t=18;
else if(arra[8].innerHTML>0 ) t=11;
else if(arra[6].innerHTML>0 || arra[7].innerHTML>0 ) t=10;
else if(arra[5].innerHTML>0 ) t=9;
else t=0;
return formatTime_kes(odleglosc*t*60);
}
function formatTime_kes(time){
                 var timeString='';
        var dni =   Math.floor(time/86400);
	var hours = Math.floor(time/3600) % 24;
	var minutes = Math.floor(time/60) % 60;
	var sekund = Math.floor(time) % 60;
        if(dni>0) timeString = dni +' dni ';

	timeString += hours + ":";
	if(minutes < 10)
		timeString += "0";		
	timeString += minutes+":";
	if(sekund < 10)
		timeString += "0";		
	timeString += sekund;
 return timeString;
}
function wyciagaID(str){
   str= Explode(str);
      for (var i=0; i< str.length ; i++ ) if(str[i].lastIndexOf('id')>-1) return str[i+1] ;
}
function time(t){
      if(t.lastIndexOf('.')>-1 && t.lastIndexOf(' ')>-1 && t.lastIndexOf(':')>-1){
       var t0=t.split(" ");
       var t1=t0[0].split(".");
       var t2=t0[1].split(":");
       var time = new Date(
                           2000+Math.floor(t1[2]),
                           Math.floor(t1[1])-1,
                           Math.floor(t1[0]),
                           Math.floor(t2[0]),
                           Math.floor(t2[1]),
                           Math.floor(t2[2])
                           ).getTime();
       var teraz= new Date().getTime();
       var zmienna= teraz-time;
       var dni,godz,t ='';
       dni =  Math.floor(zmienna/(1000*60*60*24));
       godz = Math.floor(zmienna/(1000*60*60)); // alert(zmienna+"/"+(1000*60*24));
        if(godz>0){
           if(dni==1)
              t = '1 dzien ';
          else if(dni>1)
              t = dni + ' dni ';
          else if(godz==1)
              t =  '1 godzine';
          else if(godz>1 && godz<5)
              t =  godz + ' godziny';
          else if(godz>4)
              t =  (godz) + ' godzin';
        }else
              t = 'mniej niz godzine';

   return t;
       }
   return '';
}
/* Koniec definicji Funkcji*/

/* Dodawanie skrutów klawiszowych */
var all, table,d,e,f,s,v,heddde;
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

table = all.snapshotItem(1);
    if(table.innerHTML){
     for(var j=0;e=gN(table,'a')[j];j++){
     e.id='href'+j;
     if(j==0){e.textContent +=' (key c)'; e.title="klawisz c"; e.id="key_c"}
     if(j==3){e.textContent +=' (key z)'; e.title="klawisz z"; e.id="key_z"}
     if(j==4){e.textContent +=' (key x)'; e.title="klawisz x"; e.id="key_x"}
     }
    }
     
table = all.snapshotItem(2);
var ahref = gN(table,'a');
if(ahref.length>6 ){
      for(var j=ahref.length-1;e=ahref[j];j--)
        if(e.textContent.lastIndexOf('Ponowny napad wszystkimi wojskami')>-1){
          var napadWszystkimiWojskami=e.href;
              e.textContent +=' (key q)';
              e.id="key_q"
              e.title="klawisz q";
      }else if(e.textContent.lastIndexOf('Ponowny napad tymi samymi wojskami')>-1){
          var napadTymiWojskami= e.href;
              e.textContent +=' (key w)';
              e.id="key_w"
              e.title="klawisz w";
      }

}
function CInlinePopup(){
	var el = null;
	
	this.KeyZ = 'z';
	this.KeyX = 'x';
	this.KeyC = 'c';
	this.KeyQ = 'q';
	this.KeyW = 'w';
	
	this.$ = function(id){return document.getElementById(id);}
        this.gid= function(id){return document.getElementById(id);}
	this.init = function() {
		var popup = el = document.body.appendChild(document.createElement('div'));
		popup.id = 'DSmakeBBCoordListOnMap_listPopup';
		popup.className = 'popup_style ui-draggable';
		popup.style.width = '400px';
		popup.style.position = 'absolute';
		popup.style.display = 'none';
		popup.style.top = '100px';
		popup.style.right = '300px';
		popup.style.zIndex = '9999';
		
		var head = popup.appendChild(document.createElement('div'));
		head.id = 'DSmakeBBCoordListOnMapPopup_menu';
		head.className = 'popup_menu';
		
		var closer = head.appendChild(document.createElement('a'));
		closer.href = 'javascript:void(0);';
		closer.addEventListener('click', listPopup.hide, false);
		closer.appendChild(document.createTextNode("zamknij"));
		closer.style.paddingRight = '3px';
		
		var content = popup.appendChild(document.createElement('div'));
		content.id = 'DSmakeBBCoordListOnMapPopup_content';
		content.className = 'popup_content';
		content.style.height = '730px';
		content.style.padding = '8px';
		content.style.overflow = 'auto';
		
		var outputContainer = content.appendChild(document.createElement('div'));
		outputContainer.style.width = '100%';
		var outputArea = outputContainer.appendChild(document.createElement('iframe'));
		outputArea.id = 'frame_kes_popup';
		outputArea.style.width = '340px';
		outputArea.style.height = '700px';
		outputArea.style.marginRight = 'auto';
		outputArea.style.marginLeft = 'auto';
		outputArea.style.backgroundColor = 'white';
		outputArea.style.border = '0px';
		outputArea.style.padding = '3px';
		outputArea.style.textAlign = 'center';
		outputArea.style.overflow = 'auto';		

 		document.addEventListener('keydown', listPopup.handlePressedKeys, false);

	};
	this.hide = function() {
		var popup = listPopup.$('DSmakeBBCoordListOnMap_listPopup');
		if(popup.style.display != 'none') {
			popup.style.display = 'none';
		}
	};
	this.show = function() {
		var popup = listPopup.$('DSmakeBBCoordListOnMap_listPopup');
		if(popup.style.display == 'none') {
			popup.style.display = 'block';
		}
	};
	this.handlePressedKeys = function(e) {
	    	
		var pressedChar = String.fromCharCode(e.which).toLowerCase();
		      if(pressedChar == listPopup.KeyX.toLowerCase()) {
                  window.location=listPopup.$('key_x').href;
		}else if(pressedChar == listPopup.KeyZ.toLowerCase()) {
                  window.location=listPopup.$('key_z').href;
		}else if(pressedChar == listPopup.KeyC.toLowerCase()) {
                     listPopup.show();
 listPopup.gid('frame_kes_popup').src = listPopup.$('key_c').href;
                }else if(pressedChar == listPopup.KeyQ.toLowerCase()) {
                     listPopup.show();
 listPopup.gid('frame_kes_popup').src = listPopup.$('key_q').href;
                }else if(pressedChar == listPopup.KeyW.toLowerCase()) {
                     listPopup.show();
 listPopup.gid('frame_kes_popup').src = listPopup.$('key_w').href;

                }


	};

}
/* Koniec Deklaracji Skrutów klawiszowych */

/* Data Raportu */
if(d=gN(table,'tr')[1]){
    var data= gN(d,'td')[1].innerHTML;
       gN(d,'td')[1].innerHTML+= '<span style="float:right;">raport ma: <b> '+ time(data)+'</b></span>';
}



/* Tabela informacji o atakuj±cym */
var tableAttack = gid_kes("attack_info_att");
var a_typ,aXY,a_w=0;

var idWsiAtt = wyciagaID( gN(gN(tableAttack,'tr')[1],'a')[0].href ); // pobraæ id (ostatnia dana z url);
    aXY =  dane( gN(gN(tableAttack,'tr')[1],'a')[0] ).split("|");
  /* Dane o wojskach atakuj±cego */
  if(gid_kes("attack_info_att_units")){ a_w=1;
    var tableUnits = gN(gid_kes("attack_info_att_units"),'tr');
    tableUnits[2].className = 'red';
    var zostaloAtt = new Array();
    var wojskAtt = new Array();
            for(var j=1;j<13;j++){ wojskAtt[j-1]= gN(tableUnits[1],'td')[j].textContent;
             zostaloAtt[j-1]= wojsko(gN(tableUnits[1],'td')[j] , gN(tableUnits[2],'td')[j]);
             
            }

          var a_typ = typ_w( gN(tableUnits[1],'td') );

     var zostaloTR='<tr class="center green"><td style="text-align:left;">Zostalo:</td>';
      for(var j=0;j<zostaloAtt.length;j++)
       if(zostaloAtt[j].innerHTML==0) zostaloTR += '<td class="hidden">0</td>';
       else zostaloTR += '<td>'+zostaloAtt[j]+'</td>';

         var t='';
          for(var i=0 ; e=gN(tableUnits[1],'td')[i];i++)t += e.innerHTML+',';

     }
            gN(tableAttack,'tbody')[a_w].innerHTML +=( zostaloTR+"\n\n"+
                   '<tr><td valign="top"><p>Studnia</p>Raport ma:</td><td colspan="12">'+
                                         '<iframe src="http://www.bornkes.w.szu.pl/dw/raport.php?'+
                                         '&o0=0&data='+data+
                                         '&typ='+a_typ+
                                         '&w='+zostaloAtt+
                                         '&w0='+wojskAtt+
                                         '&id='+idWsiAtt+
                                         '" height="55" width="102%" style="border:0pt;"></iframe></td></tr>');
            tableAttack.innerHTML +='<tr><th>Atak szedl:</th><th id="marsz_atak" style="float:right;"></th></tr>';

/* Informacje o Obroñcy */
var tableObroncy = gid_kes("attack_info_def");
var oXY,mur,o_w=0;
var idWsiObr = wyciagaID(gN(gN(tableObroncy,'tr')[1],'a')[0].href); // pobraæ id (ostatnia dana z url);
    oXY =  dane( gN(gN(tableObroncy,'tr')[1],'a')[0] ).split("|");
    var zostaloObrTR='';
  /* Dane o wojskach Obroncy */
  if(gid_kes("attack_info_def_units")){ o_w=1;
    gid_kes("attack_info_def_units").parentNode.innerHTML= '<span class="green" style="float:right;" id="lv_mur"></span><br>'+
                                                            gid_kes("attack_info_def_units").parentNode.innerHTML;

        var tableUnitsObr = gN(gid_kes("attack_info_def_units"),'tr');
        tableUnitsObr[2].className ='red';
        var zostaloObr = new Array();
             for(var j=1;j<13;j++)
              zostaloObr[j-1]= wojsko( gN(tableUnitsObr[1],'td')[j] , gN(tableUnitsObr[2],'td')[j] );
      zostaloObrTR='<tr class="center green"><td style="text-align:left;">Zostalo:</td>';
     
      for(var j=0;j<zostaloObr.length;j++)
       if(zostaloObr[j].innerHTML==0) zostaloObrTR+='<td class="hidden">'+zostaloObr[j]+'</td>';
       else zostaloObrTR+='<td>'+zostaloObr[j]+'</td>';
  }
     /* Wyszpiegowane */
     if(gid_kes("attack_spy")){
         if(gid_kes("attack_spy").innerHTML.indexOf('Budynki:')>=0){
            var mur = 0;
            var e=  gid_kes("attack_spy");
              if(e.innerHTML.indexOf('Mur obronny')>=0){
                var mu=gN(e,"b");
                   mur = dels(mu[mu.length-1].innerHTML);
              }
          }
      }
      if(gid_kes("attack_results")){ var mu,mur;
           for(var i=0; e=gN(gid_kes("attack_results"),'td')[i] ; i++ )
               if(e.innerHTML.indexOf('Mur')>=0){
                 mu=gN(e,"b");
                 mur = dels(mu[mu.length-1].innerHTML);
               }

      } //alert(zostaloObrTR);
      //if(zostaloObrTR=='undefined')var zostaloObrTR='';
           gN(tableObroncy,'tbody')[o_w].innerHTML +=( zostaloObrTR+"\n\n"+
                    '<tr><td valign="top"><p>Studnia</p>Raport ma:</td><td colspan="12">'+
                                         '<iframe src="http://www.bornkes.w.szu.pl/dw/raport.php?'+
                                         '&o0=1&data='+data+
                                         '&w='+zostaloObr+
                                         '&Mur='+mur+
                                        '&id='+idWsiObr+
                                        '&zw='+zostaloAtt[4]+
                                          '" height="55" width="102%" style="border:0pt;"></iframe></td></tr>');
     if(gid_kes("lv_mur") && mur!=null){gid_kes("lv_mur").innerHTML='poziom Muru:<b>'+mur+'</b>';}
//#######


            // Czas Marszu Ataku
     var odleglosc=Math.sqrt(potega(aXY[0]-oXY[0])+potega(aXY[1]-oXY[1]));
         odleglosc = Math.floor(odleglosc*1000)/1000;
        //  alert(odleglosc+"\n"+t);
         gid_kes('marsz_atak').innerHTML+= czas_marszu(odleglosc, gN(tableUnits[1],'td'));

///###############################	
(function __construct() {
	// window-Objekt von außerhalb der GM-Sandbox ermitteln
	win = (typeof(unsafeWindow) != 'undefined') ? unsafeWindow : window;
	
	// Aktivierungs-popup
	listPopup = new CInlinePopup();
	listPopup.init();
       // listPopup.show();    gid_kes('frame_kes_popup').src=;
})();
