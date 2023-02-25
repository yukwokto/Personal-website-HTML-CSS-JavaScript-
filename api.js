window.addEventListener("load", updateCounter);

function updateCounter(){
    fetch('https://api.yukwokto-resume.com/', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => document.getElementById('thevisitor').innerText = data.body.Visit_Count)
}