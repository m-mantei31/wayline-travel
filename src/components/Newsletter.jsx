import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Hand off to Beehiiv's hosted subscribe page with the email pre-filled.
    // Beehiiv handles confirmation, welcome email, and unsubscribe management.
    const url = `https://theguidedcompass.beehiiv.com/subscribe?email=${encodeURIComponent(
      email
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section className="py-24 lg:py-32 bg-sand/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
        >
          The Guided Compass
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.15] mb-5"
        >
          Your Wayline for the journey ahead
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-clay text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Quietly curated specials, timely advisories, and the news worth
          knowing before you book. No noise, just the good stuff. Unsubscribe
          anytime.
        </motion.p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-xl text-espresso"
          >
            Thank you, you're on the list.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white border border-stone/30 px-5 py-4 text-clay placeholder:text-stone/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-espresso text-ivory text-sm tracking-widest uppercase px-8 py-4 hover:bg-charcoal transition-colors duration-300"
            >
              Subscribe
            </button>
          </motion.form>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mt-12 origin-center"
        />
      </div>
    </section>
  )
}
