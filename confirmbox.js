/*jslint browser: true*/
/*global console, Framework7, alert, Dom7*/

/**
 * A plugin for Framework7 to show black little confirmation boxes
 *
 * @author www.timo-ernst.net
 * @license MIT
 */
Framework7.prototype.plugins.confirmbox = function (app, globalPluginParams) {
  'use strict';
  
  var ConfirmBox = function (text, iconhtml, options) {
    var self = this,
      $$ = Dom7;

    function hideBox($box) {
      if ($box) {
        $box.css({
          'opacity': '0'
        });
        setTimeout(function () {
          $box.remove();
        }, 400);
      }
    }
    
    this.showBox = function (show) {
      if (show) {
        
        // Create box
        var $box = $$('<div class="cb-confirmbox">').html('<div style="font-size:85px;text-align:center" class="cb-icon">' + iconhtml + '</div><div style="text-align:center;font-weight:normal" class="cb-msg">' + text + '</div>').css({
          'position': 'fixed',
          'width': '150px',
          'height': '150px',
          'left': '50%',
          'top': '50%',
          'margin-top': '-75px',
          'margin-left': '-75px',
          'background-color': 'rgba(0, 0, 0, 0.7)',
          'border-radius': '15px',
          'z-index': '9999',
          'color': '#fff',
          'font-size': '20px',
          'font-weight': 'normal',
          'font-family': 'Helvetica-Neue, HelveticaNeue, arial, sans-serif',
          'display': 'none',
          'opacity': '0',
          'transition': 'opacity 0.4s'
        });
        
        $$('body').append($box);
        
        // Hide box on click
        $box.click(function () {
          hideBox($box);
        });
        
        // Show box
        setTimeout(function () {
          $box.css('display', 'block');
          
          // Fade in box
          setTimeout(function () {
            $box.css({
              'opacity': '1'
            });
            
            // Automatically hide box after few seconds
            setTimeout(function () {
              hideBox($box);
            }, 1500);
            
          }, 100);
        }, 100);
        
      } else {
        hideBox($$('.cb-confirmbox'));
      }
    };
    
    return this;
  };
  
  app.confirmbox = function (text, iconhtml, options) {
    return new ConfirmBox(text, iconhtml, options);
  };
  
};