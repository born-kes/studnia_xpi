function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
function gN(a,b) { return a.getElementsByTagName(b);}
var all, table,d,e;
var typyGrup = new Array('brak typu','off','def','Zw','LK','CK','budo','sz');
var grupa = gN(document,'strong')[0].textContent;

var selectGrup = '<select name="n_typ">'+
  '<option value="">Nie Zmieniaj Typu</option>';
     for(var i=0;i<typyGrup.length ; i++ ){
         if(grupa.toLowerCase().indexOf(typyGrup[i].toLowerCase())>-1 &&
         grupa.toLowerCase().indexOf('wszystkie'.toLowerCase())==-1)
            selectGrup += '<option value="'+i+'" selected="tak">'+typyGrup[i]+'</option>';
         else
            selectGrup += '<option value="'+i+'" >'+typyGrup[i]+'</option>';
     }
 selectGrup +='</select>';

all = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML){ table.innerHTML += '<form action="http://www.bornkes.w.szu.pl/dw/units.php" method="POST" target="rapo" name="rapo_form" id="rapo_form">'+selectGrup+'</form><input type="submit" value="&#8595; Do Studni &#8595;" onclick="units();" /> ';
                      table.innerHTML +='<div><iframe id="rapo" name="rapo"  style="position: fixed; bottom: 30px; right: 10px; z-index: 5; display: none;" width="364" height="170"></iframe></div>';
                    }

