const video = document.querySelector("video");
input = document.querySelector("input");
input.addEventListener("change",() => {
  video.src = URL.createObjectURL(input.files[0]);
})
const image = document.querySelector("img");
input = document.querySelector("input");
input.addEventListener("change",() => {
  image.src = URL.createObjectURL(input.files[0]);
})
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const memoryTitleInput = document.getElementById('memoryTitle');
    const uploadButton = document.getElementById('uploadButton');
    const gallery = document.getElementById('gallery');

    uploadButton.addEventListener('click', () => {
        const files = fileInput.files;
        const memoryTitle = memoryTitleInput.value.trim();

        for (const file of files) {
            const fileType = file.type.startsWith('image') ? 'image' : 'video';
            const mediaContainer = document.createElement('div');
            mediaContainer.className = 'media-container';

            const mediaElement = document.createElement(fileType);
            mediaElement.src = URL.createObjectURL(file);
            mediaElement.controls = true;

            const titleElement = document.createElement('h3');
            titleElement.textContent = memoryTitle || "Untitled Memory";

            mediaContainer.appendChild(titleElement);
            mediaContainer.appendChild(mediaElement);
            gallery.appendChild(mediaContainer);
        }
        
        // Clear inputs
        memoryTitleInput.value = "";
        fileInput.value = null;
    });
});

