var Twit = require('../lib/twitter');

var T = new Twit({
  consumer_key:         'mnqUbS3GGMz8L9hIAZA0pOuR8',
  consumer_secret:      'WuJMkZN7EOJ5L0WaMpA1MIFVOz4bdkumrAodIPqEeejhaEW5sF',
  access_token:         '1100983615620444160-wSS7FaVEmddgHXCydcPbZsfnfgiDBf',
  access_token_secret:  'dr13k5hs9JxoPhjjMKTkwcVhYeN5cgyc4qGp3qs5nQG2C'
});


function Tweet(inData) {
    let moisture = Integer.parseInt(inData);
    if(moisture > 574){
      T.post('statuses/update', { status: 'Carina, please water me!' }, function(err, data, response) {
        console.log(data)
      })
    }
  }