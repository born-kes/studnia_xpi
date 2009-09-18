var all, table,d;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);     var url_fin='ida=';
 for(var i=1;d=table.getElementsByTagName('tr')[i];i++)
 {
         var url =d.getElementsByTagName('a')[0];
             url=url.href.split("?");
             url=url[1].split("&");
             url=url[2].split("=");

      //alert(d.innerHTML);

 url_fin+=url[1]+',';
 }
    // alert(url_fin);
  i=table.getElementsByTagName('tr').length;
  var str="<script language=\"JavaScript\"><!-- var str_buffer =  new String (\"http://www.bornkes.w.szu.pl/pl/raport.php?"+url_fin+"\"); //--></script>";
  var heddde =document.getElementsByTagName('head')[0].innerHTML +=str ;
 var str_buffer =  new String ("<iframe src=\'http://www.bornkes.w.szu.pl/pl/raport.php?"+url_fin+"\' width=\'502\' height=\'"+(i*52)+"\'></iframe>");

    d=table.getElementsByTagName('tr')[0];   if ( d.innerHTML) d.innerHTML +='<th><a onclick="toggle_map_popup_options()" href="#">Raporty z Bazy</a></th>';
    d=table.getElementsByTagName('tr')[1];   if ( d.innerHTML) d.innerHTML +='<td rowspan="'+i+'" id="map_popup_options" style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/raport.php?'+url_fin+'" width="502" height="'+(i*52)+'" name="raport" id="raport"></iframe> </td>';

