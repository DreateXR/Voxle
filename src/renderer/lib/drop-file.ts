const dropEventListener = (scene: any, loader: any) => {
  const dropZone = document.getElementById("voxle");
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  });

  dropZone.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const fileInfo = files[0];
      console.log("Dropped file:", fileInfo);
      loader(fileInfo, scene);
    }
  });
};

export { dropEventListener };
