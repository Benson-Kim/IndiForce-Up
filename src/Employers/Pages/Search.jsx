import React from "react";

import { BsCreditCard } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import { Header } from "../Components";

const Search = () => {
	return (
		<div className='flex-1 bg-zinc-100 '>
			<Header />
			<section className='flex justify-between w-full p-5 bg-white border-gray-300 border-y-2'>
				<div className='flex space-x-5'>
					<h2 className='font-medium text-zinc-700'>
						Search results for "web"
					</h2>
					<p className='font-normal text-zinc-500'>
						1-5 of 35 results
					</p>
				</div>
				<div className=''></div>
			</section>
			<section className='flex w-full h-full border-gray-300 border-y-2'>
				<div className='my-3'>
					<article className='flex p-3 mx-3 mb-4 bg-white rounded shadow'>
						<div className='w-1/3 border-r-2 border-dashed border-zinc-300'>
							<div className='flex items-center gap-x-3 '>
								<img
									className='object-cover w-16 h-16 rounded-full'
									alt='User avatar'
									src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
								/>
								<div className='flex flex-col w-full gap-y-1 '>
									<h2 className='text-lg font-medium text-zinc-800'>
										Halie Carlos
									</h2>

									<p className='text-sm text-zinc-500'>
										PHP Page Development
									</p>
								</div>
							</div>
							<div className='flex flex-wrap gap-3 my-3 '>
								<span className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Branding
								</span>
								<span className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Collateral
								</span>
								<span className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Logos and Identity
								</span>
								<span className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Presentation and Decks
								</span>
								<span className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Promo Materials
								</span>
							</div>
						</div>
						<div className='flex-1 mx-6'>
							<div className='flex w-full pb-4 mx-6 border-b-2 border-zinc-200'>
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
									<i className='p-2 rounded-full bg-lime-green'>
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
						</div>
					</article>
					<article className='flex p-3 mx-3 mb-4 bg-white rounded shadow'>
						<div className='w-1/3 border-r-2 border-dashed border-zinc-300'>
							<div className='flex items-center gap-x-3 '>
								<img
									className='object-cover w-16 h-16 rounded-full'
									alt='User avatar'
									src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
								/>
								<div className='flex flex-col w-full gap-y-1 '>
									<h2 className='text-lg font-medium text-zinc-800'>
										Halie Carlos
									</h2>

									<p className='text-sm text-zinc-500'>
										PHP Page Development
									</p>
								</div>
							</div>
							<div className='flex flex-wrap gap-3 my-3 '>
								<p className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Branding
								</p>
								<p className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Collateral
								</p>
								<p className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Logos and Identity
								</p>
								<p className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Presentation and Decks
								</p>
								<p className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-teal hover:bg-green-600 '>
									Promo Materials
								</p>
								<span className='font-medium tracking-wide transition duration-300 ease-in cursor-pointer text-cyan-500 hover:text-purple-500'>
									+3 more
								</span>
							</div>
						</div>
						<div className='flex-1 mx-6'>
							<div className='flex w-full pb-4 mx-6 border-b-2 border-zinc-200'>
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
									<i className='p-2 rounded-full bg-lime-green'>
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
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Search;
