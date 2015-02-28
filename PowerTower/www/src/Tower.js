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
	},
	drain: function(numUnits)
	{
		power -= numUnits;
		this.mana.displayHealth();
	},

});
