'use strict';

var watson = require('watson-developer-cloud');

var concept_insights = watson.concept_insights({
  username: process.env.IBM_CONCEPT_INSIGHTS_USER,
  password: process.env.IBM_CONCEPT_INSIGHTS_PASS,
  version: 'v2'
});

var params = {
  graph: '/graphs/wikipedia/en-20120601',
  text: 'The Rock won Stonecold Steve Austin & Rikishi on Monday Night Raw'
};

// Retrieve the concepts for input text
concept_insights.graphs.annotateText(params, function(err, res) {
  if (err)
    console.log(err);
  else {
    console.log('Annotated Text');
    console.log(JSON.stringify(res, null, 2));
  }
});
