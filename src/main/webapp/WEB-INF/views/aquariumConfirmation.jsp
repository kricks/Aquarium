<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<body ng-app="myApp">
	<div class="container">
		<div class="row mt-4 text-center">
			<div class="col">
				<h3 class="text">You have added a new aquarium</h3>
			</div>

		</div>
		<div class="row">
			<div class="col-sm-6 offset-sm-4 col-lg-4 mt-4">
				<div class="card">
					<div class="card-header font-weight-bold text-center">${message.name}</div>
					<div class="card-body row">
						<p class="card-text">
						<ul class="list-unstyled col-4">
							<li>Type:</li>
							<li>Gallons:</li>
							<li>Notes:</li>
							<li>Date:</li>
						</ul>
						<ul class="list-unstyled col-8">
							<li>${aquarium.type}</li>
							<li>${aquarium.gallon}</li>
							<li>${aquarium.notes}</li>
							<li><fmt:formatDate value="${aquarium.date}"
									pattern="MM/dd/yyyy" /></li>
						</ul>
						</p>
					</div>
					<div class="card-footer text-center">
						<a href="aquarium-list">
							<button type="button" class="btn btn-primary">Go back to
								Aquarium List</button>
						</a>

					</div>
				</div>
			</div>
		</div>
	</div>

	<%@ include file="/WEB-INF/views/modules/jsLivestockInclude.jsp"%>

</body>
<%@ include file="/WEB-INF/views/modules/footer.jsp"%>
