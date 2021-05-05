let circleList = document.querySelectorAll('.plan__circle-item');
let blockList = document.querySelectorAll('.plan__info');

circleList.forEach(function(item,index){
    item.addEventListener('mouseover',function(){
        blockList[index].classList.add('plan__info-active')
    })
    item.addEventListener('mouseout', function(){
        blockList[index].classList.remove('plan__info-active')
    })
})