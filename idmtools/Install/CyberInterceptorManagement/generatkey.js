var app = angular.module('testApp', []);

app.controller('testController' , function ($scope, $http) {
	
	var data=[];
	var contentToDisplay="";
	console.log("Page load");
    $scope.getContent = function () {
		//console.log($scope.myTextArea);
		
		var list = $scope.myTextArea.split("\n");
		////var list = $scope.myTextArea;
		//console.log(list[0]);
		var i;
		for(i = 0; i < list.length; i++){
			if(list[i] === ""){
				continue;
			}
			//console.log(list[i]);
			var singleEntry = list[i].trim().split(" ");
			//console.log("Agent Name: "+ singleEntry[0]);
			//console.log("Agent Ip: "+ singleEntry[1]);
			var obj = {};
			obj['agentName'] = singleEntry[0];
			obj['agentIp'] = singleEntry[1];
			//console.log(obj);
			data[i]=obj;
			//console.log(data[i]);
		}
		//console.log(data);
		
		 var postUrl="https://192.168.50.117:10800/ta/generateKeys";
      $http.post(postUrl,data)
        .success(function (data, status, headers, config){
            console.log("http success")
            


			var addEncoding = "data:text/csv;charset=utf-8,";
			contentToDisplay += addEncoding;
			for(var key in data){
				if(data.hasOwnProperty(key)){
					//console.log(data[key]);
					contentToDisplay+=data[key].agentName +=",";
					contentToDisplay+=data[key].agentIp+=",";
					contentToDisplay+=data[key].agentKey;
					//console.log(data[key].agentName);
				}
				contentToDisplay+="\n";
			}
			console.log(contentToDisplay);
			$scope.myTextArea = "";
			$scope.myTextArea = contentToDisplay.substring(addEncoding.length).replace(","," ");
			//window.open(xyz);
        })
        .error(function (data, status, header, config){
            console.log("http error");
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    };
	$scope.downloadContent = function (){
		
			var encodedUri = encodeURI(contentToDisplay);
			var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
//link.innerHTML= "Click Here to download";
document.body.appendChild(link); // Required for FF

link.click(); 
data="";
	}
    
});
