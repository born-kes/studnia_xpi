var all, table,d,e;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(2);
     var stor='';
 for(var i=1;d=table.getElementsByTagName('tr')[i];i++)
 {
  for(var j=0;e=d.getElementsByTagName('td')[j];j++)
   {
     if(j==0){ var url =e.getElementsByTagName('a')[0];
                  url=url.href.split("?");url=url[1].split("&");url=url[0].split("=");
                stor += '<input type="hidden" name="id[]" value="'+url[1]+'" />';
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

