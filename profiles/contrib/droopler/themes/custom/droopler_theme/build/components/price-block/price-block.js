!function(e,c){"use strict";c.behaviors.priceComponent={attach:function(c,n){window.setPrice=function(n,i,t,o){e(document).ready((function(){e(".price-block",c).each((function(){var c=e(this),r=new Date(1e3*t),a=i>=0;c.find(".price-block__spinner").remove(),c.find(".price-block__value").html(n),c.find(".price-block__currency").html(o),c.find(".price-block__timestamp").html(r.getHours()+":"+r.getMinutes()+":"+r.getSeconds()),c.find(".price-block__percentage").html(i+"%"),c.find(".price-block__change").removeClass(a?"down":"up").addClass(a?"up":"down")}))}))}}}}(jQuery,Drupal);
//# sourceMappingURL=price-block.js.map