import { motion } from 'framer-motion'

const services = [
  {
    title: 'Private Escapes & Resort Retreats',
    description:
      'Quiet luxury at boutique properties and private resorts chosen for safety, discretion, and the kind of service that anticipates what you need before you ask.',
  },
  {
    title: 'Bespoke Romance & Honeymoon Journeys',
    description:
      'Honeymoons, anniversaries, and romantic escapes designed around the two of you — welcoming destinations, thoughtful touches, and itineraries that feel made-to-measure.',
  },
  {
    title: 'Milestone Celebration Travel',
    description:
      'Birthdays, promotions, retirements, reunions. Travel that marks the moments worth marking, planned with the polish a milestone deserves.',
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

export default function Specialties() {
  return (
    <section className="py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.15]"
          >
            Designed for every kind of traveler
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-sand/60 backdrop-blur-sm p-10 lg:p-12 group cursor-default"
            >
              <h3 className="font-serif text-xl md:text-2xl text-espresso mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-clay leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mt-16 origin-center"
        />
      </div>
    </section>
  )
}
