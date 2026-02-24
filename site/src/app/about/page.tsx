import { getDb } from '@/lib/db';
import Image from 'next/image';

async function getAboutContent() {
    try {
        const db = await getDb();
        const result = await db.get('SELECT content FROM pages WHERE id = ?', ['About']);
        return result?.content || null;
    } catch {
        return null;
    }
}

export default async function About() {
    const dynamicContent = await getAboutContent();

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-primary py-24 text-center text-white relative overflow-hidden">
                <div className="max-w-3xl mx-auto z-10 relative px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4">About Joanne</h1>
                    <p className="text-xl md:text-2xl font-light opacity-90">NZ Registered Physiotherapist, &gt;35 Years Experience</p>
                </div>
            </div>

            {/* Alternating Layout 1: Bio - Image Left, Text Right */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 w-full relative h-[450px] rounded-2xl overflow-hidden order-2 md:order-1">
                        <Image
                            src="/treatment.png"
                            alt="Physiotherapy Treatment"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-6">Local Expertise: Dedicated to the Levin Community</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Based in Levin, Joanne brings national-level expertise back to her local community — delivering clinical excellence with practical, real-world application.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Joanne is an experienced physiotherapist who grew up in Manakau, and returned three years ago to bring her skills and expertise back to her local community. She spent the previous ten years living locally but working further afield, including travelling nationally to manage, train, and support health colleagues alongside clinical work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alternating Layout 2: Philosophy - Text Left, Info Right */}
            <section className="py-24 px-4 bg-secondary">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-6">Clinical Philosophy: A Holistic, Practical Approach</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Joanne believes that recovery is most effective when it is grounded in knowledge. Understanding your body, your injury, and the mechanisms behind pain and dysfunction empowers you to take an active role in your rehabilitation.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Her clinical approach combines hands-on therapy with structured rehabilitation planning. Restoring mobility and functional movement often requires multiple strategies — including manual techniques, targeted exercise prescription, corrective biomechanics, and functional movement retraining.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            You will be provided with practical strategies to integrate into your daily life so that everyday tasks become more comfortable, efficient, and sustainable.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-8">
                        <div className="bg-white p-8 rounded-2xl">
                            <h4 className="text-xl font-bold font-heading text-gray-900 mb-4 pb-2">Techniques & Methods</h4>
                            <ul className="space-y-3">
                                {[
                                    'Joint mobilisation', 'Fascial release', 'Individualised exercise prescription',
                                    'Corrective biomechanics', 'Functional movement retraining',
                                    'Hydrotherapy', 'Education and self-management advice'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 bg-yellow-50 text-yellow-800 text-sm p-4 rounded-lg font-medium">
                                <strong>Note:</strong> Joanne does not use needling or acupuncture in her clinical practice.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternating Layout 3: Credentials - Details Left, Image Right(ish - using cards to balance text) */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900">Credentials: Experience You Can Trust</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-secondary/50 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0"></div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold font-heading text-gray-900 mb-6">Qualifications</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start bg-white p-4 rounded-lg">
                                        <span className="text-primary font-bold text-xl mr-3">•</span>
                                        <span className="text-gray-800 font-medium pt-1">Diploma of Physiotherapy</span>
                                    </li>
                                    <li className="flex items-start bg-white p-4 rounded-lg">
                                        <span className="text-primary font-bold text-xl mr-3">•</span>
                                        <span className="text-gray-800 font-medium pt-1">Postgraduate Diploma of Rehabilitation</span>
                                    </li>
                                    <li className="flex items-start bg-white p-4 rounded-lg">
                                        <span className="text-primary font-bold text-xl mr-3">•</span>
                                        <span className="text-gray-800 font-medium pt-1">Masters in Health Science (rehabilitation)</span>
                                    </li>
                                    <li className="flex flex-col bg-white p-4 rounded-lg border-l-4 border-primary">
                                        <div className="flex items-start">
                                            <span className="text-gray-800 font-bold">Postgraduate Certificate in Health Science</span>
                                        </div>
                                        <span className="text-sm text-gray-500 italic mt-1 font-medium pb-1 pl-1">
                                            (papers in Biomechanics, Occupational & Health Ergonomics)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="bg-white p-8 rounded-2xl flex-1">
                                <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">Commitment to Learning</h4>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Joanne is committed to lifelong learning and regularly undertakes further education. She also provides mentoring and clinical support to other physiotherapists throughout New Zealand.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl flex-1">
                                <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">Occupational Focus</h4>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Throughout her career, Joanne has maintained a strong focus on the role work plays in health, identity, and wellbeing. Her practice integrates clinical expertise and occupational health insights to deliver practical outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Admin Content */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    {dynamicContent && (
                        <div className="bg-white p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">More About Joanne</h2>
                            <div
                                className="prose max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{ __html: dynamicContent }}
                            />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
