<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div>
		${message.name}
		${message.species}
		${message.gender}
		${message.notes}
	</div>
	
		<a href="aquarium-details">
		<button class="btn btn-primary">Click here to get started!</button>
	</a>
	
</body>
</html>