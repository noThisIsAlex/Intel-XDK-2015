var Unit = cc.Layer.extend({
    // A unit is anything with health
    // Extends from layer so that units can have moving parts
    ctor: function(health, totalHealth) {
        this._super();
        this.health = health;
        this.totalHealth = totalHealth;
        this.healthBar = new HealthBar();
        this.healthBar.displayHealth(health, totalHealth);
        this.addChild(this.healthBar, 100);
    },
    health: 100,
    totalHealth: 100,
    healthBar: null,
    takeDamage: function(amount) {
        this.health -= amount;
        this.healthBar.displayHealth(this.health, this.totalHealth); 
    },
    destroy: function() {
        // Override this with custom animation triggers
    }
});