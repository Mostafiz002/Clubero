import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUsers, FaShieldAlt, FaRegLightbulb, FaHeart } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdGroups } from "react-icons/md";
import { Link } from "react-router";

const AboutUs = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-accent/5 border-b border-accent/10">
        <div className="max-w-[1232px] mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px]/10 md:text-[40px]/12 text-primary font-[Neusans-bold]  mb-6 "
          >
            Connecting People Through <br />
            <span className="text-accent">Shared Passions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-info max-w-2xl mx-auto"
          >
            Clubero is the ultimate membership platform designed to turn local
            interests into thriving communities.
          </motion.p>
        </div>
      </section>
      <section className="py-24 max-w-[1232px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading mb-6">
              What is <span className="text-accent">Clubero?</span>
            </h2>
            <p className="text-info mb-6 leading-relaxed font-[Neusans-regular] text-lg">
              We noticed a gap between having a hobby and finding a home for it.
              Clubero was built to bridge that gap using the MERN
              stack—providing a seamless, secure way to manage memberships and
              events.
            </p>
            <p className="text-info leading-relaxed font-[Neusans-regular]">
              From **Photography** to **Tech Networking**, we empower
              <span className="text-primary font-[Neusans-medium]">
                Club Managers
              </span>
              to lead, while providing
              <span className="text-primary font-[Neusans-medium]">
                Members
              </span>
              with unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-accent-content">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Community Collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-xl border border-accent/20">
              <div className="flex items-center gap-4">
                <MdGroups className="text-4xl text-accent" />
                <div>
                  <p className="text-white font-[Neusans-bold] text-3xl">
                    100+
                  </p>
                  <p className="text-accent-content text-xs font-[Neusans-medium] uppercase tracking-wider">
                    Active Clubs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('./assets/background-noise.webp')]"></div>

        <div className="max-w-[1232px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Neusans-bold] text-accent-content mb-4">
              A Platform for Everyone
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "For Members",
                desc: "Discover niche clubs, register for events, and manage memberships via your dashboard.",
                icon: <FaUsers />,
                color: "bg-accent",
              },
              {
                title: "For Managers",
                desc: "Create clubs, host paid events via Stripe, and grow your local community effortlessly.",
                icon: <MdOutlineRocketLaunch />,
                color: "bg-white text-primary",
              },
              {
                title: "For Admins",
                desc: "Verify clubs, monitor global transactions, and ensure platform integrity and safety.",
                icon: <FaShieldAlt />,
                color: "bg-accent",
              },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="p-10 rounded-3xl bg-secondary/50 border border-white/10 backdrop-blur-sm group hover:border-accent/50 transition-all"
              >
                <div
                  className={`mb-6 text-3xl p-4 rounded-2xl inline-block ${role.color} shadow-lg`}
                >
                  {role.icon}
                </div>
                <h3 className="text-xl font-[Neusans-bold] mb-4 text-white group-hover:text-accent transition-colors">
                  {role.title}
                </h3>
                <p className="text-accent-content/70 font-[Neusans-regular] leading-relaxed">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-24 max-w-[1232px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading mb-10">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-none w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <FaHeart className="text-2xl text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-[Neusans-bold] text-primary">
                    Inclusivity
                  </h4>
                  <p className="text-info font-[Neusans-regular]">
                    We provide a home for every interest, from tech to outdoor
                    adventure.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-none w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <FaRegLightbulb className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-[Neusans-bold] text-primary">
                    Transparency
                  </h4>
                  <p className="text-info font-[Neusans-regular]">
                    Secure Stripe payments and verified club statuses build
                    community trust.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent p-12 rounded-[2.5rem] shadow-2xl text-white text-center relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>

            <h3 className="text-3xl font-[Neusans-bold] mb-6">
              Ready to thrive?
            </h3>
            <p className="text-accent-content mb-10 font-[Neusans-regular] text-lg">
              Join Clubero today and turn your hobbies into a meaningful
              community.
            </p>
            <Link to="/register" className="button_primary bg-white! text-primary! hover:bg-primary! hover:text-white! border-none shadow-xl">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
