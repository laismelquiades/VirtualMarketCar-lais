const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]


let main = document.querySelector('main')
let h1 = document.createElement('h1')
let div = document.createElement('div')
let pItem = document.createElement('p')
let pValor = document.createElement('p')
let ul = document.createElement('ul')
let section = document.createElement('section')
let total = document.createElement('p')
let valorTotal = document.createElement('p')
let button = document.createElement('button')


pItem.classList.add('pItem')
pValor.classList.add('pValor')
valorTotal.classList.add('valorTotal')


main.append(h1, div, ul, section, button)
div.append(pItem, pValor)
section.append(total, valorTotal)

h1.innerText = "Virtual Market"
pItem.innerText = "Item"
pValor.innerText = "Valor"
total.innerText = "Total"
button.innerText = "Finalizar Compra"

function soma(productsCart) {
    let count = 0
    
    for(let i = 0; i < productsCart.length; i++) {
       
        count += productsCart[i].price
    }  
        let valorTotal = document.querySelector('.valorTotal')
        valorTotal.innerText = `R$ ${count}`
        
        return valorTotal
}   
soma(productsCart)


function createCart(products){
        
        let tagLi = document.createElement("li")
        let tagName = document.createElement("pName")
        let tagPreco = document.createElement ("pPreco")

        tagName.innerHTML = `${products.name}`
        tagPreco.innerHTML = `R$ ${products.price}`

        tagLi.append(tagName, tagPreco)
        
    return tagLi
    
}


function listaProduto(itens) {
    let tagUl = document.querySelector('ul')

    for(i = 0; i < itens.length; i++) {
        
        let tagLi = createCart(itens[i])


        tagUl.appendChild(tagLi)
    }
      
}

listaProduto(productsCart)


