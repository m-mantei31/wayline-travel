import { motion } from 'framer-motion'

const specialties = [
  'Getaways',
  'Luxury',
  'LGBTQ+',
  'Boutique',
  'Adventures',
  'Cruises',
  'Romance',
  'Culture',
  'Wellness',
  'Family',
  'Solo',
  'Groups',
]

export default function Specialties() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
        >
          What I Specialize In
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.15] mb-10"
        >
          Designed for every kind of traveler
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-serif text-xl md:text-2xl lg:text-3xl text-clay"
        >
          {specialties.map((item, i) => (
            <span key={item} className="flex items-center gap-x-5">
              {item === 'LGBTQ+' ? (
                <span>
                  <span className="italic">LGBT</span>
                  <span>Q</span>
                  <span className="italic">+</span>
                </span>
              ) : (
                <span className="italic">{item}</span>
              )}
              {i < specialties.length - 1 && (
                <span className="text-gold/60 font-sans font-light">|</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mt-12 origin-center"
        />
      </div>
    </section>
  )
}
