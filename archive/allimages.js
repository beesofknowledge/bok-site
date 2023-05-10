const data = import.meta.glob("../../img/**/*.png", {
  as: "url",
  eager: true
})

export default data

