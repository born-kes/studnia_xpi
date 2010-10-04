/* Boczne menu dla Rynki
// 1. pobranie listy
// 2. przetworzenie
// 3. wyswietlenie      */
function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
function GET(s){   for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0;
 var url=str.split("?");
  url=url[1].split("&");
   for (var i=0; i< url.length ; i++ )
   {var  ex=url[i].split("=");
         tablica[u++]=ex[0];
         tablica[u++]=ex[1];
   } return tablica;
}
var get= Explode(window.location.search);

var form = gN(document,'form')[GET('nr')].parentNode;

var all, table,d,e, name,xy,sur,spich,zagr;
var string='';
var a='a';
var v='';
/* ZEGAR * /
 function time(t){
      if(t.lastIndexOf('.')>-1 && t.lastIndexOf(' ')>-1 && t.lastIndexOf(':')>-1){
       var t0=t.split(" ");
       var t1=t0[0].split(".");
       var t2=t0[1].split(":");
       var time = new Date(t1[2], t1[1]-1, t1[0], t2[0], t2[1], t2[2]).getTime();
       var zm= new Date().getTime();
       var zmienna= new Date(time-zm);
//if(Math.floor(zmienna.getDate())==Math.floor(zmD.getDate())) str+='';
//else if(Math.floor(zmienna.getDate())+1 ==Math.floor(zmD.getDate())) str+='jutro o ';
var w,t ='';
if(zmienna>0){
if(zmienna.getDate()>0)
t +=( zmienna.getDate()-1)+ ' ';

t +=  zmienna.getHours() + ':';
 if(Math.floor(zmienna.getMinutes())<10)
t  +='0';
t +=    zmienna.getMinutes()+ ':';
 if(Math.floor(zmienna.getSeconds())<10)
t  +='0';t +=    zmienna.getSeconds();
w=true;
}else{t='skonczone';w=false;}
      }else{w=true;}

   return [t,w];
}

   var tim;
   var s = gN(td_id, 'span');
         for (var i=0; i< s.length ; i++ )
if(s[i].style.fontSize=='0pt'){
        s[i].style.fontSize='9pt';
        tim = time(s[i].textContent);
        if (tim[1])  s[i].className='timer red'; else   s[i].className='red';
         s[i].textContent = tim[0];

        }
/* Koniec ZEGARA */

if(GET('screen')=='memo')
{  v='true';                                          //alert('memo');
   var td_id = gid_kes("content_value");      //   alert(i_nr);
      var i_nr = GET('nr');
   var tabl_ = gN(td_id, 'b')[i_nr].innerHTML.split("\n");  //  alert(tabl_);   pobrane z INNER HTML  textContent
   var table = tabl_ ; //gN(td_id, 'b')[i_nr].textContent.split("\n");  alert(table);
    //*
 var explo,ek=0;                                   // alert(i_nr);
 for(var i=0;i<table.length;i++)
 {  if(table[i].lastIndexOf("|")== -1 )continue;
    if(table[i].lastIndexOf("_blank")> -1 )table[i] = table[i].replace("_blank","men2");
    if(table[i].lastIndexOf("_self")> -1 )table[i] = table[i].replace("_self","_blank");


  if(a=='a'){a='b';}else{a='a';}  name =tabl_[i];
  var pola = table[i].split(" ");
   for(var j=0;j<pola.length;j++)
   {  if(pola[j].lastIndexOf("|")== -1 )
        continue;
      else
      xy = dels(pola[j]).split("|");
      /** /
       if(xy[2]!=null)  xy[2]= pola[j].split("|")[2];


      // break;
     
     //* alert(test dla ponownego ataku, niestety w linku jest te¿ potrzebne village);* /

     if(xy[2]=='all' || xy[2]=='same') explo = 'http://pl5.plemiona.pl/game.php?village='+xy[1]+'&screen=place&try=confirm&type='+xy[0]+'&report_id='+xy[2]+'" target="men2';
     else/**/ explo = 'javascript:export_xy_KES('+xy+','+ek+')';
     
     string += '<tr id="lis_'+ek+'" class="nowrap row_'+a+'">'+
     '<td class="grey">odleglosc</td>'+
     '<td style="display:none;">'+name+'</td>'+
     '<td style="display:none;">'+xy[0]+'|'+xy[1]+'</td>'+
     '<td><a class="nowrap" href="javascript:onKES(\''+ek+'\')">Usun</a></td>'+
     '<td colspan="2">'+name+'<div id="czas_'+ek+'" /></td>'+
     '<th width="29"><a class="nowrap" href="'+explo+'" title="Przepisanie kordow na plac"><img  src="http://www.bornkes.w.szu.pl/img/kordy.gif" /></a></th>'+
     '<td  class="grey"><span id="ilcz_'+ek+'">0</span> <button onclick="gid_kes(\'ilcz_'+ek+'\').textContent = Math.floor(gid_kes(\'ilcz_'+ek+'\').textContent)-1;" style="font-size: 8pt;">-</button></td></tr>'+ "\n";
ek++;                                                                        //$(this).find('img');

}
    //alert(string);

}
var all = document.getElementsByTagName("hr");
  all[0].style.width = '280' + 'px';
/*
var all = document.getElementsByTagName("table");
for (var i = 0; i < all.length ; i++)
{
    all[i].innerHTML = '';
} */  }

