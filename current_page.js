
/*=============================================
=            Midas Touch                      =
=============================================*/
/*
 * Everything the cursor touches gets deleted
 *
 * Sorry this function is a bit cramped - I wanted to handle some edge cases 
 * so this wouldn't delete too much or too little
 */
function midas_touch() {
    document.addEventListener('mousemove', delete_target);

    function delete_target(e) {
        // whether target will be deleted
        let no_delete = false;

        // don't delete whole page
        const forbidden_elements = [document.body, document.documentElement];
        if (forbidden_elements.includes(e.target))
            return;

        // if the target has significant children, don't delete it
        if (e.target.children.length) {
            [...e.target.children].forEach(child => {
                const rect = child.getBoundingClientRect();
                // delete insignificant children
                if (!rect.width || !rect.height) {
                    child.remove();
                } else {
                    // significant child exists - don't delete parent
                    no_delete = true;
                    
                    // delete child element if cursor is over it
                    if (e.pageX > rect.left && e.pageX < rect.right && e.pageY > rect.top && e.pageY < rect.bottom) {
                        child.remove();
                    }
                }
                
            })
        } 

        // override no_delete for certain types of element
        const delete_tagnames = ['a', 'button', 'input', 'img']
        if (delete_tagnames.includes(e.target.tagName.toLowerCase()))
            no_delete = false;

        // delete element if applicable
        if (!no_delete)
            e.target.remove();
    }
}