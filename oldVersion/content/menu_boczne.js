if(typeof(unsafeWindow) != 'undefined'){
		gameData = unsafeWindow.game_data; $= unsafeWindow.$;}
else{ gameData = window.game_data; $= window.$; } var br="\n";

/* Boczne menu dla Rynki
// 1. pobranie listy
// 2. przetworzenie
// 3. wyswietlenie      */
function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function GET(s){   for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str){
	  var tablica = new Array(); var u=0;
 var url=str.split("?");
  url=url[1].split("&");
   for (var i=0; i< url.length ; i++ )
   {var  ex=url[i].split("=");
         tablica[u++]=ex[0];
         tablica[u++]=ex[1];
   } return tablica;
}
var get= Explode(window.location.search);
      var i_nr = GET('nr');
var form = gN(document,'form')[i_nr].parentNode;

var all, table,d,e, name,xy,sur,spich,zagr;
var string='';
var a='a';
var v='';

  v='true';
  
   var tabl_ = $("#content_value b:eq("+i_nr+")").html().split("\n");// alert(tabl_);     pobrane z INNER HTML  textContent
   var table = tabl_ 
    //*
 var explo,ek=0;                                   // alert(i_nr);
 for(var i=0;i<table.length;i++)
 { // if(table[i].lastIndexOf("|")== -1 )continue;
   // if(table[i].lastIndexOf("_blank")> -1 )table[i] = table[i].replace("_blank","men2");
  //  if(table[i].lastIndexOf("_self")> -1 )table[i] = table[i].replace("_self","_blank");


  if(a=='a'){a='b';}else{a='a';}  name =tabl_[i];
  var pola = table[i].split(" ");
   for(var j=0;j<pola.length;j++)
   {  if(!/(:?\d{1,3})\|(:?\d{1,3})/.test(pola[j]) ) 							//sprawdza czy istnieje xxx|yyy
        continue;
      else
      xy = G_xy(pola[j]);
       explo = 'javascript:export_xy_KES('+xy[1]+','+xy[2]+','+ek+')';
     
     string += ''+
br+     '<tr id="s_'+ek+'" class="nowrap row_'+a+'">'+
br+     '<td class="grey" style="display:none;">odleglosc</td>'+
//br+     '<td style="display:none;">'+xy[1]+'|'+xy[2]+'</td>'+
br+     '<td>'+
br+     ' <div class="palec rigg grey" onclick="$(\'#s_'+ek+'\').html(\'\')" >usun</div>'+  
br+     ' <div class="marg">'+name+'</div>'+
br+     ' <div class="leff margo" >droga: <span id="dys_'+ek+'"></span></div>'+
br+     ' <div id="czas_'+ek+'" class="rigg marg" ></div>'+
br+     '</td>'+
br+     '<td class="grey">'+
br+     '	<button id="ilcz_'+ek+'" onclick="'+explo+'" title="Przepisanie kordow na plac" style="font-size: 8pt;">0</button>'+
br+     '	<button onclick="$(\'#ilcz_'+ek+'\').text(function(a,b){return b-1;})" style="font-size: 6pt;" title="zliczanie minus 1">-</button>'+
     '</td></tr>'+ br;																				
ek++;                                                                        //$(this).find('img');

}


}
//var all = document.getElementsByTagName("hr");
 // all[0].style.width = '280' + 'px';

var all = document.getElementsByTagName("a");

     if(GET('t')){var t='&t='+GET('t');}else{var t='';}

 var sc=document.createElement('table');
 sc.style.width = '100%';
 sc.style.display = 'none';
 sc.id = 'kesMenuBoczne';
