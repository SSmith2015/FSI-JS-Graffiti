
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
    dogImages[i].style.border = '50px dashed green'
}

let dogName = document.querySelectorAll('h1')
for(let i = 0; i < dogName.length; i++){
    dogName[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'red'