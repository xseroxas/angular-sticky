describe('Sticky directive tests', function() {
    var $compile,
      $rootScope,
      element;
      
    beforeEach(module('lt.gzeska.directives'));    

    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        element = $compile('<div class="container" style="width: 100px; height: 100px; overflow: auto; background-color: green; position: relative;">\n\
                            <div class="directive" sticky stick-top="0" stick-to=".container" style="height:10px; width:10px;">iyuyu</div>\n\
                            <div style="width: 200px; height: 200px; background-color: yellow; position: relative;">\n\
                            </div></div>')($rootScope);
        $rootScope.$digest();
    }));

it('should find directive element', function() {
    console.log(element);
    console.log(element.find('.container'));
    console.log(element.find('.directive').css('top'));
    console.log('asdas');
    console.log($(element.find('.container')).scroll(0, 100));
    console.log($(element.find('.container')).offset());
    console.log('sasas');
    console.log(element.find('.directive'));
    console.log($(window).find('.directive').css('height'));
  });
  
});