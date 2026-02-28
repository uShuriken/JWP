'use client';

import { useState } from 'react';

type FAQ = {
    question: string;
    answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white border text-left border-primary/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="p-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold font-heading text-primary">{faq.question}</h3>
                        <span className="text-primary/50 text-2xl font-light transform transition-transform duration-300 " style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            ▼
                        </span>
                    </div>
                    <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-button-text/90 leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
