export default function outSideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOusideClick)
        })
        element.setAttribute(outside, '')
    }



    function handleOusideClick(event) {
        if (!element.contains(event.target)) {
            
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOusideClick)
            })

            callback();
            element.removeAttribute(outside);
        }
    }
}