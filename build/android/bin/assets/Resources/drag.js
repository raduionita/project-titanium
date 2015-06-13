function drag(dragWindow) {
// MODEL
var lastTouchPosition;
 
// VIEWS
var revolver = Titanium.UI.createView({
    backgroundImage: "images/flower.jpg",
    top: 190,
    left: 110,
    width: 100,
    height: 100
});
 
var rotationTransform = Titanium.UI.create2DMatrix();
 
// CONTROLLERS
revolver.addEventListener('touchstart', function(e){
    var touchPos = {x: e.x, y: e.y};
    lastTouchPosition = revolver.convertPointToView(touchPos, dragWindow);
});
 
revolver.addEventListener('touchmove', function(e){
    var touchPos = {x: e.x, y: e.y};
    var newTouchPosition = revolver.convertPointToView(touchPos, dragWindow);
 
    // Move revolver by difference between two touch positions
    revolver.top += newTouchPosition.y - lastTouchPosition.y;
    revolver.left += newTouchPosition.x - lastTouchPosition.x;
 
    lastTouchPosition = newTouchPosition;
});
return revolver;
}
require.exports = drag;