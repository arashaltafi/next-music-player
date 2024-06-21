import confetti from 'canvas-confetti'

const showConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999,
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        shapes: ["square", "circle", "star"],
        scalar: 1.5,
        drift: 0.5,
        gravity: 1,
        ticks: 100,
    })
}

export {
    showConfetti
}