
var GameLayer = cc.Layer.extend({
    sprite:null,
    powerPlant:null,
    enemies: null,
    towers: null,
    enemies: [],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        // Render the game field
        // Use a tilemap

        var tilemap = new cc.TMXTiledMap(asset.map_01);
        this.addChild(tilemap, 1);

        console.log(tilemap);
        // Object group 0 is the enemy path
        // Object group 1 is the towers
        // Object group 2 is the switches
        
        // Add all the game objects to the layer
        // Get the properties from the tmx file
        
        // WRITE CODE HERE

        var enemy = new Enemy(100);

        this.enemies.push(enemy);
        
        this.powerPlant = new PowerPlant();
        
        console.log(this.powerPlant);
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
            this.towers.push(tower);
            this.addChild(tower, 5);
        }
        
        this.powerPlant.x = parseInt(path.polylinePoints[path.polylinePoints.length - 1].x) + path.x;
        this.powerPlant.y = cc.winSize.height - (parseInt(path.polylinePoints[path.polylinePoints.length - 1].y) + path.y);
        console.log(this.powerPlant.x);
        console.log(this.powerPlant.y);
        
        this.addChild(enemy, 6);
        this.addChild(this.powerPlant, 3);
        enemy.beginMovingAlongPathObject(path);
        this.scheduleUpdate();
        
        /*this.towers = [];
        var tower = new Tower();
        tower.x = 100;
        tower.y = 275;
        this.addChild(tower, 5);
        this.towers.push(tower);
        tower = new Tower();
        tower.x = 140;
        tower.y = 250;
        this.addChild(tower, 5);

        this.towers.push(tower);*/
        
        this.schedule(function(){
             var enemy = new Enemy(100);
        this.enemies.push(enemy);
        this.addChild(enemy, 6);
        enemy.beginMovingAlongPathObject(tilemap.objectGroups[0].getObjects()[0]);
        }, 1.0);

        this.towers.push(tower);
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
                if (distance(tower, enemy) < tower.range) {
                    if (tower.ac <= 0 && tower.energy >= tower.energyUsage) {                        
                        tower.energy -= tower.energyUsage;
                        enemy.takeDamage(tower.power);
                        if (enemy.health <= 0) {
                            this.removeChild(enemy);
                            this.enemies.splice(i, 1);
                            --i;
                        }
                        tower.ac = tower.attackCooldown;
                    }
                }
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

