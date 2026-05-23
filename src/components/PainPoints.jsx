import { motion } from 'framer-motion'

const pains = [
  {
    number: '01',
    title: 'The illusion of choice',
    description:
      'Too many options, no real curation. Anyone can book a hotel. Few can tell you which one is truly right for you.',
  },
  {
    number: '02',
    title: 'Itineraries built for everyone',
    description:
      'Which means built for no one. You want a journey that reflects your life, not a template someone else already used.',
  },
  {
    number: '03',
    title: 'The cost of getting it wrong',
    description:
      "A mismatched hotel, an unwelcoming destination, a trip that didn't deliver. At this level, that's not just disappointing. It's unacceptable.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const painVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function PainPoints() {
  return (
    <section className="py-24 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - editorial headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
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
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.1]"
            >
              Planning travel shouldn't feel like a
              <em className="text-clay"> second job</em>
            </motion.h2>
          </div>

          {/* Right column - pain points */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pains.map((pain) => (
              <motion.div
                key={pain.number}
                variants={painVariants}
                className="border-t border-stone/30 pt-8 group"
              >
                <motion.span
                  className="text-gold text-sm tracking-widest font-light inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {pain.number}
                </motion.span>
                <h3 className="font-serif text-2xl md:text-3xl text-espresso mt-3 mb-4 group-hover:text-clay transition-colors duration-500">
                  {pain.title}
                </h3>
                <p className="text-clay leading-relaxed font-light max-w-md">
                  {pain.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
