class UI{
    constructor(){
        this.showProfile=document.getElementById('showProfile');
        //this.repos=document.getElementById('repos');
    }

    displayUserProfile(userProfile){
        this.showProfile.innerHTML=`
        <div class='card card-body mt-2 container d-flex justify-content-center"'>
                <div class='row'>
                    <div class='col-md-3'>
                     <img class='img-fluid mt-2' src='${userProfile.avatar_url}'>
                     <a href='${userProfile.url}' target='_blank' type='button' class='btn btn-primary btn-block mt-3 mb-4'>view full profile</a>
                    </div>
                    <div class='col-9'>
                      <h3><span class='badge badge-primary'>Followers : ${userProfile.followers}</span>
                      <span class='badge badge-secondary'>Public repos : ${userProfile.public_repos}</span>
                      <span class='badge badge-success'>Public Gists : ${userProfile.public_gists}</span>
                      <span class='badge badge-danger'>Following : ${userProfile.following}</span></h3>
                      <br>
                      <ul class='list-group'>
                          <li class='list-group-item'>Name : ${userProfile.name}</li>
                          <li class='list-group-item'>Email : ${userProfile.email}</li>
                          <li class='list-group-item'>Company : ${userProfile.company}</li>
                          <li class='list-group-item'>Website/Blog : ${userProfile.blog}</li>
                          <li class='list-group-item'>Location : ${userProfile.location}</li>
                          <li class='list-group-item'>Member Since : ${userProfile.created_at}</li>
                      </ul>
                    </div>
                </div>
                        
        </div>
        <div class="container d-flex justify-content-center">
         <h3 class='page-heading mp-3'> Latest Repos </h3>
        </div>
        <div id="repos" class="container justify-content-center"></div>
        
        
        `;
    }

    displayUserRepos(userRepos){
        let output ='';
        userRepos.forEach(repo => {
            output +=`
            <div class='card card-body mt-2'>
               <div class='row'>
                   <div class='col-md-6'>
                      <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                   </div>
                   <div class='col-md-6'>
                      <span class='badge badge-primary'>Stargazers : ${repo.stargazers_count}</span>
                      <span class='badge badge-secondary'>Watchers : ${repo.watchers_count}</span>
                      <span class='badge badge-success'>Forks : ${repo.forms_count}</span>
                      <span class='badge badge-success'>Language : ${repo.language}</span>
                   </div>
               </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML=output;
        // console.log(output);   
    }
   
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.showProfile.innerHTML='';
    }

    showAlert(message,className){
        // console.log(message,className);
        //clear alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add css class to div
        div.className = className;
        //add text in the div
        div.appendChild(document.createTextNode(message));
        // findout the parent div to insert the new div
        const container = document.querySelector('.searchContainer');
        // search the div
        const search = document.querySelector('.search');

        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        }, 3000);

    }
}