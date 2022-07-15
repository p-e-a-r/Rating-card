
// change color to orange onClick and make it stay like that


const list = document.getElementsByClassName('listElem')
const submitBtn = document.getElementById('submit')
const mainSubmitCont = document.getElementById('main-submit-container')
const thankCont = document.getElementById('thank-containter')
const ratingStar = document.getElementById('insert-rating')

// takeaway: only use .style if classes can't handle it


// makes an array from list elements
let listArray = Array.from(list)

// adds color when clicked, removes when clicked on
// other and adds color to it
// loops through array of elements
for( let i = 0; i < listArray.length; i++){
    //adds click event to each
    listArray[i].addEventListener("click", ()=>{
        //loops through array again
        for ( let j = 0; j < listArray.length; j++){
            //takes i=1 loops through j =1,2,3,4,5
            // i=1=j=1? ignore and leave class, i=1=j=2? remove class from items
            if( i == j )
            //ignores case
                continue
                //removes class color
                listArray[j].classList.remove("active")
        }
        //adds class to change color
        listArray[i].classList.toggle("active")
        //adds number selected to a span in thank you card
        ratingStar.innerHTML = listArray[i].innerHTML

    })
}


//hides rating/submit card
submitBtn.addEventListener("click", ()=>{
    mainSubmitCont.classList.toggle("active")
    //toggle active class to show thank you card via animation
    thankCont.classList.toggle("active")
})

