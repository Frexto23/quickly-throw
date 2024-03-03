var new_category = $('<div class="new-category">' +
					'<input type="text" class="container-input category-name" placeholder="категория">' +
					'<input type="text" class="container-input category-value" placeholder="руб">' +
				'</div>)');


$(document).ready(function(){
	$(".add-new").click(function(){
		$(new_category).clone().appendTo(".categories");
	});
});