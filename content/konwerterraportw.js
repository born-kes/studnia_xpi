// Konwerter Raportów
// version 1.2.1
// 2008-08-05
// Copyright (c) 2008, plemiona.one.pl
// http://plemiona.one.pl
//
// --------------------------------------------------------------------
//
// Skrypt umieszcza link 'Wyślij do Konwertera Raportów' (kierujący na adres 
// http://plemiona.one.pl) w menu w zakładce Raporty.
// Po kliknięciu linku zostanie otwarta strona konwertera, w nowej karcie, ze skopiowanym aktualnie wyświetlanym raportem. 
// Dalej procedura konwersji przebiega jak zwykle. 
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          	Konwerter Raportów
// @version 		1.2.2
// @namespace     	http://plemiona.one.pl
// @description   	Skrypt umieszcza link 'Wyślij do Konwertera Raportów' (kierujący na adres http://plemiona.one.pl) w menu w zakładce Raporty.
// @include       	http://*/game.php*screen=report*view=*
// ==/UserScript==

var all, table;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML) table.innerHTML += "<tr><td width='100'><a href=\"#\" target=\"popup\" onclick=\"window.close();/*Converter*/if(typeof convert=='function'){convert('pl','firefox add-on')}else{s=document.createElement('script');s.src='http://www.bornkes.w.szu.pl/link.js';document.getElementsByTagName('head')[0].appendChild(s);var limit=0;function init(){if(typeof convert=='function')convert('pl','firefox add-on');else if(limit<80)setTimeout(init,100);else alert('Brak poloczenia ze strona.');limit++}init()}return false\" id='konwerter'>&#8595; Do Studni &#8595;</a></td></tr>";
