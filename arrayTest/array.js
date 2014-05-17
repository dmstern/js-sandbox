/**
 * 
 */
var array = new Array("A", "B", "C");
for ( var element in array) {
	console.log(array[element]);
}

array.forEach( function(element) {
	console.log(element);
});

