(function($) {
	
    var self = $.nCage = new function(){};
	
    $.extend(self, {
        nCageImgs : [
           'https://yt3.ggpht.com/-Z41LgJ__J-k/AAAAAAAAAAI/AAAAAAAAAAA/Ym0GFh7SQVo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        ],
        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
			
            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nCageImgs, 3000);
    });
})(jQuery);