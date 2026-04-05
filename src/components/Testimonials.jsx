import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    quote:
      "Wayline turned our anniversary trip into something truly magical. Every detail was thought of, from the private sunset dinner in Santorini to the surprise room upgrade. We didn't have to lift a finger.",
    name: 'Sarah & James R.',
    trip: 'Greece & Italy, 12 days',
    initials: 'SR',
  },
  {
    quote:
      "Planning a family reunion across three generations felt impossible until we found Wayline. Garrett made sure everyone was taken care of, from the grandparents to the little ones. It was the trip of a lifetime.",
    name: 'The Nakamura Family',
    trip: 'Tuscany, 10 days',
    initials: 'NF',
  },
  {
    quote:
      "As a solo traveler, I was nervous about planning my first big international trip alone. Garrett made the entire process feel effortless and made sure I felt safe, welcomed, and completely taken care of every step of the way.",
    name: 'Jordan M.',
    trip: 'Thailand & Bali, 14 days',
    initials: 'JM',
  },
]

const quoteVariants = {
  enter: { opacity: 0, x: 60, filter: 'blur(4px)' },
  center: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -60, filter: 'blur(4px)' },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-espresso text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 border border-white/[0.03] rounded-full hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 h-px bg-gold mb-8 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-gold text-sm uppercase mb-6"
            >
              Client Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8"
            >
              Journeys that
              <br />
              speak for
              <br />
              themselves
            </motion.h2>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative w-12 h-1 bg-white/20 overflow-hidden"
                  aria-label={`View testimonial ${i + 1}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gold"
                    initial={false}
                    animate={{ scaleX: i === active ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={quoteVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.svg
                  className="text-gold/20 w-16 h-16 mb-8"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6 0 4 3 7.5 8 10l1-1.5C10.3 20.3 8 18 8 15h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H10zm14 0c-3.3 0-6 2.7-6 6 0 4 3 7.5 8 10l1-1.5c-2.7-2.2-5-4.5-5-7.5h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-2z" />
                </motion.svg>

                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug mb-10 text-white/90">
                  {testimonials[active].quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm tracking-wider"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  >
                    {testimonials[active].initials}
                  </motion.div>
                  <div>
                    <p className="text-white font-medium">
                      {testimonials[active].name}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonials[active].trip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
