/**
 * 
 */

var app = {

	observerMap : null,

	fire : function() {
		 this.observerMap.notifyObservers(events.test);
	},

	addEventListener : function(eventType, eventListener) {
		if (this.observerMap == null) {
			this.observerMap = new ObserverMap();
		}
		this.observerMap.put(eventType, eventListener);
	}

};

var main = {

	init : function() {
		console.log("Init.");

		app.addEventListener(events.test, this.doSomething);

	},

	doSomething : function() {
		alert("Hallo, bin da!");
	}

};
