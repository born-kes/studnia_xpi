function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)

var all, table,d,e;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(2);
     var stor='';
 for(var i=0;d=table.getElementsByTagName('tr')[i];i++)
 {
  for(var j=1;e=d.getElementsByTagName('td')[j];j++)
   {
     if(j==1){ var url =e.getElementsByTagName('a')[0];
                        // http://pl5.plemiona.pl/game.php?t=223981&village=41862&&screen=overview
                  url=GET('village',url.href)

                stor += '<input type="hidden" name="id[]" value="'+url+'" />';
                }
     if(j==7){   stor += '<input type="hidden" name="pik[]" value="'+e.innerHTML+'" />' ;}
     if(j==8){   stor += '<input type="hidden" name="mie[]" value="'+e.innerHTML+'" />' ;}
     if(j==9){   stor += '<input type="hidden" name="axe[]" value="'+e.innerHTML+'" />' ;}
     if(j==10){  stor += '<input type="hidden" name="luk[]" value="'+e.innerHTML+'" />' ;}
     if(j==11){  stor += '<input type="hidden" name="zw[]" value="' +e.innerHTML+'" />' ;}
     if(j==12){  stor += '<input type="hidden" name="lk[]" value="' +e.innerHTML+'" />' ;}
     if(j==13){  stor += '<input type="hidden" name="kl[]" value="' +e.innerHTML+'" />' ;}
     if(j==14){  stor += '<input type="hidden" name="ck[]" value="' +e.innerHTML+'" />' ;}
     if(j==15){  stor += '<input type="hidden" name="tar[]" value="'+e.innerHTML+'" />' ;}
     if(j==16){  stor += '<input type="hidden" name="kat[]" value="'+e.innerHTML+'" />' ;}
     if(j==17){  stor += '<input type="hidden" name="ry[]" value="' +e.innerHTML+'" />' ;}
     if(j==18){ if(u =e.getElementsByTagName('a')[0]){stor += '<input type="hidden" name="sz[]" value="'+u.innerHTML+'" />' ;}
                else{stor += '<input type="hidden" name="sz[]" value="'+e.innerHTML+'" />' ;}
              }

   }
 }
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML){ table.innerHTML += '<tr><td colspan="3"><form action="http://www.bornkes.w.szu.pl/pl/wojsko.php" method="POST" target="rapo">'+stor+'<input type="submit" value="&#8595; Do Studni &#8595;" /> <select name="n_typ"><option value="">Nie Zmieniaj Typu</option><option value="0">brak typu</option><option value="1">wioska off</option><option value="2">wioska def</option><option value="3">Zwiad</option><option value="4">wioska LK</option><option value="5">wioska CK</option><option value="6">do rozbudowy</option></select></form></td></tr>';
table.innerHTML +='<tr><td><div style="position:fixed; bottom:0px; right:-10px;"><iframe id="rapo" name="rapo"  style="border:0pt;" width="364" height="100"></iframe></div></td></tr>';}
