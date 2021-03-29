const updateProperties = (elem, state) => {
    elem.style.setProperty('--x', `${state.x}px`)
    elem.style.setProperty('--y', `${state.y}px`)
    elem.style.setProperty('--width', `${state.width}px`)
    elem.style.setProperty('--height', `${state.height}px`)
    elem.style.setProperty('--stroke', `${state.stroke}px`)
    elem.style.setProperty('--radius', state.radius)
    elem.style.setProperty('--scale', state.scale)
    elem.style.setProperty('--opacity', state.opacity)
    elem.style.setProperty('--fill', state.fill)
    elem.style.setProperty('--stroke-color', state.strokeColor)
}
  
document.querySelectorAll('.cursor').forEach(cursor => {
    let elemHoverTopbarToggle;
    let elemHoverCarousel;
    let elemHoverTextLink;
  
    const createState = e => {
        const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: 40,
            height: 40,
            scale: '1',
            stroke: 1,
            radius: '50%',
            opacity: '1',
            fill: `rgba(242, 204, 143, 0)`,
            strokeColor: `rgba(242, 204, 143, 1)`,
        }
    
        const computedState = {}
    
        if (elemHoverTopbarToggle != null) {
            const { top, left, width, height } = elemHoverTopbarToggle.getBoundingClientRect()
            const radius = window.getComputedStyle(elemHoverTopbarToggle).borderTopLeftRadius

            computedState.x = left + width / 2
            computedState.y = top + height / 2
            computedState.width = width
            computedState.height = height
            computedState.radius = radius
            computedState.opacity = `0.8`
            computedState.fill = `rgba(242, 204, 143, 1)`
        }

        if (elemHoverCarousel != null) {
            const { top, left, width, height } = elemHoverCarousel.getBoundingClientRect()
            const radius = window.getComputedStyle(elemHoverCarousel).borderTopLeftRadius

            computedState.x = left + width / 2
            computedState.y = top + height / 2
            computedState.width = width
            computedState.height = height
            computedState.stroke = 1;
            computedState.radius = radius
            computedState.opacity = `0.8`
            // computedState.strokeColor = `rgb(244, 226, 133)`
        }

        if (elemHoverTextLink != null) {
            // const { top, left, width, height } = elemHoverTextLink.getBoundingClientRect()

            computedState.stroke = 1;
            computedState.opacity = `0.6`
            computedState.fill = `rgba(242, 204, 143, 1)`
            // computedState.strokeColor = `rgb(244, 226, 133)`
        }
  
        return {
            ...defaultState,
            ...computedState
        }
    }
  
    document.addEventListener('mousemove', e => {
        const state = createState(e)
        updateProperties(cursor, state)
    })
  
    document.querySelectorAll('.cursor__hover-1').forEach(elem => {
        elem.addEventListener('mouseenter', () => (elemHoverTopbarToggle = elem))
        elem.addEventListener('mouseleave', () => (elemHoverTopbarToggle = undefined))
    })

    document.querySelectorAll('.cursor__hover-2').forEach(elem => {
        elem.addEventListener('mouseenter', () => (elemHoverCarousel = elem))
        elem.addEventListener('mouseleave', () => (elemHoverCarousel = undefined))
    })

    document.querySelectorAll('.cursor__hover-text').forEach(elem => {
        elem.addEventListener('mouseenter', () => (elemHoverTextLink = elem))
        elem.addEventListener('mouseleave', () => (elemHoverTextLink = undefined))
    })
})
