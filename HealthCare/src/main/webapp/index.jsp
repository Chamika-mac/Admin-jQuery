<!DOCTYPE html>
<html>
<head>
<title>HealthCare Online</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
	
<script type="text/javascript" src="main.js"></script>
	
</head>

<body>


	<div style='padding: 10px; margin: auto'>
		<button type="submit" class="btn btn-info" id="printButton" onclick="getAllAdmins()">Admin Registration</button>
		<button type="submit" class="btn btn-info" >Pharmacy
			Registration</button>
			
			<p id="print" ></p>
			
			<table>
				<ul></ul>
			</table>
	</div>


	<div>

		<div style='padding: 5%'>
			<form onsubmit="createAdmin()">

				<h1 style="margin: auto; color: green">HealthCare Online System</h1>
				<h3 style="margin: auto; color: green">Admin Registration</h3>
				<br> <br>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="admin1">First Name</label> <input type="text"
							placeholder="First Name" class="form-control" id="firstName">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="admin2">Last Name</label> <input type="text"
							placeholder="Last Name" class="form-control" id="lastName">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="adminIdNumber">Identity Number</label> <input
							type="text" class="form-control" id="idNumber"
							placeholder="Identity Number">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputState">Admin Role</label> <select id="adminRole"
							class="form-control">
							<option selected>Choose Admin Role</option>
							<option>System Administrator</option>
							<option>Customer Service</option>
							<option>Inventory Manager</option>
						</select>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="adminUsername">UserName</label> <input type="text"
							class="form-control" id="username"
							placeholder="Enter Username">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="adminPassword">Password</label> <input type="password"
							class="form-control" id="password">
					</div>
				</div>

				<button type="submit" class="btn btn-primary" id="button">Register</button>
			</form>
		</div>

	</div>

</body>
</html>
