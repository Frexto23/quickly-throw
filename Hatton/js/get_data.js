function add_new_category() {

	var new_category = $('<div class="new-category" id="-1">' +
						'<input type="text" class="container-input category-name" placeholder="категория">' +
						'<input type="text" class="container-input category-value" placeholder="руб">' +
						'<button class="closer">' + 'x' + '</button>' +
					'</div>)');

	$(new_category).clone().appendTo(".categories");
	$(".categories").attr('size', $(".categories").attr('size') * 1 + 1 * 1);
	$(".categories").children().last().attr('id', $(".categories").attr('size'));
	$(".categories").children().last().attr('spend_id', addSpending());
}

$(document).ready(function(){

	add_new_category();

	$(".add-new").click(function(){
		add_new_category();
	});

	$('.container-input').on('input', function() {
    	var updated = $(this).parent();
    	updSpengind(updated.attr('spend_id'), updated.find(".category-name").val(), updated.find(".category-value"));
	});

});