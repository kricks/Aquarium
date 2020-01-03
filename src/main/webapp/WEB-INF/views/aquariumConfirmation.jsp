<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<body ng-app="myApp">
	<div class="row">
		<div class="col-sm-6 offset-sm-4 col-lg-4 my-2">
			<div class="card">
				<div class="card-header font-weight-bold">${message.name}</div>
				<div class="card-body">
					<p class="card-text">
					<ul class="list-unstyled">
						<li>${message.type}</li>
						<li>${message.gallon}</li>
						<li>${message.notes}</li>
						<%-- <li>${message.date}</li> --%>
						<li><fmt:formatDate value="${message.date}" pattern="MM/dd/yyyy" /></li>
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
	<%@ include file="/WEB-INF/views/modules/jsLivestockInclude.jsp"%>

</body>
<%@ include file="/WEB-INF/views/modules/footer.jsp"%>
