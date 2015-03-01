var Title = cc.Scene.extend({
    music: 0,
    ctor: function() {
        this._super();
        var titleSprite = new cc.Sprite(asset.title);
        titleSprite.x = cc.winSize.width / 2;
        titleSprite.y = cc.winSize.height / 2;
        this.addChild(titleSprite, 1);
        this.music = cc.audioEngine.playMusic(asset.title_loop, true);
        
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: this.onTouchBegan
        }); 
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function(touch, event) {
        cc.audioEngine.stopMusic(this.music);
        cc.director.runScene(new Game());
    }
});