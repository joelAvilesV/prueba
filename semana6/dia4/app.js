const githubActionSearch= document.querySelector("#github-action-search");
const githubSearch = document.querySelector("#github-search");
const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubTwitter = document.querySelector("#github-twitter");
const githubLocation = document.querySelector("#github-location");




githubActionSearch.onclick =() =>{
    const username = githubSearch.value;
    githubSearch.value="";
    if(username===""){
        Swal.fire({
            title: "error",
            text:"debes llenar el campo de usario",
            icon:"error"
        });     
        return;
    }
obtenerDatosGithub(username);
};

const obtenerDatosGithub = async(username="joelAvilesV")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title:"Error",
            text: "No se econtro el usuario",
            icon: "error",
        });
        return;
    }

    setDataUser(data)
};

githubSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obtenerDatosGithub(event.target.value)
    }a
})

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toString().split("T")[0];
}





const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML =data.name;
    githubBio.innerHTML =data.bio;
    githubUserName.innerHTML =`@${data.login}`;
    githubJoined.innerHTML =formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML =data.followers;
    githubFollowing.innerHTML =data.following;
    githubLocation.innerHTML =data.location;
}

obtenerDatosGithub();