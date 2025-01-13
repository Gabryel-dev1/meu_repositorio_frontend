document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const apiUrl = 'https://api.github.com/users/Gabryel-dev1';

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })

        // .then(function (response) {
        //     throw new Error('Erro simulado'); // Lança erro propositalmente
        // })

        .catch(function (error) {
            alert('Erro ao buscar dados do GitHub');
        });
});