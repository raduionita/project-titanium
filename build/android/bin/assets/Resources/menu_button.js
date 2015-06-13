function menu_button() {
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
	    view1.height = 60;
	    view1.width = 60;
	});
	var animDown = Ti.UI.createAnimation({
	    height : 50,
	    width: 50, 
	    duration : 100
	});
	animDown.addEventListener('complete', function(e) {
	    e.source.animRunning = false;
	    view1.height = 50;
	    view1.width = 50;
	});
	 
	var startAnimation = function(e) {
	    if (e.source.animRunning == false)
	        e.source.animate(animUp);
	};
	var stopAnimation = function(e) {
	   e.source.animate(animDown);
	};
		 
	var viewContainer = Ti.UI.createView({
	    height : 110,
	    width : 110,
	    left : 0,
	    top : 0
	});
	 
	viewContainer.addEventListener('touchstart', function(e) {
	    if (e.x > xstart && e.x < xstop && e.y > ystart && e.y < ystop) {
	        if (view1.animRunning == false) {
	            if (view1.height != 60) {
	                view1.animate(animUp);
	            }
	        }
	    } else {
	        if (view1.height != 50) {
	            view1.animate(animDown);
	        }
	    }
	});
	viewContainer.addEventListener('touchend', function(){
	    if(view1.height!=50){
	        view1.animate(animDown);
	    }
	});
	 
	var view1 = Ti.UI.createView({
	    backgroundImage : 'images/Purple-Menu.png',
	    top : 10,
	    width : 50,
	    height : 50,
	    left : 10,
	    animRunning : false,
	    pullDown : false,
	    name : 'View1',
	    bubbleParent : false
	});
	
	//view1.add(shoppin_cart);
	 
	view1.addEventListener('touchstart', startAnimation);
	view1.addEventListener('touchend', stopAnimation);
	xstart = view1.left;
	xstop = view1.left + view1.width;
	ystart = viewContainer.height - (view1.bottom + view1.height);
	ystop = viewContainer.height - view1.bottom;
	 
	viewContainer.add(view1);
	
	return viewContainer;
}

module.exports = menu_button; 
