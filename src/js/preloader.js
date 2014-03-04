(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.image('spaceship', 'assets/spaceship1.png');
      this.load.image('bullet1', 'assets/bulletP.png');
      this.load.image('bullet2', 'assets/bulletP.png');
      this.load.image('bulletE1', 'assets/bulletE.png');
      this.load.image('enemy' , 'assets/enemy1.png');
      this.load.image('menuimg', 'assets/titleimg.png');
      this.load.image('background', 'assets/background.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.image('startButton', 'assets/buttonPlay.png');
      this.load.image('highscoreButton', 'assets/buttonHigh.png');
      this.load.spritesheet('backButton', 'assets/button_sprite_sheet.png', 193, 71);
      
      this.load.image('restartButton', 'assets/buttonRetry.png');
      this.load.image('menuButton', 'assets/buttonMenu1.png');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['naves'] = window['naves'] || {};
  window['naves'].Preloader = Preloader;

}());
