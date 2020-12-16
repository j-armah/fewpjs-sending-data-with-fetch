// Add your code here

function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        let body = document.body
        body.append(data.id)
    })
    .catch(function(error) {
        let body = document.body
        body.append(error.message)
    })
}