var Tower = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();
        
        this.sprite = new cc.Sprite(asset.tower);
        this.addChild(this.sprite, 1);
    }
});