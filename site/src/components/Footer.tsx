import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="bg-[#3b2d33] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="Joanne Williams Physiotherapy" width={200} height={60} className="object-contain mb-4 filter drop-shadow hover:opacity-90 transition" />
                        </Link>
                        <p className="text-button-text/70 text-sm">
                            Practical, sustainable, and evidence-informed rehabilitation tailored to your needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-button-text/70">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Contact & Admin</h3>
                        <ul className="space-y-2 text-sm text-button-text/70">
                            <li>Levin, New Zealand</li>
                            <li>
                                <Link href="/admin/login" className="hover:text-white transition text-xs opacity-50 hover:opacity-100">
                                    Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-button-text/60">
                    &copy; {new Date().getFullYear()} Joanne Williams Physiotherapy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
