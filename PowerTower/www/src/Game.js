
var GameLayer = cc.Layer.extend({
    sprite:null,
    powerPlant:null,
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
        this.enemies = [];
        var enemy = new Enemy(100);
        this.enemies.push(enemy);
        
        this.powerPlant = new PowerPlant();
        
        this.powerPlant.x = cc.winSize.width / 2;
        this.powerPlant.y = cc.winSize.height / 2;
        this.addChild(enemy, 4);
        this.addChild(this.powerPlant, 3);
        enemy.beginMovingAlongPathObject(tilemap.objectGroups[0].getObjects()[0]);
        this.scheduleUpdate();
    },
    update: function() {
        for (var i = 0; i < this.enemies.length; ++i) {
            var enemy = this.enemies[i];
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
    }
});

var Game = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

