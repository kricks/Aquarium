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


	<div class="border mt-3">
		<table>
			<tr>
				<td>Name :</td>
				<td>${name}</td>
			</tr>
			<tr>
				<td>Type :</td>
				<td>${type}</td>
			</tr>
			<tr>
				<td>Gallons :</td>
				<td>${gallon}</td>
			</tr>
			<tr>
				<td>Notes :</td>
				<td>${notes}</td>
			</tr>
		</table>
	</div>
	<br>
	<div class="border px-3 py-2">
		<h4 class="text-center pb-2">Add New Fish</h4>
		<form action="addNewFish" method="post">
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputName">Name</label> <input type="text"
						class="form-control" id="inputName" placeholder="Enter Name">
				</div>
				<div class="form-group col-md-6">
					<label for="inputType">Species</label> <input type="text"
						class="form-control" id="inputType" placeholder="Enter Species">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="inputGender">Gender</label> <select
						class="form-control" id="exampleFormControlSelect1">
						<option>Male</option>
						<option>Female</option>
					</select>
				</div>
				<div class="form-group col-md-6">
					<label for="inputDesc">Notes</label> <input type="text"
						class="form-control" id="inputDesc"
						placeholder="Enter Description">
				</div>

			</div>
			<div class="row">
				<div class="float-right">
					<button type="submit" class="btn btn-primary">Add</button>
					<button type="button" class="btn btn-warning text-white">Cancel</button>
				</div>
			</div>
		</form>
	</div>
	<br>

	<div class="border px-3 py-2">
		<h4 class="text-center">Aquarium List</h4>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Species</th>
					<th scope="col">Temperament</th>
					<th scope="col">Gender</th>
					<th scope="col">Notes</th>
				</tr>
			</thead>
			<tbody>
				<a href="#">
					<tr>
						<th scope="row">1</th>
						<td>Merlin</td>
						<td>Clown Fish</td>
						<td>Super Anxious</td>
						<td>Male</td>
						<td>Father of Nemo</td>
						<td>
							<button type="button" class="btn btn-success">Edit</button>
							<button type="button" class="btn btn-danger">Delete</button>
						</td>
					</tr>
				</a>

				<tr>
					<th scope="row">2</th>
					<td>Nemo</td>
					<td>Clown Fish</td>
					<td>Adventurous</td>
					<td>Male</td>
					<td>Deformed fin</td>
					<td>
						<button type="button" class="btn btn-success">Edit</button>
						<button type="button" class="btn btn-danger">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>


</body>
</html>