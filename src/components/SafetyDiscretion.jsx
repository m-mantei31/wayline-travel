import { motion } from 'framer-motion'

export default function SafetyDiscretion() {
  return (
    <section className="relative py-24 lg:py-36 bg-espresso overflow-hidden">
      {/* Decorative ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/[0.04] rounded-full hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-gold-light mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-gold-light text-sm uppercase mb-6"
        >
          Safety & Discretion
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
          >
            Travel freely. <em className="text-gold-light">Everywhere.</em>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
        >
          Every itinerary is built with LGBTQ+ safety, cultural context, and discretion woven into its foundation. Whether you're part of the community or an ally traveling alongside it, the best luxury is the freedom to be fully yourself, wherever in the world you happen to be.
        </motion.p>
      </div>
    </section>
  )
}
