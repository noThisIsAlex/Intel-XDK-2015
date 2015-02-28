var PowerPlant = Unit.extend({
    ctor: function() {	
        this._super(10000, 10000);	       
        /*this.power = power;
        this.powerRate = powerRate;
        this.powerMax = powerMax;*/
        this.sprite = new cc.Sprite(asset.powerplantlv1);
        this.addChild(this.sprite, 1);
        this.healthBar.y = 60;
    },
    healthRate: 50,
    power: 1000,
    powerRate: 1,
    powerMax: 1000,
    sprite: null,
    level: 1,
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
    	this.level++
    	if (level == 1) {
    		this.sprite = new cc.Sprite(asset.powerplantlv1);
    		console.log("level1");
    	} else if (level == 2) {
    		this.sprite = new cc.Sprite(asset.powerplantlv2);	
    		console.log("level2");
    	} else if (level == 3) {
    		this.sprite = new cc.Sprite(asset.powerplantlv3);
    		console.log("level3");
    	} else if (level > 3) {
    		level = 1;
    	}
    }
});