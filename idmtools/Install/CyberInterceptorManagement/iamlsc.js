var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	
    $scope.home = "This is the homepage";
    $scope.getRequest = function () {
		
		
		
        console.log("I've been pressed!");  
		
		var frequency = $scope.frequency;
		
        $http.get("https://192.168.50.117:10800/iam/changeLscFrequency?frequency="+frequency)
            .then(function successCallback(response){
                $scope.response = response.data.message;
				console.log(response.data.message);
            }, function errorCallback(response){
                  

                console.log("Unable to perform get request");
            });
    };
	$scope.getRequest1 = function () {
		
		
        console.log("I've been pressed!");  
        $http.get("https://192.168.50.117:10800/iam/doLsc")
            .then(function successCallback(response){
                $scope.response1 = response.data.message;
				console.log(response.data.message);
            }, function errorCallback(response){
              
                console.log("Unable to perform get request");
            });
    };
    
});
