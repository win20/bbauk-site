import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-darker py-12 text-center text-foreground-inverse">
      <div>
        <p className="font-poppins font-bold">Bangladesh Buddhist Association UK</p>
        <p>বাংলাদেশ বুড্ডিস্ট এসোসিয়েশন ইউকে</p>
      </div>

      <div className="mt-12 flex flex-col space-y-6 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/events">Events</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/donations">Donations</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <hr className="mx-22 my-16 h-px border-0 bg-neutral-dark" />

      <p className="text-xs text-neutral-500">
        © 2025 Bangladesh Buddhist Association UK. All rights reserved.
      </p>
    </footer>
  );
}
