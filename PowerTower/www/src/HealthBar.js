var HealthBar_width = 50;
var HealthBar_height = 12;

var HealthBar = cc.Layer.extend({
    blackBar: null,
    greenBar: null,
    redBar: null,
    ctor: function() {
        this._super();
        blackBar = new cc.LayerColor(cc.color(0, 0, 0, 255), HealthBar_width, HealthBar_height);
        greenBar = new cc.LayerColor(cc.color(0, 200, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        redBar = new cc.LayerColor(cc.color(255, 0, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        
        blackBar.x = -HealthBar_width / 2;
        blackBar.y = -HealthBar_height / 2;
        greenBar.x = -HealthBar_width / 2 + 1;
        greenBar.y = -HealthBar_height / 2 + 1;
        greenBar.anchorX = 0;
        redBar.x = greenBar.x;
        redBar.y = greenBar.y;    
        
        this.addChild(blackBar, 1);
        this.addChild(redBar, 2);
        this.addChild(greenBar, 3);
    },
    displayHealth: function(currentHealth, totalHealth) {
        greenBar.scaleX = currentHealth / totalHealth;
    }
});