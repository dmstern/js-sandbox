/**
 * 
 */
var test = {
	run : function() {
		test.otherMethod(test.theObject);
		// alert(test.anObject.objectMethod());
	},

	otherMethod : function(anObject) {
		alert(anObject.objectMethod());
	},
	
	theObject : {
		objectMethod : function() {
			return "innendrin";
		}
	}


}