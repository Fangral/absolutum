$(function(){

		$('.tabs li').click(function(e){
			e.preventDefault();
			var get_id = this.id;
			var get_current = $('.cont .' + get_id);
			$(".tabs li").removeClass('current');
			$(this).parent( 'li' ).addClass('current');

			$('.bm').not(get_current).hide(300);
			get_current.show(300);
		});

		$('#showall').click(function() {
			$('.bm').show(300);
		});

});