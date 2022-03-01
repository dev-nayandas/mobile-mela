const searchMobile = () => {
    const seacrhFiled = document.getElementById('search-filed')
    const searchText = seacrhFiled.value;
    seacrhFiled.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    //console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
}
//searchMobile()
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if(data.length == 0){
        const notify =document.getElementById('notification')
        notify.style.display ='block'
        console.log('Phone not found')
    }
    data.forEach(datum =>{
        console.log(datum)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img src="${datum.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datum.phone_name}</h5>
          <p class="card-text"> Brand Name: ${datum.brand}</p>
          <a onclick="loadPhoneDetails()" class="bg-info p-2 text-white" href="#">Details</a>
        </div>
      </div>
        `;
        searchResult.appendChild(div)
    })
    //console.log(data)
}

