const actionArea2 = document.querySelector("#action-area");
const actionLists = actionArea2.querySelectorAll('.act-list');
const actionPics = actionArea2.querySelectorAll('.act-item-pics')

actionLists.forEach((ele, index) => {
    ele.addEventListener('click',() => {
        for(let al of actionLists)
            al.querySelector('.act-link').classList.remove('current');
        for(let ap of actionPics)
            ap.classList.remove('current');
        actionLists[index].querySelector('.act-link').classList.add('current');
        actionPics[index].classList.add('current');
    })
})