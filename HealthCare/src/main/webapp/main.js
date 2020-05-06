var printButton = document.getElementById("printButton");

//Hide and visible admin registration DIV
function adminVisible() {
	  var x = document.getElementById("myDIV");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}

//Hide and Visible pharmacy registration DIV
function pharmacyVisible() {
	  var x = document.getElementById("pharmacyDIV");
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

const adminTableBody = document.querySelector("#admin-table > tbody");

function getAllAdmins() {

	var myRequest = new XMLHttpRequest();

	myRequest.open('GET', 'http://localhost:9090/HealthCare/services/admin/getAll', true);

	myRequest.onload = function() {
		// if (this.status == 200) {
		
		try {
			var data = JSON.parse(this.responseText);
			
			populateAdmin(data);
			
		} catch (e) {
			
			console.warn("Could not Load Admins!");
		}
			
			// for (var i = 0; i < data.AllAdmins.length; i++)
				// console.log(data);

			// var print = document.getElementById("print").innerHTML = "Admin
			// Name : " + data;
		// }
	}
	myRequest.send();
}


function populateAdmin(data) {
	
	console.log(data);

	while(adminTableBody.firstChild) {
		
		adminTableBody.removeChild(rankingBody.firstChild);
	}
	
	// Load Table
	data.forEach((row) => {
		
		const tr = document.createElement("tr");
		
		row.forEach((cell) => {
			
			const td = document.createElement("td");
			
			td.textContent = cell;
			
			tr.appendChild(td);
		});
		
		adminTableBody.appendChild(tr);
		
	});
}

document.addEventListener("DOMContentLoaded", () => { getAllAdmins(); });


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
	
	if(firstName == "") {
		alert("First Name is Required");
	}
	else if(lastName == "") {
		alert("Last Name is Required");
	}
	else if(idNumber == "") {
		alert("Identity Number Required");
	}
	else if(adminRole == "") {
		alert("Admin Role is Required");
	}
	else if(username == "") {
		alert("Username is Required");
	}
	else if(password == "") {
		alert("Password is Required");
	}
	else if(comfirmPassword == "") {
		alert("Please Re-enter Password");
	}
	else if(password != comfirmPassword) {
		alert("Password not Matching");
	}
	else {
		
		var post = "firstName=" + firstName + "&lastName=" + lastName + "&idNumber=" + idNumber + "&adminRole=" + adminRole + "&username=" + username + "&password=" + password;

		myRequest.open('POST', 'http://localhost:9090/HealthCare/services/admin/create', true);
		myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		myRequest.send(post);
	
		alert("Admin Created Successfully");

		onItemSaveComplete(response.responseText, status);
	}

}



//Create New Pharmacy
function createPharmacy(response, status) {

	var myRequest = new XMLHttpRequest();

	var pharmacyId = document.getElementById("pharmacyId").value;
	var pharmacyName = document.getElementById("pharmacyName").value;
	var address = document.getElementById("address").value;
	var telephone = document.getElementById("telephone").value;
	
	if(pharmacyId == "") {
		alert("Pharmacy Id is Required");
	}
	else if(pharmacyName == "") {
		alert("Pharmacy Name is Required");
	}
	else if(address == "") {
		alert("Pharmacy Address Required");
	}
	else if(telephone == "") {
		alert("Pharmacy Telephone Number is Required");
	}
	else if(isNaN(telephone)) {
		alert("Invalid Telephone Number");
	}
	else {
		
		var post = "pharmacyId=" + pharmacyId + "&pharmacyName=" + pharmacyName + "&address=" + address + "&telephone=" + telephone;

		myRequest.open('POST', 'http://localhost:9090/HealthCare/services/pharmacy/create', true);
		myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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


