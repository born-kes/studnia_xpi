function gid_kes(id){return document.getElementById(id);}     // textContent

  var trade  = new Array('wood','stone','iron');
  var storage = Math.floor(gid_kes('storage').innerHTML/1000)
var wood = storage - Math.floor(gid_kes(trade[0]).innerHTML/1000);
var stone = storage - Math.floor(gid_kes(trade[1]).innerHTML/1000);
var iron = storage - Math.floor(gid_kes(trade[2]).innerHTML/1000);
if (wood>78){wood = 78;} if (stone>78){stone = 78;} if (iron>78){iron = 78;}

var all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
  var table = all.snapshotItem(0);
  var tr = gN(table,'tr');
   for (var i=1; i< tr.length ; i++ )
     {
        var ah = gN(tr[i],'a')[2].href;
        tr[i].innerHTML += '<th><a href="'+ah+'&norff='+wood+'/'+stone+'/'+iron+'" >paczka</a></th>';
     }
