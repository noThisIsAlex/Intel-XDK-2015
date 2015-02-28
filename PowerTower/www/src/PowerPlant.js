var listener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
        // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
        swallowTouches: true,
        //onTouchBegan event callback function                      
        onTouchBegan: function (touch, event) { 
   			console.log(touch);
            console.log(event);
            console.log(touch._point.x);
            console.log(touch._point.y);
            console.log("touchDown");
        }
    });

var PowerPlant = Unit.extend({
    ctor: function() {	
        this._super(10000, 10000);	       
        /*this.power = power;
        this.powerRate = powerRate;
        this.powerMax = powerMax;*/
        this.sprite = new cc.Sprite(asset.powerplantlv1);
        this.addChild(this.sprite, 1);
        console.log(this.sprite)
        //this.setTouchEnabled(true);
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: function (touch, event) { 
                console.log(touch);
                console.log(event);
                console.log(touch._point.x);
                console.log(touch._point.y);
                console.log("touchDown");
				var target = event.getCurrentTarget();
				console.log(target);
				console.log(target.sprite);
            }
        }), this);
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


console.log(listener);
console.log(PowerPlant);
