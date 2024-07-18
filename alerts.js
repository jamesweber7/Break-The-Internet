
/*=============================================
=            Alerts                           =
=============================================*/
/*
 * Creates an infinite wall of alerts/prompts, preventing the user 
 * from interacting with other elements of the page
 */
function alerts() {
    // first list ordered alerts, then randomly cycle through unordered alerts 

    // prompt these alerts in order first
    const ordered_alerts = [
        "Continue?",
        "Are you sure?",
        "Are you really sure?",
        "Are you really really sure?",
    ]
    // infinitely choose random alert from unordered alerts
    const unordered_alerts = [
        "Continue?",
        "Are you sure?",
        "Certainly?",
        "We require confirmation",
        "Keep going?",
        "Surely you're getting closer to the end",
        "Getting closer",
        "Just a few more prompts",
        "Almost there",
    ]
    
    // list ordered alerts in order
    ordered_alerts.forEach(msg => {
        confirm(msg);
    })
    // then randomly prompt unordered alerts
    while (true)
        confirm(getRandomElement(unordered_alerts));

    // returns random element of array
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
}