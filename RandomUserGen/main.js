// Juan Aguirre

var btn = document.querySelector("#btn");
var nameTag = document.querySelector("#fullname")
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
   var url = "https://randomuser.me/api/";
   fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors)
})

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status)
  }
  return res;
}

function parseJSON(res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile(data){
     nameTag.innerText = data.name.first + " " + data.name.last;
     avatar.src = data.picture.medium;
     username.innerText = data.login.username;
     email.innerText = data.email;
     city.innerText = data.location.city;
}

function displayErrors(err){
  console.log(err);
}


