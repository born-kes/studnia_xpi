function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}

  var trade  = new Array('wood','stone','iron');
  var storage = Math.floor(gid_kes('storage').innerHTML/1000);
  if(storage>200)storage=200;
var wood = storage - Math.floor(gid_kes(trade[0]).innerHTML/1000);
var stone = storage - Math.floor(gid_kes(trade[1]).innerHTML/1000);
var iron = storage - Math.floor(gid_kes(trade[2]).innerHTML/1000);
/*if (wood>78){wood = 78;}else */  if (wood <1){wood  = 0;}
/*if (stone>78){stone = 78;}else */if (stone<1){stone = 0;}
/*if (iron>78){iron = 78;}else */  if (iron <1){iron  = 0;}

 var v="";

var t=''+
'<table class="main">'+
' <tbody>'+
'  <tr>'+
'   <th colspan="2">Edycja Szablonu Wezwij</th>'+
'  </tr>'+
'  <tr>'+
'   <td nowrap>Maksymalna ilosc w spichlerzu</td><td><input type="text" id="kes_storage" value="200000" /></td>'+
'  </tr>'+
'  <tr>'+
'   <td>Wioski zawierajace fraze w nazwie</td><td><input type="text" id="kes_name" value="[9oKesi]" /></td>'+
'  </tr>'+
'  <tr>'+
'   <td>Zaznacz by ukryc te wioski</td><td><input type="checkbox" id="kes_name_ukryj" checked="tak" />'+
'</td>'+
'  </tr>'+
'  <tr>'+
'   <td>Zapisz</td><td><input type="button" id="" value="zapisz" onclick="zapisz_kes()" />'+
                      '<input type="hidden" id="kes_wood" value="'+wood*1000+'" />'+
                      '<input type="hidden" id="kes_stone" value="'+stone*1000+'" />'+
                      '<input type="hidden" id="kes_iron" value="'+iron*1000+'" /></td>'+
'  </tr>'+
'<tr><th colspan="2"><a href="javascript:kes_test_market();" onclick="zapisz_kes()" id="Kes_edyt">Wprowadz</a>'+
'</th></tr>'+
' </tbody>'+
'</table>';

var y = '<table class="vis"><tbody><tr><th>=> Potrzebuje</th>'+
'<th><span class="icon  wood" /></th><th id="wood1">'+wood*1000+'</th>'+
'<th><span class="icon  stone" /></th><th id="stone1">'+stone*1000+'</th>'+
'<th><span class="icon iron" /></th><th id="iron1">'+iron*1000+'</th>'+
'</tr></tbody></table>';

table = gid_kes('content_value');
      gN(table,'td')[1].innerHTML+=y;
      gN(table,'td')[0].innerHTML=t;

