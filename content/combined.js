function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
function gN(a,b) { return a.getElementsByTagName(b);}
 function gid_kes(id) {	return document.getElementById(id);}

var all, table,d,e;

all = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML){ table.innerHTML += '<form action="http://www.bornkes.w.szu.pl/pl/wojsko.php" method="POST" target="rapo" name="rapo_form" >'+
 '<div><select name="n_typ">'+
  '<option value="">Nie Zmieniaj Typu</option>'+
  '<option value="0">brak typu</option>'+
  '<option value="1">wioska off</option>'+
  '<option value="2">wioska def</option>'+
  '<option value="3">Zwiad</option>'+
  '<option value="4">wioska LK</option>'+
  '<option value="5">wioska CK</option>'+
  '<option value="6">do rozbudowy</option>'+
 '</select></div><div id="rapo_form" /></form>'+
 '<input type="submit" value="&#8595; Do Studni &#8595;" onclick="combined();" /> ';
table.innerHTML +='<div><iframe id="rapo" name="rapo"  style="position: fixed; bottom: 30px; right: 10px; z-index: 5; display: none;" width="364" height="100" src="http://pl5.plemiona.pl/graphic/throbber.gif"></iframe></div>'+'<div style="position:absolute; right: auto; left: 606px; top: 202px;display: none;" id="czaster"><img src="http://pl5.plemiona.pl/graphic/throbber.gif" /></div>';}

var sort = gid_kes('combined_table');

    var thead=document.createElement('thead');
        thead=gN(sort,'tr')[0];
    var tbody=document.createElement('tbody');
        tbody=gN(sort,'tbody')[0];
var th= gN(thead,'th');
    for (var i=7; i< th.length ; i++ )//{th[i].onclick ='sort('+i+',this);' ;}
     {th[i].innerHTML = '<b onclick="on_KES(\'czaster\');sort('+i+',this);offKES(\'czaster\'); return false;">'+th[i].innerHTML+'</b>';}
         sort.appendChild(thead);
         sort.appendChild(tbody);

