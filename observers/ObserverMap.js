/**
 * 
 */
var events = {
	test : 'test'
};

function ObserverMap() {
	console.log("Init new ObserverMap.");

	var self = this;

	self.handlerLists = new Array();
	self.getHandlerLists = function() {
		// if (self.handlerLists == null) {
		// self.handlerLists = new Array();
		// }
		return self.handlerLists;
	};

	self.put = function(eventType, eventHandler) {
		var existingEventType = "";

		console.log("Searching for matching HandlerList....");
		self.getHandlerLists().forEach(function(handlerList) {
			if (handlerList.eventType.valueOf() === eventType.valueOf()) {
				console.log("Found Matching HandlerList: " + eventType);
				existingEventType = eventType;
				handlerList.addEventHandler(eventHandler);
			}
		});

		if (existingEventType.valueOf() === "") {
			console.log("No Matching HandlerList found, creating a new one.");
			var newHandlerList = new HandlerList(eventType);
			newHandlerList.addEventHandler(eventHandler);
			self.getHandlerLists().push(newHandlerList);
		}
	};

	self.notifyObservers = function(eventType) {
		var matchingHandlerList = null;
		self.getHandlerLists().forEach(function(handlerList) {
			console.log("Searching for Observer to notify...");
			if (handlerList.eventType.valueOf() === eventType.valueOf()) {
				handlerList.notifyObservers();
				matchingHandlerList = handlerList;
			}
		});

		if (matchingHandlerList === null) {
			console.warn("Observer with type '" + eventType
					+ "' not found. Nobody to notify.");
		}
	}
}

function HandlerList(eventType) {
	var self = this;

	console.log("Init HandlerList for type '" + eventType + "'");

	self.eventType = eventType;
	self.eventHandlers = new Array();

	self.addEventHandler = function(eventHandler) {
		console.log("Adding EventHandler " + eventHandler.name);
		self.eventHandlers.push(eventHandler);
	};

	this.notifyObservers = function() {
		self.eventHandlers.forEach(function(eventHandler) {
			eventHandler();
		});
	};

}