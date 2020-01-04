var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	
	$scope.changeData = function (){
	//console.log("hello world");
	console.log($scope.checkData);
	if(!$scope.checkData){
		$http.get("https://192.168.50.117:10800/va/getList")
  .then(function successCallback(response){
                $scope.response = response.data.message;
				var content = response.data.message;
				
				console.log(content);
				content = content.replace(/,/g,"\n");
				
				$scope.myTextArea = content;
            }, function errorCallback(response){
             
                console.log("Unable to perform get request");
            });
	}
	$scope.myTextArea="";
	
}
	$http.get("https://192.168.50.117:10800/va/getList")
  .then(function successCallback(response){
                $scope.response = response.data.message;
				var content = response.data.message;
				var contentSize=content.length;
                                
                                console.log(content);
				content = content.replace(/,/g,"\n");
				$scope.myTextArea = content;
            }, function errorCallback(response){
             
                console.log("Unable to perform get request");
            });
			$http.get("https://192.168.50.117:10800/va/getScanState")
  .then(function(response) {
if( response.data.message == 1){
      $scope.status2 = "Ready to Scan";
}else{
      $scope.status2 = "Scan in Progress";
	 document.getElementById("button2").disabled = true;
	 document.getElementById("button1").disabled = true;
} 

});
	$scope.getRequest = function () {
		 setInterval(function() {
                  window.location.reload();
                }, 180);

	document.getElementById("button2").disabled = true;
        document.getElementById("button1").disabled = true;
	$http.get("https://192.168.50.117:10800/va/startScan")
.then(function successCallback(response){
                $scope.status2 = "Scan in Progress";
                //$scope.response = response.data.message;
				console.log(response.data.message);
				
            }, function errorCallback(response){
             
                console.log("Unable to perform get request");
            });
	}
	




	
	
	$scope.addRequest = function () {
		//console.log($scope.myTextArea);
		var addData = $scope.myTextArea.split("\n");
		if(addData.length > 10){
            
			alert("Please limit to 10 entries");
			return;
        }
		if($scope.checkData){
			console.log("Send temp list");var postUrl="https://192.168.50.117:10800/va/updateTempList";
      $http.post(postUrl,addData)
	   .success(function (data, status, headers, config){
		//console.log(data);
			//console.log(data.message);
                 if( data.status == "OK"){
     

		   $scope.response0 = "Entries added Successfully";
            console.log("http success");
			console.log(data);
	 } 
	});
		}
		else {
			//$scope.response01 = "Entries not added";

console.log("Sending perm list");
var postUrl="https://192.168.50.117:10800/va/updateList";
      $http.post(postUrl,addData)
	   .success(function (data, status, headers, config){
if( data.status == "OK"){


                   $scope.response0 = "Entries added Successfully";

		  
            console.log("http success");
			console.log(data);
	  }
	});			
		}
		
	}
	
	$scope.refreshStatus = function(){
        $http.get("https://192.168.50.117:10800/va/getScanState")
			.then(function(response) {
				if( response.data.message == 1){
					$scope.status2 = "Ready to Scan";
					}else{
					$scope.status2 = "Scan in Progress";
					}

			});
}
	});
	
