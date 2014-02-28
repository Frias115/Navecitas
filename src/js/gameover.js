(function() {
  'use strict';

  function Gameover() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Gameover.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
        
      this.titleTxt = this.add.bitmapText(x, 200, 'Game Over', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.restartButton = this.add.button(this.world.centerX, 300, 'restartButton', function(){this.game.state.start('game');}, this, 2, 1, 0);
      this.restartButton.anchor.setTo(0.5, 0.5);
      this.highscoreButton = this.add.button(this.world.centerX, 400, 'highscoreButton', function(){this.game.state.start('highscore');}, this, 2, 1, 0);
      this.highscoreButton.anchor.setTo(0.5, 0.5);
      this.menuButton = this.add.button(this.world.centerX, 500, 'menuButton', function(){this.game.state.start('menu');}, this, 2, 1, 0);
      this.menuButton.anchor.setTo(0.5, 0.5);

      
    },

    update: function () {
		if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
		{
			this.game.state.start('game');
		}
    },
  };

  window['naves'] = window['naves'] || {};
  window['naves'].Gameover = Gameover;

}());
