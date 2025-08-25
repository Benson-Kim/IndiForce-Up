import React from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { BsCreditCard } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Header } from "../Components";

const OpenJobs = () => {
	const param = useParams();
	const expertId = param.id;
	const navigate = useNavigate();
	const [viewRelated, setViewRelated] = React.useState(false);

	const handleViewRelated = () => {
		setViewRelated(!viewRelated);
	};

	return (
		<div className="flex-1 mx-3">
			<Header />
			<section className="flex w-full">
				<div className="w-1/3 px-4 py-3 border-r-2 border-alto-light">
					<p className="font-semibold text-mine-dark">
						Open <span className="ml-8 font-medium text-mine-dark">4 Jobs</span>
					</p>
				</div>
				<div className="flex items-center justify-between flex-1 px-6">
					<h2 className="font-semibold text-mine-dark ">Weather widget</h2>
					<button
						onClick={handleViewRelated}
						className="font-medium capitalize transition duration-300 ease-in cursor-pointer text-kyrrex-green hover:text-malibu-blue"
					>
						View Related
					</button>
				</div>
				{viewRelated && (
					<div className="absolute z-10 px-8 py-4 border backdrop-blur-3xl right-8 border-zinc-300 top-32">
						<Link
							to="../contracts"
							className="flex items-center justify-between py-1.5 text-sm leading-7 text-mine-dark"
						>
							Contracts <MdOutlineKeyboardArrowRight />
						</Link>
						<Link
							to="../discussions"
							className="flex items-center justify-between py-1.5 text-sm leading-7 text-mine-dark"
						>
							Discussions <MdOutlineKeyboardArrowRight />
						</Link>
						<Link
							to="../invoices"
							className="flex items-center justify-between py-1.5 text-sm leading-7 text-mine-dark"
						>
							Invoices <MdOutlineKeyboardArrowRight />
						</Link>
					</div>
				)}
			</section>
			<section className="flex w-full border-gray-300 border-y-2">
				<div className="w-1/3 pt-3 bg-white border-r-2 border-alto-light">
					<Link
						to=""
						className="flex items-center py-2 font-normal transition duration-300 ease-in border-l-4 border-white cursor-pointer hover:font-medium gap-x-0.5 hover:bg-lily-light hover:border-malibu-blue"
					>
						<div className="relative inline-flex mx-3">
							<span className="absolute bottom-1 right-1 inline-flex  w-2.5 h-2.5 transform rounded-full bg-amaranth-pink ring-2 ring-white translate-x-1/4 translate-y-1/4"></span>
							<img
								className="object-cover w-16 h-12 rounded-full"
								alt="User avatar"
								src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
							/>
						</div>

						<div className="flex flex-col w-full gap-y-1 ">
							<div className="flex items-center justify-between w-full pr-3">
								<h2 className="text-base font-medium text-mine-dark">
									Halie Carlos
								</h2>
								<span className="text-sm text-mine-dark opacity-80">
									02:30 am
								</span>
							</div>
							<p className="text-sm opacity-75 text-mine-dark">
								PHP Page Development
							</p>
						</div>
					</Link>
					<hr className="ml-20 border-alto-light" />
					<Link
						to=""
						className="flex items-center py-2 font-normal transition duration-300 ease-in border-l-4 border-white cursor-pointer hover:font-medium gap-x-0.5 hover:bg-lily-light hover:border-malibu-blue"
					>
						<div className="relative inline-flex mx-3">
							<span className="absolute bottom-1 right-1 inline-flex  w-2.5 h-2.5 transform rounded-full bg-amaranth-pink ring-2 ring-white translate-x-1/4 translate-y-1/4"></span>
							<img
								className="object-cover w-16 h-12 rounded-full"
								alt="User avatar"
								src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9obnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							/>
						</div>

						<div className="flex flex-col w-full gap-y-1 ">
							<div className="flex items-center justify-between w-full pr-3">
								<h2 className="text-base font-medium text-mine-dark">
									Cate Sigmund
								</h2>
								<span className="text-sm text-mine-dark opacity-80">
									04:45 pm
								</span>
							</div>
							<p className="text-sm opacity-75 text-mine-dark">
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className="ml-20 border-alto-light" />
					<Link
						to=""
						className="flex items-center py-2 font-normal transition duration-300 ease-in border-l-4 border-white cursor-pointer hover:font-medium gap-x-0.5 hover:bg-lily-light hover:border-malibu-blue"
					>
						<div className="relative inline-flex mx-3">
							<span className="absolute bottom-1 right-1 inline-flex  w-2.5 h-2.5 transform rounded-full bg-amaranth-pink ring-2 ring-white translate-x-1/4 translate-y-1/4"></span>
							<img
								className="object-cover w-16 h-12 rounded-full"
								alt="User avatar"
								src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							/>
						</div>

						<div className="flex flex-col w-full gap-y-1 ">
							<div className="flex items-center justify-between w-full pr-3">
								<h2 className="text-base font-medium text-mine-dark">
									{" "}
									Jonahs Kakaroto
								</h2>
								<span className="text-sm text-mine-dark opacity-80">
									11:49 am
								</span>
							</div>
							<p className="text-sm opacity-75 text-mine-dark">
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className="ml-20 border-alto-light" />
					<Link
						to=""
						className="flex items-center py-2 font-normal transition duration-300 ease-in border-l-4 border-white cursor-pointer hover:font-medium gap-x-0.5 hover:bg-lily-light hover:border-malibu-blue"
					>
						<div className="relative inline-flex mx-3">
							<span className="absolute bottom-1 right-1 inline-flex  w-2.5 h-2.5 transform rounded-full bg-amaranth-pink ring-2 ring-white translate-x-1/4 translate-y-1/4"></span>
							<img
								className="object-cover w-16 h-12 rounded-full"
								alt="User avatar"
								src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
							/>
						</div>

						<div className="flex flex-col w-full gap-y-1 ">
							<div className="flex items-center justify-between w-full pr-3">
								<h2 className="text-base font-medium text-mine-dark">
									Jim Freeman
								</h2>
								<span className="text-sm text-mine-dark opacity-80">
									10:30 PM
								</span>
							</div>
							<p className="text-sm opacity-75 text-mine-dark">
								Frontend Developer
							</p>
						</div>
					</Link>
					<hr className="ml-20 border-alto-light" />
					<Link
						to=""
						className="flex items-center py-2 font-normal transition duration-300 ease-in border-l-4 border-white cursor-pointer hover:font-medium gap-x-0.5 hover:bg-lily-light hover:border-malibu-blue"
					>
						<div className="relative inline-flex mx-3">
							<span className="absolute bottom-1 right-1 inline-flex  w-2.5 h-2.5 transform rounded-full bg-amaranth-pink ring-2 ring-white translate-x-1/4 translate-y-1/4"></span>
							<img
								className="object-cover w-16 h-12 rounded-full"
								alt="User avatar"
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							/>
						</div>

						<div className="flex flex-col w-full gap-y-1 ">
							<div className="flex items-center justify-between w-full pr-3">
								<h2 className="text-base font-medium text-mine-dark">
									Julian Wan
								</h2>
								<span className="text-sm text-mine-dark opacity-80">
									09:22 AM
								</span>
							</div>
							<p className="text-sm opacity-75 text-mine-dark">
								Fullstack Developer
							</p>
						</div>
					</Link>
					<hr className="ml-20 border-alto-light" />
				</div>
				<div className="flex-1">
					<div className="">
						<h2 className="m-3 text-lg font-medium text-mine-dark">
							Job Description
						</h2>
						<article className="flex flex-col items-center p-6 m-3 space-y-3 bg-white border rounded shadow-md border-alto-light">
							<div className="flex w-full py-4 mx-6 border-b-2 border-alto-light">
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-bumblebee-amber">
										<BsCreditCard className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full ">
										<h2 className="font-medium text-mine-dark">Open</h2>
										<p className="text-sm opacity-75 text-mine-dark">Budget</p>
									</div>
								</article>
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-seanse-purple">
										<RiMapPin2Line className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full capitalize">
										<h2 className="font-medium text-mine-dark">London, UK</h2>
										<p className="text-sm opacity-75 text-mine-dark">Remote</p>
									</div>
								</article>
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-amaranth-pink">
										<GiSandsOfTime className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full ">
										<h2 className="font-medium text-mine-dark">Feb 2023</h2>
										<p className="text-sm opacity-75 text-mine-dark">
											Deadline
										</p>
									</div>
								</article>
							</div>
							<div className="w-full py-4">
								<p className="text-sm leading-7 text-mine-dark">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
									quasi vero, reiciendis, molestiae voluptas enim possimus
									tempore nobis labore repellat veritatis tempora atque
									praesentium fugiat. Quia quis temporibus repellendus corrupti?
								</p>
							</div>
						</article>
					</div>
					<div className="flex-1 ">
						<h2 className="m-3 text-lg font-medium text-mine-dark">
							Expert Details
						</h2>
						<article className="flex flex-col items-center px-6 py-3 m-3 space-y-3 bg-white border rounded shadow-md border-alto-light">
							<div className="flex items-center w-full pb-3 border-b-2 gap-x-3 border-alto-light">
								<img
									className="object-cover w-20 h-20 rounded-full"
									alt="User avatar"
									src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								/>

								<div className="flex flex-col w-full gap-y-1 ">
									<div className="flex items-center justify-between w-full pr-3">
										<h2 className="text-lg font-semibold text-mine-dark">
											Julian Wan
										</h2>
										<Link
											to={`/experts/${expertId}`}
											className="flex items-center space-x-2 transition duration-300 ease-in text-kyrrex-green hover:text-malibu-blue "
										>
											View full profile
											<i>
												<BiChevronRight className="text-xl" />
											</i>
										</Link>
									</div>
									<p className=" text-mine-dark">Fullstack Developer</p>
								</div>
							</div>
							<div className="flex w-full pb-4 mx-6 border-b-2 border-alto-light">
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-bumblebee-amber">
										<BsCreditCard className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full ">
										<h2 className="font-medium text-mine-dark">Gold</h2>
										<p className="text-sm opacity-75 text-mine-dark">
											Hourly rate
										</p>
									</div>
								</article>
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-seanse-purple">
										<IoBriefcaseOutline className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full ">
										<h2 className="font-medium text-mine-dark">15 Years</h2>
										<p className="text-sm opacity-75 text-mine-dark">
											Experience
										</p>
									</div>
								</article>
								<article className="flex items-center w-full space-x-3 ">
									<i className="p-2 rounded-full bg-amaranth-pink">
										<RiMapPin2Line className="text-2xl text-lily-light" />
									</i>
									<div className="flex flex-col w-full ">
										<h2 className="font-medium text-mine-dark">
											Mountain View, LA
										</h2>
										<p className="text-sm opacity-75 text-mine-dark">
											Location
										</p>
									</div>
								</article>
							</div>
							<div className="w-full pb-4">
								<p className="text-sm leading-7 text-mine-dark">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
									quasi vero, reiciendis, molestiae voluptas enim possimus
									tempore nobis labore repellat veritatis tempora atque
									praesentium fugiat. Quia quis temporibus repellendus corrupti?
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
