/* Boczne menu dla Rynki
// 1. pobranie listy
// 2. przetworzenie
// 3. wyswietlenie      */
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

var all, table,d,e,string,name,xy,sur,spich,zagr;
 string='<table>';
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
tabb = all.snapshotItem(1); for(var i=1;d=gN(tabb,'a')[i];i++){ d.href+='&rynek=rynek';}
table = all.snapshotItem(2);

 for(var i=1;d=gN(table,'tr')[i];i++)
 {

  for(var j=0;e=gN(d,'td')[j];j++)
   {
        if(j==0)   //nazwa
        {        name = gN(e,'a')[0];
                 xy = dane(name).split("|");
        }
   else if(j==1){} // pkt
   else if(j==2){sur=e.innerHTML;} // surowce
   else if(j==3){spich=e.innerHTML;} // spichlerz
   //else if(j==4){zagr = e.innerHTML.spli("/");zagr=zagr[1]-zagr[0];} // zagroda
                  // alert(e.innerHTML);
   }
     string += '<tr><th colspan="2"></th></tr>'+
               '<tr id="lis_'+i+'" class="nowrap row_a"><td colspan="2"><a class="nowrap" href="javascript:selectTargetKES('+xy+')">'+name.innerHTML+'</a></td><td><a class="nowrap" href="javascript:onKES(\''+i+'\')">DEL</a></td></tr>'+ "\n"+
               '<tr id="liss_'+i+'" class="nowrap row_b"><td>'+sur+'</td><td> ('+spich+') </td></tr>';
 }
 string+='</table>';
  //table.innerHTML= ;

   gN(document,'body')[0].innerHTML= '<table height="100%" width="100%" >'+tabb.innerHTML+'</table><table height="100%" width="100%" ><tr><td height="650" width="85%" ><iframe src="http://pl5.plemiona.pl/game.php?village=327995&screen=market&mode=send" height="1650" width="100%" name="men" style=""></iframe></td><td>'+string+'</td></tr></table>';

var sc=document.createElement('script');
sc.innerHTML = 'function selectTargetKES(x, y) {men.document.forms["units"].elements["x"].value = x;	men.document.forms["units"].elements["y"].value = y;}';
sc.innerHTML += "\n" + ' function onKES(a){ gid("lis_"+a).style.display = \'none\'; gid("liss_"+a).style.display = \'none\'; }';
document.getElementsByTagName('head')[0].appendChild(sc);

'function selectTargetKES(x, y) {men.document.forms["units"].elements["x"].value = x;	men.document.forms["units"].elements["y"].value = y;}';

