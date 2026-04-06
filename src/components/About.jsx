import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function About() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [2, -2])
  const rotateY = useTransform(x, [-100, 100], [-2, 2])

  return (
    <section id="about" className="py-24 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Photo with subtle 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 overflow-hidden"
          >
            <motion.div
              className="relative hidden lg:block"
              style={{ perspective: 800 }}
            >
              <motion.div
                className="relative"
                style={{ rotateX, rotateY }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  x.set(e.clientX - rect.left - rect.width / 2)
                  y.set(e.clientY - rect.top - rect.height / 2)
                }}
                onMouseLeave={() => {
                  x.set(0)
                  y.set(0)
                }}
              >
                <div className="relative">
                  <img
                    src="/Garrett.jpg"
                    alt="Garrett - Wayline Travel advisor"
                    className="w-full aspect-[3/4] object-cover object-top"
                    loading="lazy"
                  />
                {/* Decorative frame accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10 hidden lg:block" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-espresso text-white p-6 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <p className="font-serif text-2xl text-gold">FORA</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-1">
                  Travel Advisor
                </p>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white text-espresso p-4 hidden lg:block shadow-sm border border-sand"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 200 }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-clay font-medium">
                  LGBTQ+
                </p>
                <p className="text-[9px] tracking-[0.15em] uppercase text-stone mt-0.5">
                  Travel Specialist
                </p>
              </motion.div>
              </motion.div>
            </motion.div>
            {/* Mobile photo - simple, no 3D tilt */}
            <div className="relative lg:hidden">
              <img
                src="/Garrett.jpg"
                alt="Garrett - Wayline Travel advisor"
                className="w-full max-w-sm mx-auto aspect-[3/4] object-cover object-top rounded-sm"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 h-px bg-gold mb-8 origin-left"
            />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Meet Your Advisor
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-[1.1] mb-3">
              Hi, I'm Garrett
            </h2>
            <p className="font-serif text-xl md:text-2xl text-clay/80 italic mb-8">
              Your travel advisor for every journey
            </p>

            <div className="space-y-6 text-clay text-lg font-light leading-relaxed">
              <p>
                Travel has always been more than a hobby for me. It is a calling. As a lifelong explorer with a deep appreciation for the world's hidden treasures, I founded Wayline Travel to share that passion with travelers who seek experiences beyond the expected.
              </p>
              <p>
                Based in Phoenix and serving clients worldwide, I bring a refined blend of global travel insight, thoughtful attention to detail, and genuine warmth to every journey I design. As a FORA Travel advisor, I provide access to an exclusive network of luxury properties, preferred partnerships, and insider VIP perks not available to the general public.
              </p>
              <p>
                I believe travel is for everyone. I'm proud to specialize in Luxury and LGBTQ+ travel, ensuring every trip is planned with inclusivity, comfort, and celebration in mind. Whether you're traveling as a family, a couple, a group of friends, or on your own, your journey is always designed around you.
              </p>
              <p>
                I have a particular love for discovering small boutique hotels that offer privacy, warmth, and an intimate sense of luxury you won't find at a large resort. These are the kinds of places that turn a great trip into an unforgettable one.
              </p>
              <p>
                My philosophy is simple. Every journey should feel seamless, personal, and unforgettable. Whether it is a romantic escape to the Amalfi Coast, an immersive adventure through Patagonia, a solo wellness retreat in Thailand, or a family reunion in Tuscany, I curate each experience with the same level of care and intention I would bring to my own travel. Your trip is not just a booking. It is a story waiting to be written, and my greatest measure of success is knowing you loved it enough to come back and plan the next one together.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-xs tracking-[0.25em] uppercase text-stone mb-6">
                Preferred Partner Network
              </p>
              <div className="overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex items-center w-max"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                >
                  {[0, 1].map((setIndex) => (
                    <div key={setIndex} className="flex items-center shrink-0">
                      <img src="/logos/four-seasons.svg" alt="Four Seasons Preferred Partner" className="h-20 mx-10 opacity-80" />
                      <img src="/logos/mandarin-oriental.png" alt="Mandarin Oriental" className="h-20 mx-10 opacity-80 mix-blend-multiply" />
                      <img src="/logos/rosewood.svg" alt="Rosewood Elite" className="h-12 mx-10 opacity-80" />
                      <img src="/logos/abercrombie-kent.svg" alt="Abercrombie & Kent" className="h-20 mx-10 opacity-80" />
                      <img src="/logos/hyatt-prive.svg" alt="Hyatt Privé" className="h-16 mx-10 opacity-80" />
                      <img src="/logos/accor-preferred.svg" alt="Accor Preferred by HERA" className="h-16 mx-10 opacity-80" />
                      <img src="/logos/omni-hotels.png" alt="Omni Hotels & Resorts" className="h-16 mx-10 opacity-80 mix-blend-multiply" />
                      <img src="/logos/hilton-luxury.svg" alt="Hilton For Luxury" className="h-12 mx-10 opacity-80" />
                      <img src="/logos/marriott-starrs-luminous.png" alt="Marriott International STARS & LUMINOUS" className="h-16 mx-10 opacity-80 mix-blend-multiply" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
