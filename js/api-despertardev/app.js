function fetchUsers() {
    axios.get('https://regres.in/api/users').then(response => {
        const users = response

        console.log(users);
    })

    .catch(error => {
        console.log('Error ao buscar usuários: ', error);
    })
}

fetchUsers()