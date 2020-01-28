<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<body ng-app="myApp">
	<div class="container my-3">
		<div class="text-center my-4 text">
			<div class="row">
				<div class="col">
					<div class="card text-center">
						<h3 class="card-header font-weight-bold">${aquarium.name}</h3>
						<div class="card-body">
							<p class="card-text">
								${aquarium.type} | ${aquarium.gallon} gallons |
								${aquarium.notes} |
								<fmt:formatDate value="${aquarium.date}" pattern="MM/dd/yyyy" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br>
		<div ng-controller="livestockController as ctrl"
			ng-init="ctrl.init(${fkAquariumId})">

			<h3 class="text-center text">Add New Livestock</h3>

			<form ng-submit="ctrl.submit(${fkAquariumId})" name="livestockForm"
				class="col text">
				<input type="hidden" ng-model="ctrl.livestock.livestockId" />

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="tname">Name <strong class="text-danger">*</strong></label>
						<input type="text" ng-model="ctrl.livestock.name" name="name"
							id="nameField" class="form-control" placeholder="Enter Name"
							required="required"></input>
					</div>
					<div class="form-group col-md-6">
						<label for="species">Species <strong class="text-danger">*</strong></label>
						<input type="text" name="species"
							ng-model="ctrl.livestock.species" class="form-control"
							id="speciesField" placeholder="Enter Species" required="required"></input>
					</div>

				</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="type">Gender</label> <select name="gender"
							id="genderField" class="form-control"
							ng-model="ctrl.livestock.gender">
							<option>Male</option>
							<option>Female</option>
							<option>N/A</option>
						</select>
					</div>
					<div class="form-group col-md-6">
						<label for="notes">Notes</label> <input type="text" name="notes"
							ng-model="ctrl.livestock.notes" class="form-control"
							id="notesField" placeholder="Enter Notes"></input>
					</div>
				</div>
				<div>
					<div class="float-right">
						<input type="submit" id="submitButton"
							value="{{!ctrl.livestock.livestockId ? 'Add' : 'Update'}}"
							class="btn btn-primary">
						<button type="button" ng-click="ctrl.reset()"
							class="btn btn-danger" id="clearForm">Cancel</button>
					</div>
				</div>
			</form>
			<div class="container table-responsive">
				<br> <br>
				<table class="table-striped table mt-4">
					<thead class="thead-light">
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Species</th>
							<th scope="col">Gender</th>
							<th scope="col">Notes</th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody>
						<tr ng-repeat="t in ctrl.livestocks">
							<th scope="row" ng-bind="t.name"></th>
							<td ng-bind="t.species"></td>
							<td ng-bind="t.gender"></td>
							<td ng-bind="t.notes"></td>
							<td class="float-right">

								<button type="button" id="livestockEdit-{{t.name}}"
									ng-click="ctrl.edit(t)" class="btn btn-success">Edit</button>
								<button type="button"
									ng-click="ctrl.remove(t.livestockId, ${fkAquariumId})"
									class="btn btn-danger" id="livestockDelete-{{t.name}}">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<%@ include file="/WEB-INF/views/modules/jsLivestockInclude.jsp"%>
</body>

<%@ include file="/WEB-INF/views/modules/footer.jsp"%>

</html>