
var GameLayer = cc.Layer.extend({
    sprite:null,
    powerPlant:null,
    enemies: null,
    towers: null,
    enemies: [],
    enemySpawn: null,
    bullets: [],
    audio: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        // Render the game field
        // Use a tilemap

        var tilemap = new cc.TMXTiledMap(asset.map_01);
        this.addChild(tilemap, 1);
        
        // Add all the game objects to the layer
        // Get the properties from the tmx file

        var enemy = new Enemy(100);

        this.enemies.push(enemy);
        
        this.powerPlant = new PowerPlant();
        
        console.log(this.powerPlant + "<<-----------");
        console.log(this.powerPlant.power);

        var path, towerPositions;
        for (var i = 0; i < tilemap.objectGroups.length; ++i) {
            if (tilemap.objectGroups[i].groupName === "Enemy_Path") {
                path = tilemap.objectGroups[i].getObjects()[0];
            }
            if (tilemap.objectGroups[i].groupName === "Tower_Placement") {
                towerPositions = tilemap.objectGroups[i];
            }
        }
        
        // add the towers
        this.towers = [];
        for (var i = 0; i < towerPositions.getObjects().length; ++i) {
            var tower = new Tower();
            tower.x = towerPositions.getObjects()[i].x;
            tower.y = towerPositions.getObjects()[i].y;
            if(tower.y > cc.winSize.height / 2)
            {
                tower.mana.y = tower.mana.y + 25;
            }
            else
            {                
                tower.mana.y = tower.mana.y - 25;   
            }
            this.towers.push(tower);
            this.addChild(tower, 5);
        }
        
        this.powerPlant.x = parseInt(path.polylinePoints[path.polylinePoints.length - 1].x) + path.x;
        this.powerPlant.y = cc.winSize.height - (parseInt(path.polylinePoints[path.polylinePoints.length - 1].y) + path.y);
        console.log(this.powerPlant.x);
        console.log(this.powerPlant.y);
        
       
        this.addChild(this.powerPlant, 3);
        this.scheduleUpdate();
         
        this.enemySpawn = this.schedule(function(){
             var enemy = new Enemy(100);

        this.enemies.push(enemy);
        this.addChild(enemy, 6);
        enemy.beginMovingAlongPathObject(tilemap.objectGroups[0].getObjects()[0]);
        this.numEnemies++;
        }, 1.0, 30, 5);
        
        cc.audioEngine.playMusic(asset.all_loop, true);
    },
    update: function() {
        var i, j, enemy;
        
        for (i = 0; i < this.enemies.length; ++i) {
            enemy = this.enemies[i];
            var dist = distance(this.powerPlant, enemy);
            if (!enemy.attacking && dist < 40) {
                enemy.actionManager.pauseTarget(enemy);
                enemy.attacking = true;
            }
            
            if (enemy.attacking) {
                if (enemy.ac <= 0) {
                    console.log("Attack!");
                    this.powerPlant.takeDamage(enemy.power);
                    enemy.ac = enemy.attackCooldown;
                }
                --enemy.ac;
            }
        }
        
        for (j = 0; j < this.towers.length; ++j) {
            var tower = this.towers[j];
            --tower.ac;
            for (i = 0; i < this.enemies.length; ++i) {
                enemy = this.enemies[i];
                if (enemy.health <= 0) {
                    this.removeChild(enemy);
                    this.enemies.splice(i, 1);
                    --i;
                }
                
                if (distance(tower, enemy) < tower.range) {
                    if (tower.ac <= 0 && tower.on) {
                        // Launch a bullet
                        var bullet = new Bullet(enemy, tower.power);
                        bullet.x = tower.x;
                        bullet.y = tower.y;
                        this.addChild(bullet, 7);
                        bullet.scheduleUpdate();
                        this.bullets.push(bullet);                
                        tower.ac = tower.attackCooldown;
                    }
                }
            }
        }
        /*for (k = 0; j < this.towers.length; k++) {
            
        }*/
        
        for (i = 0; i < this.bullets.length; ++i) {
            var bullet = this.bullets[i];
            var dist = distance(bullet, bullet.target);
            if (dist < 10) {
                bullet.target.takeDamage(bullet.damage);
                this.bullets.splice(i, 1);
                this.removeChild(bullet);
                --i;
            }
        }
    }
});

var Game = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

