const folderPath = "photos/";

function loadImages() {
  const imageFolder = new File(folderPath);
  const images = imageFolder.listFiles();

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (image.isFile()) {
      const img = document.createElement("img");
      img.src = folderPath + image.getName();
      img.className = "round animatedImg";
      document.body.appendChild(img);
    }
  }
}

loadImages();