let url = "https://hp-api.herokuapp.com/api/characters";

const personnages = document.querySelector('.liste-personnages');
const searchInput = document.querySelector('#search');

let dataArray;

fetch(url)
.then(response => response.json())
.then((data) => {
    dataArray = data.splice(0, 25)
    console.log(dataArray)
    createPersosList(dataArray)
})

function createPersosList(persoList) {

    persoList.forEach(perso => {

        const listItem = document.createElement('div');
        listItem.classList.add("perso")

        listItem.innerHTML = `
        <div class="photo">
        <img src="${perso.image}">
        </div>
        <div class="infos">
        <p class="nom">${perso.name}</p>
        <div class="info2">
            <p class="maison">house:</p>
            <p class="house">${perso.house}</p>
        </div>
        </div>
        `
        
        personnages.appendChild(listItem);

    })
}



searchInput.addEventListener("input", filterData)

function filterData(e) {

    personnages.innerHTML = ""

    const searchedString = e.target.value.toLowerCase();

    const filteredArr = dataArray.filter(el => el.name.toLowerCase().includes(searchedString))

    createPersosList(filteredArr)
}

