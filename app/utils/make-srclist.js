const fs = require('fs')

// so as not to have to write out all those file names by hand
fs.readdir('./public/imgs', (err, files) => {
  if (err) throw err
  files.forEach((file) => {
    fs.appendFile('./img-src.js', `${file} \n`, (err) => {
      if (err) throw err
      console.log('writing to file')
    })
  })
})




