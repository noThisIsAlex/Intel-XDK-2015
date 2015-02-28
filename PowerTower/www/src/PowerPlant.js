var manaBarWidth = 50;
var manaBarHeight = 12;

var PowerPlant = Unit.extend({
    ManaBar: null,
    mana: null,
    ctor: function() {	
        this._super(1500, 1500);	       
        /*this.power = power;
        this.powerRate = powerRate;
        this.powerMax = powerMax;*/
        this.sprite = new cc.Sprite(asset.powerplantlv1);
        this.addChild(this.sprite, 1);
        console.log(this.sprite);
        //this.setTouchEnabled(true);
	  /* var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: this.onTouchBegan
        }); 
        cc.eventManager.addListener(listener, this);*/
        this.healthBar.y = 60;
        console.log(this.health);
        //mana bar
        this.ManaBar = cc.Layer.extend
        ({
            blackBar: null,
            greenBar: null,
            redBar: null,
            ctor: function() 
            {
                this._super();
                this.blackBar = new cc.LayerColor(cc.color(0, 0, 0, 255), manaBarWidth, manaBarHeight);
                this.blueBar = new cc.LayerColor(cc.color(0, 0, 200, 255), manaBarWidth - 2, manaBarHeight - 2);
                this.redBar = new cc.LayerColor(cc.color(255, 0, 0, 255), manaBarWidth - 2, manaBarHeight - 2);
                
                this.blackBar.x = -manaBarWidth / 2;
                this.blackBar.y = -manaBarHeight / 2;
                this.blueBar.x = -manaBarWidth / 2 + 1;
                this.blueBar.y = -manaBarHeight / 2 + 1;
                this.blueBar.anchorX = 0;
                this.redBar.x = this.blueBar.x;
                this.redBar.y = this.blueBar.y;    
                
                this.addChild(this.blackBar, 1);
                this.addChild(this.redBar, 2);
                this.addChild(this.blueBar, 3);
            },
            displayEnergy: function(energy, totalEnergy) 
            {
                this.blueBar.scaleX = energy / totalEnergy;
            },
        });
        this.mana = new this.ManaBar();
        //console.log(this.ManaBar);
        this.addChild(this.mana, 2);
        
    },
    healthRate: 50,
    power: 10000,
    powerRate: 5,
    powerMax: 10000,
    sprite: null,
    level: 1,
     
    update: function() {
    	this.power += this.powerRate
    	if (this.power > this.powerMax) {
    		this.power = this.powerMax;
    	}
    },

    upgrade: function(event) {
    	// Increase maximums and rate of recharge
    	var upgradeLevel = {
    		powerMaxInc: 100,
    		powerRateInc: 10,
    		healthMaxInc: 100,
    		healthRateInc: 50
    	};
    	this.powerMax += upgradeLevel.powerMaxInc;
    	this.powerRate += upgradeLevel.powerRateInc;
    	this.totalHealth += upgradeLevel.healthMaxInc;
    	this.healthRate += upgradeLevel.healthRateInc;
    	
    	console.log(this);
    	console.log(this.health);
    	this.health = this.totalHealth;
    	this.power = this.powerMax;
    	this.level++
    	console.log(event.getCurrentTarget());
    	if (this.level == 1) {
    		event.getCurrentTarget().sprite.setTexture(asset.powerplantlv1);
            cc.AudioEngine.playEffect(asset.powerplantlv1, false);
    		console.log("level1");
    	} else if (this.level == 2) {
    		event.getCurrentTarget().sprite.setTexture(asset.powerplantlv2);
            cc.AudioEngine.playEffect(asset.powerplantlv1, false);
    		console.log("level2");
    	} else if (this.level == 3) {
    		event.getCurrentTarget().sprite.setTexture(asset.powerplantlv3);
            cc.AudioEngine.playEffect(asset.powerplantlv1, false);
    		console.log("level3");
    	} else if (this.level > 3) {
    		event.getCurrentTarget().sprite.setTexture(asset.powerplantlv1);
    		console.log("level1");
    		this.level = 1;
    	}
    },

    onTouchBegan: function (touch, event) { 
        /*console.log(touch);
        console.log(event);
        console.log(touch._point.x);
        console.log(touch._point.y);
        console.log("touchDown");
		var touchLoc = touch.getLocation();
		var target = event.getCurrentTarget();
		console.log(touchLoc);
		console.log(target.sprite.getTextureRect());
		console.log(target.sprite);*/
		  // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.   
    	var target = event.getCurrentTarget();  

    	//Get the position of the current point relative to the button
    	var locationInNode = target.convertToNodeSpace(touch.getLocation());    
    	console.log(locationInNode);
    	var s = target.sprite.getTextureRect();
        var rect = cc.rect(-s.width / 2, -s.height / 2, s.width, s.height);
    	console.log(rect);
    	console.log(event.getCurrentTarget());

    	//Check the click area
        if (cc.rectContainsPoint(rect, locationInNode)) {       
            cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
	        target.opacity = 180;
    	    console.log("Yes");
    //	    event.getCurrentTarget().upgrade(event);
    	} else {
    		console.log("Nope");
    	}
    }
});

console.log(PowerPlant);
