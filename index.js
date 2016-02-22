'use strict'

// Instantiate Service
var watson = require('watson-developer-cloud')
var fs = require('fs')

// username: '6557ed53-ca5e-4b0a-bf5d-aac587572fe1',
// password: 'QNwLOKW1K13z',
var personality_insights = watson.personality_insights({
  username: process.env.IBM_USERNAME,
  password: process.env.IBM_PASSWORD,
  version: 'v2'
})

fs.readFile('./words.txt', 'utf8', function(err, data){
  if (err) throw error

  personality_insights.profile({
      text: data
    },
    function (err, response) {
      if (err)
        console.log('errors:', err)
      else {
        var output = JSON.stringify(response, null, 2)
        console.log(output)
        fs.writeFile('./output.txt', output)
      }
    }
  )
})
