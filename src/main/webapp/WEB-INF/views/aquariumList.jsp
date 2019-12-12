
<%@ include file="header.jsp"%>
<body ng-app="myApp">
	<div class="container mb-3">
		<h3 class="text-center mt-3">Welcome, Enter the Aquarium Details</h3>
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
						<label for="date">Date <span class="text-danger">*</span></label>
						<input type="date" ng-model="ctrl.aquarium.date" name="tDate"
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
							<a ng-href="aquarium-details"><button type="button" class="btn btn-info">View</button></a>
							<button type="button" ng-click="ctrl.view(t.aquariumId)" class="btn btn-info">View2</button>
							<button type="button" ng-click="ctrl.edit(t.aquariumId)"
								class="btn btn-success">Edit</button>
							<button type="button" ng-click="ctrl.remove(t.aquariumId)"
								class="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%@ include file="javascriptInclude.jsp"%>
	</div>
</body>

<%@ include file="footer.jsp"%>
</html>
