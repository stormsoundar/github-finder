//Init Github
const github = new GitHub;

//Init UI
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
    //Make http call
    github.getUser(userText)
        .then(data => {
            //console.log(data);            
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User Not Found', 'alert alert-danger')
            }else{
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear Profile
        ui.clearProfile();
    }
});