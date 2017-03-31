/*jslint browser: true*/
/*global console*/

var myapp = myapp || {};
myapp.pages = myapp.pages || {};

myapp.pages.IndexPageController = function (myapp, $$) {
  'use strict';
  
  // Init method
  (function () {

    // Use toast plugin
    var options = {
            // Callback gets called when toast is hidden
            onHide: function () {
                console.log('hidden');
            },
            duration: 2000 // Hide toast after 2 seconds
        },
        toast = myapp.toast('Marked star', '<div>☆</div>', options),
        toastWithOutIcon = myapp.toast('', '', options);

    $$('#btnshow').click(function () {
      toast.show();
    });
    
    $$('#btnhide').click(function () {
      toast.hide();
    });

    $$('#btnShowNoIcon').click(function() {
      toastWithOutIcon.show("A long long message");
    });

    $$('#btnHideNoIcon').click(function() {
      toastWithOutIcon.hide();
    });
  }());
};