
//import data from './images.mjs'

export default {
  // watch: ['../../img/**/*.png'],
  load () {
    const data = import.meta.glob("../../img/**/*.png", {
      as: "url",
      eager: true
    })
    console.log(imageFiles)

    return data
  }
}

