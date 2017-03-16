/**
 * Created by wjaron on 15.03.17.
 */

var evaluated = 0;

$('.number').on('click', function() {
    // get current value
    if (evaluated === 1) {
        $('#display').val('');
    }
    var current = $('#display').val();
    evaluated = 0;
    if (display.length === 0) {
        current = String($(this).val());
    } else {
        current += String($(this).val());
    }
        $('#display').val(current);

});
$('.action').on('click', function() {
    if (evaluated === 1) {
        $('#display').val('');
    }
    var current = $('#display').val();
    evaluated = 0;
    if ($(this).val() === 'clear') {
        $('#display').val('');
        return;
    }
    if ($(this).val() === '=') {
        current = current.replace(/X/g, '*');
        current = eval(current);
        $('#display').val(current);
        evaluated = 1;
        return;
    }
    if (display.length === 0) {
        current = String($(this).val());
    } else {
        current += String($(this).val());
    }
    $('#display').val(current);
});