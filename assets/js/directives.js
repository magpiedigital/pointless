













// == LEGACY == //

// // Changes width of rotated nav bars with height on load and on resize
// pointless.directive('widthHeight', function() {
//     function link(scope, element, attrs) {
//     	var h = window.innerHeight;
//     	$(element).width(h);
    
//         // Event listener for resizing
//         var addEvent = function(object, type, callback) {
//         	if (object == null || typeof(object) == 'undefined') return;
//         	if (object.addEventListener) {
//         		object.addEventListener(type, callback, false);
//         	} else if (object.attachEvent) {
//         		object.attachEvent("on" + type, callback);
//         	} else {
//         		object["on"+type] = callback;
//         	}
//         };


//         addEvent(window, "resize", function(event) {
//         	h = window.innerHeight;
//         	$(element).width(h);
//         	console.log(h);
//         });
//     };
//     return {
//         restrict: 'EA',
//         link: link
//     };
// });