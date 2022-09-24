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
		<div className='flex-1 bg-zinc-100 '>
			<Header />
			<section className='flex justify-between w-full p-4 bg-white border-gray-300 border-y-2'>
				<h2 className='text-lg font-medium text-zinc-600'>Invoices</h2>

				<div className='flex items-center'>
					<p className='font-medium text-zinc-500'>
						Total amount due{" "}
						<span className='ml-1 text-zinc-600'>$3,500</span>
					</p>
					<div className='flex items-center justify-between px-3 py-1 ml-4 mr-3 transition duration-300 ease-in border rounded-sm cursor-pointer hover:border-emerald-300 hover:text-emerald-600 w-36 text-zinc-500 border-zinc-300'>
						All Invoices
						<i>
							<BiChevronDown className='text-xl' />
						</i>
					</div>
					<i className='text-xl transition duration-300 ease-in cursor-pointer text-zinc-500 hover:text-zinc-800'>
						<BsThreeDotsVertical />
					</i>
				</div>
			</section>
			<section className='flex w-full border-t-2 border-gray-300'>
				<div className='flex-1'>
					<article className='flex flex-col p-6 m-3 space-y-3 bg-white border-t rounded shadow-md border-zinc-300'>
						<div className='flex flex-col'>
							<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
								<div className='inline-block min-w-full sm:px-6 lg:px-8'>
									<div className='overflow-x-auto'>
										<table className='min-w-full'>
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
												<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-zinc-100'>
													<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
														1
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"Jun 9 2007",
															"mediumDate",
														)}
													</td>

													<td className=' text-[#007FFF] font-medium px-6 py-4 whitespace-nowrap'>
														Frontend landing page
														for selling NFTS
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														Cryptum.com
													</td>
													<td className='flex items-center px-6 py-4 font-medium gap-x-1 text-lime-700 whitespace-nowrap'>
														<i>
															<IoCheckmarkCircle className='text-2xl fill-lime-600' />
														</i>
														Paid
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														02:15 pm
													</td>
													<td className='px-6 py-4 font-medium text-zinc-900 whitespace-nowrap'>
														$350
													</td>
												</tr>
												<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-zinc-100'>
													<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
														2
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"Jun 9 2007",
															"mediumDate",
														)}
													</td>

													<td className=' text-[#007FFF] font-medium px-6 py-4 whitespace-nowrap'>
														iPhone app landing page
														design and development
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														Paravel Inc.
													</td>
													<td className='flex font-medium  items-center gap-x-1 text-[#D2122E] px-6 py-4 whitespace-nowrap'>
														<i>
															<IoRemoveCircleSharp className='text-2xl fill-[#E32636]' />
														</i>
														Past Due
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"1645",
															"shortTime",
														)}
													</td>
													<td className='px-6 py-4 font-medium text-zinc-900 whitespace-nowrap'>
														$3,500
													</td>
												</tr>
												<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-zinc-100'>
													<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
														3
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"Jun 9 2007",
															"mediumDate",
														)}
													</td>

													<td className=' text-[#007FFF] font-medium px-6 py-4 whitespace-nowrap'>
														iPhone app landing page
														design and development
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														Paravel Inc.
													</td>
													<td className='flex items-center px-6 py-4 font-medium gap-x-1 text-zinc-800 whitespace-nowrap'>
														<i>
															<IoWarning className='text-2xl fill-amber-500' />
														</i>
														Due
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														02:15 pm
													</td>
													<td className='px-6 py-4 font-medium text-zinc-900 whitespace-nowrap'>
														$3,500
													</td>
												</tr>
												<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-zinc-100'>
													<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
														4
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"Jun 9 2007",
															"mediumDate",
														)}
													</td>

													<td className=' text-[#007FFF] font-medium px-6 py-4 whitespace-nowrap'>
														Redesign of single
														property and landing
														pages
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														Booking.com
													</td>
													<td className='flex items-center px-6 py-4 font-medium gap-x-1 text-lime-700 whitespace-nowrap'>
														<i>
															<IoCheckmarkCircle className='text-2xl fill-lime-600' />
														</i>
														Paid
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														02:15 pm
													</td>
													<td className='px-6 py-4 font-medium text-zinc-900 whitespace-nowrap'>
														$400
													</td>
												</tr>
												<tr className='transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-zinc-100'>
													<td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
														5
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														{dateFormat(
															"Dec 9 2022",
															"mediumDate",
														)}
													</td>

													<td className=' text-[#007FFF] font-medium px-6 py-4 whitespace-nowrap'>
														Cox media Group mobile
														app design using Adobe
														XD
													</td>
													<td className='px-6 py-4 capitalize text-zinc-800 whitespace-nowrap'>
														Cox media group
													</td>
													<td className='flex font-medium  items-center gap-x-1 text-[#D2122E] px-6 py-4 whitespace-nowrap'>
														<i>
															<IoRemoveCircleSharp className='text-2xl fill-[#E32636]' />
														</i>
														Past Due
													</td>
													<td className='px-6 py-4 text-zinc-800 whitespace-nowrap'>
														04:45 pm
													</td>
													<td className='px-6 py-4 font-medium text-zinc-900 whitespace-nowrap'>
														$300
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Invoices;
