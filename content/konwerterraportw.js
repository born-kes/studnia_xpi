

function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } return false; }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)

function gN(a,b) { return a.getElementsByTagName(b);}
function wojsko(a,b) {var c = a.innerHTML - b.innerHTML;  return c;}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
 return s;}
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}/**/
function select_(a){
var str = '<select name="n_typ"><option value="">Nie Zmieniaj Typu</option><option value="0">brak typu</option>';
  if(a==1){str +='<option value="1" selected="selected">wioska off</option>';}else{str +='<option value="1">wioska off</option>';}
  if(a==2){str +='<option value="2" selected="selected">wioska def</option>';}else{str +='<option value="2">wioska def</option>';}
  if(a==3){str +='<option value="3" selected="selected">Zwiad</option>';}else{str +='<option value="3">Zwiad</option>';}
str +='<option value="4">wioska LK</option><option value="5">wioska CK</option><option value="6">do rozbudowy</option></select>'; }

function typ_w(a1,a2,a3,a4,a5,a6,a7,a8){
var fin;
if(a5>4000){fin=3;}
else if((a3+(a6*4)+(a7*4))>300){fin=1;}
else if((a1+a2+a4+(a8*4))>300){fin=2;}
else {fin=0;}
 return fin;}
// alert('rap1');

