var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	
    $scope.home = "This is the homepage";
	$scope.clear = function(){
		$scope.selectedName="";
		$scope.selectedName1="";
	}
    $scope.getRequest = function () {
		
		
		console.log($scope.selectedName);
		
        console.log("I've been pressed!");  
		var logLevel = $scope.selectedName;
		var emailLevel = $scope.selectedName1;
					 
		
        $http.get("https://192.168.50.117:10800/ta/changeAlertLevel?logLevel="+logLevel+"&emailLevel="+emailLevel)
            .then(function successCallback(response){
                $scope.response = response.data.message;
				console.log(response.data.message);
            }, function errorCallback(response){
                 
                console.log("Unable to perform get request");
            });
    };
	
    
});
