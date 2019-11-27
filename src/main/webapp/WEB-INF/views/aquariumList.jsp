<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="ISO-8859-1">
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">

<title>Aquarium List</title>
</head>

<body ng-app="myApp" class="container ng-cloak">
	<h3 class="text-center">Welcome, Enter the Aquarium Details</h3>
	<br>
	<h4 class="pt-2 ">Synchronous:</h4>
	<form:form method="POST" action="aquarium-details"
		modelAttribute="aquarium">
		<div class="form-row">
			<div class="form-group col-md-6">
				<label>Name<span class="text-danger">*</span></label>
				<form:input path="name" type="text" class="form-control" id="name"
					placeholder="Enter Name" required="required"></form:input>
			</div>

			<div class="form-group col-md-6">
				<label>Type</label>
				<form:select path="type" class="form-control">
					<option>Fresh Water</option>
					<option>Salt Water</option>
					<option>Brackish Water</option>
				</form:select>
			</div>

		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label>Gallons</label>
				<form:input path="gallon" type="number" min="0" class="form-control"
					id="inputGallons" placeholder="Enter Gallons"></form:input>
			</div>
			<div class="form-group col-md-6">
				<label>Notes</label>
				<form:input path="notes" type="text" class="form-control"
					id="inputDesc" placeholder="Enter Description"></form:input>
			</div>
		</div>
		<div>
			<div class="float-right">
				<button type="submit" class="btn btn-primary">Add</button>
				<button type="reset" class="btn btn-warning text-white">Cancel</button>
			</div>
		</div>
	</form:form>
	<br>
	<h4 class="pt-2">Asynchronous:</h4>
	<div ng-controller="aquariumListController as ctrl">
		<form ng-submit="ctrl.submit()" name="aquariumForm">
			<input type="hidden" ng-model="ctrl.aquarium.id" />
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="tname">Name <span class="text-danger">*</span></label> <input type="text"
						ng-model="ctrl.aquarium.name" name="tName" class="form-control"
						placeholder="Enter Name" required>
				</div>
				<div class="form-group col-md-6">
					<label for="type">Type</label> <select name="tType"
						class="form-control" id="type" ng-model="ctrl.aquarium.type">
						<option>Fresh Water</option>
						<option>Salt Water</option>
						<option>Brackish Water</option>
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="gallon">Gallons</label> <input type="number" min="0"
						ng-model="ctrl.aquarium.gallon" name="tGal" class="form-control"
						id="gallon" placeholder="Enter Gallons">
				</div>
				<div class="form-group col-md-6">
					<label for="notes">Notes</label> <input type="text"
						ng-model="ctrl.aquarium.notes" name="tNotes" class="form-control"
						id="notes" placeholder="Enter Notes">
				</div>
			</div>
			<div>
				<div class="float-right">
				<input type="submit" value="{{!ctrl.aquarium.id ? 'Add' : 'Update'}}" class="btn btn-primary">
					<button type="reset" class="btn btn-warning text-white">Cancel</button>
				</div>
			</div>
		</form>
		<br>
		<h4 class="text-center pt-3">Aquarium List</h4>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Type</th>
					<th scope="col">Gallons</th>
					<th scope="col">Notes</th>
				</tr>
			</thead>

			<tbody>
				<tr ng-repeat="t in ctrl.aquariums">
					<th ng-bind="t.id" scope="row"></th>
					<td ng-bind="t.name"></td>
					<td ng-bind="t.type"></td>
					<td ng-bind="t.gallon"></td>
					<td ng-bind="t.notes"></td>
					<td>
						<!-- <button type="button" ng-click="ctrl.view(t)" class="btn btn-info">View</button> -->
						<button type="button" ng-click="ctrl.edit(t.id)"
							class="btn btn-success">Edit</button>
						<button type="button" ng-click="ctrl.remove(t.id)"
							class="btn btn-danger">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
		<script
			src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
		<script src="<c:url value='/static/js/app.js' />"></script>
		<script
			src="<c:url value='/static/js/services/aquariumListService.js' />"></script>
		<script
			src="<c:url value='/static/js/controller/aquariumListController.js' />"></script>
</body>

</html>