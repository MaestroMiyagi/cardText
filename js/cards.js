const myCards = (id, title) => {
    let card = document.createElement('div')
    card.classList.add('card', 'col-sm-6', 'mb-3', 'mt-sm-3', 'ms-sm-0', 'bg-opacity-10', 'bg-light')

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h1')
    cardTitle.classList.add('card-title', 'mb-5')
    cardTitle.innerHTML = title

    let cardButton = document.createElement('a')
    cardButton.classList.add('btn', 'btn-primary', 'position-absolute', 'bottom-0', 'end-0', 'm-1')
    cardButton.setAttribute("href", `./cardDetail.html?id=${id}`)
    let buttonText = document.createTextNode("Ir a detalles")
    cardButton.appendChild(buttonText)

    cardBody.append(cardTitle, cardButton)
    card.append(cardBody)
    return card
}

export {
    myCards
}