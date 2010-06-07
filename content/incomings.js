function gid_kes(id){return document.getElementById(id);}
var all, table;
//all = document.evaluate("//table[@class='vis overview_table ']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
//table = all.snapshotItem(0);
table = gid_kes("incomings_table");

  if( table.innerHTML.indexOf('Atak')>-1 )
  {

  var tdclas = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
  tdclass = tdclas.snapshotItem(0);

   if (tdclass.innerHTML){ tdclass.innerHTML += '<input value="Znaleziono nie opisane Ataki" onclick="next();" type="button">'+
                      '<div style="position:fixed; bottom:1px; right:-5px;" id="mono"><iframe id="rapo" style="border:1pt;" width="425" height="400"></iframe></div>';}

var string = "var d,e;var j=e=0;var linki=new Array; \n"+
             "all = document.evaluate(\"//table[@class='vis overview_table ']\",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); \n"+
             "table = all.snapshotItem(0); \n"+
             " for(var i=1;d=table.getElementsByTagName('tr')[i];i++) \n"+
             " {  if( d.getElementsByTagName('a')[0].innerHTML.indexOf('Atak')>-1 ) \n"+
             "     { linki[j++] = d.getElementsByTagName('a')[0].href; } \n"+
             " } \n"+
             " function next(){gid_kes(\"mono\").style.display = ''; if(e<linki.length){"+
             " gid_kes('rapo').src=linki[e]+'&ukryjmenu=tak'; e++;} \n"+
             "}\n";
var sc=document.createElement('script');
sc.innerHTML = string;
document.getElementsByTagName('head')[0].appendChild(sc);
   }
   else{
 // var tdclas = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
 // tdclass = tdclas.snapshotItem(0);

 //  if (tdclass.innerHTML){ tdclass.innerHTML += '<input value="" type="text"> Ostatnio opisano wszystkie ataki'; }
     }

