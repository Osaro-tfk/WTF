var form_FirstName, lastName, address, phoneNumber, e_mail, about_user, user_skills, user_job_role, job_role_date, company, location, accomplishment, edu_qua, courseOfStudy, studyDate, studyInst, InstLocation, spokenLang, rel_cert;

// Inputs
form_FirstName = document.getElementById("formFirstName");

// document.getElementById("cv_lastname").innerHTML = "Kadiri";

// document.getElementById("cv_add").innerHTML = "Akoka, Lagos Nigeria";

// document.getElementById("cv_num").innerHTML = "+234-56734590";

// document.getElementById("cv_mail").innerHTML = "taiye.kadiri@womentechsters.org";

// Outputs
var cv_FirstName = document.getElementById('cv_firstname');



// functions
function firstNameResult(){
    cv_FirstName = form_FirstName.value;
}

form_FirstName.addEventListener("formdata", firstNameResult, false);




// // console.log(firstName)
// // alert(lastName)
