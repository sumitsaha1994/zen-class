let username;

function init() {
    username = prompt("Please enter username");
    console.log(username);
    fetchRepos();
    fetchFollowers();
}

async function fetchRepos(){
    let count = 0;
    let repos = await fetch(`https://api.github.com/users/${username}/repos`);
    console.log(`https://api.github.com/users/${username}/repos`);
    repos = await repos.json();
    
    if (repos.length > 0) {
        count = repos.length;
        repos = repos.reduce((accum,repo) => {
            return accum + repo.name + "<br>";
        }, '');
        document.getElementById("repo-list").innerHTML = repos;
        document.getElementById("repo-count").innerHTML = "(" + count + ")";
    } else {
        document.getElementById("repo-count").innerHTML = "(0)";
        document.getElementById("repo-list").innerHTML = "No items to be displayed";
    }
}


async function fetchFollowers() {
    let count = 0;
    let followers = await fetch(`https://api.github.com/users/${username}/followers`);

    followers = await followers.json();
    count = followers.length;
    if (count > 0) {
        followers = followers.reduce((accum, follower) => {
            console.log(follower.node_id);
            return accum + follower.login  + "<br>";
        }, '');
        document.getElementById("followers-list").innerHTML = followers;
        document.getElementById("followers-count").innerHTML = "(" + count + ")";
    } else {
        document.getElementById("followers-count").innerHTML = "(0)";
        document.getElementById("followers-list").innerHTML = "No items to be displayed";
    }
    
}

