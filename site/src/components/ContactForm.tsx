'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate a network request
        setTimeout(() => setStatus('success'), 1000);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary">
            <h2 className="text-2xl font-bold font-heading text-primary mb-6">Send us an Enquiry</h2>
            {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg font-medium">
                    Thank you! Your message has been sent. We will be in touch shortly.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold font-heading text-primary mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold font-heading text-primary mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold font-heading text-primary mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold font-heading text-primary mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-primary text-button-text font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
}
