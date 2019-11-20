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


<title>Insert title here</title>
</head>
<body ng-app="myApp" class="container ng-cloak">
	<h3>Welcome, Enter The Tank Details</h3>

	<h4>Synchronous:</h4>
	<form:form method="POST" action="tank-details" modelAttribute="tank">
		<div class="form-row">
			<div class="form-group col-md-6">
				<label>Name</label>
				<form:input path="name" type="text" class="form-control" id="name"
					placeholder="Enter Name" required="required"></form:input>
			</div>
			<div class="form-group col-md-6">
				<label>Type</label>
				<form:select path="type" class="form-control" required="required">
					<option>Fresh Water</option>
					<option>Salt Water</option>
					<option>Brackish Water</option>
				</form:select>
			</div>
		</div>

		<div class="form-row">
			<div class="form-group col-md-6">
				<label>Gallons</label>
				<form:input path="gallon" type="number" class="form-control"
					id="inputGallons" placeholder="Enter Gallons"></form:input>
			</div>
			<div class="form-group col-md-6">
				<label>Notes</label>
				<form:input path="notes" type="text" class="form-control"
					id="inputDesc" placeholder="Enter Description"></form:input>
			</div>
		</div>


		<div class="row">
			<div class="float-right">
				<button type="submit" class="btn btn-primary">Add</button>
				<button type="button" class="btn btn-warning text-white">Cancel</button>
			</div>
		</div>
	</form:form>
	<br>

	<h4>Asynchronous:</h4>

	<div ng-controller="tankListController as ctrl">
		<form ng-submit="ctrl.submit()" name="tankForm">
			<input type="hidden" ng-model="ctrl.tank.id" />
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="tname">Name</label> <input type="text"
						ng-model="ctrl.tank.name" name="tName" class="form-control"
						placeholder="Enter Name" required>
				</div>
				<div class="form-group col-md-6">
					<label for="type">Type</label> <select name="tType"
						class="form-control" id="type" ng-model="ctrl.tank.type">
						<option>Fresh Water</option>
						<option>Salt Water</option>
						<option>Brackish Water</option>
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="gallons">Gallons</label> <input type="number"
						ng-model="ctrl.tank.gallons" name="tGal" class="form-control"
						id="gallon" placeholder="Enter Gallons">
				</div>
				<div class="form-group col-md-6">
					<label for="notes">Notes</label> <input type="text"
						ng-model="ctrl.tank.notes" name="tNotes" class="form-control"
						id="notes" placeholder="Enter Notes">
				</div>
			</div>
			<div class="row">
				<div class="float-right">
					<button type="submit" class="btn btn-primary">Add</button>
					<button type="button" ng-click="ctrl.reset()"
						class="btn btn-warning text-white">Cancel</button>
				</div>
			</div>
		</form>
		
		<br>
		
		<div class="border px-3 py-2">
		<h4 class="text-center">Tank List</h4>

		<ul class="list-group ">
			<li ng-repeat="t in ctrl.tanks" class="list-group-item list-group-item-action m-1">
					<span ng-bind="t.id"></span> 
					<span ng-bind="t.name"></span> 
					<span ng-bind="t.type"></span> 
					<span ng-bind="t.gallons"></span>
					<span ng-bind="t.notes"></span>
				<div class="float-right">
					<button type="button" ng-click="ctrl.edit(t.id)"
						class="btn btn-success">Edit</button>
					<button type="button" class="btn btn-danger">Delete</button>
				</div>
				
		</li>
		</ul>
	</div>
	
	<br>
		
	</div>

	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
	<script src="<c:url value='/static/js/app.js' />"></script>
	<script
		src="<c:url value='/static/js/services/tank-list_service.js' />"></script>
	<script
		src="<c:url value='/static/js/controller/tank-list_controller.js' />"></script>

</body>
</html>