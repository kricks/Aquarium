
<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<body ng-app="myApp">
	<div class="container mb-3">
		<h3 class="text-center mt-4 text white-background">Welcome, Add a
			New Aquarium</h3>
		<br>
		<div ng-controller="aquariumListController as ctrl">

			<form method="POST" action="aquarium-confirmation" id="top"
				modelAttribute="aquariumConfirmation" name="aquariumForm"
				class="col text">

				<input type="hidden" ng-model="ctrl.aquarium.aquariumId" />

				<div class="form-row col">
					<div class="form-group col-md-6">
						<label for="tname">Name <strong class="text-danger">*</strong></label>
						<input type="text" ng-model="ctrl.aquarium.name" id="name"
							name="name" class="form-control" placeholder="Enter Name"
							required>
					</div>
					<div class="form-group col-md-6">
						<label for="type">Type</label> <select name="type"
							class="form-control" id="type" ng-model="ctrl.aquarium.type">
							<option>Fresh Water</option>
							<option>Salt Water</option>
							<option>Brackish Water</option>
						</select>
					</div>
				</div>


				<div class="form-row col">
					<div class="form-group col-md-6">
						<label for="gallon">Gallons</label> <input type="number" min="0"
							ng-model="ctrl.aquarium.gallon" name="gallon"
							class="form-control" id="gallon" placeholder="Enter Gallons">
					</div>
					<div class="form-group col-md-6">
						<label for="notes">Notes</label> <input type="text"
							ng-model="ctrl.aquarium.notes" name="notes" class="form-control"
							id="notes" placeholder="Enter Notes">
					</div>
				</div>

				<div class="form-row col">
					<div class="form-group col-md-6">
						<label for="date">Date<strong class="text-danger">
								*</strong></label> <input type="text" ng-model="ctrl.aquarium.date" name="date"
							class="form-control" id="date" placeholder="MM/dd/yyyy" required>
					</div>
				</div>

				<div class="col">
					<div class="float-right">
						<input type="submit" ng-hide="ctrl.aquarium.aquariumId" value="Add" class="btn btn-primary">
						<input type="button" ng-hide="!ctrl.aquarium.aquariumId" ng-click="ctrl.update()" class="btn btn-primary text-white" value="Update">
						<button type="button" ng-click="ctrl.reset()"
							class="btn btn-danger">Cancel</button>
					</div>
				</div>
			</form>

			<br>
			<h4 class="mt-4 text text-center pt-3">Aquarium List</h4>

			<div class="row">
				<div class="col-sm-6 col-lg-4 my-2" ng-repeat="t in ctrl.aquariums">
					<div class="card">
						<div class="card-header font-weight-bold text-center"
							ng-bind="t.name"></div>
						<div class="card-body row">
							<p class="card-text ">
							<ul class="list-unstyled col-4">
								<li>Type:</li>
								<li>Gallons:</li>
								<li>Notes:</li>
								<li>Date:</li>
							</ul>
							<ul class="list-unstyled col-8">
								<li ng-bind="t.type"></li>
								<li ng-bind="t.gallon"></li>
								<li ng-bind="t.notes"></li>
								<li ng-bind="t.date | date:'mediumDate'"></li>
							</ul>
							</p>
						</div>
						<div class="card-footer text-center">
							<a ng-href="livestock-list/{{t.aquariumId}}">
								<button type="button" class="btn btn-info">View</button>
							</a>

							<button type="button" ng-click="ctrl.edit(t.aquariumId)"
								class="btn btn-success">Edit</button>
							<button type="button" ng-click="ctrl.remove(t.aquariumId)"
								class="btn btn-danger">Delete</button>

						</div>
					</div>
				</div>
			</div>
		</div>
		<%@ include file="/WEB-INF/views/modules/jsAquariumInclude.jsp"%>
	</div>
</body>

<%@ include file="/WEB-INF/views/modules/footer.jsp"%>
