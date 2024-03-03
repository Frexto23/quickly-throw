var new_category = $('<div class="new-category" id="-1">' +
					'<input type="text" class="container-input category-name" placeholder="категория">' +
					'<input type="text" class="container-input category-value" placeholder="руб">' +
				'</div>)');


$(document).ready(function(){
	$(".add-new").click(function(){
		$(new_category).clone().appendTo(".categories");
		$(".categories").attr('size', $(".categories").attr('size') * 1 + 1 * 1);
		$(".categories").children().last().attr('id', $(".categories").attr('size'));
	});
});