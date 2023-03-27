// Grabbing the 3 buttons
let button_fluo_black = document.querySelector(".combination_color_1");
let button_blue_pink = document.querySelector(".combination_color_2");
let button_red_white = document.querySelector(".combination_color_3");

// Grab The Image of shoes
let shoesImage = document.querySelector(".fluo_image_focus img");

// Button Fluo and Black
button_fluo_black.addEventListener('click',()=>{
    shoesImage.setAttribute("src","Images/running_shoes_fluor.png");
    shoesImage.classList.add("animation_shoes_move");
})

// Button Pink and Blue 
button_blue_pink.addEventListener('click',()=>{
    shoesImage.setAttribute("src","Images/running_shoes_pink_blue.png");
    shoesImage.classList.add("animation_shoes_move");
})
// Button Pink and Blue 
button_red_white.addEventListener('click',()=>{
    shoesImage.setAttribute("src","Images/running_shoes_white_red.png");
    shoesImage.classList.add("animation_shoes_move");
})


