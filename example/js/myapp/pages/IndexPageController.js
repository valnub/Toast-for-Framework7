/*jslint browser: true*/
/*global console*/

var myapp = myapp || {};
myapp.pages = myapp.pages || {};

myapp.pages.IndexPageController = function (myapp, $$) {
  'use strict';
  
  // Init method
  (function () {

    // Use toast plugin
    var options = {},
      toast = myapp.toast('Marked star', '<div>☆</div>', options);

    $$('#btnshow').click(function () {
      toast.show(true);
    });
    
    $$('#btnhide').click(function () {
      toast.show(false);
    });

  }());

};