function upload_budy(values){         //     spear sword axe archer spy light marcher heavy ram catapult knight snob
   var valuer = values.split(":");

  if(valuer.length>1)
  {
	 gid_kes('kes_storage').value	=valuer[0];
	 gid_kes('kes_name').value     	=valuer[1];
    if(valuer[2]=='false')
	gid_kes('kes_name_ukryj').checked=false;

    if(valuer[3]=='true'){
      gid_kes('Kes_edyt').innerHTML = ' Aktywny';
      v +='window.setTimeout(\"off_name()\",2300);';
    }else
      gid_kes('Kes_edyt').innerHTML = ' NieAktywny';
  }
  if(valuer[3]=='true')
    return true;
  else
    return false;
}
function getCookie(c_name){
if (document.cookie.length>0){
 var c_start;
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

 v+=""+
"function zapisz_kes(){      \n"+
"var 	string='';          \n"+
"	string+=gid_kes('kes_storage').value+':'; \n"+
"	string+=gid_kes('kes_name').value+':';    \n"+
"	string+=gid_kes('kes_name_ukryj').checked;\n"+
"var r = confirm('Czy Aktywowac ?');              \n"+
"	string += ':'+r;                          \n"+
"if(r){ gid_kes('Kes_edyt').innerHTML = ' Aktywny'; off_name();}\n"+
"else gid_kes('Kes_edyt').innerHTML = ' NieAktywny';\n"+
"	setCookie('market',string, 365);          \n"+
"}                                                \n"+

"function kes_test_market()\n"+
"{\n"+
" var table =gid_kes('village_list');\n"+
"  var tr = gN(table,'tr');\n"+
"   var kes_wood = Math.floor(gid_kes('kes_wood').value);\n"+
"   var kes_stone = Math.floor(gid_kes('kes_stone').value);\n"+
"   var kes_iron = Math.floor(gid_kes('kes_iron').value);\n\n"+

"for (var i=1; i< tr.length ; i++ )\n"+
" { if(gN(tr[i],'input').length==4)\n"+
"  {var drewno = Math.floor(dels_(tr[i],2));\n"+
"   var glina  = Math.floor(dels_(tr[i],3));\n"+
"   var zelazo = Math.floor(dels_(tr[i],4));\n"+
"   var kupcow = Math.floor(gN(tr[i],'td')[6].textContent.split('/')[0])*1000;\n\n"+

"	if(drewno > kes_wood ){ drewno = kes_wood; }\n"+
"	if(glina > kes_stone ){ glina  = kes_stone; }\n"+
"	if(zelazo > kes_iron ){ zelazo = kes_iron; }\n"+
"   if(kupcow < (drewno+glina+zelazo) )\n"+
"   {"+
"     var ile = (drewno+glina+zelazo)-kupcow;\n"+
"     if(ile<zelazo){zelazo-=ile;ile-=ile;}else if(ile>zelazo && zelazo>0 && ile>0){ile-=zelazo;zelazo=0;}\n"+
"     if(ile<glina ){glina -=ile;ile-=ile;}else if(ile>glina  && glina>0  && ile>0){ile-=glina; glina=0; }\n"+
"     if(ile<drewno){drewno-=ile;ile-=ile;}else if(ile>drewno && drewno>0 && ile>0){ile-=drewno;drewno=0;}\n"+
//"alert(kupcow +' ='+ (drewno+glina+zelazo)+' ile:'+ile);"+
"   }"+
"   gN(tr[i],'input')[0].value=drewno; kes_wood-=drewno;\n"+
"   gN(tr[i],'input')[1].value=glina; kes_stone-=glina ;\n"+
"   gN(tr[i],'input')[2].value=zelazo; kes_iron-=zelazo;\n"+
"  }\n "+
" }\n"+
"gid_kes('kes_wood').value =kes_wood;\n"+
"gid_kes('kes_stone').value=kes_stone;\n"+
"gid_kes('kes_iron').value =kes_iron;\n"+
"gid_kes('wood1').innerHTML =kes_wood;\n"+
"gid_kes('stone1').innerHTML=kes_stone;\n"+
"gid_kes('iron1').innerHTML =kes_iron;\n"+
"}\n\n"+
"function off_name()\n"+
"{"+
"var tablica = gN(gid_kes('village_list'),'tr');\n"+
"var names = gid_kes('kes_name').value;\n"+
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
"function aea(){window.setTimeout(\"kes_test_market()\",500);} \n"+
"function dels_(s,r) { s= (dels(gN(s,'td')[r].textContent)); return s;}\n"+
  //*
"function aes(){"+
"var inputs = gN(gid_kes('village_list'),'input');\n"+
"for (var i=3; i< inputs.length ; i++ )\n"+
"{\n"+
"    var inp = inputs[i];\n"+
"    if(inp.type=='button') \n"+
"     inp.onclick = aea;\n"+
"  }   \n"+
"} \n";
if(upload_budy( getCookie('market') ))
  v+=" window.setTimeout(\"aes()\",2000);\n";

var sc=document.createElement('script');
sc.innerHTML = v;
document.getElementsByTagName('head')[0].appendChild(sc);

            //onclick ="alert('jestem')";
