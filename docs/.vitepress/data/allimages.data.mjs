
export default {
  load () {
    const imageFiles = import.meta.glob("../../img/**/*.png", {
      as: "url",
      eager: true
    })
    // console.log(imageFiles)

    return {
      data: imageFiles
    }
  }
}

