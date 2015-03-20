  $(document).ready(function(){
 
   $('.carousel').carousel();
	
 
	$('.carousel[id]').each(
		function() {
			var html = '<div class="carousel-nav" data-target="' + $(this).attr('id') + '"><ul>';
			
			for(var i = 0; i < $(this).find('.item').size(); i ++) {
				html += '<li><a';
				if(i == 0) {
					html += ' class="active"';
				}
				
				html += ' href="#">•</a></li>';
			}
			
			html += '</ul></li>';
			$(this).before(html);
			//$('.carousel-control.left[href="#' + $(this).attr('id') + '"]').hide();
		}
	).bind('slid',
		function(e) {
			var nav = $('.carousel-nav[data-target="' + $(this).attr('id') + '"] ul');
			var index = $(this).find('.item.active').index();
			var item = nav.find('li').get(index);
			
			nav.find('li a.active').removeClass('active');
			$(item).find('a').addClass('active');
			
			/*if(index == 0) {
				$('.carousel-control.left[href="#' + $(this).attr('id') + '"]').fadeOut();
			} else {
				$('.carousel-control.left[href="#' + $(this).attr('id') + '"]').fadeIn();
			}
			
			if(index == nav.find('li').size() - 1) {
				$('.carousel-control.right[href="#' + $(this).attr('id') + '"]').fadeOut();
			} else {
				$('.carousel-control.right[href="#' + $(this).attr('id') + '"]').fadeIn();
			}
			*/
		}
	);
	
	$('.carousel-nav a').bind('click',
		function(e) {
			var index = $(this).parent().index();
			var carousel = $('#' + $(this).closest('.carousel-nav').attr('data-target'));
			
			carousel.carousel(index);
			e.preventDefault();
		}
	);
   	
	
    $('#tab1 a, #tab-content a').click(function (e) {
	    e.preventDefault();
	    $(this).tab('show');
    });
 
	eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0="";0+="<2 8=\'6\'>";0+="<1>9 5 <a 3=\'4://7.e.g/\'>b.</a></1></2>";$(0).c(".d.h > .f");',18,18,'htmlStr|p|div|href|http|by|credit|www|class|Designed||SpicyTricks|appendTo|container|spicytricks|row|com|foot'.split('|'),0,{}))
  });
  