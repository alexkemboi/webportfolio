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
                    '<div style="padding:5px;justify-content:center;align-items:center;">\
                        <h4 class="text-center">'+ status.name.charAt(0).toUpperCase() + status.name.slice(1)+'</h4>\
                        <p>'+ status.description +'</p>\
                        <button class="btn btn-dark"><a class="fa fa-github" href="'+status.html_url+'">Open Repo</a></button>\
                        <p>Language:'+ status.language+'</p>\
                    </div>';                    
                }               
            });
            $('.repositories').html(statusHTML);
        }
        
        request.send();


        //skills js
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },2000)
          });