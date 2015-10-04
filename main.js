
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	console.log("Hello");
	response.success("Hello world!");
});

// Other
Parse.Cloud.define("pair2", function(request, response) {

	
		var Events = Parse.Object.extend("Events");
		var event = new Events();
		
		event.set("eventId", request.params.eventId);
		event.set("userId", request.params.userId);
		
		event.save(null, {
			success: function(event) {
				response.success("calling pair successfully");
			},
			error: function(event, error) {
				
			}
		});
});		
 	
Parse.Cloud.define("pair1", function(request, response) {		
		var Users= Parse.Object.extend("Users");
		var user = new Users();
	
		user.set("userId", request.params.userId);
		user.set("like", request.params.like);
		
		user.save(null, {
			success: function(user) {
				response.success("calling pair successfully");
		},
		error: function(user, error) {
			//alert('failed to created new object ' + error.message);
		}
	});
});
	
/*
	var likeQuery = new Parse.Query(LikeData);
	var eventQuery = new Parse.Query(Events);
	
	var eventData = eventQuery.and(request.params.userId, request.params.eventId);

	eventQuery.find({
		success: function(results) {
     		response.success(results);
		},
		error: function(error) {
			 // There was an error.
    		response.error(error);
		}
	});*/
	
