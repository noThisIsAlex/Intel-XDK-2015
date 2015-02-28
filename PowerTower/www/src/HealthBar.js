var HealthBar_width = 50;
var HealthBar_height = 12;

var HealthBar = cc.Layer.extend({
    blackBar: null,
    greenBar: null,
    redBar: null,
    ctor: function() {
        this._super();
        this.blackBar = new cc.LayerColor(cc.color(0, 0, 0, 255), HealthBar_width, HealthBar_height);
        this.greenBar = new cc.LayerColor(cc.color(0, 200, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        this.redBar = new cc.LayerColor(cc.color(255, 0, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        
        this.blackBar.x = -HealthBar_width / 2;
        this.blackBar.y = -HealthBar_height / 2;
        this.greenBar.x = -HealthBar_width / 2 + 1;
        this.greenBar.y = -HealthBar_height / 2 + 1;
        this.greenBar.anchorX = 0;
        this.redBar.x = this.greenBar.x;
        this.redBar.y = this.greenBar.y;    
        
        this.addChild(this.blackBar, 1);
        this.addChild(this.redBar, 2);
        this.addChild(this.greenBar, 3);
    },
    displayHealth: function(currentHealth, totalHealth) {
        this.greenBar.scaleX = currentHealth / totalHealth;
    }
});