import { getDb } from '@/lib/db';
import Image from 'next/image';

async function getServicesContent() {
    try {
        const db = await getDb();
        const result = await db.get('SELECT content FROM pages WHERE id = ?', ['Services']);
        return result?.content || null;
    } catch {
        return null;
    }
}

export default async function Services() {
    const dynamicContent = await getServicesContent();

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-primary py-24 text-center text-white relative overflow-hidden">
                <div className="max-w-3xl mx-auto z-10 relative px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4">Our Services & Pricing</h1>
                    <p className="text-xl md:text-2xl font-light opacity-90">Comprehensive physiotherapy tailored to your needs</p>
                </div>
            </div>

            {/* Alternating Layout 1: Rehabilitation Services - Text Left, Image Right */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6 tracking-tight">Expert Treatments: Personalized Care for Every Patient</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We offer a complete range of physiotherapy services that focus on full functional recovery. By combining manual therapies with active movement strategies, we ensure you return to the activities you love as quickly and safely as possible.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Whether you are dealing with a recent sports injury, managing chronic osteoarthritis, or recovering from surgery, Joanne's 35+ years of clinical excellence guarantee that you are in the best hands.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-secondary p-4 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">ACC Claims</h4>
                                <p className="text-sm text-gray-600 font-medium">We can lodge claims directly for you.</p>
                            </div>
                            <div className="bg-secondary p-4 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">No Referral</h4>
                                <p className="text-sm text-gray-600 font-medium">You don't need a GP to book a visit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full relative h-[450px] rounded-2xl overflow-hidden">
                        <Image
                            src="/clinic-room.png"
                            alt="Clinic Room"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Breakdown Section */}
            <section className="py-24 px-4 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6 tracking-tight">Transparent Rates: Our Pricing</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* ACC Pricing Card */}
                        <div className="bg-white p-10 rounded-3xl flex flex-col relative transform hover:-translate-y-1 transition duration-300">
                            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-3xl"></div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 mt-2">Injury Management</h3>
                            <p className="text-gray-500 font-medium mb-8 pb-6 border-b border-gray-100">For ACC supported assessments and treatments.</p>

                            <ul className="space-y-6 text-gray-700 flex-1">
                                <li className="flex justify-between items-center bg-secondary/50 p-4 rounded-lg">
                                    <span className="font-medium">First Visit (Assessment)</span>
                                    <span className="font-extrabold text-2xl text-primary">$45</span>
                                </li>
                                <li className="flex justify-between items-center bg-secondary/50 p-4 rounded-lg">
                                    <span className="font-medium">Follow-up Treatments</span>
                                    <span className="font-extrabold text-2xl text-primary">$30</span>
                                </li>
                            </ul>
                        </div>

                        {/* Private Pricing Card */}
                        <div className="bg-white p-10 rounded-3xl flex flex-col relative transform hover:-translate-y-1 transition duration-300">
                            <div className="absolute top-0 left-0 w-full h-2 bg-primary/20 rounded-t-3xl"></div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 mt-2">Other Conditions (Non-ACC)</h3>
                            <p className="text-gray-500 font-medium mb-8 pb-6 border-b border-gray-100">Disability, osteoarthritis, or non-injury support.</p>

                            <ul className="space-y-6 text-gray-700 flex-1">
                                <li className="flex justify-between items-center bg-secondary p-4 rounded-lg">
                                    <span className="font-medium">Privately funded (30 mins)</span>
                                    <span className="font-extrabold text-2xl text-gray-900">$75</span>
                                </li>
                                <li className="flex justify-between items-center bg-secondary p-4 rounded-lg">
                                    <span className="font-medium">Privately funded (1 Hour)</span>
                                    <span className="font-extrabold text-2xl text-gray-900">$150</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternating Layout 2: Occupational Health - Image Left, Text Right */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 w-full relative h-[450px] rounded-2xl overflow-hidden order-2 md:order-1">
                        <Image
                            src="/recovery.png"
                            alt="Return To Work"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 order-1 md:order-2">
                        <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-gray-900 mb-6 tracking-tight">Workplace Wellbeing: Occupational Health Services</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            Navigating workplace injuries and managing successful return-to-work programs requires specialized expertise. Joanne provides comprehensive evaluations and ergonomic support to ensure maximum productivity and safety in your working environment.
                        </p>

                        <div className="bg-secondary p-8 rounded-2xl">
                            <ul className="space-y-4">
                                {[
                                    'Workplace evaluation',
                                    'Injury and or illness management',
                                    'Return to work programmes',
                                    'Physical work performance evaluation',
                                    'Quantitative Job Demand Analysis',
                                    'APHIRM',
                                    'Ergonomic support'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="bg-white p-1 rounded-full mr-4 mt-0.5">
                                            <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-900 font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Admin Content */}
            <section className="bg-secondary/30 py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    {dynamicContent && (
                        <div className="bg-white p-10 rounded-3xl">
                            <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-6 tracking-tight">Additional Information</h2>
                            <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
                            <div
                                className="prose max-w-none text-gray-700 prose-p:leading-relaxed prose-headings:font-heading prose-headings:text-gray-900"
                                dangerouslySetInnerHTML={{ __html: dynamicContent }}
                            />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
