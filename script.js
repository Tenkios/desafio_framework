//var element = document.getElementById('Content');
//element.innerHTML = '<b>Hello World!</b>'
var url = window.location.href.split("/")
var palavra = url[url.length - 1].split(".html")[0]
var section = document.querySelector("#table")
console.log('aqui ó: ', palavra)
fetch('https://jsonplaceholder.typicode.com/' + palavra,
  console.log(),
  {

    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }
    , body: JSON.stringify({
    })
  }).then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
    
    let i = 0
    data.map((e) => {
      let linha = document.createElement("tr")
      linha.innerHTML = '<tr>' + '<td>' + e.userId + '</td>' + '<td>' + e.id + '</td>' + '<td>' + e.title + '</td>' + '</tr> '  
      console.log(i)
      section.appendChild(linha)
     })
  })
  .catch(error => console.log('ERROR'))

  

