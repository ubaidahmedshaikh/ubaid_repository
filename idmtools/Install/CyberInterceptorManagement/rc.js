function pciDss(){
	
	var newUrl = "http://192.168.50.117:5601/app/wazuh#/overview/?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1y,mode:quick,to:now))&tabView=panels&tab=pci&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:manager.name,negate:!f,params:(query:saiuser-VirtualBox,type:phrase),removable:!f,type:phrase,value:saiuser-VirtualBox),query:(match:(manager.name:(query:saiuser-VirtualBox,type:phrase)))),('$state':(store:appState),exists:(field:rule.pci_dss),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:rule.pci_dss,negate:!f,removable:!f,type:exists,value:exists))),index:'interceptor-alerts-*',interval:M,query:(language:lucene,query:''),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');

}

function hipaa(){
	
	var newUrl = "hipaa.html";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function fisma(){
	
	var newUrl = "fisma.html";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function sox(){
	
	var newUrl = "sox.html";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function gdpr(){
	
	var newUrl = "http://192.168.50.117:5601/app/wazuh#/overview/?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1y,mode:quick,to:now))&tab=gdpr&tabView=panels&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:manager.name,negate:!f,params:(query:saiuser-VirtualBox,type:phrase),removable:!f,type:phrase,value:saiuser-VirtualBox),query:(match:(manager.name:(query:saiuser-VirtualBox,type:phrase)))),('$state':(store:appState),exists:(field:rule.gdpr),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:rule.gdpr,negate:!f,removable:!f,type:exists,value:exists))),index:'interceptor-alerts-*',interval:M,query:(language:lucene,query:''),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function back(){
	
	var newUrl = "http://192.168.50.117:5601/app/wazuh#/overview/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-5y,mode:quick,to:now))&tabView=panels&tab=pci&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:manager.name,negate:!f,params:(query:saiuser-VirtualBox,type:phrase),removable:!f,type:phrase,value:saiuser-VirtualBox),query:(match:(manager.name:(query:saiuser-VirtualBox,type:phrase)))),('$state':(store:appState),exists:(field:rule.pci_dss),meta:(alias:!n,disabled:!f,index:'interceptor-alerts-*',key:rule.pci_dss,negate:!f,removable:!f,type:exists,value:exists))),index:'interceptor-alerts-*',interval:M,query:(language:lucene,query:''),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');	
	
}
