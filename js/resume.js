function load_about() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#about").addClass("active");
  $('#changeonclick').load("about.html");
}

function load_experience() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#experience").addClass("active");
  $('#changeonclick').load("experience.html");
}

function load_education() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#education").addClass("active");
  $('#changeonclick').load("education.html");
}

function load_skills() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#skills").addClass("active");
  $('#changeonclick').load("skills.html");
}

function load_awards() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#awards").addClass("active");
  $('#changeonclick').load("awards.html");
}

function load_interests() {
  $("#about,#experience,#education,#skills,#interests,#awards").removeClass("active");
  $("#interests").addClass("active");
  $('#changeonclick').load("interests.html");
}
