//  Display towers
    //Each tower is a flex item
    //each tower  is also a flex container
// Move disks
    //two kinds of clicks--source click and destination click
    //source clicks gets top disk
    //variables for pick up and drop with strings to include in game function
    //destination click for selected tower
    // check child count
        //see if the selected disk is smaller than top disk at destination  tower
            //compare widths of disks
                //window-prompt alert to notify that the disk is larger than the disk of the destination tower
//see if you won

let gameMode = "pickup";


let holder = document.querySelector('#holder');
let startTower = document.querySelector('#start');
let midTower = document.querySelector('#offset');
let endTower = document.querySelector('#end');


function moveDisk(evt){
    
    let currentTower = evt.target;
    console.log(currentTower)
    
    if( gameMode === "pickup"){
    holder.appendChild(currentTower.lastElementChild)
    gameMode = "drop";
    }else if(gameMode === "drop"){
        if( !currentTower.childElementCount ){
            currentTower.appendChild(holder.lastElementChild);
            gameMode="pickup";
            
        }else if(currentTower.lastElementChild.attributes.width.value > holder.lastElementChild.attributes.width.value){
            currentTower.appendChild(holder.lastElementChild)
            console.log(currentTower.lastElementChild.attributes.width.value)
            console.log(holder.lastElementChild.attributes.width.value)

            gameMode="pickup";
        }else{
            alert("Invalid Move. Please select another destination")
        }
        if(endTower.childElementCount === 4){
            alert("You Won!!!!")
        }
    }


};
startTower.addEventListener('dblclick', moveDisk)
midTower.addEventListener('dblclick', moveDisk)
endTower.addEventListener('dblclick', moveDisk)



