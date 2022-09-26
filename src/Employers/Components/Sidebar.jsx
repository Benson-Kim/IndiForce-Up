import React from "react";

import { Link, useParams } from "react-router-dom";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { IoBriefcaseOutline, IoFileTrayOutline } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";

const Sidebar = () => {
	const param = useParams();
	const expertId = param.id;

	return (
		<aside className='w-64 h-full border-slate-400 bg-zinc-800'>
			<div className='flex items-center justify-center py-6 text-white bg-slate-900'>
				Indiforce Logo
			</div>
			<section className=''>
				<Link
					to=''
					className='flex items-center py-3 pl-4 my-3 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
				>
					<i>
						<CgMenuLeft className='text-xl -rotate-90 text-cyan-100 hover:text-cyan-200' />
					</i>
					<p>Dashboard</p>
				</Link>
				<hr className='ml-6 border-zinc-600' />
				<div className='pt-3'>
					<h2 className='ml-4 font-serif tracking-wide uppercase text-slate-300'>
						All jobs
					</h2>
					<Link
						to='jobs-open'
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<IoFileTrayOutline className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Open</p>
					</Link>
					<Link
						to='contracted'
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<IoBriefcaseOutline className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Contracted</p>
					</Link>
				</div>
				<hr className='ml-6 border-zinc-600' />
				<div className='pt-3'>
					<h2 className='ml-4 font-serif tracking-wide uppercase text-slate-300'>
						Candidates
					</h2>
					<Link
						to=''
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<BiMessageRoundedDetail className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Under Discussion</p>
					</Link>
					<Link
						to='contracts'
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<MdOutlinePeopleOutline className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Contracted</p>
					</Link>
					<Link
						to={`/experts/${expertId}`}
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<TbHeartPlus className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Favorites</p>
					</Link>
				</div>
				<hr className='ml-6 border-zinc-600' />
				<div className='pt-3'>
					<Link
						to=''
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<BiMessageRoundedDetail className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Terms</p>
					</Link>
					<Link
						to='/invoices'
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<FaFileInvoiceDollar className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Invoices</p>
					</Link>
					<Link
						to=''
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<FiEdit className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>Recommendations</p>
					</Link>
					<Link
						to=''
						className='flex items-center py-3 pl-4 my-1 transition duration-300 ease-in border-l-4 cursor-pointer border-zinc-800 gap-x-4 text-slate-50 hover:border-l-4 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 '
					>
						<i>
							<GiSandsOfTime className='text-xl text-cyan-100 hover:text-cyan-200' />
						</i>
						<p>History</p>
					</Link>
				</div>
			</section>
		</aside>
	);
};

export default Sidebar;