var all, table,d,e,f,s,v,heddde;
heddde =document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!-- tr.green td { color:#009900;}tr.red td{color:#cc0000; } tr.green td.hidden { color:#DED3B9; } tr.red td.hidden { color:#DED3B9; }--></style>';
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

table = all.snapshotItem(1);
    if(table.innerHTML){
     e=gN(table,'td');
     e[e.length-1].innerHTML = e[e.length-1].innerHTML.replace("href=",' accesskey="x" href=');
     f=gN(table,'a');
     f[0].href ='javascript:pops(\''+f[0].href+'&ukryjmenu=tak\');';
           if(f[1].innerHTML.indexOf('Skasuj')>-1){/*brak KP*/}
      else if(f[2].innerHTML.indexOf('Skasuj')>-1){var del = f[2].href;}
     }
     
if(! GET('del_kes',window.location.href ) ){
 var
table = all.snapshotItem(2);   // alert();

if(d=gN(table,'tr')[1]){var data= gN(d,'td')[1]; }// alert(data.innerHTML);  //data
    var st,sto,tr;
    var pik,pik1,pik2,mie,mie1,mie2,axe,axe1,axe2,luk,luk1,luk2,zw,zw1,zw2,lk,lk1,lk2,kl,kl1,kl2,ck,ck1,ck2,tar,tar1,tar2,kat,kat1,kat2,ry,ry1,ry2,sz,sz1,sz2;
    for(var j=0;e=gN(table,'table')[j];j++){// alert(j+' '+e.innerHTML);
          /* if(j==3 ){
               if(st =gN(e,'a')[0]){ if(! st.innerHTML.indexOf('|')>=0 ){ st=gN(e,'a')[1];}
                var xy1= st.innerHTML;              //zmiana 7.0
                    }
                     }*/
        if(j==2 ){                       if(st =gN(e,'a')[0]){ if(! st.innerHTML.indexOf('|')>=0 ){ st=gN(e,'a')[1];}  var xy1= st.innerHTML;  }
                 }
        if(j==3 ){
        
  if(tr =gN(e,'tr')[1]){if(pik1 =gN(tr,'td')[1]){}if(mie1 =gN(tr,'td')[2]){}if(axe1 =gN(tr,'td')[3]){}if(luk1 =gN(tr,'td')[4]){} if( zw1 =gN(tr,'td')[5]){}if( lk1 =gN(tr,'td')[6]){}if( kl1 =gN(tr,'td')[7]){}if( ck1 =gN(tr,'td')[8]){} if(tar1 =gN(tr,'td')[9]){}if(kat1 =gN(tr,'td')[10]){}if( ry1 =gN(tr,'td')[11]){}if( sz1 =gN(tr,'td')[12]){}
                     }
  if(tr =gN(e,'tr')[2]){ tr.className+= ' red'; if(pik2 =gN(tr,'td')[1]){pik= wojsko(pik1,pik2);}if(mie2 =gN(tr,'td')[2]){mie= wojsko(mie1,mie2);} if(axe2 =gN(tr,'td')[3]){axe= wojsko(axe1,axe2);}if(luk2 =gN(tr,'td')[4]){luk= wojsko(luk1,luk2);} if( zw2 =gN(tr,'td')[5]){ zw= wojsko( zw1, zw2);}if( lk2 =gN(tr,'td')[6]){ lk= wojsko( lk1, lk2);} if( kl2 =gN(tr,'td')[7]){ kl= wojsko( kl1, kl2);}if( ck2 =gN(tr,'td')[8]){ ck= wojsko( ck1, ck2);} if(tar2 =gN(tr,'td')[9]){tar= wojsko(tar1,tar2);}if(kat2 =gN(tr,'td')[10]){kat= wojsko(kat1,kat2);} if( ry2 =gN(tr,'td')[11]){ ry= wojsko( ry1, ry2);}if( sz2 =gN(tr,'td')[12]){ sz= wojsko( sz1, sz2);}
                     }
          var a_typ = typ_w(pik1.innerHTML, mie1.innerHTML, axe1.innerHTML, luk1.innerHTML, zw1.innerHTML, lk1.innerHTML, kl1.innerHTML, ck1.innerHTML);//alert( a_typ);
     //  Zmianny 7.0   */
     var zostalo='<tr class="center green"><td style="text-align:left;">Zostalo:</td>'; if(pik==0){zostalo+='<td class="hidden">'+pik+'</td>';}else{zostalo+='<td>'+pik+'</td>';}if(mie==0){zostalo+='<td class="hidden">'+mie+'</td>';}else{zostalo+='<td>'+mie+'</td>';}if(axe==0){zostalo+='<td class="hidden">'+axe+'</td>';}else{zostalo+='<td>'+axe+'</td>';}if(luk==0){zostalo+='<td class="hidden">'+luk+'</td>';}else{zostalo+='<td>'+luk+'</td>';}if(zw==0){zostalo+='<td class="hidden">'+zw+'</td>';}else{zostalo+='<td>'+zw+'</td>';}if(lk==0){zostalo+='<td class="hidden">'+lk+'</td>';}else{zostalo+='<td>'+lk+'</td>';}if(kl==0){zostalo+='<td class="hidden">'+kl+'</td>';}else{zostalo+='<td>'+kl+'</td>';}if(ck==0){zostalo+='<td class="hidden">'+ck+'</td>';}else{zostalo+='<td>'+ck+'</td>';}if(tar==0){zostalo+='<td class="hidden">'+tar+'</td>';}else{zostalo+='<td>'+tar+'</td>';}if(kat==0){zostalo+='<td class="hidden">'+kat+'</td>';}else{zostalo+='<td>'+kat+'</td>';} if(ry==0){zostalo+='<td class="hidden">'+ry+'</td>';}else{zostalo+='<td>'+ry+'</td>';}if(sz==0){zostalo+='<td class="hidden">'+sz+'</td>';}else{zostalo+='<td>'+sz+'</td>';}zostalo+='</tr>';
           var a_w = pik+','+ mie+','+ axe+','+ luk+','+ zw+','+ lk+','+ kl+','+ ck+','+tar+','+kat+','+ry+','+sz;
     e.innerHTML += zostalo; e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/raport3.php?xy='+dane(st)+'&o0=0&data='+data.innerHTML+'&typ='+a_typ+'&w='+a_w+'" height="75" width="100%" style="border:0pt;"></iframe></td></tr>';
                   }
         if(j==4 ){//alert(j+' '+e.innerHTML);
                      if(sto=gN(e,'a')[0]){ if(!(sto.innerHTML.indexOf('|')>=0) ){sto=gN(e,'a')[1];} /*alert(sto.innerHTML);  */   }
                  var ob_wojsko=e.innerHTML.indexOf('wojsk przeciwnika.');
                   }
         if(j==5 ){     ////alert(ob_wojsko);

         if(ob_wojsko<0){  //alert(e.innerHTML);
  if(tr =gN(e,'tr')[1]){
    if(pik1 =gN(tr,'td')[1]){}if(mie1 =gN(tr,'td')[2]){}if(axe1 =gN(tr,'td')[3]){}if(luk1 =gN(tr,'td')[4]){}
    if( zw1 =gN(tr,'td')[5]){}if( lk1 =gN(tr,'td')[6]){}if( kl1 =gN(tr,'td')[7]){}if( ck1 =gN(tr,'td')[8]){}
    if(tar1 =gN(tr,'td')[9]){}if(kat1 =gN(tr,'td')[10]){}if( ry1 =gN(tr,'td')[11]){}if( sz1 =gN(tr,'td')[12]){}
                        }
  if(tr =gN(e,'tr')[2]){ tr.className+= ' red';
    if(pik2 =gN(tr,'td')[1]){pik= wojsko(pik1,pik2);}if(mie2 =gN(tr,'td')[2]){mie= wojsko(mie1,mie2);}
    if(axe2 =gN(tr,'td')[3]){axe= wojsko(axe1,axe2);}if(luk2 =gN(tr,'td')[4]){luk= wojsko(luk1,luk2);}
    if( zw2 =gN(tr,'td')[5]){ zw= wojsko( zw1, zw2);}if( lk2 =gN(tr,'td')[6]){ lk= wojsko( lk1, lk2);}
    if( kl2 =gN(tr,'td')[7]){ kl= wojsko( kl1, kl2);}if( ck2 =gN(tr,'td')[8]){ ck= wojsko( ck1, ck2);}
    if(tar2 =gN(tr,'td')[9]){tar= wojsko(tar1,tar2);}if(kat2 =gN(tr,'td')[10]){kat= wojsko(kat1,kat2);}
    if( ry2 =gN(tr,'td')[11]){ ry= wojsko( ry1, ry2);}if( sz2 =gN(tr,'td')[12]){ sz= wojsko( sz1, sz2);}
                        }
     var zostalo='<tr class="center green"><td style="text-align:left;" >Zostalo:</td>';
     if(pik==0){zostalo+='<td class="hidden">'+pik+'</td>';}else{zostalo+='<td>'+pik+'</td>';}
     if(mie==0){zostalo+='<td class="hidden">'+mie+'</td>';}else{zostalo+='<td>'+mie+'</td>';}
     if(axe==0){zostalo+='<td class="hidden">'+axe+'</td>';}else{zostalo+='<td>'+axe+'</td>';}
     if(luk==0){zostalo+='<td class="hidden">'+luk+'</td>';}else{zostalo+='<td>'+luk+'</td>';}
     if(zw==0){zostalo+='<td class="hidden">'+zw+'</td>';}else{zostalo+='<td>'+zw+'</td>';}
     if(lk==0){zostalo+='<td class="hidden">'+lk+'</td>';}else{zostalo+='<td>'+lk+'</td>';}
     if(kl==0){zostalo+='<td class="hidden">'+kl+'</td>';}else{zostalo+='<td>'+kl+'</td>';}
     if(ck==0){zostalo+='<td class="hidden">'+ck+'</td>';}else{zostalo+='<td>'+ck+'</td>';}
     if(tar==0){zostalo+='<td class="hidden">'+tar+'</td>';}else{zostalo+='<td>'+tar+'</td>';}
     if(kat==0){zostalo+='<td class="hidden">'+kat+'</td>';}else{zostalo+='<td>'+kat+'</td>';}
     if(ry==0){zostalo+='<td class="hidden">'+ry+'</td>';}else{zostalo+='<td>'+ry+'</td>';}
     if(sz==0){zostalo+='<td class="hidden">'+sz+'</td>';}else{zostalo+='<td>'+sz+'</td>';}
      zostalo+='</tr>';
          var qm = 5;
           var o_w = pik+','+ mie+','+ axe+','+ luk+','+ zw+','+ lk+','+ kl+','+ ck+','+tar+','+kat+','+ry+','+sz;
           }else{
           var o_w = '';  var qm = 5;
                          if(e.innerHTML.indexOf('Mur')>=0)
            { var mu=gN(e,"b");var mur = dels(mu[mu.length-1].innerHTML);}

           }

                   }
         if(j==6 || j==7){
          if(e.innerHTML.indexOf('Budynki:')>=0)
         {  mur=0;
            if(e.innerHTML.indexOf('Mur')>=0)
            {
                    for(var h=0;y=gN(e,'tr')[h];h++)
                    {
                      if(y.innerHTML.indexOf('Mur')>=0){ var mu=gN(e,"b"); mur = dels(mu[mu.length-1].innerHTML);}
                    }
            }
         }else
         if(e.innerHTML.indexOf('Mur')>=0)
         {
                    for(var h=0;y=gN(e,'tr')[h];h++)
                    {
                      if(y.innerHTML.indexOf('Mur')>=0){var mu=gN(y,"b"); mur = dels(gN(y,"b")[mu.length-1].innerHTML); /* alert(y.innerHTML);/**/}
                    }
         }
           // alert('mur: '+mur);
                   }  //j=7 £upy
                                            } //koniec for
                                            
e=gN(table,'table')[qm];
if(mur!=='' && mur >=0 && mur <21){ zostalo+='<tr><td /><td class="center green" colspan="11">Mur: poziom '+mur+'</td></tr>';}else{mur='';}

     e.innerHTML +=zostalo+'<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/raport3.php?xy='+dane(sto)+'&o0=1&data='+data.innerHTML+'&Mur='+mur+'&w='+o_w+'" height="75" width="100%" style="border:0pt;"></iframe></td></tr>'+
                 '<div style="position:fixed; bottom:1px; right:-5px;"><iframe id="rapo" name="rapo" style="border:1pt;" width="425" height="400"></iframe></div>';
                          }else if(GET('del_kes',window.location.href )==1 ){ window.location.href = del; }
