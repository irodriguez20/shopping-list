$(function () {
    $('#js-shopping-list-form').submit(event => {
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
    $('.shopping-item-toggle').click(event => {
        event.preventDefault();
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-item-delete').click(event => {
        event.preventDefault();
        $(event.currentTarget).closest('li').remove();
    })
});