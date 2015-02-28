var PowerPlant = Unit.extend({
    ctor: function() { 		
        this._super(this.health);	       
        /*this.power = power;
        this.powerRate = powerRate;
        this.powerMax = powerMax;*/
        this.sprite = new cc.Sprite(asset.powerplant);
        this.addChild(this.sprite, 1);
    },
    health: 10000,
    healthMax: 10000,
    healthRate: 50,
    power: 1000,
    powerRate: 1,
    powerMax: 1000,
    sprite: null,
    upgradeLevel: {
    	powerMaxInc: 100,
    	powerRateInc: 10,
    	healthMaxInc: 100,
    	healthRateInc: 50
    },
    update: function() {
    	this.power += this.powerRate
    	if (this.power > this.powerMax) {
    		this.power = this.powerMax;
    	}
    },

    upgrade: function() {
    	// Increase maximums and rate of recharge
    	this.powerMax += upgradeLevel.powerMaxInc;
    	this.powerRate += upgradeLevel.powerRateInc;
    	this.healthMax += upgradeLevel.healthMaxInc;
    	this.healthRate += upgradeLevel.healthRateInc;
    
    	this.health = healthMax;
    	this.power = powerMax;
    }
});