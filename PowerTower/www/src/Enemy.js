var Enemy = Unit.extend({
    sprite: null,
    speed: 50,
    ctor: function(health) {
        this._super(health);
        this.sprite = new cc.Sprite(asset.enemy);
        this.addChild(this.sprite, 1);
    },
    beginMoveAlongPathObject: function(object) {
        // Set the enemy position to the origin
        this.x = object.x;
        this.y = object.y;
        
        var actions = [];
        for (var i = 0; i < object.polylinePoints.length - 1; ++i) {
            var startPoint = object.polylinePoints[i];
            startPoint.x = parseInt(startPoint.x);
            startPoint.y = parseInt(startPoint.y);
            console.log(startPoint);
            var endPoint = object.polylinePoints[i + 1];
            endPoint.x = parseInt(endPoint.x);
            endPoint.y = parseInt(endPoint.y);
            console.log(endPoint);
            var lineLength = Math.sqrt((endPoint.x - startPoint.x) * (endPoint.x - startPoint.x) + (endPoint.y - startPoint.y) * (endPoint.y - startPoint.y));
            actions.push(cc.moveTo(lineLength / this.speed, endPoint.x + object.x, flipY(endPoint.y + object.y)));
        }
        var sequence = cc.sequence(actions);
        console.log(sequence);
        this.runAction(sequence);
    }
});