function load_about() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#about").addClass("active");
  $('#changeonclick').load("about.html");
}

function load_experience() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#experience").addClass("active");
  document.getElementById("changeonclick").innerHTML = '<object type="text/html" data="experience.html" ></object>';
}

function load_education() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#education").addClass("active");
  document.getElementById("changeonclick").innerHTML = '<object type="text/html" data="education.html" ></object>';
}

function load_skills() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#skills").addClass("active");
  document.getElementById("changeonclick").innerHTML = '<object type="text/html" data="skills.html" ></object>';
}

function load_awards() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#awards").addClass("active");
  document.getElementById("changeonclick").innerHTML = '<object type="text/html" data="awards.html" ></object>';
}

function load_interests() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#interests").addClass("active");
  document.getElementById("changeonclick").innerHTML = '<object type="text/html" data="interests.html" ></object>';
}
