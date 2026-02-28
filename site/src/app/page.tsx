import { getDb } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

async function getHomeContent() {
  try {
    const db = await getDb();
    const result = await db.get('SELECT content FROM pages WHERE id = ?', ['Home']);
    return result?.content || null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const dynamicContent = await getHomeContent();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6 leading-tight">
              Clinical Excellence.<br className="hidden md:block" /> Practical Recovery.
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 opacity-90 leading-relaxed">
              A holistic, knowledge-grounded approach to physiotherapy in Levin. Bringing national-level expertise back to the local community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-secondary transition text-center">
                Book an Appointment
              </Link>
              <Link href="/services" className="text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition text-center">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/treatment.png"
              alt="Physiotherapy Treatment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Alternating Layout 1: Expert Care - Image Left, Text Right */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 w-full relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/recovery.png"
              alt="Active Recovery"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-button-text mb-6">Patient-Centered Care: Empowering Your Recovery Journey</h3>
            <p className="text-lg text-button-text/90 leading-relaxed mb-6">
              Recovery is most effective when grounded in knowledge. By understanding your body and the mechanisms behind pain or dysfunction, we empower you to take an active role in your own healing process.
            </p>
            <p className="text-lg text-button-text/90 leading-relaxed">
              With over 35 years of clinical experience, Joanne combines evidence-informed practice with practical, everyday strategies. We focus on long-term health and sustainable functional improvement, not just temporary relief.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Layout 2: Clinic Facilities - Text Left, Image Right */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-button-text mb-6">Modern Facilities: A Healing Environment</h3>
            <p className="text-lg text-button-text/90 leading-relaxed mb-6">
              Our Levin-based clinic is designed to provide a calm, professional, and welcoming atmosphere. We believe that a positive healing environment is a crucial component of effective rehabilitation.
            </p>
            <p className="text-lg text-button-text/90 leading-relaxed mb-8">
              Whether you are recovering from a sports injury, managing chronic pain, or seeking occupational health support, our state-of-the-art facilities are equipped to support your journey back to peak performance.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-bold hover:opacity-80 transition">
              Learn more about Joanne
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="md:w-1/2 w-full relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/clinic-room.png"
              alt="Modern Clinic Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-button-text">What You Need to Know</h2>
          <p className="mt-4 text-xl text-button-text/80">Important details regarding appointments and services.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary p-8 rounded-2xl">
            <ul className="list-disc pl-5 text-button-text/80 space-y-4 font-medium text-lg">
              <li>You do <span className="text-primary font-bold">not</span> need to see a GP prior to seeing a physio.</li>
              <li>You do <span className="text-primary font-bold">not</span> need a referral to see a physio.</li>
              <li>Your physiotherapist <span className="font-bold">can</span> lodge an ACC claim if you have had an injury.</li>
              <li>Your physiotherapist <span className="font-bold">can</span> organise imaging if that is required.</li>
              <li><span className="text-red-500 font-bold">Note:</span> Your physiotherapist cannot write medical certification or provide medication for pain relief - you will need to see your GP clinic for this.</li>
              <li>There is a co-payment for ACC funded visits (please see <Link href="/services" className="text-primary hover:underline">services</Link>).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dynamic Admin Content */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          {dynamicContent ? (
            <div
              className="prose max-w-none text-button-text/80 mt-8"
              dangerouslySetInnerHTML={{ __html: dynamicContent }}
            />
          ) : (
            <div className="text-center text-button-text/80 italic py-8">
              <p>Welcome to Joanne Williams Physiotherapy.</p>
              <p className="text-sm mt-2">Additional updates can be managed via the admin panel.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 tracking-tight">Ready to start your recovery?</h2>
          <p className="text-xl mb-10 opacity-90">Book an appointment today and take the first step towards a healthier, pain-free life.</p>
          <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-lg text-lg font-bold hover:bg-secondary transition">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
