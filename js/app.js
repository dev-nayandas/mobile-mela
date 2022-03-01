const searchMobile = () => {
    const seacrhFiled = document.getElementById('search-filed')
    const searchText = seacrhFiled.value;
    seacrhFiled.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    //console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))
}
searchMobile()