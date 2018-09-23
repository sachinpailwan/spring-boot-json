<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>
<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<div class="container">
		<table class="table table-striped" id="mytable">
			<caption>Sorting Properties</caption>
			<thead>
				<tr>
					<th class="col-md-1"></th>
					<th class="col-md-3">Properties</th>
					<th class="col-md-2">Order</th>
					<th class="col-md-1"></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td><div>
							<select class="form-control" id="sel1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div></td>
					<td><div>
							<select class="form-control" id="order">
								<option>ASC</option>
								<option>DES</option>
							</select>
						</div></td>
					<td><a class="delete" title="Delete" data-toggle="tooltip"><i
							class="material-icons">&#xE872;</i></a></td>
				</tr>
			</tbody>
			<tfoot>

				<tr>
					<td colspan="1" style="text-align: left;"><input type="button"
						id="addrow" value="Add Row" onclick="addProperty()" /></td>
				</tr>
				<tr>
				</tr>
			</tfoot>
		</table>
		<div>

			<button class="btn btn-default" onclick="sort()">Sort & Sent</button>
			
			<button class="btn btn-default" onclick="load()">Load</button>
		</div>
	</div>
	<link rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
	<link rel="stylesheet"
		href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="js/custom.js"></script>
</body>
</html>