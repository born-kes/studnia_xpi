function konwerterprox_PrefManager() {
	var startPoint="konwerterprox.";

	var pref=Components.classes["@mozilla.org/preferences-service;1"].
		getService(Components.interfaces.nsIPrefService).
		getBranch(startPoint);

	var observers={};

	// Czy przek³adanie istnieje
	this.exists=function(prefName) {
		return pref.getPrefType(prefName) != 0;
	}

	// Powroty (obrót) wyznaczanego (nazwany) przek³adania, albo *defaultValue* je¿eli to nie istnieje
	this.getValue=function(prefName, defaultValue) {
		var prefType=pref.getPrefType(prefName);

		// Podstawowe przek³adania oponowaæ (przedmiot; obiekt) rzuca wyj±tek je¿eli *pref* nie istnieje
		if (prefType==pref.PREF_INVALID) {
			return defaultValue;
		}

		switch (prefType) {
			case pref.PREF_STRING: return pref.getCharPref(prefName);
			case pref.PREF_BOOL: return pref.getBoolPref(prefName);
			case pref.PREF_INT: return pref.getIntPref(prefName);
		}
	}

	// Komplety (orientacja) wyznaczane (nazwany) przek³adanie do nominalnej warto¶ci. Warto¶ci musz± byæ sznurkami,

	// *booleans*, albo liczby ca³kowite.
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

		// Podstawowe przek³adania oponowaæ (przedmiot; obiekt) rzuca wyj±tek je¿eli nowy *pref* ma
                // ró¿ny typ ni¿ stary jed. obmy¶lam my nie mia³ robiæ ten (to), tak (wiêc) usuwaj±
                // stary *pref* pierwszy (najpierw) je¿eli sprawa przedstawia siê tak.
		if (this.exists(prefName) && prefType != typeof(this.getValue(prefName))) {
			this.remove(prefName);
		}

		// Umieszczany nowy oceniaæ (warto¶æ) u¿ywaj±cy (u¿ywanie; przyzwyczajaj±cy siê) poprawiaj± metodê
		switch (prefType) {
			case "string": pref.setCharPref(prefName, value); break;
			case "boolean": pref.setBoolPref(prefName, value); break;
			case "number": pref.setIntPref(prefName, Math.floor(value)); break;
		}
	}

	// Usuwa wyznaczane (nazwany) przek³adanie albo poddrzewo
	this.remove=function(prefName) {
		pref.deleteBranch(prefName);
	}

	// Wo³aj± (dzwoniæ do) funkcjê kiedykolwiek, obojêtnie kiedy wyznaczane (nazwany) zmiany poddrzewa przek³adania
	this.watch=function(prefName, watcher) {
		// construct an observer
		var observer={
			observe:function(subject, topic, prefName) {
				watcher(prefName);
			}
		};

		// Przechowuj± (przygotowywaæ na zapas) obserwatora w wypadku (sytuacja) potrzebujemy przesuwaæ to pó¼niejszy (po¼niej)
		observers[watcher]=observer;

		pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal).
			addObserver(prefName, observer, false);
	}

	// Przerywaj± (zatrzymywaæ siê) obserwuj±cy (obserwowanie; czekaj±cy)
	this.unwatch=function(prefName, watcher) {
		if (observers[watcher]) {
			pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal)
				.removeObserver(prefName, observers[watcher]);
		}
	}
}
