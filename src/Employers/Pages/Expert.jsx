import React from "react";

import { Link } from "react-router-dom";

import { BsCreditCard } from "react-icons/bs";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

import { Header } from "../Components";
import { RiMapPin2Line } from "react-icons/ri";

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

const Expert = () => {
	return (
		<div className='relative flex-1 mx-3 '>
			<Header />
			<section className='flex items-center justify-between w-full px-5 py-2 mb-6 bg-white border rounded-md border-alto-light'>
				<Link
					to=''
					className='flex items-center text-base font-medium tracking-wider transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue '
				>
					<i>
						<BiArrowBack className='mr-1 text-xl font-semibold ' />
					</i>
					All Experts
				</Link>

				<div className='flex items-center gap-x-1.5 '>
					<Link
						to=''
						className='flex items-center font-medium transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue'
					>
						<i>
							<BiChevronLeft className='text-2xl font-semibold' />
						</i>
						Previous Expert
					</Link>
					<i>
						<AiOutlineLine className='text-xl rotate-90 text-edward-gray ' />
					</i>
					<Link
						to=''
						className='flex items-center font-medium transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue'
					>
						Next Expert
						<i>
							<BiChevronRight className='text-2xl font-semibold' />
						</i>
					</Link>
				</div>
			</section>

			<section className='flex w-full h-auto px-5 py-3 mb-4 bg-white border rounded shadow border-alto-light'>
				<div className='w-1/4 border-r-2 border-dashed border-alto-light'>
					<div className='flex flex-col items-center '>
						<img
							className='object-cover w-20 h-20 p-0.5 mb-3 border rounded-full border-edward-gray '
							alt='User avatar'
							src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
						/>
						<h2 className='text-lg font-semibold text-mine-dark'>
							Halie Carlos
						</h2>

						<p className=' text-mine-dark'>PHP Page Development</p>
					</div>
				</div>
				<div className='flex-1 mx-3'>
					<p className='text-sm leading-7 text-mine-dark'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit quasi vero, reiciendis, molestiae voluptas enim
						possimus tempore nobis labore repellat veritatis tempora
						atque praesentium fugiat. Quia quis temporibus
						repellendus corrupti? Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Aperiam sit perferendis
						veniam reprehenderit sint quasi id, doloremque possimus
						cupiditate, optio minima fuga at neque culpa
						praesentium? Ratione dolore nisi totam!
					</p>
				</div>
			</section>
			<section className='flex w-full h-auto mb-4 '>
				<div className='w-1/4 px-5 py-3 mr-4 bg-white border rounded shadow border-alto-light'>
					<div className='flex flex-col w-full gap-5 pb-3 border-b border-alto-light'>
						<article className='flex items-center w-full space-x-3 '>
							<i className='p-2 rounded-full bg-bumblebee-amber'>
								<BsCreditCard className='text-2xl text-lily-light' />
							</i>
							<div className='flex flex-col w-full '>
								<h2 className='font-medium text-mine-dark'>
									Gold
								</h2>
								<p className='text-sm opacity-75 text-mine-dark'>
									Hourly rate
								</p>
							</div>
						</article>
						<article className='flex items-center w-full space-x-3 '>
							<i className='p-2 rounded-full bg-seanse-purple'>
								<IoBriefcaseOutline className='text-2xl text-lily-light' />
							</i>
							<div className='flex flex-col w-full '>
								<h2 className='font-medium text-mine-dark'>
									15 Years
								</h2>
								<p className='text-sm opacity-75 text-mine-dark'>
									Experience
								</p>
							</div>
						</article>
						<article className='flex items-center w-full space-x-3 '>
							<i className='p-2 rounded-full bg-amaranth-pink'>
								<RiMapPin2Line className='text-2xl text-lily-light' />
							</i>
							<div className='flex flex-col w-full '>
								<h2 className='font-medium text-mine-dark'>
									Mountain View, LA
								</h2>
								<p className='text-sm opacity-75 text-mine-dark'>
									Location
								</p>
							</div>
						</article>
					</div>
					<div className='flex flex-wrap gap-1 py-3 border-b border-alto-light '>
						{skillsAndTools.map((skill, index) => (
							<span
								key={index}
								className='px-2 py-1 text-sm tracking-wide transition duration-300 ease-in bg-opacity-75 rounded-sm cursor-pointer text-lily-light bg-kyrrex-green hover:bg-opacity-100 '
							>
								{skill}
							</span>
						))}
					</div>
					<div className='flex flex-col w-full gap-4 py-3 mb-3'>
						{expertReviews.map((review) => (
							<article
								key={review.id}
								className='transition duration-300 ease-out bg-opacity-25 border-l-4 rounded cursor-default bg-edward-gray border-kyrrex-green border-opacity-60 hover:bg-kyrrex-green hover:bg-opacity-10 '
							>
								<div className='px-3 py-2 text-sm'>
									<h2 className='pb-1 text-base font-semibold text-opacity-90 text-mine-dark'>
										{review.name}
									</h2>
									<h3 className='pb-1.5 text-mine-dark text-opacity-80 font-medium tracking-wide'>
										{`${review.title}, ${review.company}`}{" "}
									</h3>
									<p className='text-sm leading-6 text-mine-dark'>
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
				<div className='flex-1 px-5 py-3 bg-white border rounded shadow border-alto-light'>
					<ol class='border-l-2 ml-4 border-kyrrex-green border-opacity-75 py-4'>
						<li>
							<div class='md:flex flex-start'>
								<div class='bg-white border border-kyrrex-green border-opacity-50  w-5 h-5 flex items-center justify-center rounded-full -ml-3'>
									<span className='items-center justify-center w-3 h-3 rounded-full bg-kyrrex-green'></span>
								</div>
								<div className='block w-full px-4 mb-4 '>
									<article className='mb-4 '>
										<div className='flex justify-between'>
											<h2 className='font-semibold text-mine-dark'>
												Independent Consultant and
												Enterpreneuer
											</h2>
											<span className='text-opacity-80 text-mine-dark'>
												2015 - Current
											</span>
										</div>
										<h3 className='text-sm text-opacity-80 text-mine-dark'>
											Independent Consulting Business
										</h3>
									</article>
									<article className='mb-4 '>
										<h4 className='mb-2 font-medium text-mine-dark '>
											Technical Program Management
											services, including:
										</h4>
										<ol className='ml-6 leading-7 list-disc text-opacity-80 text-mine-dark '>
											<li>
												Agile technical leadership and
												program management (scrum, lean)
											</li>
											<li>
												Business process automation and
												systems integration
											</li>
											<li>
												Business driven technical
												strategy, architecture and
												budgeting
											</li>
											<li>
												Architecture and design
												(systems, mobile, web)
											</li>
											<li>
												Services Opriented Architecture
												(SOA, REST) and ESB
											</li>
											<li>
												General Management - budget,
												team development, mentoring and
												coaching
											</li>
										</ol>
									</article>
									<article className='mb-4 '>
										<h4 className='mb-2 font-medium text-mine-dark '>
											ProfitModeler Inc
										</h4>
										<p className='leading-6 text-opacity-80 text-mine-dark '>
											Lead team of co-founders to create
											new business analytics and financial
											modelling platform for the
											subscription economy. Follows lean
											startup principles to develop
											product and validate customer need.
											Responsibilities included product
											management and strategy, project
											management, business/customer
											development.
										</p>
									</article>
									<hr className='border-b border-alto-light' />
								</div>
							</div>
						</li>
						<li>
							<div class='md:flex flex-start'>
								<div class='bg-white border border-kyrrex-green border-opacity-50 w-5 h-5 flex items-center justify-center rounded-full -ml-3'>
									<span className='items-center justify-center w-3 h-3 rounded-full bg-kyrrex-green'></span>
								</div>
								<div className='block w-full px-4 mb-4 '>
									<article className='mb-4 '>
										<div className='flex justify-between'>
											<h2 className='font-semibold text-mine-dark'>
												Development Director, Web &
												Mobile Development
											</h2>
											<span className='text-opacity-80 text-mine-dark'>
												2008 - 2014
											</span>
										</div>
										<h3 className='text-sm text-opacity-80 text-mine-dark'>
											Blue Shield of California (BSC), San
											Francisco
										</h3>
									</article>
									<article className='mb-4 '>
										<h4 className='mb-2 font-medium text-mine-dark '>
											Managed Potential running and drove
											new business critical projects
											including:
										</h4>
										<ol className='ml-6 leading-7 list-disc text-opacity-80 text-mine-dark '>
											<li>
												<span className='font-medium text-mine-dark'>
													Sign Me Up Delivered
												</span>{" "}
												program to automate the samll
												group sales and reneal process.
												Resulted in significant
												rentention of business for Blue
												Shield and over $5m in
												efficiency savings
											</li>
											<li>
												<span className='font-medium text-mine-dark'>
													Small Group Early Renewal
												</span>{" "}
												project to address a business
												critical opportunity for BSC
												with a short lead-time.
												Delivered an innovative solution
												using an agile delivery approach
												that met the tight timeline.
												Results were recognized within
												the company and featured in the
												Wall Street Journal
											</li>
										</ol>
									</article>
								</div>
							</div>
						</li>
					</ol>
				</div>
			</section>
			<section className='absolute bottom-0 flex items-center justify-between w-full px-5 py-2 mb-6 bg-white border rounded-md border-alto-light'>
				<Link
					to=''
					className='flex items-center text-base font-medium tracking-wider transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue '
				>
					<i>
						<BiArrowBack className='mr-1 text-xl font-semibold ' />
					</i>
					All Experts
				</Link>

				<div className='flex items-center gap-x-1.5 '>
					<Link
						to=''
						className='flex items-center font-medium transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue'
					>
						<i>
							<BiChevronLeft className='text-2xl font-semibold' />
						</i>
						Previous Expert
					</Link>
					<i>
						<AiOutlineLine className='text-xl rotate-90 text-edward-gray ' />
					</i>
					<Link
						to=''
						className='flex items-center font-medium transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue'
					>
						Next Expert
						<i>
							<BiChevronRight className='text-2xl font-semibold' />
						</i>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Expert;
