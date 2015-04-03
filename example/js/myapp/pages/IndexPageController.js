/*jslint browser: true*/
/*global console*/

var myapp = myapp || {};
myapp.pages = myapp.pages || {};

myapp.pages.IndexPageController = function (myapp, $$) {
  'use strict';
  
  // Init method
  (function () {

    // Use Confirmbox plugin
    var options = {},
      confirmbox = myapp.confirmbox('Marked star', '<div>☆</div>', options);

    $$('#btnshow').click(function () {
      confirmbox.showBox(true);
    });
    
    $$('#btnhide').click(function () {
      confirmbox.showBox(false);
    });

  }());

};