if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; }else{ var data = window.game_data }

var mur = data.village.buildings.wall;
var valliage = data.village.id ;
         //     spear sword axe archer spy light marcher heavy ram catapult knight snob
function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}

function efektCookie(values){
   var valuer = values.split(":");

  if(valuer.length>1)
  {
	gid_kes('kes_name_wsi').value=valuer[0];
    if(valuer[1]=='false')
	gid_kes('kes_name_ukryj').checked=false;
    else
	gid_kes('kes_name_ukryj').checked=true;

    if(valuer[2]=='true'){
      gid_kes('Kes_edyt').innerHTML = ' Aktywny';
    //  v +='window.setTimeout(\"off_name()\",2300);';
    }else
      gid_kes('Kes_edyt').innerHTML = ' NieAktywny';

  if(valuer[2]=='true')
    return true;
  else
    return false;
  } return false;
}
function getCookie(c_name){
if (document.cookie.length>0){
 var c_start,c_end;
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
 return "";
}

var table = gid_kes('content_value');
var tabelkaOpcji =                 '<table width="300" class="vis"><tbody>'+
                                   '<tr><th colspan="2">Ukrywanie wiosek na liscie:</th></tr>'+
                                   '<tr><td>Fraza w Nazwie wioski</td>'+
                                       '<td><input type="text" id="kes_name_wsi" value="" /></td></tr>'+
                                   '<tr><td>Zaznacz by ukryc te wioski</td>'+
                                       '<td><input type="checkbox" checked="tak" id="kes_name_ukryj" onclick="off_name();" /></td></tr>'+
                                   '<tr><th colspan="2"><a href="javascript:kes_test_plac();" onclick="zapisz_kes();return false" id="Kes_edyt">Wprowadz</a></th></tr>'+
                                   '<tr id="kes_time_atak"></tr>'+
                                   '</tbody></table>';

var naglowek =       '<h2>Plac Wezwij<br>pomocy z wlasnych wiosek</h2>'+
                                   'Opcja ta pozwala szybko wezwac do wioski w ktorej jestes,<br>'+
                                   'wsparcie z Twoich sasiednych wiosek.<br>'+
                                   '<h4> Wtyczka wspiera te opcje</h4>'+
                                   'Dodaje info co jest w wiosce.<br>'+
                                   'Mozna tez ukryc wioski ze wzgledu na ich nazwe (np wioski frontowe).<br>'+
                                   'Wchodzac z wioski <b>(przysclij Pomoc z wlasnych wiosek)</b><br>'+
                                   '<i>Opcja ta pojawia sie przy ataku na wioske</i><br>'+
                                   'zaznacza extra wsparcie które zdazy dojsc przed atakiem.<br>';
                                   
var iUrl='http://cdn.tribalwars.net/graphic/unit';               //5               7              9
var enName = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob');
var plName = new Array('Pikinierow','Miecznikow','Topornikow','Lucznikow','Zwiadowcow','Lekkich kawalerzystow','Lucznikow na koniach','Ciezkich kawalerzystow','Taranow','Katapult','Rycerz','Szlachcicow');
var tabelkaInwoWioski =  ''+
	'<div style="display: block;"><table width="100%" class="vis">'+
	'<tbody>'+
	'<tr><th>Jednostki</th><th>z Wioski</th><th>Pomoc</th></tr>';
    for (var i=0; i< enName.length ; i++ )    //zawiera http://pl5.plemiona.pl/javascript
    tabelkaInwoWioski +=   '<tr style="display:none;">'+
                           '<td><img src="'+iUrl+'/unit_'+enName[i]+'.png?1" alt=""> '+plName[i]+'</td>'+
                                  '<td><strong id="unit_'+enName[i]+'_kes" /></td>'+
                                  '<td><strong id="unit_'+enName[i]+'_fal_kes" /></td>'+
                                  '</tr>';
    tabelkaInwoWioski +=''+
        '<tr style="display:none;"><th>Wojska Ofensywne</th>'+
          '<th><strong id="unit_off_kes" class="red">0</strong> %</th>'+
          '<th><strong id="unit_off_fal_kes" class="red">0</strong> %</th>'+
        '</tr>'+
        '<tr style="display:none;"><th>Defensywa</th>'+
          '<th><strong id="unit_def_kes" class="red">0</strong> %</th>'+
          '<th><strong id="unit_def_fal_kes" class="red">0</strong> %</th>'+
        '</tr>'
        '<tr><th>Mury Obronne</th><td>Poziom:</td><th>'+mur+'</th></tr>'
	'</tbody></table></div>';

       gN(table,'tr')[0].innerHTML= '<td valign="top" id="ab1" width="300">'+tabelkaOpcji+'</td>'+
                                    '<td valign="top" id="ab2">'+naglowek+'</td>'+
                                    '<td valign="top" id="ab3" width="250">'+tabelkaInwoWioski+'</td>';
var sc=document.createElement('script');

if(efektCookie( getCookie('plac_call') ))
    sc.innerHTML +=" window.setTimeout(\"off_name()\",2000); \n";


  var time =  window.location.search.split("=");
if(time[time.length-2].indexOf('time')>-1){

function tdS(td){ if(td.textContent>0)
 td.style.border ='3px solid green'; else td.style.background ='green';  // '#33CC00'
}
gid_kes('kes_time_atak').innerHTML = '<td colspan="2">atak za: <b>'+time[time.length-1]+'</b></td>';


   var aHref= gN(gid_kes('village_troup_list').parentNode,'a');
    for(var i=0; i< aHref.length ; i++ ){
        aHref[i].href+='&time='+time[time.length-1];
    }
    var do_atak = time[time.length-1].split(':');
    var do_ataku  = (do_atak[0]*3600)+ (do_atak[1]*60)+ (do_atak[2]*1);

    var tabela = gid_kes('village_troup_list');
    var tablica= gN(tabela,'tr');

  for(var i=1; i< tablica.length ; i++ ){
    var td = gN(tablica[i],'td');
    var odleglosc = (td[1].textContent) *3600;
   if(do_ataku > (odleglosc*0.5) ) tdS(td[10])+tdS(td[11]);
   if(do_ataku > (odleglosc*0.366))tdS(td[3]);
   if(do_ataku > (odleglosc*0.3) ) tdS(td[2])+tdS(td[4])+tdS(td[5]);
   if(do_ataku > (odleglosc*0.183))tdS(td[9]);
   if(do_ataku > (odleglosc*0.167))tdS(td[7])+tdS(td[8]);
   if(do_ataku > (odleglosc*0.15) )tdS(td[6]);
  }
  sc.innerHTML += "\n"+
  "function aes(){ \n"+
  "var inputs = document.getElementById('village_troup_list').getElementsByTagName('input'); \n"+
  " for (var i=0; i< inputs.length ; i++ )\n"+
  " {\n"+
  "    var inp = inputs[i];\n"+
  "    if(inp.type=='button') \n"+
  "     inp.onclick = aea;\n"+
  "  }   \n"+
  "} \n"+
  "function aea(){ \n"+
  "  var inputs= this.parentNode.parentNode.getElementsByTagName('input'); \n"+
  "   for (var i=0; i< inputs.length-1 ; i++ ){ \n"+
  "       if(inputs[i].parentNode.style.border =='' \n"+
  "       && inputs[i].parentNode.style.background=='') \n"+
  "       inputs[i].value = 0; \n"+
  "   } \n"+
  "} \n"+
  " window.setTimeout(\"aes()\",1230);\n";
}
sc.innerHTML += " \n"+
// Zapisanie aktywacji lub dezAktywacji
"function zapisz_kes(){      \n"+
"var 	string='';          \n"+
"	string+=gid_kes('kes_name_wsi').value+':';    \n"+
"if(gid_kes('kes_name_wsi').value==''){alert('Fraza w Nazwie wioski nie moze byc pusta.');return; } \n"+
"	string+=gid_kes('kes_name_ukryj').checked;\n"+
"var r = confirm('Czy Aktywowac ?');              \n"+
"	string += ':'+r;                          \n"+
"if(r){ gid_kes('Kes_edyt').innerHTML = ' Aktywny'; off_name();}\n"+
"else gid_kes('Kes_edyt').innerHTML = ' NieAktywny';\n"+
"	setCookie('plac_call',string, 365);       \n"+
"}                                                \n"+
// ukrywanie wiosek w aktywnym trybie
"function off_name(){\n"+
"if(gid_kes('kes_name_wsi').value==''){alert('Fraza w Nazwie wioski nie moze byc pusta.');return; } \n"+
"var tablica = gN(gid_kes('village_troup_list'),'tr');\n"+
"var names = gid_kes('kes_name_wsi').value;\n"+
"if(gid_kes('kes_name_ukryj').checked==false) var war =false; else var war=true;\n"+
" for (var i=1; i< tablica.length ; i++ )\n"+
" {"+
"  if(tablica[i].textContent.indexOf(names)==-1 && war){tablica[i].style.display= 'none';}\n"+
"  else\n"+
"  if(tablica[i].textContent.indexOf(names)>-1 && !war){tablica[i].style.display= 'none';}\n"+
"  else{tablica[i].style.display= '';}\n"+
" if(gN(tablica[i],'td')[6].textContent.split('/')[0]<50 ){tablica[i].style.display= 'none';}"+
" }\n"+
"}"+

// Ajax sprawdza co jest w wiosce
" function upKesi(a,b){\n"+
"if(b>0){\n" +
" $('#unit_'+a+'_kes').parent().parent().show();\n"+
" $('#unit_'+a+'_kes').html(b);\n"+
"} }\n"+
"$.ajax({type:'GET',url:'game.php?village="+valliage+"&screen=overview&json=1&source="+valliage+"',dataType:'json',success:function(msg){\n";
var msg = 'msg[0].units.';
var fo = '.count.foreign';
var ho = '.count.home'
    for (var i=0; i< enName.length ; i++ )    //zawiera http://pl5.plemiona.pl/javascript
sc.innerHTML += " \n"+
"   upKesi('"+enName[i]+"_fal',"+msg+enName[i]+fo+"); \n"+
"   upKesi('"+enName[i]+    "',"+msg+enName[i]+ho+"); \n";

sc.innerHTML += " \n"+
"upKesi('def', Math.floor(Math.floor( "+msg+enName[0]+ho+"*1+" +msg+enName[1]+ho+"*1+"  +msg+enName[3]+ho+"*1+(" +msg+enName[7]+ho+"*6)+("+msg+enName[9]+ho+"*8) )/200) );\n"+
"upKesi('off', Math.floor(Math.floor( "+msg+enName[2]+ho+"*1+("+msg+enName[5]+ho+"*4)+("+msg+enName[6]+ho+"*5)+("+msg+enName[8]+ho+"*5)+("+msg+enName[9]+ho+"*8)+("+msg+enName[11]+ho+"*100))/200) );\n"+
"upKesi('def_fal', Math.floor(Math.floor( "+msg+enName[0]+fo+"*1+" +msg+enName[1]+fo+"*1+"  +msg+enName[3]+fo+"*1+(" +msg+enName[7]+fo+"*6)+("+msg+enName[9]+fo+"*8) )/200) ); \n"+
"upKesi('off_fal', Math.floor(Math.floor( "+msg+enName[2]+fo+"*1+("+msg+enName[5]+fo+"*4)+("+msg+enName[6]+fo+"*5)+("+msg+enName[8]+fo+"*5)+("+msg+enName[9]+fo+"*8)+("+msg+enName[11]+fo+"*100))/200) );\n"+
"\n }});";
document.getElementsByTagName('head')[0].appendChild(sc);

