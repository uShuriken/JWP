import ContactForm from '@/components/ContactForm';

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
            <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 tracking-tight mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Ready to start your recovery journey? Contact us to book an appointment, ask a question, or find our clinic in Levin.
                    </p>
                </div>
            </section>

            {/* Main Content: Form & Map Split */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Contact Form side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Send a Message</h2>
                        <ContactForm />
                    </div>

                    {/* Location & Map side */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Our Clinic</h2>

                        <div className="mb-8 p-8 bg-secondary rounded-2xl">
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Joanne Williams Physiotherapy</h3>
                            <p className="text-lg text-gray-600 mb-2 font-medium">Levin, New Zealand</p>
                            <p className="text-gray-600 leading-relaxed">
                                Operating in a state-of-the-art facility designed for a calm and professional healing environment.
                            </p>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gray-100 flex-grow relative">
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
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-secondary py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Common questions about our services and appointments.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
