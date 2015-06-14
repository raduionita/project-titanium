var main = require('windows/main_window');
main.addEventListener('open', function() {
    main.activity.actionBar.hide();
});

if (Ti.Platform.osname == 'android'){
    Ti.Gesture.addEventListener('orientationchange', function(e) {  
        Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);
    });
}

main.open();

//Ti.App.fireEvent('set.category', { category: 'dress', slot: 0 }); // defaults