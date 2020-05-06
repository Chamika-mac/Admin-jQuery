var printButton = document.getElementById("printButton");

// Hide and visible admin registration DIV
function adminVisible() {
	var x = document.getElementById("myDIV");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Hide and Visible pharmacy registration DIV
function pharmacyVisible() {
	var x = document.getElementById("pharmacyDIV");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Hide and Visible Admin table
function allAdminVisible() {
	var x = document.getElementById("allAdmin");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function getAdminById() {

	var myRequest = new XMLHttpRequest();

	myRequest
			.open(
					'GET',
					'http://localhost:9090/HealthCare/services/admin/id/9564541v',
					true);

	myRequest.onload = function() {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data.AdminName);
			console.log(data.AdminRole);
			console.log(data.AdminUsername);
			var print = document.getElementById("print").innerHTML = "Admin Name : "
					+ data.AdminName;

		}

	}
	myRequest.send();
}

function getAllAdmins() {

	var myRequest = new XMLHttpRequest();

	myRequest.open('GET',
			'http://localhost:9090/HealthCare/services/admin/getAll', true);

	myRequest.onload = function() {

		var data = JSON.parse(this.responseText);
		// data.sort();
		console.log(data);

		document.write('<table>');
		document.write('<tr><th>Admins</th></tr>');
		document.write('<tr><th>Admin Name</th></tr>');

		for (var i = 0; i < data.AllAdmins.length; i++) {
			document.write('<tr><td>' + data.AllAdmins[i].AdminID
					+ '</td></tr>');
			document.write('<tr><td>' + data.AllAdmins[i].FirstName
					+ '</td></tr>');

			document.write('</table>');
		}

	}
	myRequest.send();
}

// View all pharmacy - table
function getAllPharmacy() {

	var myRequest = new XMLHttpRequest();

	myRequest.open('GET',
			'http://localhost:9090/HealthCare/services/pharmacy/getAll', true);

	myRequest.onload = function() {

		var data = JSON.parse(this.responseText);
		var table = '';

		for (var i = 0; i < data.length; i++) {

			table += '<tr>';

			for (var j = 0; j < data.length; j++) {
				table += '<td>' + data.AllAdmins[j].AdminID + '</td>';
			}
			table += '</tr>';

		}
		document.write('<table border=1>' + table + '</table>');

	}
	myRequest.send();
}

// Create New Admin
function createAdmin(response, status) {

	var myRequest = new XMLHttpRequest();

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var idNumber = document.getElementById("idNumber").value;
	var adminRole = document.getElementById("adminRole").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var comfirmPassword = document.getElementById("comfirmPassword").value;

	if (firstName == "") {
		alert("First Name is Required");
	} else if (lastName == "") {
		alert("Last Name is Required");
	} else if (idNumber == "") {
		alert("Identity Number Required");
	} else if (adminRole == "") {
		alert("Admin Role is Required");
	} else if (username == "") {
		alert("Username is Required");
	} else if (password == "") {
		alert("Password is Required");
	} else if (comfirmPassword == "") {
		alert("Please Re-enter Password");
	} else if (password != comfirmPassword) {
		alert("Password not Matching");
	} else {

		var post = "firstName=" + firstName + "&lastName=" + lastName
				+ "&idNumber=" + idNumber + "&adminRole=" + adminRole
				+ "&username=" + username + "&password=" + password;

		myRequest.open('POST',
				'http://localhost:9090/HealthCare/services/admin/create', true);
		myRequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		myRequest.send(post);

		alert("Admin Created Successfully");

		onItemSaveComplete(response.responseText, status);
	}

}

// Create New Pharmacy
function createPharmacy(response, status) {

	var myRequest = new XMLHttpRequest();

	var pharmacyId = document.getElementById("pharmacyId").value;
	var pharmacyName = document.getElementById("pharmacyName").value;
	var address = document.getElementById("address").value;
	var telephone = document.getElementById("telephone").value;

	if (pharmacyId == "") {
		alert("Pharmacy Id is Required");
	} else if (pharmacyName == "") {
		alert("Pharmacy Name is Required");
	} else if (address == "") {
		alert("Pharmacy Address Required");
	} else if (telephone == "") {
		alert("Pharmacy Telephone Number is Required");
	} else if (isNaN(telephone)) {
		alert("Invalid Telephone Number");
	} else {

		var post = "pharmacyId=" + pharmacyId + "&pharmacyName=" + pharmacyName
				+ "&address=" + address + "&telephone=" + telephone;

		myRequest.open('POST',
				'http://localhost:9090/HealthCare/services/pharmacy/create',
				true);
		myRequest.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		myRequest.send(post);

		alert("Pharmacy Created Successfully");

		onItemSaveComplete(response.responseText, status);
	}

}

function onItemSaveComplete(response, status) {
	var resultSet = JSON.parse(response);

	if (resultSet.status.trim() == "success") {
		$("#alertSuccess").text("Successfully saved.");
		$("#alertSuccess").show();
	}
}
