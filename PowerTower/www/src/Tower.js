var manaBarWidth = 50;
var manaBarHeight = 12;

var Tower = cc.Layer.extend
({
    sprite: null,
    attackCooldown: 100,
    ac: 0,
    power: 35,
    totalPower: 35,
    range: 150,
    ManaBar: null,
    mana: null,
     on: true,
    energyMax: 500,
    energyUsage: 50,
    energy: 500,
    ctor: function() 
    {
        this._super();

        this.sprite = new cc.Sprite(asset.tower_up);
        this.addChild(this.sprite, 1);

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
	    	displayHealth: function() 
	    	{
        		this.blueBar.scaleX = power / totalPower;
    		},
    	});
		this.mana = new this.ManaBar();
    	//console.log(this.ManaBar);
    	this.addChild(this.mana, 2);

    	var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: this.onTouchBegan
        }); 
        cc.eventManager.addListener(listener, this);
	},
	drain: function(numUnits)
	{
		power -= numUnits;
		this.mana.displayHealth();
	},
    onTouchBegan: function (touch, event) 
    { 
        var target = event.getCurrentTarget();  

        //Get the position of the current point relative to the button
        var locationInNode = target.convertToNodeSpace(touch.getLocation());    
       // console.log(locationInNode);
        var s = target.sprite.getTextureRect();
        var rect = cc.rect(-s.width / 2, -s.height / 2, s.width, s.height);
       // console.log(rect);
       // console.log(event.getCurrentTarget());

        //Check the click area
        if (cc.rectContainsPoint(rect, locationInNode)) {       
        //    cc.log("tower sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
            target.opacity = 180;
      //      console.log("Tower Clicked");
            event.getCurrentTarget().switchState(event);
        } else {
      //      console.log("Tower Not Clicked");
        }
    },

    switchState: function(event) {
        if (this.on == true) {
            event.getCurrentTarget().sprite.setTexture(asset.tower_upoff);
            this.on = false;            
        }
        else {
            event.getCurrentTarget().sprite.setTexture(asset.tower_up);
            this.on = true;
        }
    }
});
