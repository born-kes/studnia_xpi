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
 for(var i=1;d=table.getElementsByTagName('tr')[i];i++)
 {
  for(var j=0;e=d.getElementsByTagName('td')[j];j++)
   {
     if(j==0){ var url =e.getElementsByTagName('a')[0];
                  url=GET('village',url.href);
                stor += '<input type="hidden" name="id[]" value="'+url+'" />';
                }
     if(j==17){  //alert(e.innerHTML);
                if(u =e.getElementsByTagName('span')[0]){stor += '<input type="hidden" name="mur[]" value="'+u.innerHTML+'" />' ;}
                else{stor += '<input type="hidden" name="mur[]" value="'+e.innerHTML+'" />' ;}
              }
   }
 }
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML) table.innerHTML += '<tr><td colspan="3"><form action="http://www.bornkes.w.szu.pl/pl/mur.php" method="POST" target="rapo">'+stor+'<input type="submit" value="&#8595; Do Studni &#8595;" /></form></td></tr>';
table.innerHTML +='<tr><td><div style="position:fixed; bottom:0px; right:-10px;"><iframe id="rapo" name="rapo"  style="border:0pt;" width="364" height="100"></iframe></div></td></tr>';

