function loadLow(){
	
	var newUrl = "http://192.168.50.117:5601/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-5y,mode:quick,to:now))&_a=(columns:!(rule.description,full_log,agent.name),index:'interceptor-alerts-*',interval:auto,query:(language:lucene,query:'rule.level:%5B0%20TO%207%5D'),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');

}

function loadMed(){
	
	var newUrl = "http://192.168.50.117:5601/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-5y,mode:quick,to:now))&_a=(columns:!(rule.description,full_log,agent.name),index:'interceptor-alerts-*',interval:auto,query:(language:lucene,query:'rule.level:%5B8%20TO%2011%5D'),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function loadHigh(){
	
	var newUrl = "http://192.168.50.117:5601/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-5y,mode:quick,to:now))&_a=(columns:!(rule.description,full_log,agent.name),index:'interceptor-alerts-*',interval:auto,query:(language:lucene,query:'rule.level:%5B12%20TO%2015%5D'),sort:!('@timestamp',desc))";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');
	
}

function back(){
	
	var newUrl = "http://192.168.50.117:5601/app/kibana#/dashboard/dbd03510-3179-11e9-8334-e51b924741cc?_g=(refreshInterval:(pause:!f,value:30000),time:(from:now-5y,mode:quick,to:now))&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,controlledBy:'1550273241175',disabled:!f,index:'interceptor-alerts-*',key:rule.level,negate:!f,params:(gte:8,lte:15),type:range,value:'8%20to%2015'),range:(rule.level:(gte:8,lte:15)))),fullScreenMode:!t,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'4',w:24,x:0,y:15),id:'7783f010-3179-11e9-8334-e51b924741cc',panelIndex:'4',type:visualization,version:'6.5.4'),(embeddableConfig:(),gridData:(h:15,i:'5',w:24,x:24,y:15),id:'4b1dd180-3179-11e9-8334-e51b924741cc',panelIndex:'5',type:visualization,version:'6.5.4'),(embeddableConfig:(vis:(colors:('0%20to%206':%237EB26D,'11%20to%2016':%23BF1B00,'6%20to%2011':%23EF843C),legendOpen:!t)),gridData:(h:15,i:'6',w:24,x:24,y:0),id:fb8bee60-3bb2-11e9-a1af-c9427dbc4979,panelIndex:'6',type:visualization,version:'6.5.4'),(embeddableConfig:(),gridData:(h:15,i:'7',w:24,x:0,y:0),id:'33d5d1f0-3bae-11e9-a1af-c9427dbc4979',panelIndex:'7',type:visualization,version:'6.5.4')),query:(language:lucene,query:''),timeRestore:!t,title:Dashboard,viewMode:view)";
	var objectEl = document.getElementById('main-content');
	objectEl.outerHTML = objectEl.outerHTML.replace(/data="(.+?)"/, 'data="' + newUrl + '"');	
	
}