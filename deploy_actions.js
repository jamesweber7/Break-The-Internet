
/*=============================================
=            Deploy Actions                   =
=============================================*/
/*
 * Functionality for deploying actions from the pop-up
 */

/*----------  Add Actions  ----------*/
addAction('freeze', freeze);
addAction('alert', alerts);
addAction('block-cursor', block_cursor);
addAction('midas-touch', midas_touch);
addAction('delete-cursor', delete_cursor);
addAction('delete-everything', delete_everything);
// Add More:
// addAction(button_id, action_function)



/*----------  Helper Functions  ----------*/

// deploy action on active tab
function deployAction(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: action
    });
  });
}

// action deploys on button press
function addAction(button_id, action_function) {
  document.getElementById(button_id).addEventListener('click', () => {
    deployAction(action_function);
  });
}
