function _buildMainLayout() {
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var layout = Ti.UI.createView({ 
        top   : 0,
        left  : 0,
        width : Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor:'white',
        backgroundImage: 'images/model.png'
    });
    layout.addEventListener('swipe', function (e) {
        
        //var category = Ti.App.Properties.getString("CATEGORY");
        //var slot     = Ti.App.Properties.getString("SLOT");
        
       var delta = 180;
        if(e.direction == 'left') {
           if(p3.left > -100) {
               p1.animate({left: p1.left - delta });
               p2.animate({left: p2.left - delta });
               p3.animate({left: p3.left - delta });
           }
        } else if(e.direction == 'right') {
           if(p1.left < 150) {
               p1.animate({left: p1.left + delta });
               p2.animate({left: p2.left + delta });
               p3.animate({left: p3.left + delta });
           } 
        }
    });
    
    //var products = require('database/products')['dress'];
    
    var p1 = Ti.UI.createImageView({
        image: 'images/dress/dress1.png',
        left: -125,
        top: 0,
        width: 250
    });
    
    var p2 = Ti.UI.createImageView({
        image: 'images/dress/dress2.png',
        left: 45,
        top: 0,
        width: 250
    });
    
    var p3 = Ti.UI.createImageView({
        image: 'images/dress/dress3.png',
        left: 240,
        top: 0,
        width: 250
    });
    
    var containerP= Ti.UI.createView(
        {
            width: 'auto',
            top: 155,
            left: 0,
            height: 270
        }
    );
    containerP.add(p1);
    containerP.add(p2);
    containerP.add(p3);
    layout.add(containerP);
    //Ti.API.info("memory " + Ti.Platform.availableMemory);
//    Ti.App.addEventListener('set.category', function(e) {
//        var category = e.category;
//        var slot     = e.slot;
        
//        Ti.App.Properties.setString("CATEGORY", category);
//        Ti.App.Properties.setString("SLOT",     slot);
        
//        var products = require('database/products')[category];
//        var conflicts = require('database/conflicts')[category];
        
//        for(var i = 0, l = products.length; i < l; i++) { // ..3
//            var product = products[i];
//            slots[slot][i].opacity = 1.0;
//        }
//    }); 
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var buy_button = require('buttons/buy_button'); 
    layout.add(buy_button);
    
    var share_button = require('buttons/share_button'); 
    layout.add(share_button);
    
    var menu_button = require('buttons/menu_button'); 
    layout.add(menu_button);
    
    var camera_button = require('buttons/camera_button'); 
    layout.add(camera_button);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var head = Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: '27%',
        //backgroundColor: '#AAAA8888'
    });
    
    var onece = false;
    var face = Ti.UI.createImageView({
        //defaultImage: 'images/italy.png',
        width  : 38,
        height : 48,
        bottom : '0.7%',
        left   : 155,
        name : 'face',
        //backgroundColor : '#AAAAAAAA',
    });
    head.add(face);
    Ti.App.addEventListener('open.camera', function(e) {
        if(onece) {
            onece = false;
            return; 
        }
         
        Ti.Media.showCamera({
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
        Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);
    });
    layout.add(head);
    
    var body = Ti.UI.createView({
        left  : 0,
        top   : '27%',
        width : Ti.UI.FILL,
        height: '47%',
        //backgroundColor: '#AAAAAAAA'
    });
    layout.add(body);
    
    var feet = Ti.UI.createView({
        left  : 0,
        top   : '74%',
        width : Ti.UI.FILL,
        height: '26%',
        //backgroundColor: '#AA8888AA'
    });
    layout.add(feet);
    
    var overlay = Ti.UI.createView({
        backgroundImage: 'images/overlay.png',
        //backgroundColor: '#AAAAAFFAA',
        //width  : '100%',
        height : Ti.UI.FILL,
        top    : 0,
        left   : 0,
        zIndex : 100
    });
    layout.add(overlay);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return layout;
}

module.exports = _buildMainLayout();
