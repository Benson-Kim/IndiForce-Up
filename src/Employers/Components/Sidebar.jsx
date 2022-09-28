import React from "react";

import { Link, useParams } from "react-router-dom";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { IoBriefcaseOutline, IoFileTrayOutline } from "react-icons/io5";
import { BsColumnsGap } from "react-icons/bs";

const Sidebar = () => {
	const param = useParams();
	const expertId = param.id;

	return (
		<aside className='w-64 h-full border-r bg-kyrrex-green bg-opacity-90 border-lily-white'>
			<div className='flex items-center justify-center py-6 text-mine-dark'>
				Indiforce Logo
			</div>
			<section className=''>
				<Link
					to='/'
					className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
				>
					<i>
						<BsColumnsGap className='text-lg group-hover:text-malibu-blue ' />
					</i>
					<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
						Dashboard
					</p>
				</Link>
				<hr className='ml-6 text-mine-dark' />
				<div className='pt-3'>
					<h2 className='ml-4 font-serif tracking-wide uppercase text-slate-300'>
						All jobs
					</h2>
					<Link
						to='jobs-open'
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<IoFileTrayOutline className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Open
						</p>
					</Link>
					<Link
						to='contracted'
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<IoBriefcaseOutline className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Contracted
						</p>
					</Link>
				</div>
				<hr className='ml-6 text-mine-dark' />
				<div className='pt-3'>
					<h2 className='ml-4 font-serif tracking-wide uppercase text-slate-300'>
						Candidates
					</h2>

					<Link
						to=''
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<BiMessageRoundedDetail className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Under Discussion
						</p>
					</Link>
					<Link
						to='contracts'
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<MdOutlinePeopleOutline className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Contracted
						</p>
					</Link>
					<Link
						to={`/experts/${expertId}`}
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<TbHeartPlus className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Favorites
						</p>
					</Link>
				</div>
				<hr className='ml-6 text-mine-dark' />
				<div className='pt-3'>
					<Link
						to=''
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<BiMessageRoundedDetail className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Terms
						</p>
					</Link>
					<Link
						to='/invoices'
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<FaFileInvoiceDollar className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Invoices
						</p>
					</Link>
					<Link
						to=''
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<FiEdit className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							Recommendations
						</p>
					</Link>
					<Link
						to='/history'
						className='flex items-center py-2 pl-4 my-3 mr-3 text-white transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4 hover:bg-lily-light'
					>
						<i>
							<GiSandsOfTime className='text-xl group-hover:text-malibu-blue ' />
						</i>
						<p className='group-hover:text-kyrrex-green group-hover:font-medium'>
							History
						</p>
					</Link>
				</div>
			</section>
		</aside>
	);
};

export default Sidebar;
