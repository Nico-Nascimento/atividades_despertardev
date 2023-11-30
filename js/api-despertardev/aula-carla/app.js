async function fetchUsers() {
    try{
        const response = await axios.get('https://regres.in/api/users')
        const users = response.data
        console.log(users);
    }
    
    catch(error) {
        console.log('Error ao buscar usuários: ', error);
    }
}

fetchUsers()

// Part 1: Manipulate characters

// 1. List characters by status
async function getCharactersByStatus(status) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`);
    const data = await response.json();
    return data.results.map(character => character.name);
}

// 2. Find character by name
async function getCharacterByName(name) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await response.json();
    return data.results[0];
}

// Part 2: Explore episodes

// 1. List episodes by season
async function listEpisode(season) {
    try {
        const response = await api.get(`episode?episode=S0${season}`)
        const result = reponse.data.results;
        result.forEach(nameEpisode => console.log(`Episodio: ${nameEpisode.name}`));
    }
    catch(error) {
        console.log("Está temporada não existe!", error);
    }
}
listEpisode(Number(prompt(`Digite o número da temporada:`)))

// 2. Episode details


// Part 3: Analyze locations

// 1. List locations
async function getLocations() {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const data = await response.json();
    return data.results.map(location => location.name);
}

// 2. Location details
async function getLocationDetails(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
    const data = await response.json();
    return data;
}
