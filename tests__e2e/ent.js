module.exports = {
    'cesi.fr': function(browser) {
      browser
        .url('https://ent.cesi.fr/')
        .waitForElementVisible('body')
        .assert.visible('input#login')
        .pause(2000)
        .setValue('input#login', 'maxence.machu@viacesi.fr')
        .pause(2000)
        .click('a#submit')
        .pause(2000)
        .assert.containsText('#loginMessage', 'Sign in with your organizational account')
        .end();
    },
  };
