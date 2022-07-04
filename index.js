const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const backgroundImg = $('.content__post-img')
const iconLeft = $('.img__icon-left')
const iconRight = $('.img__icon-right')

//// onclick change background img
    var index = 1
    const imgs = [
    './assets/img/ultra-ego-850x350.jpg', 
    './assets/img/trunk-backgroud-850x350.jpg', 
    './assets/img/gohan-vs-goku-850x350.jpg', 
    './assets/img/20211218_134503-850x350.jpg',
    './assets/img/dragon-ball-forum-2-850x350.png'
    ]
    iconLeft.onclick = () => {
        backgroundImg.src = imgs[index]
        index--
        if (index < 0) {
            index = imgs.length - 1
        }
    }
    iconRight.onclick = () => {
        backgroundImg.src = imgs[index]
        index++
        if (index >= imgs.length) {
            index = 0
        }
    }
// setInterval cho background
changeBackgroundImg = () => {
    const a = iconRight.onclick = () => {
        backgroundImg.src = imgs[index]
        index++
        if (index >= imgs.length) {
            index = 0
        }
    }
    setInterval(a, 5000);
}
changeBackgroundImg()


// show Login
const loginElement = $('.category__heading')
const loginchild = $('.category__list')
const iconLogin = $('.category-icon')
const iconDownLogin = $('.category-icon-down')

showLogin = () => {  
    loginchild.classList.contains('display-block') ? loginchild.classList.remove('display-block') : loginchild.classList.add('display-block')
    iconLogin.classList.contains('display-none') ? iconLogin.classList.remove('display-none') : iconLogin.classList.add('display-none')
    iconDownLogin.classList.contains('display-none') ? iconDownLogin.classList.remove('display-none') : iconDownLogin.classList.add('display-none')
}

loginElement.addEventListener('click', showLogin)


// show các Saga
const sagaElement = $('.category__heading-saga')
const sagaList = $('.saga__list')
const iconSaga = $('.category-icon-saga')
const iconDownSaga = $('.category-icon-down-saga')

showSaga = () => {
    sagaList.classList.contains('display-block') ? sagaList.classList.remove('display-block') : sagaList.classList.add('display-block')
    iconSaga.classList.contains('display-none') ? iconSaga.classList.remove('display-none') : iconSaga.classList.add('display-none')
    iconDownSaga.classList.contains('display-none') ? iconDownSaga.classList.remove('display-none') : iconDownSaga.classList.add('display-none')
}

sagaElement.addEventListener('click', showSaga)

// show các Movie
const movieElement = $('.category__movie')
const movieList = $('.movie__list')
const iconMovie = $('.category-icon-movie')
const iconDownMovie = $('.category-icon-down-movie')

showMovie = () => {
    movieList.classList.contains('display-block') ? movieList.classList.remove('display-block') : movieList.classList.add('display-block')
    iconMovie.classList.contains('display-none') ? iconMovie.classList.remove('display-none') : iconMovie.classList.add('display-none')
    iconDownMovie.classList.contains('display-none') ? iconDownMovie.classList.remove('display-none') : iconDownMovie.classList.add('display-none')   
}

movieElement.addEventListener('click', showMovie)


// show news
const newsElement = $('.category__news')
const newsList = $('.news__list')
const inconNews = $('.category-icon-news')
const iconDownNews = $('.category-icon-down-news')

showNews = () => {
    newsList.classList.contains('display-block') ? newsList.classList.remove('display-block') : newsList.classList.add('display-block')
    inconNews.classList.contains('display-none') ? inconNews.classList.remove('display-none') : inconNews.classList.add('display-none')
    iconDownNews.classList.contains('display-none') ? iconDownNews.classList.remove('display-none') : iconDownNews.classList.add('display-none')       
}

newsElement.addEventListener('click', showNews)


// show wiki
const wikiElement = $('.category__wiki')
const wikiList = $('.wiki__list')
const inconWiki = $('.category-icon-wiki')
const iconDownWiki = $('.category-icon-down-wiki')

showNews = () => {
    wikiList.classList.contains('display-block') ? wikiList.classList.remove('display-block') : wikiList.classList.add('display-block')
    inconWiki.classList.contains('display-none') ? inconWiki.classList.remove('display-none') : inconWiki.classList.add('display-none')
    iconDownWiki.classList.contains('display-none') ? iconDownWiki.classList.remove('display-none') : iconDownWiki.classList.add('display-none')       
}

wikiElement.addEventListener('click', showNews)


///// show more red ribbon
const RedRibbon = $('.content__redribbon')
const RedRbElement = $ ('.content__desc')
const showMoreRedrb = $('.content__more')
const hideMoreRedrb = $('.content__hideMore')

