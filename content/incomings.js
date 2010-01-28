var all, table;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(3);
  if( table.innerHTML.indexOf('Atak')>-1 ){

table = all.snapshotItem(0);


if (table.innerHTML){ table.innerHTML += '<tr><td colspan="3"><input value="Znaleziono nie opisane Ataki" onclick="next();" type="button">'+
                      '<div style="position:fixed; bottom:1px; right:-5px;" id="mono"><iframe id="rapo" style="border:1pt;" width="425" height="400"></iframe></div></td></tr>';}
var string = "var d,e;var j=e=0;var linki=new Array; \n"+
             "all = document.evaluate(\"//table[@class='vis']\",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); \n"+
             "table = all.snapshotItem(3); \n"+
             " for(var i=1;d=table.getElementsByTagName('tr')[i];i++) \n"+
             " {  if( d.getElementsByTagName('a')[0].innerHTML.indexOf('Atak')>-1 ) \n"+
             "     { linki[j++] = d.getElementsByTagName('a')[0].href; } \n"+
             " } \n"+
             " function next(){gid(\"mono\").style.display = ''; if(e<linki.length){"+
             " gid('rapo').src=linki[e]+'&ukryjmenu=tak'; e++;}else{alert('koniec');} } \n"+
             " \n";
             "alert('fin'); \n";

var sc=document.createElement('script');
sc.innerHTML = string;
document.getElementsByTagName('head')[0].appendChild(sc);
                                           }