var all = document.getElementsByTagName("a");

     if(GET('t')){var t='&t='+GET('t');}else{var t='';}

 var sc=document.createElement('table');
 sc.style.width = '100%';
 sc.style.display = 'none';
 sc.id = 'kesMenuBoczne';
sc.innerHTML =  '<tr><td valign="top"><br /><br /><br /> .. </td></tr>'+
'<tr><td valign="top">'+
'<div><table><thead><tr><td valign="top">'+
'<table class="vis" style="width:280px;" id="menvis"><thead><tr><td colspan="5">'+
'<h3>Przelicz dla nowej wioski '+
  '<button onclick="odlicz('+v+');" style="font-size: 8pt;">policz</button></h3> '+
  '</td></tr>'+
  '<tr>'+
  '<th onclick="sort(0,this);" style="cursor:pointer;" id="menvisSort">Odleglosc</th><td />'+
  '<th onclick="sort(1,this);" style="cursor:pointer;" colspan="2" >Nazwy wsi</th>'+
  '<td><input type="checkbox" id="auto_del" title="Auto usuwanie przy kliknieciu" />'+
//  '<td>Pola</td>'+
  '</tr></thead>'+
  '<tbody id="tabela_xy">'+string+'</tbody></table></div></td><td valign="top" width="100%" height="100%">'+
  '<iframe src="/game.php?village='+GET('village')+'&screen=place'+t+'" style="border: 1pt none ;" name="men2" id="men2"width="100%" height="700"></iframe>'+
  '</td></tr></table><br /><br />'+
  '<div><button style="font-size: 8pt;" onclick="opracuj_bb(gid_kes(\'div_edit\'));" >Opracuj</button>'+
  '<div style="display:none;" id="div_edit">'+form.innerHTML+'</div><br /></div></td></tr>';
document.getElementsByTagName('body')[0].appendChild(sc);

 var sc=document.createElement('script');
sc.innerHTML += "$('#men2').attr('src','/game.php?village="+GET('village')+"&screen=place"+t+"'); "+
"$('#main_layout').hide(3000,function(){$('#kesMenuBoczne').show(2000,function(){setInterval('zmianaAttr()',1000 );} )} ); \n "+
"var men2xy_dom = top.xy_dom;    \n "+
"function zmianaAttr(){                    \n "+
"    if(men2xy_dom!=top.xy_dom && top.czas){ \n "+
//                                           "alert('jestem');"+
"      men2xy_dom = top.xy_dom;    \n "+
"     odlicz(true); sort(0,gid_kes('menvisSort'));                       \n "+
"    }                                     \n "+
"} "+ "startTimer();";

document.getElementsByTagName('head')[0].appendChild(sc);
