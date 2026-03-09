import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(selector, options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector)
      if (!elements?.length) return

      gsap.fromTo(elements,
        { y: options.y || 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration || 1,
          stagger: options.stagger || 0.07,
          ease: options.ease || 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start || 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export function useLineReveal(selector) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = containerRef.current?.querySelectorAll(selector)
      if (!lines?.length) return

      lines.forEach(line => {
        gsap.fromTo(line,
          { width: '0%' },
          {
            width: '100%',
            duration: 1.2,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export function useParallax(selector, speed = 0.3) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector)
      if (!elements?.length) return

      elements.forEach(el => {
        gsap.to(el, {
          y: () => speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export function useCountUp(selector) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector)
      if (!elements?.length) return

      elements.forEach(el => {
        const target = parseFloat(el.dataset.value) || 0
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = Number.isInteger(target) ? Math.round(obj.val) : obj.val.toFixed(1)
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

// Parallax on images — subtle vertical shift while scrolling
export function useImageParallax(selector, speed = -0.15) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = containerRef.current?.querySelectorAll(selector)
      if (!images?.length) return

      images.forEach(img => {
        gsap.set(img, { scale: 1.15 })
        gsap.to(img, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

// Horizontal marquee text that scrolls infinitely
export function useMarquee(selector, speed = 50) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquees = containerRef.current?.querySelectorAll(selector)
      if (!marquees?.length) return

      marquees.forEach(marquee => {
        const inner = marquee.querySelector('.marquee-inner')
        if (!inner) return

        const width = inner.offsetWidth
        gsap.set(inner, { x: 0 })

        gsap.to(inner, {
          x: -width / 2,
          duration: speed,
          ease: 'none',
          repeat: -1,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

// Scale-in reveal for images — starts zoomed out and scales to normal
export function useScaleReveal(selector) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector)
      if (!elements?.length) return

      elements.forEach(el => {
        gsap.fromTo(el,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

// Ghost text floating parallax — moves horizontally on scroll
export function useGhostParallax(selector) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ghosts = containerRef.current?.querySelectorAll(selector)
      if (!ghosts?.length) return

      ghosts.forEach((ghost, i) => {
        const direction = i % 2 === 0 ? 1 : -1
        gsap.to(ghost, {
          xPercent: direction * 15,
          ease: 'none',
          scrollTrigger: {
            trigger: ghost.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export { gsap, ScrollTrigger }
