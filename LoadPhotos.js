function loadImages() {
    const folderPath = "photos/";
  
    const imageFolder = new XMLHttpRequest();
    imageFolder.open("GET", folderPath, true);
    imageFolder.responseType = "blob";
  
    imageFolder.onload = function() {
      const reader = new FileReader();
      reader.readAsDataURL(imageFolder.response);
  
      reader.onload = function() {
        const images = reader.result.match(/<img src="([^"]+)">/g);
  
        if (images) {
          images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.match(/<img src="([^"]+)">/)[1];
            img.className = "round animatedImg";
            document.body.appendChild(img);
          });
        }
      };
    };
  
    imageFolder.send();
  }