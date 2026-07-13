import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send, CheckCircle, Instagram, Linkedin, Youtube } from "lucide-react";
import { sendContact } from "../api";

export default function Contact({ portfolio, socials = [] }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await sendContact(form);
      setStatus({ type: "success", message: res.data.message });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg =
        err.response?.data?.error || "Something went wrong. Please try again.";
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let&apos;s build something great together.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="card">
            <Mail className="mb-3 text-accent" size={24} />
            <h3 className="font-display font-semibold">Email</h3>
            <a
              href={`mailto:${portfolio?.email || "dhavalleelawala@gmail.com"}`}
              className="mt-1 text-sm text-muted transition-colors hover:text-accent"
            >
              {portfolio?.email || "dhavalleelawala@gmail.com"}
            </a>
          </div>
          <div className="card">
            <MapPin className="mb-3 text-accent" size={24} />
            <h3 className="font-display font-semibold">Location</h3>
            <p className="mt-1 text-sm text-muted">
              {portfolio?.location || "Navsari, Gujarat, India"}
            </p>
          </div>
          <div className="card">
            <h3 className="font-display font-semibold">Connect</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {social.name === "LinkedIn" && <Linkedin size={14} />}
                  {social.name === "Instagram" && <Instagram size={14} />}
                  {social.name === "YouTube" && <Youtube size={14} />}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card space-y-4 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm text-muted">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-muted">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
              placeholder="Project inquiry"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-muted">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
              placeholder="Tell me about your project..."
            />
          </div>

          {status.message && (
            <div
              className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {status.type === "success" && <CheckCircle size={16} />}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
