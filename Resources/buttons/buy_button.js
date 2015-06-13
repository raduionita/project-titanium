function _buildBuyButton() {
    var button = Ti.UI.createView({
        height : 100,
        width  : 100,
        right  : 0,
        bottom : 0,
        zIndex : 1000,
    });
    
    var image = Ti.UI.createView({
        backgroundImage : 'images/Purple-Shop.png',
        bottom : 10,
        width  : 50,
        height : 50,
        right  : 10,
        animRunning : false,
        pullDown : false,
        name : 'View1',
        bubbleParent : false
    });
    button.add(image);
    
    ///////////////////////////////
    
    var xstart = 0, xstop = 0, ystart = 0, ystop = 0;
 
    var animUp = Ti.UI.createAnimation({
        height : 60,
        width : 60,
        duration : 100
    });
    animUp.addEventListener('start', function(e) {
        e.source.animRunning = true;
    });
    animUp.addEventListener('complete', function(e) {
        e.source.animRunning = false;
        image.height = 60;
        image.width = 60;
    });
    var animDown = Ti.UI.createAnimation({
        height : 50,
        width: 50, 
        duration : 100
    });
    animDown.addEventListener('complete', function(e) {
        e.source.animRunning = false;
        image.height = 50;
        image.width = 50;
    });
    
    ///////////////////////////////
    
    button.addEventListener('touchstart', function(e) {
        if (e.x > xstart && e.x < xstop && e.y > ystart && e.y < ystop) {
            if (image.animRunning == false) {
                if (image.height != 60) {
                    image.animate(animUp);
                }
            }
        } else {
            if (image.height != 50) {
                image.animate(animDown);
            }
        }
    });
    
    button.addEventListener('touchend', function(){
        if(image.height!=50){
            image.animate(animDown);
        }
        
    });
    
    image.addEventListener('click', function(e) {
        alert('buy');
    });
    
    image.addEventListener('touchstart', function(e) {
        if (e.source.animRunning == false)
            e.source.animate(animUp);
    });
    image.addEventListener('touchend', function(e) {
       e.source.animate(animDown);
    });
    
    xstart = image.left;
    xstop  = image.left + image.width;
    ystart = button.height - (image.bottom + image.height);
    ystop  = button.height - image.bottom;
     
    return button;
}

module.exports = _buildBuyButton();
