/*=============================================
=            Block Cursor                     =
=============================================*/
/*
 * Puts a blocking element between the cursor and the rest of the page
 */
function block_cursor() {
    // make block
    const block = document.createElement('img');
    // block has stop sign image
    block.src = chrome.runtime.getURL('assets/nope.svg');
    // block styling
    block.style.position = 'fixed';
    block.style.zIndex = 2**32-1;
    block.setAttribute('width', '128px');
    block.style.left = '100vw';
    block.style.top = '0';
    // add block to page
    document.body.append(block);

    // move block on mouse events
    document.addEventListener('mousemove', updateBlockPosition);
    document.addEventListener('drag', updateBlockPosition);
    document.addEventListener('click', updateBlockPosition);

    function updateBlockPosition(e) {
        // stop other the event from performing other actions
        e.preventDefault();
        // move the block to the mouse position
        block.style.left = e.clientX - block.width/2 + 'px';
        block.style.top = e.clientY - block.height/2 + 'px';
    }
}
