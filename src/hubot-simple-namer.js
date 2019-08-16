const axios = require('axios');

module.exports = (robot) => {
  robot.hear(/^!name$/i, (res) => {
    const query = escape(res.match[1]);
    axios.post('https://api.codetunnel.net/random-nick', {})
      .then(result => res.send(result.data.nickname))
      .catch(err => {
        console.log('error retrieving namer: ' + err);
        res.send('error getting a name :(');
      });
  })
}
