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
              <button class="btn btn-dark text-white" type="button">
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

const elementsWithBgDark = document.querySelectorAll('.bg-dark');
const elementsWithBtnDark = document.querySelectorAll('.btn-dark');
const elementsWithTextWhite = document.querySelectorAll('.text-white');
const elementsWithBorderWhite = document.querySelectorAll('.border-white');
const elementsWithFaSun = document.querySelectorAll('.fa-sun');
function toggleClasses() {
    elementsWithBgDark.forEach(element => {
        if (element.classList.contains('bg-dark')) {
            element.classList.remove('bg-dark');
            element.classList.add('bg-light');
        } else {
            element.classList.remove('bg-light');
            element.classList.add('bg-dark');
        }
    });
    elementsWithBtnDark.forEach(element => {
      if (element.classList.contains('btn-dark')) {
          element.classList.remove('btn-dark');
          element.classList.add('btn-light');
      } else {
          element.classList.remove('btn-light');
          element.classList.add('btn-dark');
      }
  });
  elementsWithBorderWhite.forEach(element => {
    if (element.classList.contains('border-white')) {
      element.classList.remove('border-white');
      element.classList.add('border-dark');
  } else {
      element.classList.remove('border-dark');
      element.classList.add('border-white');
  }
});
  elementsWithTextWhite.forEach(element => {
    if (element.classList.contains('text-white')) {
        element.classList.remove('text-white');
        element.classList.add('text-dark');
    } else {
        element.classList.remove('text-dark');
        element.classList.add('text-white');
    }
});
elementsWithFaSun.forEach(element=>{
  if(element.classList.contains('fa-sun')){
    element.classList.remove('fa-sun');
    element.classList.add('fa-moon');
  }
  else{
    element.classList.remove('fa-moon');
    element.classList.add('fa-sun');
  }
})
}

// Attach a click event listener to a button to trigger the toggle
const button = document.getElementById('toggleButton'); // Replace 'toggleButton' with the actual ID of your button element
button.addEventListener('click', toggleClasses);




const content = document.getElementById('content');
const extraContent = document.getElementById('extra-content');
const readMoreButton = document.getElementById('read-more-button');

const maxWords = 10;
let isReadMore = false;

// Function to count words in a string
function countWords(text) {
    return text.split(/\s+/).filter(word => word).length;
}

// Function to toggle the "Read More" content
function toggleReadMore() {
    isReadMore = !isReadMore;
    if (isReadMore) {
        extraContent.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        readMoreButton.textContent = 'Read More';
    }
}

// Initial setup
const words = content.textContent.split(/\s+/).filter(word => word);
if (words.length > maxWords) {
    content.textContent = words.slice(0, maxWords).join(' ');
    readMoreButton.style.display = 'block';
}

// Add event listener for the "Read More" button
readMoreButton.addEventListener('click', toggleReadMore);

      


  