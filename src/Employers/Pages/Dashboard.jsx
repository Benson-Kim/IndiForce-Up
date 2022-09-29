import React from "react";

import { BsCreditCard } from "react-icons/bs";
import { IoFileTrayOutline } from "react-icons/io5";

import { Header } from "../Components";
import { RiMapPin2Line } from "react-icons/ri";

import "chartkick/chart.js";
import { AreaChart, ColumnChart } from "react-chartkick";
import { FiEdit } from "react-icons/fi";

const profileViews = [
	{
		name: "Profile Views",
		data: {
			"2022-09-14": 316,
			"2022-09-15": 298,
			"2022-09-16": 171,
			"2022-09-17": 109,
			"2022-09-18": 289,
			"2022-09-19": 394,
			"2022-09-20": 362,
			"2022-09-21": 412,
			"2022-09-22": 208,
			"2022-09-24": 315,
			"2022-09-25": 111,
			"2022-09-26": 479,
			"2022-09-27": 251,
			"2022-09-28": 330,
		},
	},
];

const jobOffers = [
	{
		name: "Job Offers",
		data: {
			"2022-09-21": 13,
			"2022-09-22": 11,
			"2022-09-24": 5,
			"2022-09-25": 8,
			"2022-09-26": 7,
			"2022-09-27": 1,
			"2022-09-28": 11,
		},
	},
];

const Dashboard = () => {
	return (
		<div className='flex-1 mx-3 '>
			<Header />

			<h2 className='flex items-center pl-1 mb-4 font-semibold tracking-wider text-mine-dark'>
				Account Overview
			</h2>
			<section className='flex items-center justify-between w-full h-auto mb-4 '>
				<div className='relative w-1/2 px-5 py-3 mr-4 bg-white border rounded shadow border-alto-light'>
					<ColumnChart
						data={jobOffers}
						height={"240px"}
						colors={["#ab47bc"]}
						download='job offers'
					/>
					<span className='absolute text-xs font-medium top-5 text-mine-dark right-2'>
						Last 7 Days
					</span>
				</div>
				<div className='relative flex-1 px-5 py-3 mr-4 bg-white border rounded shadow border-alto-light'>
					<AreaChart
						data={profileViews}
						height={"240px"}
						colors={["#eb2e57"]}
						download='profile views'
					/>
					<span className='absolute text-xs font-medium top-5 text-mine-dark right-2'>
						Last 15 Days
					</span>
				</div>
			</section>
			<h2 className='flex items-center pl-1 mb-4 font-semibold tracking-wider text-mine-dark'>
				Today Stats
			</h2>
			<section className='flex items-center justify-between w-full h-auto mb-4 '>
				<article className='relative flex items-center w-1/4 px-5 py-3 mr-4 space-x-3 bg-white border rounded shadow border-alto-light'>
					<i className='p-2 rounded-full bg-kyrrex-green'>
						<FiEdit className='text-4xl text-lily-light' />
					</i>
					<div className='flex items-center w-full space-x-1.5 '>
						<h5 className='text-5xl font-semibold '>4</h5>
						<p className='text-sm whitespace-normal opacity-75 text-mine-dark'>
							Recommendations to review
						</p>
					</div>
				</article>
				<article className='relative flex items-center w-1/4 px-5 py-3 mr-4 space-x-3 bg-white border rounded shadow border-alto-light'>
					<i className='p-2 rounded-full bg-malibu-blue'>
						<IoFileTrayOutline className='text-4xl text-lily-light' />
					</i>
					<div className='flex items-center w-full space-x-1.5 '>
						<h5 className='text-5xl font-semibold '>2</h5>
						<p className='text-sm whitespace-normal opacity-75 text-mine-dark'>
							Active contracts
						</p>
					</div>
				</article>
				<article className='relative flex items-center w-1/4 px-5 py-3 mr-4 space-x-3 bg-white border rounded shadow border-alto-light'>
					<i className='p-2 rounded-full bg-seanse-purple'>
						<RiMapPin2Line className='text-4xl text-lily-light' />
					</i>
					<div className='flex items-center w-full space-x-2 '>
						<h5 className='text-5xl font-semibold '>4</h5>
						<p className='text-sm whitespace-normal opacity-75 text-mine-dark'>
							Recommendations to review
						</p>
					</div>
				</article>
				<article className='relative flex items-center w-1/4 px-5 py-3 mr-4 space-x-3 bg-white border rounded shadow border-alto-light'>
					<i className='p-2 rounded-full bg-amaranth-pink'>
						<BsCreditCard className='text-4xl text-lily-light' />
					</i>
					<div className='relative flex w-full '>
						<span className='top-0 text-sm font-semibold right-2'>
							$
						</span>
						<div className='flex items-center w-full space-x-1.5 '>
							<h5 className='text-5xl font-semibold '> 2800</h5>
							<p className='text-sm whitespace-normal opacity-75 text-mine-dark'>
								Total received
							</p>
						</div>
					</div>
				</article>
			</section>
			<h2 className='flex items-center pl-1 mb-4 font-semibold tracking-wider text-mine-dark'>
				Recent Activity
			</h2>
			<section className='flex items-center justify-between w-full h-auto mb-4 '>
				<article className='relative w-1/3 mr-4 space-x-3 bg-white rounded shadow '>
					<div className='py-4 mb-3 text-sm text-center rounded-t bg-kyrrex-green bg-opacity-80 text-lily-light'>
						Invoices
					</div>
					<ul className='px-5 '>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Unpaid </p>
							<span className='font-semibold'>0</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Overdue </p>
							<span className='font-semibold'>3</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium '>Paid </p>
							<span className='font-semibold'>25</span>
						</li>
					</ul>
				</article>
				<article className='relative w-1/3 mr-4 space-x-3 bg-white rounded shadow '>
					<div className='py-4 mb-3 text-sm text-center rounded-t bg-opacity-80 bg-amaranth-pink text-lily-light'>
						Open Jobs
					</div>
					<ul className='px-5 '>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Recommended </p>
							<span className='font-semibold'>16</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Just posted </p>
							<span className='font-semibold'>3</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium '>Saved to Favorites </p>
							<span className='font-semibold'>5</span>
						</li>
					</ul>
				</article>
				<article className='relative w-1/3 mr-4 space-x-3 bg-white rounded shadow '>
					<div className='py-4 mb-3 text-sm text-center rounded-t bg-malibu-blue bg-opacity-80 text-lily-light'>
						New Messages
					</div>
					<ul className='px-5 '>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Personal invitations </p>
							<span className='font-semibold'>231</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium'>Active discussions </p>
							<span className='font-semibold'>8</span>
						</li>
						<li className='flex items-center justify-between mb-5 text-sm text-mine-dark'>
							<p className='font-medium '>Under Contract </p>
							<span className='font-semibold'>2</span>
						</li>
					</ul>
				</article>
			</section>
		</div>
	);
};

export default Dashboard;
