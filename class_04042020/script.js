let allCountryData = [];

function getData() {
    let http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        allCountryData = JSON.parse(http.responseText);
        renderData(allCountryData);
    }
    http.open("GET", "https://restcountries.eu/rest/v2/all", false);
    http.send();
}

function renderData(data) {
    let dataTable = document.querySelector('#dataTable');
    dataTable.appendChild(document.createElement('tbody'));
    tbody = document.querySelector('#dataTable > tbody');
    if (data.length > 0) {
        data.forEach(element => {
            let tr = document.createElement('tr');
            tr.innerHTML = "<td>" + element.name + "</td>" +
                            "<td>" + element.capital + "</td>" +
                            "<td><img width=100, height= 50 src = '" + element.flag + "' /></td>";
            tbody.appendChild(tr);
        });
    } else {
        tbody.innerHTML = "<tr><td colspan='3'>No items to display</td></tr>"
    }
}

function openSearchBox(){
    console.log("called");
    let searchBox = document.getElementById("searchBox");
    searchBox.style.width = "50%";
    searchBox.style.border = "2px solid rgba(0, 0, 0, 0.5)";
}

function sortAndRender(event){
    let colName = event.target.parentNode.textContent.trim().toLocaleLowerCase();
    let order;
    if (event.target.className.includes('desc')){
        order = 'asc';
        event.target.className = 'fa fa-sort-asc';
    } else{
        order = 'desc';
        event.target.className = 'fa fa-sort-desc';
    }
    deleteData();
    allCountryData.sort(function(a, b){
        switch (colName) {
            case "name":{
                return order === 'desc' ? a.name > b.name ? -1 : 1 : a.name > b.name ? 1 : -1;
            }
            case "capital": {
                return order === 'desc' ? a.capital > b.capital ? -1 : 1 : a.capital > b.capital ? 1 : -1;
            }
        }   
    });
    console.log(allCountryData);
    renderData(allCountryData);
}

function searchAndRender(event){
    deleteData();
    result = allCountryData.filter(function(e) {
        return e.name
          .toLowerCase()
          .trim()
          .startsWith(event.target.value.trim());
      });
      renderData(result);
}

function deleteData() {
    let dataTable = document.getElementById('dataTable');
    dataTable.removeChild(dataTable.childNodes[3]);
}