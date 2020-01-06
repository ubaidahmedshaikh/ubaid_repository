"use strict";
angular
    .module("ValidationApp", [])
    .controller("ValidationController", function($scope, $http, $window){
      	$scope.showValidate=true;
		$scope.showDashboard=false;
	  	$scope.validate=function(){
	    var key,company,email="";

		key = $scope.key;
		company = $scope.company;
		email = $scope.email;
		
		var parameters = "?key="+key+"&"+
						"email="+email+"&"+
						"company="+company;
		var url="https://192.168.50.117:10800/license/validate"+parameters;
		$http.get(url).success(function(data){	
			$scope.data = data;
			console.log(data);
			if(data.status === "ERROR"){
				$scope.result = data.message;
			}
			if(data.status === "OK"){
				$scope.result = "License valid";
				$scope.showDashboard=true;
				$scope.showValidate=false;
			}
			});
			parameters=key=company=email="";

	}
		
  });
