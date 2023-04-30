let showHideMenuMobile = document.querySelector(".fa-navicon")
let mobileMenu = document.querySelector('.mobileMenu')

showHideMenuMobile.addEventListener('click', function () {
    mobileMenu.classList.toggle("mobileMenu")
});

//**************** responsive navbar menu******************//
let screenMobileSize = window.matchMedia("(max-width: 768px)")
let screenDesktopeSize = window.matchMedia("(min-width: 768px)")
let mobileScreen = document.querySelector('.mobileScreen')
let desktopScreen = document.querySelector('.desktopScreen')

function mobileSize(screenMobileSize) {
    if (screenMobileSize.matches) {
        mobileScreen.classList.remove('d-none')
        desktopScreen.classList.add('d-none')
    } else {
        desktopScreen.classList.remove(".d-none")
        mobileScreen.classList.add(".d-none")
    }
}

function desktopSize(screenDesktopeSize) {
    if (screenDesktopeSize.matches) {
        mobileScreen.classList.add('d-none')
        desktopScreen.classList.remove('d-none')
    } else {
        desktopScreen.classList.add(".d-none")
        mobileScreen.classList.remove(".d-none")
    }
}

mobileSize(screenMobileSize)
screenMobileSize.addListener(mobileSize)
desktopSize(screenDesktopeSize)
screenDesktopeSize.addListener(desktopSize)


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);


//hover card
let holderDetailsImg = document.querySelectorAll('.holderDetailsImg')
holderDetailsImg.forEach(function (holderDetailsImg) {
    holderDetailsImg.addEventListener("mouseover", mouseOver);

    function mouseOver() {
        let coverGradient = this.querySelector('.coverGradient')
        let infoImg = this.querySelector('.infoImg')
        coverGradient.classList.remove('d-none');
        infoImg.classList.remove('d-none');
    }
    holderDetailsImg.addEventListener("mouseout", mouseout);
    function mouseout() {
        let coverGradient = this.querySelector('.coverGradient')
        let infoImg = this.querySelector('.infoImg')
        coverGradient.classList.add('d-none');
        infoImg.classList.add('d-none');
    }
})


let circleLike = document.querySelectorAll(".badgesLike")
circleLike.forEach(function (circleLike){

    circleLike.addEventListener("onclick", likeAndDislike);
    function likeAndDislike(){
        console.log("circleLike")

        let circleLike = this.querySelector('.circleLike')
        if(circleLike.hasClass('.fa-heart-o')){
            circleLike.classList.add('.fa-heart')
        }
    }
})
//like and dislike
// let badgesLike = document.querySelectorAll(".badgesLike")
// // let faheart = document.querySelectorAll(".fa-heart")
//
// badgesLike.forEach(function (fahearto){
//     fahearto.addEventListener("onclick",likeheart)
//     // console.log(fahearto)
//     // console.log(faheart)
//
//     function likeheart(){
//         let fahearto = this.querySelector(".fa-heart-o")
//         let faheart = this.querySelector(".fa-heart")
//
//         faheart.toggleClass.remove('d-none');
//         fahearto.toggleClass.add('d-none');
//     }
// })


//
// let fahearto = document.querySelector(".fa-heart-o")
// let faheart = document.querySelector(".fa-heart")
//
// document.querySelector('.fa-heart-o').addEventListener('click', likeheart)
// function likeheart() {
//         faheart.classList.remove('d-none');
//          fahearto.classList.add('d-none');
// }
// document.querySelector('.fa-heart').addEventListener('click', dislikeheart)
// function dislikeheart() {
//     fahearto.classList.remove('d-none');
//     faheart.classList.add('d-none');
// }
//





//counter
let scrollCounter = 1000;
console.log(scrollCounter)
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop === 0) {
        //alert("Window scroll is at the top")
    }
    if (document.documentElement.scrollTop === 1000) {
        console.log("Window scroll is at the bottom")
        let counts = setInterval(updated);
        let upto = 0;

        function updated() {
            var count = document.getElementById("counter");
            count.innerHTML = ++upto;
            if (upto === 1000) {
                clearInterval(counts);
            }
        }
    }
})


let scrollCount = 2100;
console.log(scrollCount)
window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop === 2100) {
        console.log("Window scroll is at the bottom")

        let usersCountuser = setInterval(updateduser);
        let uptouser = 0;

        function updateduser() {
            let count = document.getElementById("userCounter");
            count.innerHTML = ++uptouser;
            if (uptouser === 1729) {
                clearInterval(usersCountuser);
            }
        }


        let tourcounter = setInterval(updatedtour);
        let uptotour = 0;

        function updatedtour() {
            let count = document.getElementById("tourNumber");
            count.innerHTML = ++uptotour;
            if (uptotour === 1356) {
                clearInterval(tourcounter);
            }
        }

        let leadercounter = setInterval(updatedleader);
        let uptoleader = 0;

        function updatedleader() {
            let count = document.getElementById("leader");
            count.innerHTML = ++uptoleader;
            if (uptoleader === 136) {
                clearInterval(leadercounter);
            }
        }
    }
})




//
// let fahearto = document.querySelectorAll(".fa-heart-o")
// fahearto.forEach(function (fahearto){
//     fahearto.addEventListener("click", likeheart)
//     function likeheart() {
//         faheart.classList.remove('d-none');
//         fahearto.classList.add('d-none');
//     }
// })
//
// let faheart = document.querySelector(".fa-heart")
// fahearto.forEach(function (faheart){
//     faheart.addEventListener("click", dislikeheart)
//     function dislikeheart() {
//         fahearto.classList.remove('d-none');
//         faheart.classList.add('d-none');
//     }
// })