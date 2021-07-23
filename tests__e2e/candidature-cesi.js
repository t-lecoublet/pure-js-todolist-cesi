module.exports = {
    'Candidature CESI': function(browser) {
      browser
        .url('https://www.cesi.fr/')
        .waitForElementVisible('#menu-navigation-principale')
        .assert.visible('#menu-navigation-principale')
        .click('#menu-navigation-principale li:nth-child(6) > button')
        .pause(2000)
        .click('#menu-navigation-principale li:nth-child(6) ul li:first-child a')
        .click('.ged___resultats__bloc')
        .pause(2000)
        .assert.visible('h1') 
        .assert.containsText('h1', 'Travailler chez CESI')
        
        .end();
    },
  };
  