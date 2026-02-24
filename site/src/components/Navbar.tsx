import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
    return (
        <nav className="bg-white shadow border-b border-primary/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-28">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image src="/logo.png" alt="Joanne Williams Physiotherapy" width={280} height={90} className="object-contain hover:opacity-90 transition" priority />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8 font-heading">
                        <Link href="/" className="text-foreground hover:text-primary transition font-medium">
                            Home
                        </Link>
                        <Link href="/services" className="text-foreground hover:text-primary transition font-medium">
                            Services
                        </Link>
                        <Link href="/about" className="text-foreground hover:text-primary transition font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="bg-primary text-button-text px-5 py-2 rounded-md hover:opacity-90 transition font-semibold">
                            Make a Booking
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
