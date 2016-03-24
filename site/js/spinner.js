// Custom Script
(function($) {
    $.fn.spinner = function() {
        this.each(function() {
            var el = $(this);
            var isDisabled = el.prop('disabled');

            // add elements
            el.wrap('<div class="spinner"></div>');
            el.before('<span class="sub">-</span>');
            el.after('<span class="add">+</span>');
            
            if(isDisabled) {
                el.parent().addClass('disabled');
            } else {
                // substract
                el.parent().on('click', '.sub', function() {
                    if (el.val() > parseInt(el.attr('min')))
                        el.val(function(i, oldval) { return --oldval; });
                });

                // increment
                el.parent().on('click', '.add', function() {
                    if (el.val() < parseInt(el.attr('max')))
                        el.val(function(i, oldval) { return ++oldval; });
                });
            }
        });
    };
})(jQuery);

$("input[type='number']").spinner();