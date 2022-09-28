import React from "react";

import { BsCreditCard } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
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

const Search = () => {
	return (
		<div className='flex-1 mx-3 '>
			<Header />
			<section className='flex justify-between w-full px-5 py-3 mb-6 bg-white rounded-md'>
				<div className='flex space-x-5'>
					<h2 className='font-medium text-mine-dark'>
						Search results for "web"
					</h2>
					<p className='font-normal text-mine-dark opacity-80'>
						1-5 of 35 results
					</p>
				</div>
				<div className=''></div>
			</section>
			<section className='flex w-full h-full '>
				<div className='mb-4 bg-white rounded shadow'>
					<article className='flex p-3 mb-4 '>
						<div className='w-1/3 border-r-2 border-dashed border-alto-light'>
							<div className='flex items-center gap-x-3 '>
								<img
									className='object-cover w-16 h-16 rounded-full'
									alt='User avatar'
									src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
								/>
								<div className='flex flex-col w-full gap-y-1 '>
									<h2 className='text-lg font-medium text-mine-dark'>
										Halie Carlos
									</h2>

									<p className='text-sm opacity-75 text-mine-dark'>
										PHP Page Development
									</p>
								</div>
							</div>
							<div className='flex flex-wrap gap-1 my-3 '>
								{skillsAndTools?.map((skill, index) => (
									<span
										key={index}
										className='px-2 py-1 text-sm tracking-wide text-white transition duration-300 ease-in rounded-sm cursor-pointer bg-kyrrex-green bg-opacity-70 hover:bg-opacity-100 '
									>
										{skill}
									</span>
								))}
							</div>
						</div>
						<div className='flex-1 mx-6'>
							<div className='flex w-full pb-4 mx-6 border-b-2 border-zinc-200'>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-kyrrex-green'>
										<BsCreditCard className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-mine-dark'>
											Gold
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Hourly rate
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-kyrrex-green'>
										<IoBriefcaseOutline className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-mine-dark'>
											15 Years
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Experience
										</p>
									</div>
								</article>
								<article className='flex items-center w-full space-x-3 '>
									<i className='p-2 rounded-full bg-kyrrex-green'>
										<RiMapPin2Line className='text-2xl text-white' />
									</i>
									<div className='flex flex-col w-full '>
										<h2 className='font-medium text-mine-dark'>
											Mountain View, LA
										</h2>
										<p className='-mt-1 text-sm text-zinc-500'>
											Location
										</p>
									</div>
								</article>
							</div>
							<div className='w-full pb-4'>
								<p className='mt-2 text-sm leading-7 text-mine-dark'>
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
