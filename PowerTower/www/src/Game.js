
var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        // Render the game field
        // Use a tilemap

        /*var tilemap = new cc.TMXTiledMap(asset.map_01);
        this.addChild(tilemap, 1);*/

        
        // Add all the game objects to the layer
        // Get the properties from the tmx file
        
        
        // WRITE CODE HERE       
        var healthBar = new HealthBar(100, 100);
        this.addChild(healthBar, 2);
    }
});

var Game = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

