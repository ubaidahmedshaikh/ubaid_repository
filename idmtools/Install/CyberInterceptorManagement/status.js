var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	          	$scope.showValidate=true;


  $http.get("https://192.168.50.117:10800/ta/getStatus")
  .then(function(response) {
if( response.data.status === "OK"){
      $scope.ta_status = "TA Active";
      $scope.ta_icon = {"color":"green"};
	  $scope.ta_text= {"color":"black"};
}
  else{
      $scope.ta_status = "TA Inactive";
      $scope.ta_icon = {"color":"red"};
	  $scope.ta_text= {"color":"red"};
     }
});
$http.get("https://192.168.50.117:10800/rtm/getStatus")
  .then(function(response) {
if( response.data.status === "OK"){
      $scope.rtm_status = "RTM Active";
	  $scope.rtm_icon= {"color":"green"};
	  $scope.rtm_text = {"color":"black"};
}else{
      $scope.rtm_status = "RTM Inactive";
	  $scope.rtm_icon= {"color":"red"};
	  $scope.rtm_text = {"color":"red"};
} 

});
var apiurl = "https://192.168.50.117:10800/license/getValidityPeriod"
	  $http.get(apiurl).success(function(data){
        $scope.license_text = {"color":"black"};
		$scope.license_status = "License Valid";
		$scope.license_icon = {"color":"green"};
		var days = data.message.split(" ")[0];
		
		//if(days < 30){
			
		//	$scope.license_text = {"color":"red"}
		//	$scope.license_icon = {"color":"red"};
			if(days < 0){
				$scope.license_status="License expired";
			}
            else
				$scope.license_status = days + " days remaining";
		//}
		
		
      });
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
				self.location.href='dashboard.html'
			}
			});
			parameters=key=company=email="";

	}
});
