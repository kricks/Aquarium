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
				class="col text" autocomplete="off">
				<input type="hidden" ng-model="ctrl.livestock.livestockId" />

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="tname">Name <strong class="text-danger">*</strong></label>
						<input type="text" ng-model="ctrl.livestock.name"
							name="nameFieldLS" id="nameFieldLS" class="form-control"
							placeholder="Enter Name" required="required"></input>
					</div>
					<div class="form-group col-md-6">
						<label for="species">Species <strong class="text-danger">*</strong></label>
						<input type="text" name="species"
							ng-model="ctrl.livestock.species" class="form-control"
							id="speciesFieldLS" placeholder="Enter Species"
							required="required"></input>
					</div>

				</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="type">Gender <strong class="text-danger">*</strong></label> <select name="gender"
							id="genderFieldLS" class="form-control"
							ng-model="ctrl.livestock.gender" required>
							<option disabled selected value="" hidden>Select Gender
								:</option>
							<option>Male</option>
							<option>Female</option>
							<option>N/A</option>
						</select>
					</div>
					<div class="form-group col-md-6">
						<label for="notes">Notes</label> <input type="text" name="notes"
							ng-model="ctrl.livestock.notes" class="form-control"
							id="notesFieldLS" placeholder="Enter Notes"></input>
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
				<table class="table-striped table mt-4" id="table">
					<thead class="thead-light">
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Species</th>
							<th scope="col">Gender</th>
							<th scope="col">Notes</th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody id="body">
						<tr ng-repeat="t in ctrl.livestocks" name="repeat" id="livestockName-{{t.name}}">
								<th scope="row" ng-bind="t.name" id="nameValue"></th>
								<td ng-bind="t.species" id="speciesValue"></td>
								<td ng-bind="t.gender" id="genderValue"></td>
								<td ng-bind="t.notes" id="notesValue"></td>
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