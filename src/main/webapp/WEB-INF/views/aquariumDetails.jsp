<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
<title>Aquarium Details</title>
</head>
<body ng-app="myApp" class="container">
	<br>

	<a href="aquarium-list">
		<button class="btn btn-primary">Go Back to Aquarium List</button>
	</a>

	<table class="mt-3 p-3">
		<tr>
			<td>Name :</td>
			<td>${message.name}</td>
		</tr>
		<tr>
			<td>Type :</td>
			<td>${message.type}</td>
		</tr>
		<tr>
			<td>Gallons :</td>
			<td>${message.gallon}</td>
		</tr>
		<tr>
			<td>Notes :</td>
			<td>${message.notes}</td>
		</tr>
	</table>

</body>
</html>