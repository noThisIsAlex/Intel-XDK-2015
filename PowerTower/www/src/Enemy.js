var Enemy = Unit.extend({
    sprite: null,
    speed: 50,
    attacking: false,
    power: 10, // attack damage per hit
    attackCooldown: 100,
    ac: 0,
    ctor: function(health) {
        this._super(health, health);
        this.sprite = new cc.Sprite(asset.enemy);
        this.addChild(this.sprite, 1);
        this.healthBar.y = 34;
    },
    beginMovingAlongPathObject: function(object) {
        // Set the enemy position to the origin
        this.x = object.x;
        this.y = object.y;
        
        var actions = [];
        for (var i = 0; i < object.polylinePoints.length - 1; ++i) {
            var startPoint = object.polylinePoints[i];
            startPoint.x = parseInt(startPoint.x);
            startPoint.y = parseInt(startPoint.y);
            var endPoint = object.polylinePoints[i + 1];
            endPoint.x = parseInt(endPoint.x);
            endPoint.y = parseInt(endPoint.y);
            var lineLength = Math.sqrt((endPoint.x - startPoint.x) * (endPoint.x - startPoint.x) + (endPoint.y - startPoint.y) * (endPoint.y - startPoint.y));
            actions.push(cc.moveBy(lineLength / this.speed, endPoint.x - startPoint.x, -(endPoint.y - startPoint.y)));
        }
        var sequence = cc.sequence(actions);
        this.runAction(sequence);
    },
    update: function() {
        //this.health--;
        //this.healthBar.displayHealth(this.health, this.totalHealth);
    }
});