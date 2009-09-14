
var all, table;
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(2);
var anchorTags = table.getElementsByTagName("a");
    var pik= new String ('javascript:');
    var mie= new String ('javascript:');
    var axe= new String ('javascript:');
    var luk= new String ('javascript:');
    var zw= new String ('javascript:');
    var lk= new String ('javascript:');
    var kl= new String ('javascript:');
    var ck= new String ('javascript:');
    var tar= new String ('javascript:');
    var kat= new String ('javascript:');
for (var i = 0; i < anchorTags.length ; i++)
{   if(anchorTags[i].href.indexOf('javascript:')>=0 ){
       if(anchorTags[i].href.indexOf('spear_')>=0 ) { pik=pik+';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('sword_')>=0 ) { mie=mie+';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('axe_')>=0   ) { axe=axe+';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('archer_')>=0 && anchorTags[i].href.indexOf('marcher_')< 0){ luk=luk+';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('spy_')>=0   ) {  zw=zw+ ';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('light_')>=0 ) {  lk=lk+ ';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('marcher_')>=0 ){ kl=kl+ ';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('heavy_')>=0 ) {  ck=ck+ ';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('ram_')>=0  )  { tar=tar+';'+ anchorTags[i].href.substring(11);}
       if(anchorTags[i].href.indexOf('catapult_' )>=0){kat=kat+';'+anchorTags[i].href.substring(11);}

      }
}
if (table.innerHTML) table.innerHTML += '<tr><th colspan="3">Rekrutuj Wszystkie Jednostki Jednego Typu:</th><th><a href="'+pik+'">piki</a></th><th><a href="'+mie+'">miecze</a></th><th><a href="'+axe+'">Topory</a></th><th><a href="'+luk+'">Luki</a></th><th><a href="'+zw+'">Zwiadowcy</a></th><th><a href="'+lk+'">Lekka kawaleria</a></th><th><a href="'+kl+'">Luki na koniach</a></th><th><a href="'+ck+'">CK</a></th><th><a href="'+tar+'">Tarany</a></th><th><a href="'+kat+'">Katapulty</a></th></tr>';
