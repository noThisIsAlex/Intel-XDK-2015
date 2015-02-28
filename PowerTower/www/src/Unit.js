var Unit = cc.Layer.extend({
    // A unit is anything with health
    // Extends from layer so that units can have moving parts
    ctor: function(health) {
        this._super();
        this.health = health;
        this.healthBar = new HealthBar(this.health, this.health);
        this.addChild(this.healthBar, 100);
    },
    health: 100,
    healthBar: null,
    takeDamage: function(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.destroy();
        }
    },
    destroy: function() {
        // Override this with custom animation triggers
    }
});