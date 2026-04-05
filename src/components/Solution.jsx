import { motion } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.88L16 19.77l-6.18 3.25L11 16.14l-5-4.87 6.91-1.01L16 4z" />
      </svg>
    ),
    title: 'Tailored to You',
    description:
      'Every itinerary is built from scratch around your interests, pace, and travel style. No templates, no compromises.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 2" />
      </svg>
    ),
    title: 'Your Time Back',
    description:
      'I handle the research, bookings, logistics, and last-minute changes so you can focus on the excitement of your upcoming trip.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 28V18M16 28V10M24 28V4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Insider Access',
    description:
      "As a FORA Travel advisor, I unlock exclusive perks: room upgrades, resort credits, VIP experiences, and rates you won't find online.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="14" width="20" height="12" rx="2" />
        <path d="M10 14V10a6 6 0 1112 0v4" />
        <circle cx="16" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description:
      "For most hotel and resort bookings, my services come at no cost to you. I'm compensated directly by travel partners and properties. For more complex, multi-destination itineraries, a planning fee may apply and will always be presented upfront before we begin.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Solution() {
  return (
    <section className="py-24 lg:py-36 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-gold text-sm uppercase mb-6"
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-espresso leading-[1.1] mb-6"
          >
            A personal travel advisor in your corner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-clay text-lg font-light leading-relaxed"
          >
            Imagine having someone who truly understands what you want from a trip
            and has the expertise and connections to make it happen.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-ivory/60 backdrop-blur-sm p-10 lg:p-12 group cursor-default"
            >
              <motion.div
                className="text-gold mb-6"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="font-serif text-xl md:text-2xl text-espresso mb-4">
                {benefit.title}
              </h3>
              <p className="text-clay leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
