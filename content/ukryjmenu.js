//alert('jest');
//var s=document.createElement('script');
//s.innerHTML ="gid('menu_row').style.display = 'none';gid('menu_row2').style.display = 'none';";
//document.getElementsByTagName('head')[0].appendChild(s);
var all = document.getElementsByTagName("hr");
  all[0].style.width = '380' + 'px';

var all = document.getElementsByTagName("table");
for (var i = 0; i < all.length-7 ; i++)
{
  all[i].style.display = 'none';
  all[i].style.width = '400' + 'px';
}
for (var i = all.length-7; i < all.length ; i++)
{
  all[i].style.width = '400' + 'px';
}
 var sc=document.createElement('script');
sc.innerHTML = 'startTimer();';
document.getElementsByTagName('head')[0].appendChild(sc);


