//alert('jest');
//var s=document.createElement('script');
//s.innerHTML ="gid('menu_row').style.display = 'none';gid('menu_row2').style.display = 'none';";
//document.getElementsByTagName('head')[0].appendChild(s);
all = document.getElementsByTagName("table");

for (var i = 0; i < all.length-7 ; i++)
{
  all[i].style.display = 'none';
}


