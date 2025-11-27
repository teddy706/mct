import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    title: "MCT Journey",
    description: "Microsoft Certified Trainer를 향한 여정",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <header>
                    <nav>
                        <Link href="/" className="logo">
                            MCT Journey
                        </Link>
                        <ul className="nav-links">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/education">Education</Link>
                            </li>
                            <li>
                                <Link href="/study">Study Log</Link>
                            </li>
                            <li>
                                <Link href="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link href="/admin">Admin</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; 2025 MCT Journey. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
}
