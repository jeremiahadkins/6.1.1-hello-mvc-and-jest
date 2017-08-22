let HomeController = {
  index: (req, res) => {
    res.send('Hello From Controller Dan!');
  },
  about: (req, res) => {
    res.send('About what?');
  },
  contact: (req, res) => {
    res.send("Don't contact me!");
  }
};

module.exports = HomeController;
