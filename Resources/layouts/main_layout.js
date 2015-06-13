function _buildMainLayout() {
    var layout = Ti.UI.createView({ 
        top   : 0,
        left  : 0,
        width : Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor:'white',
        backgroundImage: 'images/model.png'
    });
    
    var buy_button = require('buttons/buy_button'); 
    layout.add(buy_button);
    
    var share_button = require('buttons/share_button'); 
    layout.add(share_button);
    
    var menu_button = require('buttons/menu_button'); 
    layout.add(menu_button);
    
    var camera_button = require('buttons/camera_button'); 
    layout.add(camera_button);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function swipe(e) {
        if(e.direction == 'left') {
            alert('head.left');
        } else if(e.direction == 'right') {
            alert('head.right');
        }
    }
    
    var head = Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: '28%',
        backgroundColor: 'transparent'
    });
    head.addEventListener('swipe', swipe);
    
    var onece = false;
    var face = Ti.UI.createImageView({
        //defaultImage: 'images/italy.png',
        //backgroundColor : '#AAAAAAAA',
        width  : 38,
        height : 48,
        top    : 111,
        left   : 155,
        name : 'face'
    });
    head.add(face);
    Ti.App.addEventListener('open.camera', function(e) {
        if(onece) {
            onece = false;
            return;
        }
         
        Titanium.Media.showCamera({ 
            success: function(e) {
                Ti.API.info("open.camera::success");
                if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    face.image = e.media;
                    face.backgroundColor = '#AAAAAAAA';
                    onece = true;
                }
            }, 
            cancel: function(e) {
                
            },
            error: function(e) {
                Ti.APP.info("open.camera::error");
                if (e.code == Titanium.Media.NO_CAMERA) {
                    alert("Use on a device with a front camera!");
                } else {
                    alert('Error: '+ e.code);
                }
            }
        });
    });
    
    layout.add(head);
    
    var body = Ti.UI.createView({
        left  : 0,
        top   : '20%',
        width : Ti.UI.FILL,
        height: '40%',
        backgroundColor: 'transparent'
    });
    body.addEventListener('swipe', swipe);
    layout.add(body);
    
    var feet = Ti.UI.createView({
        left  : 0,
        top   : '60%',
        width : Ti.UI.FILL,
        height: '40%',
        backgroundColor: 'transparent'
    });
    feet.addEventListener('swipe', swipe);
    layout.add(feet);
    
    return layout;
}

module.exports = _buildMainLayout();
