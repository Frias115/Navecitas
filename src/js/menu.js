(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, 30, 'Autopista espacial', {font: '32px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      
      this.titleImg = this.add.sprite (250, 80, 'menuimg');

      this.startButton = this.add.button(this.world.centerX, 300, 'startButton', function(){this.game.state.start('game');}, this);
      this.startButton.anchor.setTo(0.5, 0.5);
      this.highscoreButton = this.add.button(this.world.centerX, 400, 'highscoreButton', function(){this.game.state.start('highscore');}, this);
      this.highscoreButton.anchor.setTo(0.5, 0.5);
      

      
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['naves'] = window['naves'] || {};
  window['naves'].Menu = Menu;

}());
