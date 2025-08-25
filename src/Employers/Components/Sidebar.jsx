import { Link, useLocation, useParams } from "react-router-dom";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { IoBriefcaseOutline, IoFileTrayOutline } from "react-icons/io5";
import { BsColumnsGap } from "react-icons/bs";

const Sidebar = () => {
	const { id: expertId } = useParams();
	const location = useLocation();
	const currentPath = location.pathname;

	const isActive = (path) =>
		path === "/" ? currentPath === path : currentPath.startsWith(path);

	const linkClass = (path) =>
		`flex items-center py-2 pl-4 my-3 mr-3 transition duration-300 ease-in rounded-r-lg cursor-pointer group gap-x-4
		${
			isActive(path)
				? "bg-lily-light text-kyrrex-green font-medium"
				: "text-white hover:bg-lily-light"
		}`;

	const iconClass = (path) =>
		`text-xl ${
			isActive(path) ? "text-malibu-blue" : "group-hover:text-malibu-blue"
		}`;

	return (
		<aside className="w-64 h-full border-r bg-kyrrex-green bg-opacity-90 border-lily-white">
			<div className="flex items-center justify-center py-6 text-mine-dark">
				Indiforce Logo
			</div>
			<section>
				<Link to="/" className={linkClass("/")}>
					<i>
						<BsColumnsGap className={iconClass("/")} />
					</i>
					<p>Dashboard</p>
				</Link>

				<hr className="ml-6 text-mine-dark" />

				<div className="pt-3">
					<h2 className="ml-4 font-serif tracking-wide uppercase text-slate-300">
						All jobs
					</h2>

					<Link to="jobs-open" className={linkClass("/jobs-open")}>
						<i>
							<IoFileTrayOutline className={iconClass("/jobs-open")} />
						</i>
						<p>Open</p>
					</Link>

					<Link to="contracted" className={linkClass("/contracted")}>
						<i>
							<IoBriefcaseOutline className={iconClass("/contracted")} />
						</i>
						<p>Contracted</p>
					</Link>
				</div>

				<hr className="ml-6 text-mine-dark" />

				<div className="pt-3">
					<h2 className="ml-4 font-serif tracking-wide uppercase text-slate-300">
						Candidates
					</h2>

					<Link to="" className={linkClass("/under-discussion")}>
						<i>
							<BiMessageRoundedDetail className={iconClass("")} />
						</i>
						<p>Under Discussion</p>
					</Link>

					<Link to="contracts" className={linkClass("/contracts")}>
						<i>
							<MdOutlinePeopleOutline className={iconClass("/contracts")} />
						</i>
						<p>Contracted</p>
					</Link>

					<Link
						to={`/experts/${expertId}`}
						className={linkClass(`/experts/${expertId}`)}
					>
						<i>
							<TbHeartPlus className={iconClass(`/experts/${expertId}`)} />
						</i>
						<p>Favorites</p>
					</Link>
				</div>

				<hr className="ml-6 text-mine-dark" />

				<div className="pt-3">
					<Link to="" className={linkClass("/terms")}>
						<i>
							<BiMessageRoundedDetail className={iconClass("")} />
						</i>
						<p>Terms</p>
					</Link>

					<Link to="/invoices" className={linkClass("/invoices")}>
						<i>
							<FaFileInvoiceDollar className={iconClass("/invoices")} />
						</i>
						<p>Invoices</p>
					</Link>

					<Link to="" className={linkClass("/recommendations")}>
						<i>
							<FiEdit className={iconClass("")} />
						</i>
						<p>Recommendations</p>
					</Link>

					<Link to="/history" className={linkClass("/history")}>
						<i>
							<GiSandsOfTime className={iconClass("/history")} />
						</i>
						<p>History</p>
					</Link>
				</div>
			</section>
		</aside>
	);
};

export default Sidebar;
