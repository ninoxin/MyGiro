const form = () => {
    
    fetch('./hero.json', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data =>{
        let cards = document.querySelector('.cards')
        data.forEach(data =>{
            cards.innerHTML += `
            <div class="card">
                <div class="card__img-box">
                    <img src="${data.фото}" alt="giro" class="card__img">
                </div>
                <p id="name" class="card__name">${data.название}</p>
                <p class="card__price">1 000$</p>
                <p class="card__kind">${data.тип}</p>
            </div>
            `
        })
        const select = document.querySelector('#filter')
        const types = document.querySelectorAll('.card__kind')
        const cards1 = document.querySelectorAll('.card')
    
        select.addEventListener('click', ()=> {
            types.forEach((type, i) => {
                if (select.value === type.textContent) {
                    cards1[i].style.display = "block"
                } else if (select.value !== type.textContent) {
                    cards1[i].style.display = "none"
                } 
                if (select.value === "Все") {
                    cards1.forEach(card => {
                        card.style.display = "block"
                    })
                }
    
            })
        })
    })
    .catch(error =>{
        console.log(error);
    })
}
export default form