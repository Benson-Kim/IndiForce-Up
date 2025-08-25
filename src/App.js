import { Route, Routes } from "react-router-dom";
import Layout from "./Employers/Layout";
import {
	Contracts,
	Dashboard,
	Expert,
	History,
	Invoice,
	Invoices,
	OpenJobs,
	Search,
} from "./Employers/Pages";

const App = () => {
	return (
		<div className="relative flex justify-between w-full h-full font-poppins bg-lily-light scroll-smooth">
			<Layout />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/jobs-open" element={<OpenJobs />} />
				<Route path="/contracted" element={<Search />} />
				<Route path={"/experts/:expertId"} element={<Expert />} />

				<Route path="/invoices" element={<Invoices />} />
				<Route path="/invoices/:invoiceId" element={<Invoice />} />
				<Route path="/contracts" element={<Contracts />} />
				<Route path="/history" element={<History />} />
			</Routes>
		</div>
	);
};

export default App;
