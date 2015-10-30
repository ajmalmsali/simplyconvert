angular.module('app', ['ionic', 'app.controllers', 'app.routes'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
        admobid = {
            banner: 'ca-app-pub-2290232770086994/4794477762', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-2290232770086994/6271210968'
        };
    }
    // else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
    //     admobid = {
    //         banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
    //         interstitial: 'ca-app-pub-xxx/kkk'
    //     };
    // } else { // for windows phone
    //     admobid = {
    //         banner: 'ca-app-pub-2290232770086994/4794477762', // or DFP format "/6253334/dfp_example_ad"
    //         interstitial: 'ca-app-pub-2290232770086994/6271210968'
    //     };
    // }

    if(window.AdMob) {
        window.AdMob.createBanner( {
            adId: admobid.banner, 
            position: window.AdMob.AD_POSITION.BOTTOM_CENTER, 
            autoShow: true 
        });
    }

  });
})