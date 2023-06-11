// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

function getUserRepos() {
  const repos = fetch(`https://api.github.com/users/alexkemboi/repos`);
  console.log(repos);
  return repos;
}

getUserRepos();

var request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/alexkemboi/repos", true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  var statusHTML = "";
  $.each(data, function (i, status) {
    if (status.name) {
      statusHTML += `<div class="col-12 col-md-3">
      <div class="card m-1">
          <img src="/images/portfolio2.jpg" class="card-img-top" alt="...">
          <div class="card-body" style="max-height: 150px; overflow-y: auto;">
              <h5 class="card-title text-sm">${status.name.toUpperCase()}</h5>
              <p class="card-text text-sm">Description: ${
                status.description
              }</p>
              <button class="btn btn-success text-white" type="button">
                  <a href="${status.html_url}" class="text-white">Open repo</a>
                  <i></i>
              </button>
          </div>
      </div>
  </div>
  `;
    }
  });
  $(".repositories").html(statusHTML);
};

request.send();

//skills js
$(".bar").each(function () {
  $(this)
    .find(".bar-inner")
    .animate(
      {
        width: $(this).attr("data-width"),
      },
      2000
    );
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/alexkemboicv.pdf";
  link.download = "Alex_Kemboi.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function downloadAbout() {
  const link = document.createElement("a");
  link.href = "/alexkemboiabout.pdf";
  link.download = "Alex_Kemboi_About.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var body = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;

  window.location.href = 'mailto:alexkemboi97@gmail.com?subject=Contact Form Submission&body=' + encodeURIComponent(body);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  sendEmail();
});
