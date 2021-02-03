function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)

function gN(a,b) { return a.getElementsByTagName(b);}
var all, table,d,e;

all = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML){ table.innerHTML += '<form action="http://www.bornkes.w.szu.pl/pl17/units.php" method="POST" target="rapo" name="rapo_form" id="rapo_form"></form><input type="submit" value="&#8595; Do Studni &#8595;" onclick="units();" /> ';
                      table.innerHTML +='<div style="position:fixed; bottom:0px; right:-10px;"><iframe id="rapo" name="rapo"  style="border:0pt;" width="364" height="100"></iframe></div>';
                    }

