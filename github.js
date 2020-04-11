class Github{
    constructor(){
        this.client_id = '2d9e4e1cc8243ab50f1f';
        this.client_secret ='9cc2a023f6c3c4551d44102a4110d34bdf29a6a0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUserProfile(user){
          const userProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_sevret=${this.client_secret}`);
          const userRepoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_sevret=${this.client_secret}`);
          const userProfile = await userProfileResponse.json();
          const userRepos = await userRepoResponse.json(); 
          return {
              userProfile, userRepos
            };
    }
}