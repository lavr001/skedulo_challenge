document.querySelector(".add_employee").onclick = () => {
  document.querySelector(".employee_info_box").classList.add("show");
  document.querySelector(".new_employee_box").classList.add("hide");
};

document.querySelector(".cancel").onclick = () => {
  document.querySelector(".new_employee_box").classList.remove("hide");
  document.querySelector(".employee_info_box").classList.remove("show");
};

document.querySelector(".save").onclick = () => {
  let form = document.querySelector(".employee_info_box");

  let employeeInfo = document.createElement("div");
  employeeInfo.className = "employee_details";

  let employeeName = document.createElement("p");
  let employeeRole = document.createElement("p");
  let employeeManager = document.createElement("p");
  let employeeEmail = document.createElement("p");

  let firstName = document.querySelector(".first_name").value;
  let lastName = document.querySelector(".last_name").value;
  let title = document.querySelector(".title").value;
  let manager = document.querySelector(".manager").value;
  let email = document.querySelector(".email").value;

  if (
    firstName.length > 0 &&
    lastName.length > 0 &&
    title.length > 0 &&
    manager.length > 0 &&
    email.length > 0
  ) {
    employeeName.innerText = firstName + " " + lastName;
    employeeRole.innerText = title;
    employeeManager.innerText = "Reports to " + manager;
    employeeEmail.innerText = email;

    employeeInfo.append(
      employeeName,
      employeeRole,
      employeeManager,
      employeeEmail
    );

    document.querySelector("main").append(employeeInfo);
    document.querySelector(".new_employee_box").classList.remove("hide");
    document.querySelector(".employee_info_box").classList.remove("show");

    form.reset();
  } else {
    alert("All Fields are required");
  }
};
