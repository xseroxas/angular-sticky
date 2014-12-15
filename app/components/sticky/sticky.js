angular.module('lt.gzeska.directives', [])
.directive('sticky', ['$document', function($document) {
  return {
    restrict: 'A',
    link: function(scope, $element, attrs) {
      var $container = $document.find(attrs.stickTo);
      var offsetTop = void 0;
      var offsetLeft = void 0;
      if (!angular.isUndefined(attrs.stickTop)) {
         offsetTop = parseInt(attrs.stickTop);
      }
      if (!angular.isUndefined(attrs.stickLeft)) {
         offsetLeft = parseInt(attrs.stickLeft);
      }
      $container.on("scroll", function (event) {
          console.log('scroll event');
          if (offsetTop) {
            $element.css('top', $container.scrollTop() + offsetTop);    
          }
          if (offsetLeft) {  
            $element.css('left', $container.scrollLeft() + offsetLeft);
          }
      });      
    }
  }; 
}]);


