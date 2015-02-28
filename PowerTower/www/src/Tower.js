var Tower = cc.Layer.extend({
    sprite: null,
    attackCooldown: 100,
    ac: 0,
    power: 35,
    range: 150,
    ctor: function() {
        this._super();
        
        this.sprite = new cc.Sprite(asset.tower_up);
        this.addChild(this.sprite, 1);
    }
});