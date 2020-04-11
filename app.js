// initialize the github class
const github = new Github;

//initialize the UI class
const ui = new UI;

// Get the search user name
const searchUser = document.getElementById('searchUser');

// Search event operation
searchUser.addEventListener('keyup',(e)=>{
    const userName = e.target.value;
    if(userName!==''){
        github.getUserProfile(userName)
        .then(data => {
            if(data.message === 'Not Found'){
                ui.showAlert('User not found','alert alert-danger d-flex justify-content-center');
            
            }else{
                // show the profile inforamtion
                //console.log(data);
                ui.displayUserProfile(data);
            }
            
        });
        
    }else{
        // clear the profile
        ui.clearProfile();
    }
});