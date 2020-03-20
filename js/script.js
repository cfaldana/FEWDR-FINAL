// Click function for show the Modal
const showModalButton = document.querySelector(".show");
const maskDiv = document.querySelector(".mask");
const closeModalDiv = document.querySelector(".close");

showModalButton.addEventListener("click", function() {
  maskDiv.classList.add("active");
});

// Function for close the Modal
function closeModal() {
  maskDiv.classList.remove("active");
}

// Call the closeModal function on the clicks/keyboard
maskDiv.addEventListener("click", closeModal);
closeModalDiv.addEventListener("click", closeModal);

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
