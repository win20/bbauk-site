import CroppedImage from '@components/shared/CroppedImage';
import HeadingWithTag from '@components/shared/HeadingWithTag';
import LinkButton from '@components/shared/LinkButton';

const events = [
	{
		image: '/buddha-services-section.jpg',
		title: 'Meditation Retreat',
		date: 'Fri 09 Feb 2024',
		location: 'London',
		description:
			'A day of mindfulness and peace, led by experienced meditation instructors.',
		link: '#',
	},
	{
		image: '/hero-buddha.jpg',
		title: 'Cultural Festival',
		date: 'Sat 10 Feb 2024',
		location: 'Birmingham',
		description:
			'Celebrate our heritage with food, performances, and community activities.',
		link: '#',
	},
	{
		image: '/hero-buddha.jpg',
		title: 'Community Service',
		date: 'Sun 11 Feb 2024',
		location: 'Manchester',
		description:
			'Join us to give back to the community through various service projects.',
		link: '#',
	},
];

export default function UpcomingEvents() {
	return (
		<section className="bg-[var(--capecod-lighter)] px-6 py-16 text-gray-950 w-full flex flex-col items-center">
			<div className="max-w-xs w-full flex flex-col items-center">
				<HeadingWithTag heading="Events" tag="Upcoming" />
				<p className="font-pt-sans text-[var(--color-text-primary)] text-base text-center my-4">
					Join us for these upcoming events organised by our community
				</p>
				<div className="flex flex-col gap-6 w-full">
					{events.map((event, idx) => (
						<div
							key={event.title}
							className="bg-[var(--neutral-white)] rounded-xl border border-[var(--color-border)] overflow-hidden flex flex-col"
						>
							<CroppedImage
								src={event.image}
								alt={event.title}
								width="w-full"
								height="h-40"
								objectPosition="center"
								priority={idx === 0}
								quality={80}
							/>
							<div className="p-5 pt-4">
								<h3 className="font-merriweather text-[var(--color-text-primary)] font-bold text-xl m-0">
									{event.title}
								</h3>
								<div className="font-pt-sans text-[var(--color-text-primary)] text-sm my-2">
									{event.date} &bull; {event.location}
								</div>
								<p className="font-pt-sans text-[var(--color-text-primary)] text-base mb-4 mt-2">
									{event.description}
								</p>
								<a
									href={event.link}
									className="inline-block bg-[var(--color-accent-light)] text-[var(--color-text-primary)] font-pt-sans font-bold text-base rounded-md px-5 py-2 no-underline border-none"
								>
									Read more
								</a>
							</div>
						</div>
					))}
				</div>
				<LinkButton
					href="#"
					variant="filled"
					className="mt-8 bg-[var(--neutral-darkest)]/10"
				>
					View all
				</LinkButton>
			</div>
		</section>
	);
}
