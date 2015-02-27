
var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        // Render the game field
        // Use a tilemap
        
        
        // Add all the game objects to the layer
        // Get the properties from the tmx file
        
        
        // WRITE CODE HERE
    }
});

var Game = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

