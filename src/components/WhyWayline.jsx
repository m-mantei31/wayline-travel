import { motion } from 'framer-motion'

export default function WhyWayline() {
  return (
    <section className="py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-gold mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
        >
          Why Wayline
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.15] mb-10"
        >
          I've sat where you sit.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-clay text-lg md:text-xl font-light leading-relaxed"
        >
          Before founding Wayline Travel, I spent years inside corporate America at Verizon, DoorDash, State Farm, and Grainger. I understand the professional world you live in and what it means to move through it as an openly LGBTQ+ professional.
        </motion.p>
      </div>
    </section>
  )
}
