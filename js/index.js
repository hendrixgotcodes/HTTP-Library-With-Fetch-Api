const dl = document.querySelector('dl');

const library = new ajaxLibrary();

//Using GET method
library.open("https://api.github.com/users")
    .then((final) => {

        let innerHtml = "";

        final.forEach(
            (user) => {
                innerHtml += `<dt>${user.login}</dt>
                <dd>Followers: ${user.followers_url}</dd>`
            }
        );
        dl.innerHTML = innerHtml;
    })
    .catch((error) => console.log(error));

//Using POST method
library.post("https://jsonplaceholder.typicode.com/users",{
  name: "Samuel O.",
  age: "21"  
})
.then((final)=>console.log(final))
.catch((error)=>console.log(error));


//Using PUT method
library.put("https://jsonplaceholder.typicode.com/users/1",{
  name: "Samuel O.",
  age: "21"  
})
.then((final)=>console.log(final))
.catch((error)=>console.log(error));


//Using DELETE method
library.delete("https://jsonplaceholder.typicode.com/users/101")
.then((result)=>console.log(result))
.catch((error)=> console.log(error));