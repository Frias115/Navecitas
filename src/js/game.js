(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.bulletTime1 = 0;
    this.bulletTime2 = 0;
    this.enemy = 0;
  }

  Game.prototype = {

    create: function () {
		var x = this.game.width / 2
        , y = this.game.height / 2;
        
		
		this.player = this.add.sprite (300, 300, 'spaceship');
		this.player.body.setPolygon(49, 16, 63, 24, 76, 38, 76, 0, 91, 35, 99, 50, 94, 62, 81, 68, 72, 68, 65, 79, 34, 79, 27, 68, 18, 68, 5, 62, 0, 50, 8, 35, 23, 0, 23, 38, 38, 24, 49, 16);
		this.player.body.collideWorldBounds = true;
		
		this.enemys = this.add.group();
		this.enemys.createMultiple(10, 'enemy');
		this.enemys.setAll('outOfBoundsKill', true);
		
		this.bullets = this.add.group();
		this.bullets.createMultiple(30, 'bullet');
		this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill()}, this);

		
	},
		
	update: function() {
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.W))
		{
			if ( this.player.y > 0){
			this.player.y -=5;
			}
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.S))
		{
			if ( this.player.y < 800){
				this.player.y +=5;
			}
		}
		
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			if ( this.player.x > 0){
				this.player.x -=6;
			}
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			if ( this.player.x < 540){
				this.player.x +=6;
			}
		}
		
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			this.fireBullet();
		}
		
		this.enemysCheck = this.enemys.getFirstExists(false)
		if (this.enemysCheck){
			this.enemysCheck.reset(Math.random()*640, 0);
			this.enemysCheck.body.velocity.y = 400;
			
		}
		
		this.enemysCheck = this.enemys.getFirstExists(false)
		if (this.enemysCheck){
			this.enemysCheck.reset(0, Math.random()*580);
			this.enemysCheck.body.velocity.x = 400;
			
		}
    },
    
    fireBullet: function() {
		
		if (this.time.now > this.bulletTime1) {
			this.bullet = this.bullets.getFirstExists(false);
			if (this.bullet) {
				this.bullet.reset(this.player.x + 35, this.player.y + 15);
				this.bullet.body.velocity.y = -400;
				this.bulletTime1 = this.time.now + 300;
			}
		}
			
			if  (this.time.now > this.bulletTime2) {
			this.bullet = this.bullets.getFirstExists(false);
			if (this.bullet) {
				this.bullet.reset(this.player.x + 57, this.player.y + 15);
				this.bullet.body.velocity.y = -400;
				this.bulletTime2 = this.time.now + 300;
			}
		}
	},

	/*render: function(){
		this.game.debug.renderBodyInfo(this.player, 32, 32);
		this.game.debug.renderPhysicsBody(this.player.body);
	}/*
	
	
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
