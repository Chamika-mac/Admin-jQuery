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

<body style="background-color: #F0FFF0">


	<div style='padding: 3% 30%'>
		<button type="submit" class="btn btn-warning" id="printButton" onclick="adminVisible()">Admin Registration</button>
		<button type="submit" class="btn btn-warning" onclick="pharmacyVisible()">Pharmacy Registration</button>
		<button type="submit" class="btn btn-danger" onclick="allAdminVisible()">View All Admins</button>
		<button type="submit" class="btn btn-danger" onclick="getAllPharmacy()">View All Pharmacy</button>
	</div>
	
	<div id="allAdmin" style="display: none">
	
		<div style='padding: 3% 30%'  onload="getAllPharmacy()">
		<h3>View All Admins</h3>
		
		<table border ="1">
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</table>
		
		</div>
		
	</div>


	<div id="myDIV">

		<div style='padding: 3% 30%'>
			<form onsubmit="createAdmin()">

				<h1 style="margin: auto; color: green">HealthCare Online System</h1>
				<h3 style="margin: auto; color: green">Admin Registration</h3>
				<br> <br>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="admin1">First Name</label> <input type="text"
							placeholder="First Name" class="form-control" id="firstName">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="admin2">Last Name</label> <input type="text"
							placeholder="Last Name" class="form-control" id="lastName">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="adminIdNumber">Identity Number</label> <input
							type="text" class="form-control" id="idNumber"
							placeholder="Identity Number">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
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
					<div class="form-group col-md-12">
						<label for="adminUsername">UserName</label> <input type="text"
							class="form-control" id="username" placeholder="Enter Username">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="adminPassword">Password</label> <input type="password"
							class="form-control" id="password" placeholder="Enter Password">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="adminPassword">Comfirm Password</label> <input
							type="password" class="form-control" id="comfirmPassword"
							placeholder="Confirm Password">
					</div>
				</div>

				<button type="submit" class="btn btn-primary" id="adminButton">Register</button>
			</form>


		</div>

	</div>
	
	
	
	
	<div id="pharmacyDIV" style="display: none">

		<div style='padding: 3% 30%'>
			<form onsubmit="createPharmacy()">

				<h1 style="margin: auto; color: red">HealthCare Online System</h1>
				<h3 style="margin: auto; color: red">Pharmacy Registration</h3>
				<br> <br>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="admin1">Pharmacy ID</label> <input type="text"
							placeholder="Enter Pharmacy ID" class="form-control" id="pharmacyId">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="admin2">Pharmacy Name</label> <input type="text"
							placeholder="Enter Name" class="form-control" id="pharmacyName">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="adminIdNumber">Pharmacy Address</label> <input
							type="text" class="form-control" id="address"
							placeholder="Enter Address">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="adminUsername">Pharmacy Telephone</label> <input type="text"
							class="form-control" id="telephone" placeholder="Enter Telephone Number">
					</div>
				</div>

				<button type="submit" class="btn btn-primary" id="button">Register</button>
			</form>


		</div>

	</div>

</body>
</html>
