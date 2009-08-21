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
var xy=document.getElementById('inputx').value+'|'+document.getElementById('inputy').value;
all = document.evaluate('//td[@valign="top"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
if (table.innerHTML) table.innerHTML += '<tr><td><iframe src="http://www.bornkes.w.szu.pl/test/operacje/mapa_taktyczna.php?_xy='+xy+'&_oko=18&t_w=on&r_w=on&obrona=on&sz_w=on" width="260" height="260" frameborder="0" name="ramka" id="ramka" style="z-index:1;">Twoja przegl1darka nie akceptuje p3ywaj1cych ramek!</iframe></td></tr>';
