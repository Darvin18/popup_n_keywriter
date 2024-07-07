// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// var twoSum = function(nums, target) {
    
//     for (let i = 0; nums.length-1; i++){
//         let x = nums[i];
//         let y = nums[i+1];
//         if (x+y==target){
            
//             return [i, i+1];
//         }
//     }
// };

// let leftOffset = 0;

// let sdvig = () => {
//     $(".text").offset({left: leftOffset});
//     leftOffset++;
//     if (leftOffset > 200){
//         leftOffset = 0;
//     }
// }



// setInterval(sdvig, 1);

const key_clicked_text = document.getElementById("key_clicked_text");

window.addEventListener('keydown', (key_clicked) =>{
    key_clicked_text.innerHTML = key_clicked.key;
})

const modal = document.getElementById("my_modal");

document.getElementById("open_modal_btn").addEventListener("click", function(){
    modal.classList.add("open");
})

document.getElementById("close").addEventListener("click", function(){
    modal.classList.remove("open");
})

window.addEventListener('keydown', (key_btn) =>{
    if (key_btn.key == 'Escape'){
        modal.classList.remove("open");
    }
})

document.querySelector("#my_modal .modal_content").addEventListener("click", event =>{
    event._isClickWithInModal = true;
})
document.getElementById("my_modal").addEventListener("click", event =>{
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
})