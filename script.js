let items = document.querySelectorAll('.list .item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let thumbnails = document.querySelectorAll('.thumbnail .item-mini')


// config param 
let countItem = items.length
let itemActive = 0; 

//event next click 
next.onclick = () => {
    itemActive = itemActive + 1
    if (itemActive >= countItem){
        itemActive = 0 
    }
    showSlider()
}

prev.onclick = () => {
    itemActive = itemActive - 1
    if (itemActive < 0){
        itemActive = countItem - 1
    }
    showSlider()
}
//autorun 
let refreshInterval = setInterval(() => {
    next.click()
}, 3000)

const showSlider = () => {
    let itemActiveOld = document.querySelector('.slider .list .item.active')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item-mini.active')
    itemActiveOld.classList.remove('active')
    thumbnailActiveOld.classList.remove('active')


    //active new item 
    items[itemActive].classList.add('active')
    thumbnails[itemActive].classList.add('active')

    // clear interval 
    clearInterval(refreshInterval)

    refreshInterval = setInterval(() => {
        next.click()
    }, 3000)
}

//click thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index
        showSlider()
    })
})