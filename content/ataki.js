function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str){
  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}
function dane(a){  var s,s1,s2;
  if( gN(a,'a') ){ s=gN(a,'a')[0].textContent;
    s1= s.lastIndexOf('(');
    s2= s.lastIndexOf(')');
     if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      return dels(s);  }
}
function dels(s) { s = s.replace(new RegExp("[^\\d|]+","g"),""); return s; }
function kwadrat(p){ return p*p; }
var do_ataku
function co_idzie(time)
{
  var do_atak = document.getElementsByClassName("timer")[0].innerHTML.split(':');
  do_ataku  = (do_atak[0]*3600)+ (do_atak[1]*60)+ (do_atak[2]*1);
    var co_to='';
   if(do_ataku < (time*35) && do_ataku<147600)
           co_to+='Szl,';
   if(do_ataku < (time*30) )
           co_to+='Tar,';
   if(do_ataku < (time*22) )
           co_to+='Mie,';
   if(do_ataku < (time*18) )
           co_to+='Top,';
   if(do_ataku < (time*11) )
           co_to+='CK,';
   if(do_ataku < (time*10) )
           co_to+='LK,';
   if(do_ataku < (time* 9) )
           co_to+='Zw';
 return  co_to;
}
function formatTime(time) {  co_to= co_idzie(Math.floor(time*60));  return  co_to; }
function test(id,a){  if( gN(a,'a') ){ var b=GET(id,gN(a,'a')[0].href); return b; }else{return 0;}  }
function noc(data){
var godzina = data.textContent.split(' ')[1].split(':')[0];
  if((godzina>-1 && godzina<8) || godzina==24){ return '*'; }return '';
}

  var id_atak= GET('id',window.location.search);
var all, table, url1,Ag,AN,Aw,Og,Ow,data,wa,wo,WA,noc ;

table = gid_kes('content_value');

  var td = gN( table , 'td');
  if(td.length>10){
      Ag=test('id',td[2]);
      AN=td[2].textContent;
   
      Aw=test('id',td[4]);     
      wa =dane(td[4]);
       if( gN(td[4],'a') )
        WA=td[4].textContent;
  
      Og=test('id',td[7]);

      Ow=test('id',td[9]);
      wo =dane(td[9]);
      
      if(td[10].textContent.indexOf('Przybycie')>-1){
      data=td[11].textContent; noc = noc(td[11]);
      }else if(td[12].textContent.indexOf('Przybycie')>-1){
      data=td[13].textContent;noc = noc(td[13]);
      }

  }
    wa = wa.split("|");
    wo = wo.split("|");

var odleglosc=Math.sqrt(kwadrat(wa[0]-wo[0])+kwadrat(wa[1]-wo[1]));
var co_to= formatTime(odleglosc);

      url1 = '&id_ataku='+id_atak+'&cel='+Ow+'&agr='+Aw+'&id_agr='+Ag+'&czas1='+data+'&co='+co_to;


table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/dw/ataki.php?'+url1+'" width="0" height="0"></iframe></td></tr>';


if(gid_kes('editInput')){

gid_kes('editInput').value=(noc +''+ co_to + ' => ' + AN + ' (' + wa[0] + '|' + wa[1] + ')');
}else if(gid_kes('label')){
gid_kes('label').innerHTML +=(' : '+noc +''+ co_to + ' => ' + AN + ' (' + wa[0] + '|' + wa[1] + ')');
}
var inputs = gN(table,'input');
if(inputs.length>0)
  for (var i=0; i< inputs.length ; i++ ){
    if(inputs[i].type=='button'){
    inputs[i].id = 'ok_next';

    }
  }
if(typeof(unsafeWindow) != 'undefined'){var $ = unsafeWindow.$; }else{ var $ = window.$; }
$(document).ready(function (){
var sc=document.createElement('script');
sc.innerHTML = "	$('#edit input:button').click(function () {parent.next();});" 
document.getElementsByTagName('head')[0].appendChild(sc);
});																												//						blond - parent.next() nie zaskakuje i editInput znów null
/*

function l(c){
a=gN(c,'td')[1].textContent.split(":");
var b = Math.floor(a[0]*60*60)+
        Math.floor(a[1]*60)+
        Math.floor(a[2]*1);
if( b < do_ataku ){gN(c,'td')[1].style.border ='3px solid red'; }else{gN(c,'td')[1].style.background ='green';}
return b;
}
      //  alert(do_ataku); // 405065
var tbody = gN(gid_kes('running_times'),'tbody')[0];
var tr = gN(tbody,'tr');
var c= new Array(tr[0],tr[1],tr[6],tr[7],tr[8],tr[12],tr[9],tr[2],tr[4],tr[5],tr[3],tr[10],tr[11],tr[13]);
		tbody.appendChild(c[0]);
		tbody.appendChild(c[1]);
	for(var i=2; i<c.length; i++){
	    if(i == 13 && do_ataku>147600 ){gN(c[13],'td')[1].style.border ='3px solid red';
            }else l(c[i]);
		tbody.appendChild(c[i]);
        }
//*/