showRedRibbon = () => {
    RedRbElement.classList.contains('display-flex') ? RedRbElement.classList.remove('display-flex') : RedRbElement.classList.add('display-flex')
    showMoreRedrb.classList.contains('display-none') ? showMoreRedrb.classList.remove('display-none') : showMoreRedrb.classList.add('display-none')
}
RedRibbon.addEventListener('click', showRedRibbon)

// hide More red ribbon
hideMoreRedrb.onclick = () => {
    RedRbElement.classList.contains('display-flex') ? RedRbElement.classList.remove('display-flex') : RedRbElement.classList.add('display-flex')

}

// show more ginyu 
const showMoreGinyu = $('.content__more-ginyu')
const ginyuElement = $('.content__desc-ginyu')
const Ginyu = $('.content__ginyu')
const hideMoreGinyu = $('.content__hide-ginyu')

showGinyu = function() {
    ginyuElement.classList.contains('display-flex') ? ginyuElement.classList.remove('display-flex') : ginyuElement.classList.add('display-flex')
    showMoreGinyu.classList.contains('display-none') ? showMoreGinyu.classList.remove('display-none') : showMoreGinyu.classList.add('display-none')
}
Ginyu.addEventListener('click', showGinyu)
// hide
hideMoreGinyu.onclick = function() {
    ginyuElement.classList.contains('display-flex') ? ginyuElement.classList.remove('display-flex') : ginyuElement.classList.add('display-flex')
}

// show more hit
const showMoreHit = $('.content__more-hit')
const hitElement = $('.content__desc-hit')
const Hit = $('.content__hit')
const hideMoreHit = $('.content__hide-hit')

showHit = function() {
    hitElement.classList.contains('display-flex') ? hitElement.classList.remove('display-flex') : hitElement.classList.add('display-flex')
    showMoreHit.classList.contains('display-none') ? showMoreHit.classList.remove('display-none') : showMoreHit.classList.add('display-none')
}
Hit.addEventListener('click', showHit)
// hide
hideMoreHit.onclick = function() {
    hitElement.classList.contains('display-flex') ? hitElement.classList.remove('display-flex') : hitElement.classList.add('display-flex')
}

// show moree dragonball super
const showMoreSuper = $('.content__more-super')
const superElemet = $('.content__desc-super')
const dbSuper = $('.content__super')
const hideMoreSuper = $('.content__hide-super')

showSuper = function() {
    superElemet.classList.contains('display-flex') ? superElemet.classList.remove('display-flex') : superElemet.classList.add('display-flex')
    showMoreSuper.classList.contains('display-none') ? showMoreSuper.classList.remove('display-none') : showMoreSuper.classList.add('display-none')
}
dbSuper.addEventListener('click', showSuper)
// hide
hideMoreSuper.onclick = function() {
    superElemet.classList.contains('display-flex') ? superElemet.classList.remove('display-flex') : superElemet.classList.add('display-flex')
}


///////////////
// tab ui
const tabs = $$('.nav__list-item-link')
const subnavs = $$('.subnav')

tabs.forEach(tab => {
    tab.onmouseover = function() {
        $('.nav__list-item-link.nav__item--active').classList.remove('nav__item--active')
        this.classList.add('nav__item--active')
    }
});


//vote imgs
const images = $$('.vote-img')
const voteBtn = $('.vote-btn')
const voted = $('.voted')

images.forEach(img => {
    img.onclick = function() {
        this.classList.contains('image-active') ? this.classList.remove('image-active') : this.classList.add('image-active')
    }
})

handleVote = function() {
    images.forEach(() => {
        if ($('.vote-img.image-active')) {
            $('.vote-img.image-active').classList.remove('image-active')
            voted.style.display = 'inline-block'
        }
    })
}
voteBtn.addEventListener('click', handleVote)


// vote team
const imagesTeam = $$('.vote__team-img')
const voteTeamBtn = $('.vote__team-btn')
const votedTeam = $('.voted__team')

imagesTeam.forEach(img => {
    img.onclick = function() {
        this.classList.contains('image-active') ? this.classList.remove('image-active') : this.classList.add('image-active')
    }
})

handleVoteTeam = function() {
    imagesTeam.forEach(() => {
        if ($('.vote__team-img.image-active')) {
            $('.vote__team-img.image-active').classList.remove('image-active')
            votedTeam.style.display = 'inline-block'
        }
    })
}
voteTeamBtn.addEventListener('click', handleVoteTeam)


//

const input = $('.nav__search-input')
const search = $('.nav__search-button')

search.onclick = function() {
    const htmls = input.value
    input.value=''
    input.focus()

 
    document.querySelector('.result').innerHTML = `Không tìm thấy: <strong>${htmls}</strong> trong tài liệu nào.`

}






