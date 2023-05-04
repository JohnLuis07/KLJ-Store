// Select all the image links on the page and convert the NodeList to an array
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];

// Get the initial number of items selected from the input element
let items = document.getElementById("numitems").value;

// Set the initial image ID to 1
let imgId = 1;

// Add a click event listener to each image link
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        // Prevent the default behavior of the link
        event.preventDefault();
        // Get the data ID attribute of the clicked image link
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    // Get the width of the first image in the showcase container
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    // Translate the showcase container horizontally to display the selected image
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

// Add a resize event listener to the window to update the displayed image when the window is resized
window.addEventListener('resize', slideImage);


//not yet finish
function add_cart() {
    if (items <= 0 || items > 100) {
        alert("Please enter a valid item quantity between 1 and 100.");
        return;
    }
}
