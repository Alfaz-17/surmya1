"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Suramya 1, Near Shantigram,", "SG Highway, Gujarat, India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 12345 67890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@suramya1.com", "sales@suramya1.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Reach Out
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-lg mx-auto">
            We would be happy to assist you with inquiries and information about
            the community. Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-0 border border-border">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 border-b border-border last:border-b-0 group hover:bg-primary/5 transition-colors duration-300"
              >
                <item.icon className="w-6 h-6 text-primary/80 flex-shrink-0 stroke-[1.5] mt-0.5" />
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-primary font-black mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white border border-border p-8 lg:p-10"
            >
              {/* Success overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10"
                >
                  <CheckCircle className="w-12 h-12 text-primary mb-4 stroke-[1.5]" />
                  <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </motion.div>
              )}

              <h3 className="font-serif text-xl mb-2">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Fill in your details and we&apos;ll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] font-black uppercase tracking-[0.15em] text-foreground mb-3"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full bg-transparent border-0 border-b border-border py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] font-black uppercase tracking-[0.15em] text-foreground mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-0 border-b border-border py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[10px] font-black uppercase tracking-[0.15em] text-foreground mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full bg-transparent border-0 border-b border-border py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-black uppercase tracking-[0.15em] text-foreground mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-transparent border-0 border-b border-border py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
