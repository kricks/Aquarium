<%@ include file="header.jsp"%>
<body>
	<div>
		${message.name}
		${message.type}
		${message.gallon}
		${message.notes}
		${message.date}
	</div>
	
		<a href="aquarium-list">
		<button class="btn btn-primary">Go back to Aquarium List</button>
	</a>
	<%@ include file="javascriptInclude.jsp"%>
</body>
<%@ include file="footer.jsp"%>
