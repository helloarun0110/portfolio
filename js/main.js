// const input = document.getElementById("mediaInput");
// const preview = document.getElementById("preview");

// if (input) {
//     input.addEventListener("change", () => {
//         preview.innerHTML = "";

//         const file = input.files[0];
//         if (!file) return;

//         const url = URL.createObjectURL(file);

//         if (file.type.startsWith("image")) {
//             const img = document.createElement("img");
//             img.src = url;
//             img.style.width = "300px";
//             img.style.borderRadius = "15px";
//             preview.appendChild(img);
//         } 
//         else if (file.type.startsWith("video")) {
//             const video = document.createElement("video");
//             video.src = url;
//             video.controls = true;
//             video.style.width = "300px";
//             preview.appendChild(video);
//         }
//     });
// }




document.querySelector(".primary").addEventListener("click", () => {
  alert("CV download feature can be added later!");
});


