const overs = document.querySelectorAll('.over')
overs.forEach(over => {
    over.addEventListener('click', () => {
        overs.forEach(over => over.classList.remove('selection'));
        over.classList.add('selection');
    })
})