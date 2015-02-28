var Enemy = Unit.extend({
    sprite: null,
    ctor: function(health) {
        this._super(health);
        this.sprite = new cc.Sprite(asset.enemy);
        this.addChild(this.sprite, 1);
    }
});