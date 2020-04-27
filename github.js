class GitHub{
    constructor(){
        this.client_id = 'b445764574b5d4308f4e'; 
        this.client_secret = '0b0365e26a1a5fffc6947484cb5a1d0eade7a08b';
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        
        return{
            profile,
            repos
        }
    }
}