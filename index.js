// Add your code here

const configurationObject = {
    method: "POST",
    headers: {
        "content-Type": "application/json", 
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: "",
        email: "",
    }),
};
fetch("http://localhost:3000/users", configurationObject)
.then(function(response){
    return response.json();
})
.then(function(Object){
    console.log(Object);
})
.catch(function(error){
    console.log(error.message);
})