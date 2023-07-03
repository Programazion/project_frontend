console.log("Loading Javascript");

function saveBook(){


let nameBook = document.getElementById("name");
let authorBook = document.getElementById("author");
let isbnBook = document.getElementById("isbn");
let editionBook = document.getElementById("edition");

let Book ={
    name:nameBook.value,
    author:authorBook.value,
    isbn:isbnBook.value,
    edition:editionBook.value
}

console.log(Book);

let url= "http://localhost:8000/api/Book";

fetch(url,{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(Book),
}).then(response =>{
    console.log(response);

});


    alert("Creación de libro");

    return true
}