const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFillAll = document.querySelector('.fill-all')
let myLi = ''

function formatCurrency(value){
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function showAll(productsArray){
    myLi = ''

    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src='${product.src}'>
            <p>${product.name}</p>
            <p class='item-price'>${formatCurrency(product.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrices)
}

function sumAll(){
    const totalPrice =  menuOptions.reduce((acc, curr) => acc + curr.price,0)

    list.innerHTML = `
    <li>
        <p>O preço total de todos itens é ${formatCurrency(totalPrice)}</p>
    </li>
    `
}

function filterAll(){
    const veganOnly = menuOptions.filter((product) => product.vegan === true)

    showAll(veganOnly)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFillAll.addEventListener('click', filterAll)