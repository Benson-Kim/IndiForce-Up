import React from "react";

import dateFormat from "dateformat";

import { BsCheck2Square, BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronDown, BiChevronsRight } from "react-icons/bi";
import { IoWarning } from "react-icons/io5";

import { Header } from "../Components";

const draftContracts = [
	{
		id: 1,
		expert: "Hallie Carlos",
		skill: "Software Engineer",
		project: "PHP Page Development",
		expiry: "13 Jan 2023",
		duration: "11 weeks",
		cost: "$300",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
	},
	{
		id: 2,
		expert: "Cate Sigmund",
		skill: "Frontend Developer",
		project: "Cox media Group mobile app design using Adobe XD",
		expiry: "26 Sep 2022",
		duration: "5 weeks",
		cost: "$620",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
	},
	{
		id: 3,
		expert: "Hallie Carlos",
		skill: "Software Engineer",
		project: "PHP Page Development",
		expiry: "27 Sep 2022",
		duration: "11 weeks",
		cost: "$300",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
	},
];
const today = dateFormat(new Date(), "mediumDate");

const Invoice = () => {
	return (
		<div className='flex-1 mx-3 '>
			<Header />
			<section className='flex items-center justify-between w-full px-5 py-2 mb-6 bg-white border rounded-md border-alto-light'>
				<h2 className='text-lg font-medium tracking-wider text-mine-dark'>
					Contracts
				</h2>

				<div className='flex items-center'>
					<div className='flex w-fit items-center justify-between px-3 py-1.5 ml-4 mr-3 transition duration-300 ease-in border rounded cursor-pointer hover:border-kyrrex-green hover:text-kyrrex-green  opacity-80 text-mine-dark border-alto-light'>
						All Contracts
						<i>
							<BiChevronDown className='text-xl' />
						</i>
					</div>
					<i className='text-xl transition duration-300 ease-in cursor-pointer text-kyrrex-green hover:text-malibu-blue'>
						<BsThreeDotsVertical />
					</i>
				</div>
			</section>
			<h2 className='flex items-center pl-1 mb-2 font-semibold tracking-wider text-mine-dark'>
				<span className='mr-1 text-lg'>{draftContracts?.length}</span>{" "}
				Active
			</h2>
			{draftContracts.length > 0 && (
				<section className='flex w-full h-auto px-5 py-3 mb-4 bg-white border rounded shadow border-alto-light'>
					<table>
						<thead className='bg-kyrrex-green bg-opacity-90 '>
							<tr>
								<th
									scope='col'
									class='text-sm font-medium  text-alto-light px-6 py-4 text-left'
								>
									#
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Expert
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Job Details
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Amount
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Duration
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Expiry
								</th>
								<th
									scope='col'
									class='text-sm font-semibold text-white px-6 py-4 text-left'
								>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{draftContracts?.map((contract, index) => (
								<tr
									key={index}
									className='align-middle transition duration-300 ease-in-out bg-white border-b cursor-pointer hover:bg-lily-light'
								>
									<td className='px-6 py-4 text-sm font-semibold text-mine-dark whitespace-nowrap'>
										{index + 1}
									</td>
									<td className='py-4 pl-0 pr-6 text-sm whitespace-nowrap'>
										<div className='flex items-center gap-x-3 '>
											<img
												className='object-cover rounded-full w-14 h-14'
												alt='User avatar'
												src={contract.userAvatar}
											/>
											<div className='flex flex-col w-full '>
												<h2 className='text-base font-medium text-mine-dark'>
													{contract.expert}
												</h2>

												<p className='font-light text-mine-dark opacity-80'>
													{contract.skill}
												</p>
											</div>
										</div>
									</td>

									<td className='px-6 py-4 text-sm text-malibu-blue whitespace-wrap'>
										{contract.project}
									</td>
									<td className='px-6 py-4 text-mine-dark opacity-80 whitespace-nowrap'>
										{contract.cost}
									</td>
									<td className='px-6 py-4 text-mine-dark opacity-80 whitespace-nowrap'>
										{contract.duration}
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										{dateFormat(
											`${contract.expiry}`,
											"mediumDate",
										) === today ? (
											<div className='flex items-center text-red-500 gap-x-1 place-self-center '>
												<i>
													<IoWarning className='-mt-1 text-xl fill-red-500' />
												</i>
												<p>
													<span className='font-medium'>
														Today
													</span>
												</p>
											</div>
										) : (
											<div className='flex items-center gap-x-1.5 text-mine-dark opacity-80 place-self-center  '>
												<span className=''>
													{dateFormat(
														`${contract.expiry}`,
														"mediumDate",
													)}
												</span>
											</div>
										)}
									</td>
									<td className='flex items-center float-right px-6 py-4 font-semibold text-mine-dark whitespace-nowrap gap-x-3 '>
										{dateFormat(
											`${contract.expiry}`,
											"mediumDate",
										) === today && (
											<>
												<button className='flex items-center gap-1 px-3 py-1 text-sm text-white uppercase transition duration-300 ease-in bg-orange-500 bg-opacity-75 rounded-sm shadow cursor-pointer hover:bg-opacity-100'>
													<i>
														<BiChevronsRight className='text-xl' />
													</i>
													Extend
												</button>
												<span>or</span>
											</>
										)}
										<button className='flex items-center gap-1 px-3 py-1 text-sm text-white uppercase transition duration-300 ease-in bg-opacity-75 rounded-sm shadow cursor-pointer bg-kyrrex-green hover:bg-opacity-100'>
											<i>
												<BsCheck2Square className='text-lg' />
											</i>
											close
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			)}
		</div>
	);
};

export default Invoice;
