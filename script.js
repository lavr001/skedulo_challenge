document.querySelector(".add_employee").onclick = () => {
  document.querySelector(".employee_info_box").classList.add("show");
};

document.querySelector(".cancel").onclick = () => {
  document.querySelector(".employee_info_box").classList.remove("show");
};
