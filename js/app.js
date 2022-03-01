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

    // previous search result clean
    searchResult.textContent = '';
    // search error handle
    if (data.length == 0) {
        const notify = document.getElementById('notification');
        notify.style.display = 'block';

    } else {
        const notify = document.getElementById('notification');
        notify.style.display = 'none';
    }
    data.forEach(datum => {
        //console.log(datum)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img src="${datum.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datum.phone_name}</h5>
          <p class="card-text"> Brand Name: ${datum.brand}</p>
          <button onclick = "loadDetails('${datum.slug}')">Details</button>

        </div>
      </div>
        `;
        searchResult.appendChild(div)
    })
    //console.log(data)
}
const loadDetails = phoneId => {
    //console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
};
const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('display-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${phone.image }" class="card-img-top img-fluid w-25 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">${phone.releaseDate}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
    `;
    phoneDetails.appendChild(div)
}
