var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	
    //$scope.home = "This is the homepage";
    $scope.getRequest = function () {
		
		
		
        //console.log("I've been pressed!");  
		
		var email = $scope.email;
		
        $http.get("https://192.168.50.117:10800/ta/addContact?email="+email)
            .then(function successCallback(response){
                $scope.response = "Email Address changed successfully";
				//console.log(response.data.message);
            }, function errorCallback(response){
                

                console.log("Unable to perform get request");
            });
    };
    
});
