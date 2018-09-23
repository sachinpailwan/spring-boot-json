var counter = 1;
$(document).ready(function() {

	$(document).on("click", ".delete", function() {
		$(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
	});

});

function addProperty() {
	console.log("add property is called " + (counter));
	var newRow = $('<tr>');
	var cols = "";
	cols += "<td>" + (counter++) + "</td>";
	cols += "<td><div>" + "<select class=\"form-control\" id=\"prop\">"
			+ "<option>Affiliate</option>" + "<option>Bonus Balance</option>"
			+ "<option>Balance</option>" + "<option>Compaign</option>"
			+ "<option>Load created</option>" + "<option>Trader Point</option>"
			+ "</select>" + "</div></td>";
	cols += "<td><div>" + "<select class=\"form-control\" id=\"order\">"
			+ "<option>ASC</option>" + "<option>DES</option>" + "</select>"
			+ "</div></td>";
	cols += "<td><a class=\"delete\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"material-icons\">&#xE872;</i></a></td>";
	newRow.append(cols);
	$("#mytable").append(newRow);
}

function sort() {
	var data = {};
	var properties = [];
	data.properties = properties;
	var i = 0;
	$('#mytable tbody tr').each(function() {
		var rowData = {};
		var id = $(this).find('td:eq(0)').text();
		var propCombo = $(this).find('td:eq(1)').html();
		var orderCombo = $(this).find('td:eq(2)').html();
		rowData.id = id;
		rowData.name = $(propCombo).find("option:selected").val();
		rowData.order = $(orderCombo).find("option:selected").val();
		properties.push(rowData);
	})
	console.log(JSON.stringify(data))

	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/submit",
		data : JSON.stringify(data),
		dataType : 'json',
		cache : false,
		timeout : 600000,
		success : function(data) {

			console.log("success")

		},
		error : function(e) {

			alert(e);

		}
	});
}

function load() {
	console.log("load is called");
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "/loadProperty",
		cache : false,
		timeout : 600000,
		success : function(result) {

			console.log("data loaded");
			alert(result);
			var properties = result.properties;
			
			for(var i=0;i<properties.length;i++){
				console.log(properties[i]);
				var property=properties[i];
				// update property to table
				
			}

		},
		error : function(e) {

			console.log("error " + e);
			alert(e);

		}
	});
}
