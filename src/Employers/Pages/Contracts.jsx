import React from "react";

import dateFormat from "dateformat";

import {
	BsCheck2Square,
	BsPencilSquare,
	BsThreeDotsVertical,
} from "react-icons/bs";
import { BiChevronDown, BiChevronsRight } from "react-icons/bi";
import { IoWarning } from "react-icons/io5";
import { Header } from "../Components";
import { MdOutlineDelete } from "react-icons/md";

const activeContracts = [
	{
		id: 1,
		project: "PHP Page Development",
		expert: "Hallie Carlos",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "1 Oct 2024",
	},
	{
		id: 2,
		project: "Cox media Group mobile app design using Adobe XD",
		expert: "Cate Sigmund",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "26 Sep 2022",
	},
	{
		id: 3,
		project: "Redesign of single property and landing pages",
		expert: "Jim Freeman",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "21 Dec 2022",
	},
	{
		id: 4,
		project: "Frontend landing page for selling NFTS",
		expert: "Julian Wahura",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "9 Jun 2023",
	},
];

const draftContracts = [
	{
		id: 1,
		project: "PHP Page Development",
		expert: "Hallie Carlos",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "1 Oct 2024",
	},
	{
		id: 2,
		project: "Cox media Group mobile app design using Adobe XD",
		expert: "Cate Sigmund",
		userAvatar:
			"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
		expiry: "26 Sep 2022",
	},
];

const today = dateFormat(new Date(), "mediumDate");

const Contracts = () => {
	return (
		<div className='flex-1 bg-zinc-100 '>
			<Header />
			<section className='flex justify-between w-full p-4 bg-white border-gray-300 border-y-2'>
				<h2 className='text-lg font-medium text-zinc-600'>Contracts</h2>

				<div className='flex items-center'>
					<div className='flex items-center justify-between px-3 py-1 ml-4 mr-3 transition duration-300 ease-in border rounded-sm cursor-pointer hover:border-emerald-300 hover:text-emerald-600 w-36 text-zinc-500 border-zinc-300'>
						All Contracts
						<i>
							<BiChevronDown className='text-xl' />
						</i>
					</div>
					<i className='text-xl transition duration-300 ease-in cursor-pointer text-zinc-500 hover:text-zinc-800'>
						<BsThreeDotsVertical />
					</i>
				</div>
			</section>
			<section className='relative flex w-full border-t-2 border-gray-300'>
				<div className='flex-col flex-1'>
					<div className=''>
						<h3 className='mx-4 mt-3 font-medium text-zinc-600'>
							<span className='text-zinc-800'>
								{activeContracts?.length}{" "}
							</span>
							Active
						</h3>
						<div className='relative py-3 m-3 bg-white rounded shadow-md'>
							{activeContracts?.map((contract, index) => (
								<article
									key={index}
									className='grid w-full grid-cols-3 px-6 py-1 transition duration-300 ease-in border-b border-zinc-200 hover:bg-zinc-100'
								>
									<div className='flex items-center gap-x-3 '>
										<img
											className='object-cover rounded-full w-14 h-14'
											alt='User avatar'
											src={contract.userAvatar}
										/>
										<div className='flex flex-col w-full '>
											<h2 className='font-medium text-zinc-800'>
												{contract.project}
											</h2>

											<p className='font-light text-zinc-500'>
												{contract.expert}
											</p>
										</div>
									</div>

									{dateFormat(
										`${contract.expiry}`,
										"mediumDate",
									) === today ? (
										<div className='flex items-center gap-x-1.5 text-red-500 place-self-center  '>
											<i>
												<IoWarning className='text-2xl fill-red-500' />
											</i>
											<p>
												Expires{" "}
												<span className='font-medium'>
													Today
												</span>
											</p>
										</div>
									) : (
										<div className='flex items-center gap-x-1.5 text-zinc-700 place-self-center  '>
											Expires{" "}
											<span className='font-medium'>
												{dateFormat(
													`${contract.expiry}`,
													"mediumDate",
												)}
											</span>
										</div>
									)}

									<div className='flex items-center flex-1 align-middle gap-x-3 place-content-end '>
										{dateFormat(
											`${contract.expiry}`,
											"mediumDate",
										) === today && (
											<>
												<button className='flex items-center gap-1 px-4 py-2 text-sm text-white uppercase transition duration-300 ease-in bg-orange-500 rounded-sm shadow cursor-pointer hover:bg-orange-700'>
													<i>
														<BiChevronsRight className='text-xl' />
													</i>
													Extend
												</button>
												<span>or</span>
											</>
										)}
										<button className='flex items-center gap-1 px-4 py-2 text-sm text-white uppercase transition duration-300 ease-in rounded-sm shadow cursor-pointer bg-emerald-500 hover:bg-green-700'>
											<i>
												<BsCheck2Square className='text-lg' />
											</i>
											close
										</button>
									</div>
								</article>
							))}
						</div>
					</div>
					<div className=''>
						<h3 className='mx-4 mt-3 font-medium text-zinc-600'>
							<span className='text-zinc-800'>
								{draftContracts?.length}{" "}
							</span>
							Drafts
						</h3>
						<div className='relative py-3 m-3 bg-white rounded shadow-md'>
							{draftContracts?.map((contract, index) => (
								<article
									key={index}
									className='grid w-full grid-cols-3 px-6 py-1 transition duration-300 ease-in border-b border-zinc-200 hover:bg-zinc-100'
								>
									<div className='flex items-center gap-x-3 '>
										<img
											className='object-cover rounded-full w-14 h-14'
											alt='User avatar'
											src={contract.userAvatar}
										/>
										<div className='flex flex-col w-full '>
											<h2 className='font-medium text-zinc-800'>
												{contract.project}
											</h2>

											<p className='font-light text-zinc-500'>
												{contract.expert}
											</p>
										</div>
									</div>

									<div className='flex items-center gap-x-1.5 text-zinc-700 place-self-center  '>
										<span className='font-medium'>
											{dateFormat(
												`${contract.expiry}`,
												"mediumDate",
											)}
										</span>
									</div>

									<div className='flex items-center flex-1 align-middle gap-x-3 place-content-end '>
										<button className='flex items-center gap-1 px-4 py-2 text-sm text-white uppercase transition duration-300 ease-in rounded-sm shadow cursor-pointer bg-rose-500 hover:bg-rose-700'>
											<i>
												<MdOutlineDelete className='text-xl' />
											</i>
											Delete
										</button>

										<button className='flex items-center gap-1 px-4 py-2 text-sm text-white uppercase transition duration-300 ease-in bg-purple-600 rounded-sm shadow cursor-pointer hover:bg-purple-800'>
											<i>
												<BsPencilSquare className='text-lg' />
											</i>
											Edit
										</button>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contracts;
