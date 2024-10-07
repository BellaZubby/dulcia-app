export const slideInFromLeft = (delay:number) => {
    return {
        hidden:{x: -100, opacity:0},
        visible: {
            x:0,
            opacity: 1,
            transition: {
                delay:delay,
                duration: 0.7,
            },
        },
    };
}

export const slideInFromRight = (delay:number) => {
    return {
        hidden: {x: 100, opacity: 0},
        visible: {
            x:0,
            opacity: 1,
            transition: {
                delay:delay,
                duration: 0.5,
            },
        },
    }
}

export const slideInFromTop = (delay:number) => {
    return {
        hidden: {y: -100, opacity: 0},
        visible: {
            y:0,
            opacity: 1,
            transition: {
                delay:delay,
                duration: 0.6,
            },
        },
    }
}

export const slideInFromBottom = (delay:number) => {
    return {
        hidden: {y: 100, opacity: 0},
        visible: {
            y:0,
            opacity: 1,
            transition: {
                delay:delay,
                duration: 0.5,
            },
        },
    }
}

export const menuSlide = {

    initial: {x: "calc(100% + 100px)"},

    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},

    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}

}



export const slide = {

    initial: {x: 80},

    enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),

    exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})

}



export const scale = {

    open: {scale: 1, transition: {duration: 0.3}},

    closed: {scale: 0, transition: {duration: 0.4}}

}
   