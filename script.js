// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// async function getUserRepos() {
//     const repos = await fetch(`https://api.github.com/users/alexkemboi/repos`);
//     return repos;
//  }
 
//  getUserRepos()
//        .then(repos => {
//             console.log(repos);
//   }); 
  var request = new XMLHttpRequest();
        request.open('GET','https://api.github.com/users/alexkemboi/repos' , 
        true)
        request.onload = function() {
            var data = JSON.parse(this.response);
            console.log(data);
            var statusHTML = '';
            $.each(data, function(i, status){
                if(status.description){
                    statusHTML += 
                    '<div class="col-lg-4 mt-4">\
                        <div class="card"> \
                            <div class="card servicesText">\
                                <h4 class="text-center">' + status.name +  '</h4> \
                                <div class="card-body">\
                                    <span class="mr-4"><i class="fa fa-description mr-2"></i>' + status.description + '</span> \
                                    <br>\
                                    <button style="padding:5px;border-radius:5px;border:1px solid black"><a class="fa fa-github" href="'+status.clone_url+'">Clone repo</a></button>\
                                    <button style="padding:5px;border-radius:5px;border:1px solid black"><a class="fa fa-github" href="'+status.html_url+'">Open repo</a></button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
                }               
            });
            $('.repositories').html(statusHTML);
        }
        
        request.send();