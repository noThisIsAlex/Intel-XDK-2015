var Tower = cc.Layer.extend({
    sprite: null,
    attackCooldown: 100,
    ac: 0,
    power: 35,
    range: 100,
    ctor: function() {
        this._super();
        
        this.sprite = new cc.Sprite(asset.tower_up);
        this.addChild(this.sprite, 1);
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: this.onTouchBegan
        }); 
        cc.eventManager.addListener(listener, this);
    },
    on: true,
    energyMax: 500,
    energyUsage: 50,
    energy: 500,

    onTouchBegan: function (touch, event) { 
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