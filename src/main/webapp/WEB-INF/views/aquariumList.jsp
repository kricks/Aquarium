
<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<body ng-app="myApp">
	<div class="container mb-3" id="aquariumList">
		<h3 class="text-center mt-4 text">Welcome, Add a New Aquarium</h3>
		<br>
		<div ng-controller="aquariumListController as ctrl">

			<form method="POST" action="aquarium-confirmation" id="top"
				modelAttribute="aquariumConfirmation" name="aquariumForm"
				class="col text" autocomplete="off">
				<div id="test">
					<input type="hidden" ng-model="ctrl.aquarium.aquariumId" />

					<div class="form-row col">
						<div class="form-group col-md-6">
							<label for="tname">Name <strong class="text-danger">*</strong></label>
							<input type="text" ng-model="ctrl.aquarium.name" id="nameField"
								name="name" class="form-control" placeholder="Enter Name"
								required>
						</div>
						<div class="form-group col-md-6">
							<label for="type">Type <strong class="text-danger">*</strong></label> 
							<select required name="type"
								class="form-control" id="typeField"
								ng-model="ctrl.aquarium.type">
								<option disabled selected value="" hidden>Select Type
									of Aquarium : </option>
								<option value="Fresh Water">Fresh Water</option>
								<option value="Salt Water">Salt Water</option>
								<option value="Brackish Water">Brackish Water</option>
							</select>
						</div>
					</div>


					<div class="form-row col">
						<div class="form-group col-md-6">
							<label for="gallon">Gallons</label> <input type="number" min="0"
								ng-model="ctrl.aquarium.gallon" name="gallon"
								class="form-control" id="gallonField"
								placeholder="Enter Gallons">
						</div>
						<div class="form-group col-md-6">
							<label for="notes">Notes</label> <input type="text"
								ng-model="ctrl.aquarium.notes" name="notes" class="form-control"
								id="notesField" placeholder="Enter Notes">
						</div>
					</div>

					<div class="form-row col">
						<div class="form-group col-md-6">
							<label for="date">Date<strong class="text-danger">
									*</strong></label> 
								<input type="text" ng-model="ctrl.aquarium.date" name="date"
								class="form-control" id="dateField" placeholder="MM/dd/yyyy"
								required ng-change="checkDate(ctrl.aquarium.date)">
						</div>
					</div>
				</div>
				<div class="col">
					<div class="float-right">
						<input type="submit" id="submitButton"
							ng-hide="ctrl.aquarium.aquariumId" value="Add"
							class="btn btn-primary"> <input type="button"
							id="updateButton" ng-hide="!ctrl.aquarium.aquariumId"
							ng-click="ctrl.update()" class="btn btn-primary text-white"
							value="Update">
						<button type="button" id="clearForm" ng-click="ctrl.reset()"
							class="btn btn-danger">Cancel</button>
					</div>
				</div>
			</form>

			<br> <br>
			<h4 class="mt-4 text text-center pt-3">Aquarium List</h4>

			<div class="row">
				<div class="col-sm-6 col-lg-4 my-2" ng-repeat="t in ctrl.aquariums">
					<div class="card">
					<div id="aquariumName-{{t.name}}">
						<div class="card-header font-weight-bold text-center"
							ng-bind="t.name" name="cardName" id="cardName-{{t.name}}"></div>
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
								<li ng-bind="t.date | date:'MM/dd/yyyy'"></li>
							</ul>
							</p>
						</div>
						</div>
						<div class="card-footer text-center">
							<a ng-href="livestock-list/{{t.aquariumId}}">
								<button type="button" class="btn btn-info"
									id="view-{{t.aquariumId}}">
									View <img class="ml-1" alt="fish icon"
										src="https://img.icons8.com/officexs/16/000000/clown-fish.png">
								</button>
							</a>

							<button type="button" ng-click="ctrl.edit(t)"
								class="btn btn-success" id="aquariumEdit-{{t.name}}">Edit</button>
							<button type="button" ng-click="ctrl.remove(t.aquariumId)"
								class="btn btn-danger" id="aquariumDelete-{{t.name}}">Delete</button>

						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
	<%@ include file="/WEB-INF/views/modules/jsAquariumInclude.jsp"%>
</body>

<%@ include file="/WEB-INF/views/modules/footer.jsp"%>
