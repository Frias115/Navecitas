(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.healthTxt = null;
    this.enemy = null;
    this.bulletTime1 = 0;
    this.bulletTime2 = 0;
    this.bulletE1Time = 0;
    this.playerLive = true;
    this.score = 0;
    
    
  }

  Game.prototype = {

    create: function () {
		this.background = this.add.tileSprite(0,0, 640, 880, 'background');
		var x = this.game.width / 2
        , y = this.game.height / 2;
        
        this.livingEnemies = new Array();
		
		this.player = this.add.sprite (300, 700, 'spaceship');
		this.player.body.setPolygon(49, 16, 63, 24, 76, 38, 76, 0, 91, 35, 99, 50, 94, 62, 81, 68, 72, 68, 65, 79, 34, 79, 27, 68, 18, 68, 5, 62, 0, 50, 8, 35, 23, 0, 23, 38, 38, 24, 49, 16);
		this.player.body.collideWorldBounds = true;
		this.player.health = 3;
		
		this.playerLives = "Health: ";
		this.playerLivesTxt = this.add.text(10, 10, this.playerLives + this.player.health, { fontSize: '34px', fill: '#fff', font: '16px minecraftia'});
		
		this.scoreString = "Score: "; 
		this.scoreTxt = this.add.text(500, 10, this.scoreString + this.score, { fontSize: '34px', fill: '#fff', font: '16px minecraftia'});
		
		this.enemys = this.add.group();
		this.enemys.createMultiple(20, 'enemy');
		this.enemys.setAll('outOfBoundsKill', true);
		
		this.bullets1 = this.add.group();
		this.bullets1.createMultiple(30, 'bullet1');
		this.bullets1.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet1){bullet1.kill()}, this);
		
		this.bullets2 = this.add.group();
		this.bullets2.createMultiple(30, 'bullet2');
		this.bullets2.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet2){bullet2.kill()}, this);
		
	},
		
	update: function() {
		this.background.tilePosition.y += 4;
		
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
	
		
	
		this.enemyGame = this.enemys.getFirstExists(false);
		if (this.enemyGame){
			this.enemyGame.reset(Math.random()*560, -150);
			this.enemyGame.body.velocity.y = 700;
			this.enemyGame.health = 1;
		}
		
		
		this.physics.overlap(this.bullets1, this.enemys, function(bullet1,enemy) { bullet1.kill(); enemy.damage(1); this.score += 10; this.scoreTxt.content = this.scoreString + this.score;}, null, this);
		this.physics.overlap(this.bullets2, this.enemys, function(bullet2,enemy) { bullet2.kill(); enemy.damage(1);}, null, this);
		this.physics.overlap(this.player, this.enemys, function(player,enemy) { enemy.kill(); player.damage(1); this.playerLivesTxt.content = this.playerLives + this.player.health}, null, this);
		this.physics.overlap(this.enemys, this.enemys, function(enemy) { enemy.kill();}, null, this);
		
		if (this.player.health == 0){
			this.game.state.start('gameover');
			this.score = 0;
		}
		
		
    },
    
    fireBullet: function() {
		
		if (this.time.now > this.bulletTime1) {
			this.bullet1 = this.bullets1.getFirstExists(false);
			if (this.bullet1) {
				this.bullet1.reset(this.player.x + 35, this.player.y + 15);
				this.bullet1.body.velocity.y = -400;
				this.bulletTime1 = this.time.now + 300;
			}
		}
			
			if  (this.time.now > this.bulletTime2) {
			this.bullet2 = this.bullets2.getFirstExists(false);
			if (this.bullet2) {
				this.bullet2.reset(this.player.x + 57, this.player.y + 15);
				this.bullet2.body.velocity.y = -400;
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
