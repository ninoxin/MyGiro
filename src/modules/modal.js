const modal = () =>  {
    const modal = document.querySelector('.modal')
    const btnModal = document.querySelector('.header__button')
    const closeBtn = document.querySelector('.modal__close')

    btnModal.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

} 

export default modal