
export default function initToolTip() {
    
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })
    
    function onMouseOver() {
        const tooltipBox = createToolTipBox()
      
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave)

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove)
    }

    const onMouseLeave = {
        handleEvent() {
           this.tooltipBox.remove();
           this.element.removeEventListener('mouseleave', onMouseLeave)
           this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    const onMouseMove = {
        handleEvent(e) {
            this.tooltipBox.style.top = e.pageY + 20 + 'px';
            this.tooltipBox.style.left = e.pageX + 20 + 'px';
        }
    }

    function createToolTipBox() {
        const toolTipBox = document.createElement('div');
        const text = tooltips[0].getAttribute('aria-label');
        toolTipBox.classList.add('tooltip');
        toolTipBox.innerText = text;
       
        document.body.appendChild(toolTipBox);
        return toolTipBox;
    }
}   