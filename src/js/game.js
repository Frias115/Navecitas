(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.bulletTime = 0;
  }

  Game.prototype = {

    create: function () {
		var x = this.game.width / 2
        , y = this.game.height / 2;
        
		
		this.player = this.add.sprite (300, 300, 'spaceship');
		this.player.body.collideWorldBounds = true;
		
		this.bullets = this.add.group();
		this.bullets.createMultiple(30, 'bullet');
		this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill()}, this);

		
	},
		
	update: function() {
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.W))
		{
			this.player.y -=5;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.S))
		{
			this.player.y +=5;
		}
		
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			this.player.x -=5;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			this.player.x +=5;
		}
		
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			this.fireBullet();
		}
    },
    
    fireBullet: function() {
		
		
		

		if (this.time.now > this.bulletTime)
		{
			this.bullet = this.bullets.getFirstExists(false);

			if (this.bullet)
			{
				this.bullet.reset(this.player.x + 20, this.player.y - 6);
				this.bullet.body.velocity.y = -300;
				this.bulletTime = this.time.now + 300;
			}
		}
	},
	
	
      /*var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }*/

  };

  window['naves'] = window['naves'] || {};
  window['naves'].Game = Game;

}());
