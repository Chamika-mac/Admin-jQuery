public class Admin {
	
	private String adminName = null;
	
	private String adminRole = null;
	
	private String adminUsername = null;

	public Admin(String adminName, String adminRole, String adminUsername) {
		super();
		this.adminName = adminName;
		this.adminRole = adminRole;
		this.adminUsername = adminUsername;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminRole() {
		return adminRole;
	}

	public void setAdminRole(String adminRole) {
		this.adminRole = adminRole;
	}

	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}
	
	
}
