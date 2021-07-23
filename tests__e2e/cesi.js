module.exports = {
    'Demo test cesi.fr': function(browser) {
      browser
        .url('https://www.cesi.fr/')
        .waitForElementVisible('body')
        .useCss()
        .assert.titleContains('Campus')
        .assert.visible('nav') 
        .end();
    },
  };
  