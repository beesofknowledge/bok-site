const imageFiles = import.meta.glob("../../img/**/*.png", {
  as: "url",
  eager: true
})

export default imageFiles

