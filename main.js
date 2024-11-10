const button = document.querySelector('[data-grid]')
const container = document.querySelector('.container');
const colors = [
    'rgb(240, 255, 238)',  // #FFFFFF
    'rgb(223, 242, 235)',  // #DFF2EB
    'rgb(185, 229, 232)',  // #B9E5E8
    'rgb(122, 178, 211)',  // #7AB2D3
    'rgb(74, 98, 138)',    // #4A628A
];

for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        row.innerHTML += '<div class="box"></div>';
    }
}

let boxes = document.querySelectorAll('.box');

boxes.forEach(function(box){
    let cellSize = Math.min(window.innerWidth / 16, window.innerHeight / 16) * 0.8;
    box.style.width = `${cellSize}px`;
    box.style.height = `${cellSize}px`;
})

boxes.forEach(function(box){
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = colors[colors.indexOf(box.style.backgroundColor) + 1];
    });
});

button.addEventListener('click', function(){
    numberOfGrid = prompt('Choose the NxN grid of squares');
    if(numberOfGrid > 100){
        alert('Please enter less than 100');
        return;
    }else if(numberOfGrid < 1){
        alert('Please enter number greater than 0');
        return;
    }
    container.innerHTML = '';
    
    for(let i = 0; i < numberOfGrid; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < numberOfGrid; j++){
            row.innerHTML += '<div class="box"></div>';
        }
    }
    
    let boxes = document.querySelectorAll('.box');
    
    boxes.forEach(function(box){
        let cellSize = Math.min(window.innerWidth / numberOfGrid, window.innerHeight / numberOfGrid) * 0.8;
        box.style.width = `${cellSize}px`;
        box.style.height = `${cellSize}px`;
    })

    boxes.forEach(function(box){
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor = colors[colors.indexOf(box.style.backgroundColor) + 1];
        });
    });
})