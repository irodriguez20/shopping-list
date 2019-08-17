$(function () {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const $itemName = $('input[name="shopping-list-entry"]').val();
        $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${$itemName}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`);
    });
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('ul').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });
});