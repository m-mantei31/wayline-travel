import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description:
      "Tell me about the trip you've been dreaming of. Fill out a quick form or send me a message. No commitment, just a conversation starter.",
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    alt: 'Traveler looking at a scenic mountain landscape',
  },
  {
    number: '02',
    title: 'The Kickoff Call',
    description:
      "We hop on a relaxed call where I learn everything: your travel style, must-haves, deal-breakers, and dream destinations. This is where the magic starts. I'll ask the right questions to uncover what will make your trip truly unforgettable.",
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    alt: 'Beautiful lakeside vista at sunrise',
  },
  {
    number: '03',
    title: 'Select & Travel',
    description:
      "I present you with a curated, detailed itinerary crafted around everything we discussed. You pick what excites you, I handle every booking and logistical detail, and then you travel. With me as your point of contact every step of the way.",
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury resort pool overlooking the ocean',
  },
]

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

function ProcessStep({ step, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      <motion.div
        className={`${!isEven ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden relative group">
          <motion.img
            src={step.image}
            alt={step.alt}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Floating step number overlay */}
          <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <span className="font-serif text-xl text-gold">{step.number}</span>
          </div>
        </div>
      </motion.div>
      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gold text-sm tracking-[0.3em] font-light"
        >
          Step {step.number}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-4xl text-espresso mt-3 mb-6 leading-tight"
        >
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-clay text-lg leading-relaxed font-light"
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-gold text-sm uppercase mb-6"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-espresso leading-[1.1]"
          >
            Three steps to your dream trip
          </motion.h2>

          {/* Animated decorative line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-px h-16 bg-gold/30 mx-auto mt-10 origin-top"
          />
        </div>

        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
