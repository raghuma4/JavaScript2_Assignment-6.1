
window.onload = function()
{
	function CalculateSalary(basicsalary, workinghours) {
	
		var salaryWithBonus = 0;		 

		// if basic salary is greather than 15K then add 10% bonus else 5% bonus
		if(basicsalary >= 15000 && workinghours > 10)
			salaryWithBonus = basicsalary + (basicsalary * 0.1);
		else
			salaryWithBonus = basicsalary + (basicsalary * 0.05);

		var salaryDiv = document.getElementById("salarydiv");

		// update salary div with new text
		salaryDiv.innerHTML = "Employee with basic salary :"+basicsalary+" received a net salary of "+salaryWithBonus;
	}

	// Call the function by passing salary and working hours
	CalculateSalary(14000,10);

}