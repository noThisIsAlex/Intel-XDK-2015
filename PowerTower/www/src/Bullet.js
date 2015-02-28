var Bullet = cc.Sprite.extend({
    target: null,
    speed: 5,
    damage: 0,
    ctor: function(target, damage) {
        this._super(asset.fireball);
        this.target = target;
        this.damage = damage;
    },
    update: function() {
        var direction = {};
        var dist = distance(this, this.target);
        direction.x = (this.target.x - this.x) * this.speed / dist;
        direction.y = (this.target.y - this.y) * this.speed / dist;
        this.x += direction.x;
        this.y += direction.y;
    }
});