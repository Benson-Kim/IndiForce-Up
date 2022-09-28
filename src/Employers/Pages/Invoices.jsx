import React from "react";

import dateFormat from "dateformat";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import {
	IoCheckmarkCircle,
	IoRemoveCircleSharp,
	IoWarning,
} from "react-icons/io5";

import { Header } from "../Components";

const Invoices = () => {
	return (
		<div className='flex-1 mx-3 '>
			<Header />
			<section className='flex items-center justify-between w-full px-5 py-2 mb-6 bg-white border rounded-md border-alto-light'>
				<h2 className='text-lg font-medium tracking-wider text-mine-dark'>
					Invoices
				</h2>

				<div className='flex items-center'>
					<p className='font-medium text-mine-dark opacity-80'>
						Total amount due{" "}
						<span className='ml-1 font-semibold'>$3,500</span>
					</p>
					<div className='flex items-center justify-between px-3 py-1.5 ml-4 mr-3 transition duration-300 ease-in border rounded cursor-pointer hover:border-kyrrex-green hover:text-kyrrex-green w-fit opacity-80 text-mine-dark border-alto-light'>
						All Invoices
						<i>
							<BiChevronDown className='text-xl' />
						</i>
					</div>
					<i className='text-xl transition duration-300 ease-in cursor-pointer text-kyrrex-green hover:text-malibu-blue'>
						<BsThreeDotsVertical />
					</i>
				</div>
			</section>
			<section className='flex w-full h-auto px-5 py-3 mb-4 bg-white border rounded shadow border-alto-light'>
				<table>
					<thead className='border-b'>
						<tr>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								#
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Date
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Job Details
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Hirer
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Status
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Time
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
							>
								Amount
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'>
							<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
								1
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("Jun 9 2007", "mediumDate")}
							</td>

							<td className='px-6 py-4 text-sm text-malibu-blue whitespace-nowrap'>
								Frontend landing page for selling NFTS
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								Cryptum.com
							</td>
							<td className='flex items-center px-6 py-4 text-sm gap-x-1 text-kyrrex-green opacity-90 whitespace-nowrap'>
								<i>
									<IoCheckmarkCircle className='text-xl fill-kyrrex-green ' />
								</i>
								Paid
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								02:15 pm
							</td>
							<td className='px-6 py-4 font-medium text-mine-dark whitespace-nowrap '>
								$350
							</td>
						</tr>
						<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'>
							<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
								2
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("Jun 9 2007", "mediumDate")}
							</td>

							<td className='px-6 py-4 text-sm text-malibu-blue whitespace-nowrap'>
								iPhone app landing page design and development
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								Paravel Inc.
							</td>
							<td className='flex items-center px-6 py-4 text-sm font-medium gap-x-1 text-amaranth-pink whitespace-nowrap'>
								<i>
									<IoRemoveCircleSharp className='text-xl fill-amaranth-pink' />
								</i>
								Past Due
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("1645", "shortTime")}
							</td>
							<td className='px-6 py-4 font-medium text-mine-dark whitespace-nowrap '>
								$3,500
							</td>
						</tr>
						<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'>
							<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
								3
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("Jun 9 2007", "mediumDate")}
							</td>

							<td className='px-6 py-4 text-sm text-malibu-blue whitespace-nowrap'>
								iPhone app landing page design and development
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								Paravel Inc.
							</td>
							<td className='flex items-center px-6 py-4 text-sm gap-x-1 text-mine-dark opacity-90 whitespace-nowrap'>
								<i>
									<IoWarning className='text-xl fill-amber-500' />
								</i>
								Due
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								02:15 pm
							</td>
							<td className='px-6 py-4 font-medium text-mine-dark whitespace-nowrap '>
								$3,500
							</td>
						</tr>
						<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'>
							<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
								4
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("Jun 9 2007", "mediumDate")}
							</td>

							<td className='px-6 py-4 text-sm text-malibu-blue whitespace-nowrap'>
								Redesign of single property and landing pages
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								Booking.com
							</td>
							<td className='flex items-center px-6 py-4 text-sm gap-x-1 text-kyrrex-green opacity-90 whitespace-nowrap'>
								<i>
									<IoCheckmarkCircle className='text-xl fill-kyrrex-green' />
								</i>
								Paid
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								02:15 pm
							</td>
							<td className='px-6 py-4 font-medium text-mine-dark whitespace-nowrap '>
								$400
							</td>
						</tr>
						<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'>
							<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
								5
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								{dateFormat("Dec 9 2022", "mediumDate")}
							</td>

							<td className='px-6 py-4 text-sm font-medium text-malibu-blue whitespace-nowrap'>
								Cox media Group mobile app design using Adobe XD
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								Cox media group
							</td>
							<td className='flex items-center px-6 py-4 text-sm font-medium gap-x-1 text-amaranth-pink whitespace-nowrap'>
								<i>
									<IoRemoveCircleSharp className='text-xl fill-amaranth-pink' />
								</i>
								Past Due
							</td>
							<td className='px-6 py-4 text-sm whitespace-nowrap'>
								04:45 pm
							</td>
							<td className='px-6 py-4 font-medium text-mine-dark whitespace-nowrap '>
								$300
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default Invoices;
