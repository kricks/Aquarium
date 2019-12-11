<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html ng-app="myApp">

<head>
<meta charset="ISO-8859-1">
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">

<title>Aquarium List</title>
</head>

<body class="container">
	<h3 class="text-center">Welcome, Enter the Aquarium Details</h3>
	<br>
	<div ng-controller="aquariumListController as ctrl">
		<form ng-submit="ctrl.submit()" id="top" name="aquariumForm"
			class="col">
			<input type="hidden" ng-model="ctrl.aquarium.aquariumId" />

			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="tname">Name <span class="text-danger">*</span></label>
					<input type="text" ng-model="ctrl.aquarium.name" name="tName"
						class="form-control" placeholder="Enter Name" required>
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

			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="date">Date <span class="text-danger">*</span></label> <input
						type="date" ng-model="ctrl.aquarium.date" name="tDate"
						class="form-control" id="date" required>
				</div>
			</div>

			<div>
				<div class="float-right">
					<input type="submit"
						value="{{!ctrl.aquarium.aquariumId ? 'Add' : 'Update'}}"
						class="btn btn-primary">
					<button type="button" ng-click="ctrl.reset()"
						class="btn btn-warning text-white">Cancel</button>
				</div>
			</div>
		</form>
		<br>
		<h4 class="text-center pt-3">Aquarium List</h4>

		<div class="row">
			<div class="col-sm-6 col-lg-4 my-2" ng-repeat="t in ctrl.aquariums">
				<div class="card">
					<div class="card-header font-weight-bold" ng-bind="t.name"></div>
					<div class="card-body">
						<p class="card-text">
						<ul class="list-unstyled">
							<li ng-bind="t.type"></li>
							<li ng-bind="t.gallon"></li>
							<li ng-bind="t.notes"></li>
							<li ng-bind="t.date | date:'MM/dd/yy'"></li>
						</ul>
						</p>
					</div>
					<div class="card-footer text-center">
						<a ng-href="aquarium-details"><button type="button"
								class="btn btn-info">View</button></a>
						<button type="button" ng-click="ctrl.edit(t.aquariumId)"
							class="btn btn-success">Edit</button>
						<button type="button" ng-click="ctrl.remove(t.aquariumId)"
							class="btn btn-danger">Delete</button>
					</div>
				</div>
			</div>
		</div>
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
