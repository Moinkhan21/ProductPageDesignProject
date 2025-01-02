// Select the main product image element
let productImg = document.getElementById("productImg");

// Select all control buttons in the image gallery
let btn = document.getElementsByClassName("btn");

// Array of image sources corresponding to each button
const images = [
    "product-img/image1.png",
    "product-img/image2.png",
    "product-img/image3.png"
];

// Function to change the product image and update active button
function changeImage(index) {
    // Update the product image source based on the index
    productImg.src = images[index];
    
    // Remove "active" class from all buttons
    for (let bt of btn) {
        bt.classList.remove("active");
    }
    
    // Add "active" class to the clicked button
    btn[index].classList.add("active");
}

// Assign click events to each button
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        changeImage(i);
    };
}
