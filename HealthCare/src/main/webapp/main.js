var printButton = document.getElementById("printButton");
var print = document.getElementById("print");

function getAdminById() {
	// var print = document.getElementById("print") = "Hello World!!!";

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
		// var myData = JSON.parse(myRequest.responseText);
		// var print = document.getElementById.innerHtml("Hello World!!");
		// console.log(myData);
		// renderHTML(myData);
	}
	myRequest.send();
}

function getAllAdmins() {
	// var print = document.getElementById("print") = "Hello World!!!";

	var myRequest = new XMLHttpRequest();

	myRequest.open('GET',
			'http://localhost:9090/HealthCare/services/admin/getAll', true);

	myRequest.onload = function() {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			for (var i = 0; i < data.AllAdmins.length; i++)
				console.log(data.AllAdmins[i].AdminID);

			var print = document.getElementById("print").innerHTML = "Admin Name : "
					+ data;
		}
	}
	myRequest.send();
}

function createAdmin(response, status) {

	var myRequest = new XMLHttpRequest();

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var idNumber = document.getElementById("idNumber").value;
	var adminRole = document.getElementById("adminRole").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var post = "firstName=" + firstName + "&lastName=" + lastName
			+ "&idNumber=" + idNumber + "&adminRole=" + adminRole
			+ "&username=" + username + "&password=" + password;

	myRequest.open('POST',
			'http://localhost:9090/HealthCare/services/admin/create', true);
	myRequest.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	myRequest.send(post);

	if (resultSet.status.trim() == "success") {
		alert("Hello! I am an alert box!!");
	}

}

// @FormParam("firstName") String firstName, @FormParam("lastName") String
// lastName,
// @FormParam("idNumber") String idNumber, @FormParam("adminRole") String
// adminRole,
// @FormParam("username") String username, @FormParam("password") String
// password