sc.innerHTML =  '<tr><td valign="top"><br /><br /><br /> .. </td></tr>'+ 											//wyrownanie
'<tr>'+
' <td valign="top">'+
'  <div>'+
'	 <table><thead>'+
'		<tr>'+
'			<td valign="top">'+
'				<table class="vis" style="width:280px;" id="menvis">'+
'				<thead>'+
'					<tr><td colspan="3">'+
'						<h3>Przelicz dla nowej wioski '+
'						<button onclick="odlicz('+v+');" style="font-size: 8pt;" class="palec">policz</button>'+
'						</h3> '+
'					</td></tr>'+
'					<tr>'+
'						<th onclick="d.o=d.o>0?-1:1;sort();" class="palec" style="display:none;">Odleglosc</th>'+
'						<th><a href="javascript:sort();">Nazwy wsi</a></th>'+
'						<td>Auto<input type="checkbox" id="auto_del" title="Automatyczne usuwanie przy kliknieciu po przepisaniu kordow do wioski" />'+
'					</tr>'+
'				</thead>'+
'				<tbody id="tabela_xy">'+string+'</tbody>'+
'				</table>'+
'			</td>'+
'		</tr>'+
'	</table>'+
'	</div>'+
'	</td>'+
'	<td valign="top" width="100%" height="100%">'+
'		<iframe src="/game.php?village='+GET('village')+'&screen=place'+t+'" style="border: 1pt none ;" name="men2" id="men2"width="100%" height="700"></iframe>'+
'	</td>'+
'</tr>'+
'</table>'+
'<br /><br />'+
'<div style="display:none;" id="div_edit">'+form.innerHTML+'</div><br />'+
'<div><button style="font-size: 8pt;" onclick="opracuj_bb($(\'div_edit\'));" >Opracuj</button>'+
'</td></tr>';
document.getElementsByTagName('body')[0].appendChild(sc);
$(document).ready(function(){
		$('#men2').attr('src','game.php?village='+GET('village')+'&screen=place'+t);
});
if (window.opera) {
	unsafeWindow = window;
}
var dy=-1;
var men2xy_dom;
//unsafeWindow.d = d;
function sort(){ 	
	var tbody=gid_kes('tabela_xy');
	for(var i=0, c=[], tr, trs=tbody.getElementsByTagName('tr'); tr=trs[i]; i++){c[i]=tr} // just make an array from trs
	c.sort(function(a,b){return (Math.floor(a.getElementsByTagName('td')[0].innerHTML)>Math.floor(b.getElementsByTagName('td')[0].innerHTML))?dy:-dy});
	for(var i=0; i<c.length; i++){
		tbody.appendChild(c[i]);
	}
}

unsafeWindow.zmianaAttr = function zmianaAttr(){
	if(men2xy_dom != unsafeWindow.menxyDrop()
	&& unsafeWindow.menCzasDrop()!='undefined'){
      men2xy_dom = unsafeWindow.menxyDrop();
     odliczanie(true); sort();
    }
};
//unsafeWindow.menxyDrop = function menxyDrop(){return top.xy_dom;}
function odliczanie(){

if(unsafeWindow.menxyDrop() == "undefined" && unsafeWindow.menCzasDrop() == "undefined"){return;}
 var xy_dom = unsafeWindow.menxyDrop().split("|");
 var marsz= (G_TempoMarszu(unsafeWindow.menCzasDrop())*60);
alert(marsz);
    $('#tabela_xy tr').each(function(){
    	var a = $(this).attr('id');
    	var xy_b = G_xy($('td:eq(1)',this).text());
    	var odleglosc = Math.sqrt(G_kwadrat(xy_dom[0]-xy_b[1])+G_kwadrat(xy_dom[1]-xy_b[2]));
    	
     		$('td:eq(0),#dy'+a,this).text( Math.floor( odleglosc *100 )/100 );
     		$('#cza'+a).html( G_timeDropNoc(Math.floor(odleglosc*marsz)) );
   	});   
};
 var sc=document.createElement('script'); //////////// htm-> php
sc.innerHTML += br+
	'$(\'#main_layout\').hide(3,function(){'+
	'$(\'#kesMenuBoczne\').show(2,function(){setInterval(\'zmianaAttr()\',3000 );}) } '+
	');'+
br+'function menxyDrop(){return top.xy_dom;}'+
br+'function menCzasDrop(){return top.czas;}'+
br+'startTimer();';
document.getElementsByTagName('head')[0].appendChild(sc);

$(document).ready(function(){
//function odlicz(v){
//if(v!=true)v=false;

//if(top.xy_dom == "undefined" && top.czas == "undefined"){return;}
// var xy_dom = top.xy_dom.split("|");
// var marsz= (top.czas*60);
		 
		$('#tabela_xy tr').each(function(){
			var c =	$(this).attr('id').split("_")[1];
			$('td:eq(1)',this).text(function(a,b){
      	
   	         var xy_b = G_xy(b).split("|");
				alert(a+"\n\n"+b+"\n\n"+c+"\n\n"+xy_b);
   	         
 
			});
   	});
});
