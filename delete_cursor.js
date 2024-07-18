
/*=============================================
=            Delete Cursor                    =
=============================================*/
/*
 * deletes the cursor and prevents mouse interaction with the page
 */
function delete_cursor() {
    const style = document.createElement('style');
    style.innerHTML = `* {
        cursor: none !important;
    }`
    document.head.append(style);

    // remove mouse events by putting div over whole page
    const block = document.createElement('div');
    block.style.position = 'fixed';
    block.style.width = '100vw';
    block.style.height = '100vh';
    block.style.left = 0;
    block.style.top = 0;
    block.style.padding = 0;
    block.style.margin = 0;
    block.style.border = 'none';
    block.style.borderRadius = 0;
    block.style.zIndex = 2**32-1;
    block.style.opacity = 0;
    document.body.append(block);
}