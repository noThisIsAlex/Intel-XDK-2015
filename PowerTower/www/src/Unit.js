var Unit = Layer.extend({
    // A unit is anything with health
    // Extends from layer so that units can have moving parts
    ctor: function(health) {
        this._super();
        this.health = health;
    },
    health: 100,
    takeDamage: function(amount) {
        this.health -= amount;
        if (health <= 0) {
            this.destroy();
        }
    },
    destroy: function() {
        // Override this with custom animation triggers
    }
});