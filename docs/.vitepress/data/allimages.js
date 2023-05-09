const imageFiles = import.meta.glob("../../img/**/*.png", {
  as: "url",
  eager: true
})

// console.log(imageFiles)

export default imageFiles

