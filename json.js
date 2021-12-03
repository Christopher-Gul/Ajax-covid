fetch("https://corona.lmao.ninja/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("maailmaD").innerHTML = data.deaths;
    document.getElementById("tartunnat").innerHTML = data.cases;
    

  });

  fetch("https://corona.lmao.ninja/v2/countries/estonia")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("virot").innerHTML = data.deaths;
    document.getElementById("viro").innerHTML = data.cases;
    

  });

  fetch("https://corona.lmao.ninja/v2/countries/norway")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("norjat").innerHTML = data.deaths;
    document.getElementById("norja").innerHTML = data.cases;
    

  });


  fetch("https://corona.lmao.ninja/v2/countries/sweden")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("ruotsit").innerHTML = data.deaths;
    document.getElementById("ruotsi").innerHTML = data.cases;
    

  });

  fetch("https://corona.lmao.ninja/v2/countries/denmark")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("tanskat").innerHTML = data.deaths;
    document.getElementById("tanska").innerHTML = data.cases;
    

  });


fetch("https://corona.lmao.ninja/v2/countries/finland")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("suomit").innerHTML = data.deaths;
    document.getElementById("suomi").innerHTML = data.cases;
    

  
    
    document.querySelector('#btn')
    .addEventListener('click',() => {
    window.location.reload(true);
    

  });



});




function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}