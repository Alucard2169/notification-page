const unReadList = document.querySelectorAll('#unRead');
const count = document.getElementById('count');
const readButton = document.getElementById('read');


readButton.addEventListener('click', () => {
    unReadList.forEach(unRead => {
        unRead.classList.remove('unRead');
    })
    count.textContent = 0;
})