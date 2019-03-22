const aws = require('aws-sdk')
const fs = require('fs')

const rekognition = new aws.Rekognition({
    region: "eu-west-1",
    accessKeyId: "",
    secretAccessKey: ""
})

const image = fs.readFileSync('./test.png')

rekognition.detectLabels({
    Image: {
      Bytes: image,
    },
    MinConfidence: 80.0
  }, (err, data) => { 
      if(data) console.log(data)
      if(err) console.error(err)
  })