var PowerPlant = Unit.extend({
    ctor: function() { 		
        this._super(health)	       
        this.power = power
        this.powerRate = powerRate
        this.powerMax = powerMax
    },
    health: 10000,
    healthMax: 10000,
    healthRate: 50,
    power: 1000,
    powerRate: 1,
    powerMax: 1000,
    sprite: 'placeholder',
    upgradeLevel: {
    	powerMaxInc: 100,
    	powerRateInc: 10,
    	healthMaxInc: 100,
    	healthRateInc: 50
    },
    update: function() {
    	power += powerRate
    	if (power > powerMax) {
    		power = powerMax;
    	}
    },

    upgrade: function() {
    	// Increase maximums and rate of recharge
    	powerMax += upgradeLevel.powerMaxInc;
    	powerRate += upgradeLevel.powerRateInc;
    	healthMax += upgradeLevel.healthMaxInc;
    	healthRate += upgradeLevel.healthRateInc;
    
    	health = healthMax;
    	power = powerMax;
    }
}