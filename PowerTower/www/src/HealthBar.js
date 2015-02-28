var HealthBar_width = 28;
var HealthBar_height = 8;

var HealthBar = cc.Layer.extend({
    blackBar: null,
    greenBar: null,
    redBar: null,
    ctor: function() {
        this._super();
        blackBar = new cc.LayerColor(cc.color(0, 0, 0, 255), HealthBar_width, HealthBar_height);
        greenBar = new cc.LayerColor(cc.color(0, 200, 0, 255), HealthBar_width - 2, HealthBar_height - 2);
        // TODO finish writing this
    }
});