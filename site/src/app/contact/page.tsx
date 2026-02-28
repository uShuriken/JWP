import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import Image from 'next/image';

export default function ContactPage() {
    const faqs = [
        {
            question: "Do I need a referral or to see a GP before booking?",
            answer: "No, you do not need a referral or to see a GP prior to seeing a physiotherapist. You can book an appointment directly with us."
        },
        {
            question: "Can you lodge an ACC claim for my injury?",
            answer: "Yes, we can lodge an ACC claim directly for you if you have suffered an injury."
        },
        {
            question: "What should I wear to my appointment?",
            answer: "Please wear comfortable, loose-fitting clothing that allows easy access to the area of your body that requires treatment."
        },
        {
            question: "How long is a typical appointment?",
            answer: "Initial assessments usually take about 45-60 minutes, while follow-up treatments are typically 30 minutes. This allows us enough time for a thorough evaluation and targeted treatment."
        },
        {
            question: "Is there a co-payment for ACC visits?",
            answer: "Yes, there is a co-payment required for ACC-funded visits. Please see our Services page for the most up-to-date pricing."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center z-10 relative">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6">Get in Touch</h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
                        Ready to start your recovery journey? Contact us to book an appointment, ask a question, or find our clinic in Levin.
                    </p>
                </div>
            </section>

            {/* Alternating Section 1: Contact Form and Image */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Form Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-extrabold font-heading text-button-text tracking-tight mb-8">Send a Message</h2>
                        <ContactForm />
                    </div>
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-lg border border-primary/30">
                        <Image src="/clinic-room.png" alt="Warm clinic reception" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </section>

            {/* Alternating Section 2: Map and Info */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-button-text tracking-tight mb-6">Visit Our Clinic</h2>

                        <p className="text-lg text-button-text/90 font-light leading-relaxed">
                            Operating in a state-of-the-art facility designed for a calm and professional healing environment.
                        </p>

                        <div className="p-8 bg-white rounded-2xl border border-primary/30 shadow-sm mt-8">
                            <h3 className="text-xl font-bold font-heading text-primary mb-2">Joanne Williams Physiotherapy</h3>
                            <p className="font-medium text-button-text">Levin, New Zealand</p>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg bg-primary/10 border border-primary/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48698.8146746401!2d152.7937402!3d-40.6179377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40523fc0245a4b%3A0x500ef6143a2b4b0!2sLevin%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Levin, New Zealand Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Section 3: Dropdown FAQs */}
            <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-button-text tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-button-text/90 font-light">Common questions about our services and appointments.</p>
                    </div>

                    <FAQAccordion faqs={faqs} />
                </div>
            </section>
        </div>
    );
}
