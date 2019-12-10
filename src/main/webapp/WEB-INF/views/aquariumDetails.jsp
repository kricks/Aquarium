<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
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

	<div ng-controller="livestockController as ctrl">
		<form ng-submit="ctrl.submit()" name="livestockForm" class="col">
			<input type="hidden" ng-model="ctrl.livestock.livestockId" />

			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="tname">Name <span class="text-danger">*</span></label>
					<input type="text" ng-model="ctrl.livestock.name" name="tName"
						class="form-control" placeholder="Enter Name" required>
				</div>
				<div class="form-group col-md-6">
					<label for="species">Species</label> <input type="text"
						ng-model="ctrl.livestock.species" name="tSpecies" class="form-control"
						id="species" placeholder="Enter Species">
				</div>

			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="type">Gender</label> <select name="tGender"
						class="form-control" id="type" ng-model="ctrl.livestock.gender">
						<option>Male</option>
						<option>Female</option>
						<option>NA</option>
					</select>
				</div>
				<div class="form-group col-md-6">
					<label for="notes">Notes</label> <input type="text"
						ng-model="ctrl.livestock.notes" name="tNotes" class="form-control"
						id="notes" placeholder="Enter Notes">
				</div>
			</div>
			<div>
				<div class="float-right">
					<input type="submit"
						value="{{!ctrl.livestock.livestockId ? 'Add' : 'Update'}}"
						class="btn btn-primary">
					<button type="button" ng-click="ctrl.reset()"
						class="btn btn-warning text-white">Cancel</button>
				</div>
			</div>
		</form>
		<br>
		<h4 class="text-center pt-3">Aquarium List</h4>
		<table class="table no-gutters">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">aqID</th>
					<th scope="col">Name</th>
					<th scope="col">Species</th>
					<th scope="col">Gender</th>
					<th scope="col">Notes</th>
				</tr>
			</thead>

			<tbody>
				<tr ng-repeat="t in ctrl.livestocks">
					<th ng-bind="t.livestockId" scope="row"></th>
					<td ng-bind="t.aquariumId"></td>
					<td ng-bind="t.name"></td>
					<td ng-bind="t.species"></td>
					<td ng-bind="t.gender"></td>
					<td ng-bind="t.notes"></td>
					<td>
						<button type="button" ng-click="ctrl.edit(t.livestockId)"
							class="btn btn-success">Edit</button>
					</td>
					<td>
						<button type="button" ng-click="ctrl.remove(t.livestockId)"
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
		src="<c:url value='/static/js/services/livestockService.js' />"></script>
	<script
		src="<c:url value='/static/js/controller/livestockController.js' />"></script>
</body>
</html>