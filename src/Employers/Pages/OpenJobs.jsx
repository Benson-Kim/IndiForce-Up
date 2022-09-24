import React from "react";

import { Link } from "react-router-dom";

import { BsCreditCard } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { Header } from "../Components";

const OpenJobs = () => {
	return (
		<div className='flex-1 bg-zinc-100 '>
			<Header />
			<section className='flex w-full border-gray-300 border-y-2'>
				<div className='w-1/3 px-4 py-3 bg-white border-r-2 border-zinc-300'>
					<p className='font-semibold text-zinc-800'>
						Open <span className='ml-8 text-zinc-500'>4 Jobs</span>{" "}
					</p>
				</div>
				<div className='flex items-center justify-between flex-1 px-6'>
					<h2 className='font-semibold text-zinc-800 '>
						Weather widget
					</h2>
					<Link
						to=''
						className='font-semibold text-blue-500 capitalize transition duration-300 ease-in cursor-pointer hover:text-green-600'
					>
						View Related
					</Link>
				</div>
			</section>
			<section className='flex w-full border-gray-300 border-y-2'>
				<div className='w-1/3 py-3 bg-white border-r-2 border-zinc-300'>
					<Link
						to=''
						className='flex font-normal hover:font-medium  py-2 items-center gap-x-3 border-l-4 hover:bg-zinc-100 transition duration-300 ease-in cursor-pointer border-white hover:border-[#9d4cb3]'
					>
						<div className='relative inline-flex mx-3'>
							<span className='absolute bottom-0 right-0 inline-flex w-3 h-3 transform bg-red-500 rounded-full ring-2 ring-white translate-x-1/3 translate-y-1/3'></span>
							<img
								className='object-cover w-16 h-12 rounded-full'
								alt='User avatar'
								src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
							/>
						</div>

						<div className='flex flex-col w-full gap-y-1 '>
							<div className='flex items-center justify-between w-full pr-3'>
								<h2 className='text-lg text-zinc-800'>
									Halie Carlos
								</h2>
								<span className='text-sm text-zinc-400 '>
									0230
								</span>
							</div>
							<p className='text-sm text-zinc-500'>
								PHP Page Development
							</p>
						</div>
					</Link>
					<hr className='ml-24 border-zinc-300' />
					<Link
						to=''
						className='flex font-normal hover:font-medium  py-2 items-center gap-x-3 border-l-4 hover:bg-zinc-100 transition duration-300 ease-in cursor-pointer border-white hover:border-[#9d4cb3]'
					>
						<div className='relative inline-flex mx-3'>
							<span className='absolute bottom-0 right-0 inline-flex w-3 h-3 transform bg-red-500 rounded-full ring-2 ring-white translate-x-1/3 translate-y-1/3'></span>
							<img
								className='object-cover w-16 h-12 rounded-full'
								alt='User avatar'
								src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9obnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
							/>
						</div>

						<div className='flex flex-col w-full gap-y-1 '>
							<div className='flex items-center justify-between w-full pr-3'>
								<h2 className='text-lg text-zinc-800'>
									Cate Sigmund
								</h2>
								<span className='text-sm text-zinc-400 '>
									1645
								</span>
							</div>
							<p className='text-sm text-zinc-500'>
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className='ml-24 border-zinc-300' />
					<Link
						to=''
						className='flex font-normal hover:font-medium  py-2 items-center gap-x-3 border-l-4 hover:bg-zinc-100 transition duration-300 ease-in cursor-pointer border-white hover:border-[#9d4cb3]'
					>
						<div className='relative inline-flex mx-3'>
							<span className='absolute bottom-0 right-0 inline-flex w-3 h-3 transform bg-red-500 rounded-full ring-2 ring-white translate-x-1/3 translate-y-1/3'></span>
							<img
								className='object-cover w-16 h-12 rounded-full'
								alt='User avatar'
								src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
							/>
						</div>

						<div className='flex flex-col w-full gap-y-1 '>
							<div className='flex items-center justify-between w-full pr-3'>
								<h2 className='text-lg capitalize text-zinc-800'>
									Jonahs Kakaroto
								</h2>
								<span className='text-sm text-zinc-400 '>
									1245
								</span>
							</div>
							<p className='text-sm text-zinc-500'>
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className='ml-24 border-zinc-300' />
					<Link
						to=''
						className='flex font-normal hover:font-medium  py-2 items-center gap-x-3 border-l-4 hover:bg-zinc-100 transition duration-300 ease-in cursor-pointer border-white hover:border-[#9d4cb3]'
					>
						<div className='relative inline-flex mx-3'>
							<span className='absolute bottom-0 right-0 inline-flex w-3 h-3 transform bg-red-500 rounded-full ring-2 ring-white translate-x-1/3 translate-y-1/3'></span>
							<img
								className='object-cover w-16 h-12 rounded-full'
								alt='User avatar'
								src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
							/>
						</div>

						<div className='flex flex-col w-full gap-y-1 '>
							<div className='flex items-center justify-between w-full pr-3'>
								<h2 className='text-lg text-zinc-800'>
									Jim Freeman
								</h2>
								<span className='text-sm text-zinc-400 '>
									10:30 PM
								</span>
							</div>
							<p className='text-sm text-zinc-500'>
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className='ml-24 border-zinc-300' />
					<Link
						to=''
						className='flex font-normal hover:font-medium  py-2 items-center gap-x-3 border-l-4 hover:bg-zinc-100 transition duration-300 ease-in cursor-pointer border-white hover:border-[#9d4cb3]'
					>
						<div className='relative inline-flex mx-3'>
							<span className='absolute bottom-0 right-0 inline-flex w-3 h-3 transform bg-red-500 rounded-full ring-2 ring-white translate-x-1/3 translate-y-1/3'></span>
							<img
								className='object-cover w-16 h-12 rounded-full'
								alt='User avatar'
								src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
							/>
						</div>

						<div className='flex flex-col w-full gap-y-1 '>
							<div className='flex items-center justify-between w-full pr-3'>
								<h2 className='text-lg text-zinc-800'>
									Julian Wan
								</h2>
								<span className='text-sm text-zinc-400 '>
									09:22 AM
								</span>
							</div>
							<p className='text-sm text-zinc-500'>
								Fullstack Developer
							</p>
						</div>
					</Link>
					<hr className='ml-24 border-zinc-300' />
				</div>
				<div className='flex-1'>
					<div className=''>
						<h2 className='m-3 text-lg font-semibold text-zinc-600'>
							Job Description
						</h2>
						<article className='flex flex-col items-center p-6 m-3 space-y-3 bg-white border rounded shadow-md border-zinc-300'>
							<div className='flex w-full py-4 mx-6 border-b-2 border-zinc-200'>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-orange-500 rounded-full'>
										<BsCreditCard className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-zinc-800'>
											Open
										</h2>
										<p className='text-sm text-zinc-500'>
											Budget
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-lime-500'>
										<RiMapPin2Line className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full capitalize'>
										<h2 className='font-medium text-zinc-800'>
											London, UK
										</h2>
										<p className='text-sm text-zinc-500'>
											Remote
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-[#681187] rounded-full'>
										<GiSandsOfTime className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-zinc-800'>
											Feb 2023
										</h2>
										<p className='text-sm text-zinc-500'>
											Deadline
										</p>
									</div>
								</article>
							</div>
							<div className='w-full py-4'>
								<p className='leading-7 text-zinc-800'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit quasi vero,
									reiciendis, molestiae voluptas enim possimus
									tempore nobis labore repellat veritatis
									tempora atque praesentium fugiat. Quia quis
									temporibus repellendus corrupti?
								</p>
							</div>
						</article>
					</div>
					<div className='flex-1 '>
						<h2 className='m-3 text-lg font-semibold text-zinc-600'>
							Expert Details
						</h2>
						<article className='flex flex-col items-center px-6 py-3 m-3 space-y-3 bg-white border rounded shadow-md border-zinc-300'>
							<div className='flex items-center w-full pb-3 border-b-2 gap-x-3 border-zinc-200'>
								<img
									className='object-cover w-20 h-20 rounded-full'
									alt='User avatar'
									src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								/>

								<div className='flex flex-col w-full gap-y-1 '>
									<div className='flex items-center justify-between w-full pr-3'>
										<h2 className='text-lg font-semibold text-zinc-800'>
											Julian Wan
										</h2>
										<Link
											to=''
											className='flex items-center space-x-2 text-teal-500 transition duration-300 ease-in hover:text-green-600 '
										>
											View full profile
											<i>
												<BiChevronRight className='text-xl' />
											</i>
										</Link>
									</div>
									<p className=' text-zinc-500'>
										Fullstack Developer
									</p>
								</div>
							</div>
							<div className='flex w-full pb-4 mx-6 border-b-2 border-zinc-200'>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-orange-500 rounded-full'>
										<BsCreditCard className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='text-lg font-medium text-zinc-800'>
											Gold
										</h2>
										<p className='-mt-1 text-zinc-500'>
											Hourly rate
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 bg-[#9d4cb3] rounded-full'>
										<IoBriefcaseOutline className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='text-lg font-medium text-zinc-800'>
											15 Years
										</h2>
										<p className='-mt-1 text-zinc-500'>
											Experience
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-lime-500'>
										<RiMapPin2Line className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='text-lg font-medium text-zinc-800'>
											Mountain View, LA
										</h2>
										<p className='-mt-1 text-zinc-500'>
											Location
										</p>
									</div>
								</article>
							</div>
							<div className='w-full pb-4'>
								<p className='leading-7 text-zinc-800'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Odit quasi vero,
									reiciendis, molestiae voluptas enim possimus
									tempore nobis labore repellat veritatis
									tempora atque praesentium fugiat. Quia quis
									temporibus repellendus corrupti?
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OpenJobs;
