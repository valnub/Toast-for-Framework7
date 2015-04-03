/*jslint browser: true*/
/*global console, Framework7, alert, Dom7*/

/**
 * A plugin for Framework7 to show black little toasts
 *
 * @author www.timo-ernst.net
 * @license MIT
 */
Framework7.prototype.plugins.toast = function (app, globalPluginParams) {
  'use strict';
  
  var Toast = function (text, iconhtml, options) {
    var self = this,
      $$ = Dom7;

    function hideBox($box) {
      if ($box) {
        $box.removeClass('fadein').transitionEnd(function () {
          $box.remove();
        });
      }
    }
    
    this.show = function (show) {
      if (show) {
        
        // Create box
        var $box = $$('<div class="toast-container show">'),
          clientLeft;
        
        // Add content
        $box.html('<div class="toast-icon">' + iconhtml + '</div><div class="toast-msg">' + text + '</div>');
        
        // Add to DOM
        $$('body').append($box);
        
        // Hide box on click
        $box.click(function () {
          hideBox($box);
        });

        // Fade in toast
        $box.addClass('fadein');
        
        // Dirty hack to cause relayout xD
        clientLeft = $box[0].clientLeft;

        // Automatically hide box after few seconds
        setTimeout(function () {
          hideBox($box);
        }, 1500);
        
      } else {
        hideBox($$('.toast-container'));
      }
    };
    
    return this;
  };
  
  app.toast = function (text, iconhtml, options) {
    return new Toast(text, iconhtml, options);
  };
  
};