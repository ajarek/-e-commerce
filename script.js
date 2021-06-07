const bestProducts = document.querySelector('.bestProducts ')
const btnCart = document.querySelector('.btnCart')
const image = document.querySelectorAll('.product  img')
const display = document.querySelector('.display')
const cart = document.querySelector('.cart')
const cartList = document.querySelector('.cart #ul')
const cartTotal = document.querySelector('.cart span')

let arrId = []
let total = []
let array = []
const headphones = [{
        id: 1,
        name: 'model 1',
        srcImg: `img/blue.png`,
        price: 100,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,
    },
    {
        id: 2,
        name: 'model 2',
        srcImg: `img/red1.png`,
        price: 110,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
`
    },
    {
        id: 3,
        name: 'model 3',
        srcImg: `img/green.png`,
        price: 120,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
<i class="far fa-star"></i>`,
    },
    {
        id: 4,
        name: 'model 4',
        srcImg: `img/yellow.png`,
        price: 130,
        star: `<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
`,
    }
]

const disconect = () => {
    bestProducts.classList.add('disconect')
}

const show = (e) => {
    disconect()
    let x = e.target.id;
    arrId.push(x)
    const divNew = document.createElement('div')
    divNew.innerHTML = `<div class="activProducts">
    <div class="activProduct">
        <img src=${headphones[x-1].srcImg} alt="" id=${headphones[x-1].id}>
        <p>${headphones[x-1].name}</p>
        <span>$${headphones[x-1].price}</span>
        <div class="stars">
            ${headphones[x-1].star}
        </div>
        <input type="number" name="" id="number" placeholder="how many? " min="0" max="100" step="1" >
        <button id="cart" onclick="addCart()">Add to cart</button>
        <button id="back" onclick="back()"><i class="fas fa-long-arrow-alt-left"></i></button>
    </div>`
    display.appendChild(divNew)
    reading()
}

const reading = () => {
    const input = document.querySelector('input')
    input.addEventListener('input', (e) => {
        array.unshift(e.target.value)
    });
}

const addCart = () => {
    arrId.forEach(ar => {
        total.push(headphones[ar - 1].price * array[0])
        const register = document.createElement('li')
        register.setAttribute('data-all', headphones[ar - 1].price * array[0])
        register.innerHTML = `<img src=${headphones[ar-1].srcImg} alt=""}>${headphones[ar-1].name}-> ${array[0]}szt.x $${headphones[ar-1].price}  <i class="fas fa-times" style="color:red">`
        cartList.appendChild(register)
    })

    cartTotal.innerHTML = `<p>together to pay:$${total.reduce((a, b) => a + b, 0)}</p>`
    arrId = []
    array = []
    del()
}

const back = () => {
    // window.location.reload()
    const activProducts = document.querySelectorAll('.activProducts')
    activProducts.forEach(act => {
        act.classList.add('disconect')
    })
    bestProducts.classList.remove('disconect')
    const input = document.querySelector('input')
    input.remove()
}

const openCart = () => {
    cart.classList.toggle('active')
}

const del = () => {

    const delList = document.querySelectorAll('ul>li>i')
    let warehouse = []
    delList.forEach((dl, index) => {
        dl.addEventListener('click', (e) => {

            e.target.parentNode.remove(e)
            let actual = -Number(e.target.parentNode.dataset.all)
            warehouse.push(actual)

            let newArr = total.concat(warehouse)
            cartTotal.innerHTML = `<p>together to pay:$${Number(newArr.reduce((a, b) => a + b, 0))}</p>`
        })
    })

}

const end = () => {
    alert('paid, thank you🙂')
    setTimeout("window.location.reload()", 500);
}
image.forEach((item) => item.addEventListener('click', show))

btnCart.addEventListener('click', openCart)