
var GameLayer = cc.Layer.extend({
    sprite:null,
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
        
        
        // WRITE CODE HERE
        this.enemies = [];
        var enemy = new Enemy();
        this.enemies.push(enemy);
        this.powerPlant = new PowerPlant();
        this.powerPlant.x = cc.winSize.width / 3;
        this.powerPlant.y = cc.winSize.height / 2;
        enemy.x = cc.winSize.width / 2;
        enemy.y = cc.winSize.height / 2;
        this.addChild(enemy, 2);
        this.addChild(this.powerPlant, 3);
    }
});

var Game = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

