// Add your code here
let form = document.forms["form-data"];
form.addEventListener("submit", collectData);

function collectData(event) {
  event.preventDefault();

  let dataObjet = {
    name: form.name.value,
    email: form.email.value,
    "registration status": form.regStatus.value,
    course: [],
    "additional info": form.additionalInfo.value,
  };

  let courses = document.querySelectorAll(".courses");

  for (let course of courses) {
    if (course.checked) {
      if (course.id === "proLanguage") {
        dataObjet.course.push("Programming Language");
      } else if (course.id === "opeSystem")
        dataObjet.course.push("Operating System");
      else if (course.id === "webDevelopment")
        dataObjet.course.push("Full Stack Web Development");
    }
  }

  console.log("Full name: " + dataObjet.name);
  console.log("Email: " + dataObjet.email);
  console.log("Registration status: " + dataObjet["registration status"]);
  console.log("Course Taken: " + dataObjet.course);
  console.log("Anything Else: " + dataObjet["additional info"]);
}