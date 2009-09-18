var all, table, url1;
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
function url_explode(str){ url=str.split("?"); url=url[1].split("&");   return url;}
function url_get(str){ url=str.split("=");  return url;}

 var anchorTags = table.getElementsByTagName("a");
  //id info o ataku
var as=url_explode(window.location.search);
  var id_atak=url_get(as[2] );
  // id agresora
var url =  url_explode(anchorTags[1].href);
  var agr_id=url_get(url[2]);

  // atak pochodzi z
var url =  url_explode(anchorTags[2].href);
  var agr=url_get(url[2]);
  // cel
var url =  url_explode(anchorTags[4].href);
 var cel=url_get(url[2]);
 var anchorTags = table.getElementsByTagName("td");
        var h=anchorTags[12].innerHTML;   h=h.split("<");
      url1 = '&id_agr='+agr_id[1]+'&id_ataku='+id_atak[1]+'&agr='+agr[1]+'&cel='+cel[1]+'&czas1='+h[0];

   var as =table.getElementsByTagName('tr');
if (table.innerHTML) table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/ataki.php?'+url1+'" width="100"></iframe></td></tr>';


