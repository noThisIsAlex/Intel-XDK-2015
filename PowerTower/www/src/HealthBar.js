var HealthBar_width = 28;
var HealthBar_height = 8;

var HealthBar = cc.Layer.extend({
    blackBar: null,
    greenBar: null,
    redBar: null,
    ctor: function(currentHealth, totalHealth) {
        this._super();
        blackBar = new cc.LayerColor(cc.color(0, 0, 0, 255), HealthBar_width, HealthBar_height);
        greenBar = new cc.LayerColor(cc.color(0, 200, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        redBar = new cc.LayerColor(cc.color(255, 0, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        
        greenBar.x = 1;
        greenBar.y = 1;
        redBar.x = 1;
        redBar.y = 1;
        
        this.addChild(blackBar, 1);
        this.addChild(redBar, 2);
        this.addChild(greenBar, 3);
    }
});