import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { BsCreditCard, BsHeartFill } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Header } from "../Components";

const skillsAndTools = [
	"Branding",
	"Collateral",
	"Packaging",
	"Logos and Identity",
	"Annual Reports",
	"Promo Materials",
	"Signage",
	"Visio",
	"Presentation and Decks",
	"OmniGraffie",
	"Adobe Creative Suite",
	"Website Design",
];

const expertReviews = [
	{
		id: 1,
		name: "Lisa Gonzales-Simon",
		title: "Development Director",
		company: "Blue Shield of California",
		message:
			"Halie is a strong IT delivery manager who truly understands business needs and owns the delivery of the best for his business partners. Very committed to on-time delivery",
	},
	{
		id: 2,
		name: "Annita Stephens",
		title: "Director Application Development ",
		company: "Skoolsports Equipment Pty. Ltd",
		message:
			"I am really impressed by the quality of services I received from Hallie. They were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of you, and I will definitely use your services again. Thank you! ",
	},
	{
		id: 3,
		name: "Joel Graves",
		title: "President of Operations",
		company: "Leading System Integrator, EMEA Region",
		message:
			" I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner I am used to control and always having my finger on the pulse of my employees and contractors. Hallie has delivered great results and has convinced me of the value of outsourcing. In the beginning of the relationship between us and Hallie, there were times when it was difficult to communicate but if you can just get through the first week or so everything starts to come together.I have really enjoyed working with Devaiah and Kaushik they are great team players and can really deliver outstanding results. I would be proud to have either one of them on my team in the U.S",
	},
];

const Experts = () => {
	return (
		<div className='relative flex-1 bg-zinc-100 '>
			<section className='w-full '>
				<Header />
				<section className='flex items-center justify-between w-full p-5 bg-white border-gray-300 border-y-2'>
					<Link
						to=''
						className='flex items-center font-medium transition duration-300 ease-in text-zinc-600 hover:text-blue-500'
					>
						<i>
							<BiChevronLeft className='text-2xl font-semibold' />
						</i>
						Back to all experts
					</Link>
					<div className='flex gap-x-5 '>
						<Link
							to=''
							className='flex items-center font-medium transition duration-300 ease-in text-zinc-600 hover:text-blue-500'
						>
							<i>
								<BiChevronLeft className='text-2xl font-semibold' />
							</i>
							Previous Expert
						</Link>
						<div className='border-r-2 border-zinc-500'></div>
						<Link
							to=''
							className='flex items-center font-medium transition duration-300 ease-in text-zinc-600 hover:text-blue-500'
						>
							Next Expert
							<i>
								<BiChevronRight className='text-2xl font-semibold' />
							</i>
						</Link>
					</div>
				</section>
			</section>
			<section className='relative flex w-full h-full border-gray-300 border-y-2'>
				<div className='relative my-3'>
					<article className='flex px-3 py-4 mx-3 mb-4 bg-white rounded shadow'>
						<div className='w-1/5 border-r-2 border-dashed border-zinc-300'>
							<div className='flex flex-col items-center '>
								<img
									className='object-cover w-20 h-20 p-0.5 mb-3 border rounded-full border-zinc-800 '
									alt='User avatar'
									src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
								/>
								<h2 className='text-lg font-medium text-zinc-800'>
									Halie Carlos
								</h2>

								<p className='text-sm text-zinc-500'>
									PHP Page Development
								</p>
							</div>
						</div>
						<div className='flex-1 mx-6'>
							<p className='leading-7 text-zinc-800'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit quasi vero, reiciendis,
								molestiae voluptas enim possimus tempore nobis
								labore repellat veritatis tempora atque
								praesentium fugiat. Quia quis temporibus
								repellendus corrupti?
							</p>
						</div>
					</article>
					<article className='flex mx-3 mb-4 '>
						<div className='w-1/4 px-3 py-4 mr-4 bg-white rounded shadow'>
							<div className='flex flex-col w-full gap-5 pb-3 border-b-2 border-zinc-200'>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-orange-500 rounded-full'>
										<BsCreditCard className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-zinc-800'>
											Gold
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Hourly rate
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-[#9d4cb3] rounded-full'>
										<IoBriefcaseOutline className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-zinc-800'>
											15 Years
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Experience
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-lime-500'>
										<RiMapPin2Line className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-zinc-800'>
											Mountain View, LA
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Location
										</p>
									</div>
								</article>
							</div>
							<div className='flex flex-wrap gap-1 py-3 border-b-2 border-zinc-200 '>
								{skillsAndTools.map((skill, index) => (
									<span
										key={index}
										className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '
									>
										{skill}
									</span>
								))}
							</div>
							<div className='flex flex-col w-full gap-4 py-3 mb-3'>
								{expertReviews.map((review) => (
									<article
										key={review.id}
										className='transition duration-300 ease-out border-l-4 rounded cursor-default bg-zinc-100 border-fuchsia-300 hover:bg-lavender '
									>
										<div className='px-3 py-2 text-sm'>
											<h2 className='pb-1 text-base font-semibold text-zinc-800'>
												{review.name}
											</h2>
											<h3 className='pb-1.5 text-zinc-700 font-medium tracking-wide'>
												{`${review.title}, ${review.company}`}{" "}
											</h3>
											<p className='leading-6 text-zinc-700'>
												{review.message.length > 100
													? `${review.message.substring(
															0,
															100,
													  )}... read more`
													: review.message}
											</p>
										</div>
									</article>
								))}
							</div>
						</div>
						<div className='flex-1 px-3 py-4 bg-white rounded shadow'>
							<p className='leading-7 text-zinc-800'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit quasi vero, reiciendis,
								molestiae voluptas enim possimus tempore nobis
								labore repellat veritatis tempora atque
								praesentium fugiat. Quia quis temporibus
								repellendus corrupti?
							</p>
						</div>
					</article>
					<article className='absolute bottom-0 z-10 w-full px-3 py-4 bg-white border rounded-sm shadow border-zinc-500'>
						<div className='flex items-center justify-between '>
							<button className='flex items-center text-white transition duration-300 ease-in bg-pink-400 border border-white gap-x-2 hover:border-pink-700'>
								<i>
									<BsHeartFill />
								</i>
								To favorites
							</button>
							<button>Contact</button>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Experts;
