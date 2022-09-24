import React from "react";

import { Outlet, Route, Routes } from "react-router-dom";

import { Header, Main, Sidebar } from "./Components";
import { Dashboard, Invoices, OpenJobs, Search } from "./Pages";

const Layout = () => {
	return (
		<>
			{/* <div className='flex justify-between w-full h-full '> */}
			<div>
				<Sidebar />
			</div>
		</>
	);
};

export default Layout;
