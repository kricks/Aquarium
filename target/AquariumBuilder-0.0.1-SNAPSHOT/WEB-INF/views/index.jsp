<%@ include file="/WEB-INF/views/modules/header.jsp"%>
<body>
	<div class="container">
		<div class="col mt-4">
			<h1 class="text-center text">Welcome to Aquarium Builder</h1>
			<div class="mt-4 col-6 offset-3 text">
				<p>Use Aquarium Builder to create your dream aquarium, or use it
					to organize and keep track of your current aquariums.</p>
				<p>To create an aquarium, enter its details. You can later edit
					or delete an aquarium.</p>
				<p>To add livestock to an aquarium, simply click the "View"
					button. You can add coral, fish, plants, or any other living thing
					to your aquarium.</p>
				<p>Enjoy!</p>
			</div>
			<div class="row">
				<div class="col-9">
					<a class="float-right" href="aquarium-list">
						<button class="btn btn-primary" id="getStarted">Click here to get
							started!</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</body>

<%@ include file="/WEB-INF/views/modules/footer.jsp"%>
