const container = document.querySelector('.container');
const colors = [
    ['rgb(255, 255, 255)', false],  // #FFFFFF
    ['rgb(223, 242, 235)', false],  // #DFF2EB
    ['rgb(185, 229, 232)', false],  // #B9E5E8
    ['rgb(122, 178, 211)', false], // #7AB2D3
    ['rgb(74, 98, 138)', false],  // #4A628A
    ['rgb(122, 178, 211)', false], // #7AB2D3
    ['rgb(185, 229, 232)', false], // #B9E5E8
    ['rgb(223, 242, 235)', true] // #DFF2EB
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
    box.addEventListener('mouseover', function(){
        if(box.style.backgroundColor === colors[colors.length - 1][0]){
            box.style.backgroundColor = colors[0][0];
            console.log('yes')
        }else{
            
        }
    })
});