
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Get all images with class="gallery-image"
    const images = document.querySelectorAll(".gallery-image");
    
    // Add click event to each gallery image
    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    // Also close when clicking outside the image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
