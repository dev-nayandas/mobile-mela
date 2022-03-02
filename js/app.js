const searchMobile = () => {
    const seacrhFiled = document.getElementById('search-filed')
    const searchText = seacrhFiled.value;
    seacrhFiled.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
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
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img src="${datum.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body mx-auto">
          <h5 class="card-title">${datum.phone_name}</h5>
          <p class="card-text"> Brand Name: ${datum.brand}</p>
          <button class="btn btn-success" onclick = "loadDetails('${datum.slug}')">Details</button>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
        
    })
 
}
const loadDetails = phoneId => {
    //console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
};
const displayPhoneDetails = phone => {
    //console.log(phone)

    const phoneDetails = document.getElementById('display-details')
    phoneDetails.innerHTML = '';

    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${phone.image }" class="card-img-top img-fluid w-25 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">${phone.releaseDate}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Chipset:  ${phone.mainFeatures.chipSet}</li>
                <li class="list-group-item">Display: ${phone.mainFeatures.displaySize}</li>
                <li class="list-group-item">Memory :  ${phone.mainFeatures.memory}</li>
                <li class="list-group-item"> Sensors :${phone.mainFeatures.sensors}</li>
                <li class="list-group-item">Others : Bluetooth ${phone.others.Bluetooth}, GPS:  ${phone.others.GPS},  </li>
    
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Buy Now</a>
            </div>
    `;
    phoneDetails.appendChild(div)
    
}
