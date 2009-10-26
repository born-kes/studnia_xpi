function konwerterprox_PrefManager() {
	var startPoint="konwerterprox.";

	var pref=Components.classes["@mozilla.org/preferences-service;1"].
		getService(Components.interfaces.nsIPrefService).
		getBranch(startPoint);

	var observers={};

	// Czy przek�adanie istnieje
	this.exists=function(prefName) {
		return pref.getPrefType(prefName) != 0;
	}

	// Powroty (obr�t) wyznaczanego (nazwany) przek�adania, albo *defaultValue* je�eli to nie istnieje
	this.getValue=function(prefName, defaultValue) {
		var prefType=pref.getPrefType(prefName);

		// Podstawowe przek�adania oponowa� (przedmiot; obiekt) rzuca wyj�tek je�eli *pref* nie istnieje
		if (prefType==pref.PREF_INVALID) {
			return defaultValue;
		}

		switch (prefType) {
			case pref.PREF_STRING: return pref.getCharPref(prefName);
			case pref.PREF_BOOL: return pref.getBoolPref(prefName);
			case pref.PREF_INT: return pref.getIntPref(prefName);
		}
	}

	// Komplety (orientacja) wyznaczane (nazwany) przek�adanie do nominalnej warto�ci. Warto�ci musz� by� sznurkami,

	// *booleans*, albo liczby ca�kowite.
	this.setValue=function(prefName, value) {
		var prefType=typeof(value);

		switch (prefType) {
			case "string":
			case "boolean":
				break;
			case "number":
				if (value % 1 != 0) {
					throw new Error("Cannot set preference to non integral number");
				}
				break;
			default:
				throw new Error("Cannot set preference with datatype: " + prefType);
		}

		// Podstawowe przek�adania oponowa� (przedmiot; obiekt) rzuca wyj�tek je�eli nowy *pref* ma
                // r�ny typ ni� stary jed. obmy�lam my nie mia� robi� ten (to), tak (wi�c) usuwaj�
                // stary *pref* pierwszy (najpierw) je�eli sprawa przedstawia si� tak.
		if (this.exists(prefName) && prefType != typeof(this.getValue(prefName))) {
			this.remove(prefName);
		}

		// Umieszczany nowy ocenia� (warto��) u�ywaj�cy (u�ywanie; przyzwyczajaj�cy si�) poprawiaj� metod�
		switch (prefType) {
			case "string": pref.setCharPref(prefName, value); break;
			case "boolean": pref.setBoolPref(prefName, value); break;
			case "number": pref.setIntPref(prefName, Math.floor(value)); break;
		}
	}

	// Usuwa wyznaczane (nazwany) przek�adanie albo poddrzewo
	this.remove=function(prefName) {
		pref.deleteBranch(prefName);
	}

	// Wo�aj� (dzwoni� do) funkcj� kiedykolwiek, oboj�tnie kiedy wyznaczane (nazwany) zmiany poddrzewa przek�adania
	this.watch=function(prefName, watcher) {
		// construct an observer
		var observer={
			observe:function(subject, topic, prefName) {
				watcher(prefName);
			}
		};

		// Przechowuj� (przygotowywa� na zapas) obserwatora w wypadku (sytuacja) potrzebujemy przesuwa� to p�niejszy (po�niej)
		observers[watcher]=observer;

		pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal).
			addObserver(prefName, observer, false);
	}

	// Przerywaj� (zatrzymywa� si�) obserwuj�cy (obserwowanie; czekaj�cy)
	this.unwatch=function(prefName, watcher) {
		if (observers[watcher]) {
			pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal)
				.removeObserver(prefName, observers[watcher]);
		}
	}
}
