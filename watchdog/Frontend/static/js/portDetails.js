var uniqueVul_data = {};
var port_data = [];
var sortable = false;

$(document).ready(function(){
	var i=0;
	var j=0;
	var url = "/server.php?type=external&level=1&category=uniqueServices";
	$.getJSON(url,function(data1){
		uniqueVul_data = data1;
		// console.log(uniqueVul_data);
		uniqueVul_data.forEach(function(ele){
			// console.log(ele);
			ele['details'].forEach(function(ele2){
				ele2['name'] = ele['name'];
				// ele2['version'].forEach(function(ele3){
				// 	console.log(ele3);
				// });
				port_data.push(ele2);
			});
		});
		//console.log(port_data);
		$('#table').bootstrapTable({
		    data:port_data,
		    columns: [{
		        field: 'name',
		        title: 'Name',
		        valign: 'middle',
		        sortable: sortable
		    }, {
		        field: 'version',
		        title: 'Version',
		        valign: 'middle',
		        sortable: sortable,
		        formatter: function ( data, type, row ) 
	        		{
	                    return data.version;
	                }
		    }, {
		        field: 'ips',
		        title: 'Count',
		        align: 'center',
		        valign: 'middle',
		        sortable: sortable,
		        formatter: function ( data, type, row ) 
	        		{
	        			// console.log(data);
	                    i=i+1;
	        			if (data.length == 0){
	        				return data.length;
	        			}
	    				return '<a href="#" onclick="show_ips('+i+')" id="myBtn" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal" >'+data.length+"</a>";
	                }
		    }]
		});
	});
});

function download_cves(){
	var service_list = [];
	for(k in port_data){
		service_list.push({"ip":port_data[k].ips[0].ip, "name":port_data[k].name, "version":port_data[k].version.version});
	}
	JSONToCSVConvertor(service_list, "Top Running Services", true);

}

function show_ips(i){
	// console.log(tech_data[i-1].cves);
	$("#myModalLabel").text("IPs");

	$("#ips_table").bootstrapTable({
		data:port_data[i-1].ips,
		columns: [{
			field: 'ip',
			title: 'IP',
			valign: 'middle',
			align: "center",
			sortable: sortable,
			formatter: function ( data, type, row ) 
        		{
    				return '<a href="/External/ip_analysis.php?ip='+data+'">'+data+"</a>";
                }
		},{
			field: 'domain',
			title: 'Domain',
			valign: 'middle',
			align: "center",
			sortable: sortable
		}]
	});

	$("#ips_table").bootstrapTable("load",port_data[i-1].ips);
	$("#ips_table").show();

	$('#download_ips').click(function(){
        JSONToCSVConvertor(port_data[i-1].ips, "Ips with Unique Critical Vulnerabilities", true);
    });
    $('#download_ips').show();
}

function show_cves(i){
	console.log(i);
	$("#myModalLabel").text("CVEs");
	$("#ips_table").hide()
	$('#download_ips').hide();

	$("#cves_table").bootstrapTable({
		data:port_data[i-1].cves,
		columns: [{
			field: 'id',
			title: 'CVE',
			valign: 'middle',
			align: "center",
			sortable: sortable,
			formatter: function ( data, type, row ) 
    		{
                return '<a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId='+data+'">'+ data+'</a>';
            }
		},{
			field: 'cvss',
			title: 'CVSS',
			valign: 'middle',
			align: "center",
			sortable: sortable
		}]
	});

	$("#cves_table").bootstrapTable("load",port_data[i-1].cves);
	$("#cves_table").show()

	// $('#download_cves').click(function(){
 //        JSONToCSVConvertor(tech_data[i-1].cves, "CVEs with CVSS", true);
 //    });
 //    $('#download_cves').show();
}
