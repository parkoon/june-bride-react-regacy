import { useEffect, useRef } from 'react'

function randomGenerator(start: number, end: number, isInt?: boolean) {
    let num = start + (end - start) * Math.random()
    num = isInt ? Math.floor(num) : num
    return num
}

class Particle {
    initialX: number

    initialY: number

    currentX: number

    currentY: number

    rotateAngle: number

    width: number

    incrementer: number

    random: number

    constructor(
        initialX: number,
        initialY: number,
        rotateAngle: number,
        width: number
    ) {
        this.initialX = initialX
        this.currentX = initialX
        this.initialY = initialY
        this.currentY = initialY
        this.rotateAngle = rotateAngle
        this.width = width
        this.incrementer = randomGenerator(1, 2)
        this.random = randomGenerator(0, 1)
    }

    update(ctx: CanvasRenderingContext2D) {
        ctx.save()
        this.currentY += this.incrementer
        this.rotateAngle += this.incrementer / 500
        const rotateAngle = Math.sin(this.rotateAngle)
        if (this.random < 0.2) {
            this.currentX -= this.incrementer / 3
        } else if (this.random > 0.8) {
            this.currentX += this.incrementer / 3
        } else {
            this.currentX = this.initialX + 30 * Math.sin(this.currentY / 100)
        }
        const { width } = this
        if (this.currentY > window.innerHeight) {
            this.currentY = this.initialY
        }
        ctx.translate(this.currentX, this.currentY)
        ctx.rotate(rotateAngle)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(width / 2, width / 2, width, 0)
        ctx.quadraticCurveTo(width / 2, -1 * (width / 2), 0, 0)
        ctx.closePath()
        const gradient = ctx.createLinearGradient(0, 0, 170, 0)
        gradient.addColorStop(0, 'rgba(255, 183, 197, .8)')
        gradient.addColorStop(1, 'rgba(255, 183, 197, .8)')
        ctx.lineJoin = 'round'
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
    }
}

function Petal() {
    const canvas = useRef<HTMLCanvasElement>(null)

    const particles = useRef<Particle[]>([])

    const animate = () => {
        if (canvas.current) {
            const ctx = canvas.current.getContext('2d')!
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)

            particles.current.forEach((particle) => {
                particle.update(ctx)
            })

            requestAnimationFrame(animate)
        }
    }

    useEffect(() => {
        animate()
    }, [])

    useEffect(() => {
        if (canvas.current) {
            canvas.current.width = window.innerWidth
            canvas.current.height = window.innerHeight
        }
    }, [])

    useEffect(() => {
        if (canvas.current) {
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < 20; i++) {
                const initialX = Math.random() * Number(canvas.current.width)
                const initialY = -1 * randomGenerator(100, 1200)
                const rotateAngle = randomGenerator(0, 2 * Math.PI)
                const width = randomGenerator(18, 24)
                const particle = new Particle(
                    initialX,
                    initialY,
                    rotateAngle,
                    width
                )

                particles.current.push(particle)
            }
        }
    }, [])
    return (
        <canvas
            ref={canvas}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
            }}
        />
    )
}

export default Petal
