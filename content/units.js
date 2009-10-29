function gN(a,b) { return a.getElementsByTagName(b);}
var all, table,d,e;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(3);
     var stor='';
     var l=1;
 for(var i=1;d=gN(table,'tr')[i];i++)
 {  //alert(i+'i '+d.innerHTML);
  for(var j=0;e=gN(d,'td')[j];j++)
   {
  if(l==1&&j==0){
                 var url =gN(e,'a')[0];
                  // alert(e.innerHTML);
                 url=url.href.split("?");url=url[1].split("&");url=url[0].split("=");
                 stor += '<input type="hidden" name="id[]" value="'+url[1]+'" />';
                 }
  if(l==2){//alert(j+' '+e.innerHTML); // w³asne
     if(j==1){   stor += '<input type="hidden" name="pik[]" value="'+e.innerHTML+'" />' ;}
     if(j==2){   stor += '<input type="hidden" name="mie[]" value="'+e.innerHTML+'" />' ;}
     if(j==3){   stor += '<input type="hidden" name="axe[]" value="'+e.innerHTML+'" />' ;}
     if(j==4){  stor += '<input type="hidden" name="luk[]" value="'+e.innerHTML+'" />' ;}
     if(j==5){  stor += '<input type="hidden" name="zw[]" value="' +e.innerHTML+'" />' ;}
     if(j==6){  stor += '<input type="hidden" name="lk[]" value="' +e.innerHTML+'" />' ;}
     if(j==7){  stor += '<input type="hidden" name="kl[]" value="' +e.innerHTML+'" />' ;}
     if(j==8){  stor += '<input type="hidden" name="ck[]" value="' +e.innerHTML+'" />' ;}
     if(j==9){  stor += '<input type="hidden" name="tar[]" value="'+e.innerHTML+'" />' ;}
     if(j==10){  stor += '<input type="hidden" name="kat[]" value="'+e.innerHTML+'" />' ;}
     if(j==11){  stor += '<input type="hidden" name="ry[]" value="' +e.innerHTML+'" />' ;}
     if(j==12){  stor += '<input type="hidden" name="sz[]" value="' +e.innerHTML+'" />' ;}
          }
  if(l==3){ // w wiosce
     if(j==1){   stor += '<input type="hidden" name="wpik[]" value="'+e.innerHTML+'" />' ;}
     if(j==2){   stor += '<input type="hidden" name="wmie[]" value="'+e.innerHTML+'" />' ;}
     if(j==3){   stor += '<input type="hidden" name="waxe[]" value="'+e.innerHTML+'" />' ;}
     if(j==4){  stor += '<input type="hidden" name="wluk[]" value="'+e.innerHTML+'" />' ;}
     if(j==5){  stor += '<input type="hidden" name="wzw[]" value="' +e.innerHTML+'" />' ;}
     if(j==6){  stor += '<input type="hidden" name="wlk[]" value="' +e.innerHTML+'" />' ;}
     if(j==7){  stor += '<input type="hidden" name="wkl[]" value="' +e.innerHTML+'" />' ;}
     if(j==8){  stor += '<input type="hidden" name="wck[]" value="' +e.innerHTML+'" />' ;}
     if(j==9){  stor += '<input type="hidden" name="wtar[]" value="'+e.innerHTML+'" />' ;}
     if(j==10){  stor += '<input type="hidden" name="wkat[]" value="'+e.innerHTML+'" />' ;}
     if(j==11){  stor += '<input type="hidden" name="wry[]" value="' +e.innerHTML+'" />' ;}
     if(j==12){  stor += '<input type="hidden" name="wsz[]" value="' +e.innerHTML+'" />' ;}
          }
   }
     if(l==5){l=1;}else{l++;}
 }
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
<<<<<<< HEAD
if (table.innerHTML) table.innerHTML += '<tr><td colspan="3"><form action="http://www.bornkes.w.szu.pl/pl/units.php" method="POST" target="_blank">'+stor+'<input type="submit" value="&#8595; Do Studni &#8595;" /></form></td></tr>';
=======
if (table.innerHTML){ table.innerHTML += '<tr><td colspan="3"><form action="http://www.bornkes.w.szu.pl/pl/units.php" method="POST" target="rapo">'+stor+'<input type="submit" value="&#8595; Do Studni &#8595;" /></form></td></tr>';
table.innerHTML +='<tr><td><div style="position:fixed; bottom:0px; right:-10px;"><iframe id="rapo" name="rapo"  style="border:0pt;" width="364" height="100"></iframe></div></td></tr>';
}

>>>>>>> v1.5.2
