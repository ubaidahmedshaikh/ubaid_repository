var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	$http.get("https://192.168.50.117:10800/rtm/getDeviceTypes")
            .then(function successCallback(response){
				
				var myArray = [];
				//console.log(myArray);
				var myArray = response.data.message.split(",");
				//console.log(myArray);
				
				 $scope.names=myArray;
                
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    $scope.home = "This is the homepage";
	$scope.clear = function(){
		$scope.name="";
		$scope.alias="";
		$scope.ip="";
	}
    $scope.getRequest = function () {
		console.log($scope.selectedName);
		
        console.log("I've been pressed!");  
		var name = $scope.name;
		var alias = $scope.alias;
		var ip = $scope.ip;
		var parameters = "?" + "name="+name+
		                 "&alias="+alias+
						 "&ipAddress="+ip+
						 "&type="+$scope.selectedName.trim();
			//console.log(parameters);			 
		
        $http.get("https://192.168.50.117:10800/rtm/addDevice"+parameters)
            .then(function successCallback(response){
                $scope.response = response.data.message;
				//console.log(response.data.message);
            }, function errorCallback(response){
                 
                console.log("Unable to perform get request");
            });
    };

});
