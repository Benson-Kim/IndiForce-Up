import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import { BsThreeDotsVertical, BsPrinter } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import {
	IoCheckmarkCircle,
	IoRemoveCircleSharp,
	IoWarning,
} from "react-icons/io5";
import { Header } from "../Components";

const Invoice = () => {
	const { invoiceId } = useParams();
	const navigate = useNavigate();
	const [invoice, setInvoice] = useState(null);
	const [loading, setLoading] = useState(true);

	// Mock data - in a real app, you would fetch data based on invoiceId
	useEffect(() => {
		// Simulate API call
		setTimeout(() => {
			// Sample invoice data
			const mockInvoices = {
				1: {
					id: 1,
					date: "Jun 9 2007",
					dueDate: "Jun 23 2007",
					jobDetails: "Frontend landing page for selling NFTS",
					description:
						"Developed a responsive landing page for NFT marketplace with interactive elements, animations, and wallet integration capabilities.",
					hirer: "Cryptum.com",
					status: "paid",
					time: "02:15 pm",
					amount: 350,
					hirerDetails: {
						companyName: "Cryptum.com",
						address: "123 Blockchain Ave, Suite 200",
						city: "San Francisco, CA 94107",
						email: "billing@cryptum.com",
						phone: "+1 (555) 123-4567",
					},
					invoiceItems: [
						{ description: "UI/UX Design", hours: 12, rate: 15, amount: 180 },
						{
							description: "Frontend Development",
							hours: 8,
							rate: 20,
							amount: 160,
						},
						{
							description: "Responsive Testing",
							hours: 2,
							rate: 5,
							amount: 10,
						},
					],
				},
				2: {
					id: 2,
					date: "Jun 9 2007",
					dueDate: "Jun 23 2007",
					jobDetails: "iPhone app landing page design and development",
					description:
						"Created a modern landing page for iPhone app launch with interactive previews, feature highlights, and download section.",
					hirer: "Paravel Inc.",
					status: "past-due",
					time: "16:45",
					amount: 3500,
					hirerDetails: {
						companyName: "Paravel Inc.",
						address: "456 Mobile Drive",
						city: "Austin, TX 78701",
						email: "accounts@paravel.com",
						phone: "+1 (555) 987-6543",
					},
					invoiceItems: [
						{ description: "Wireframing", hours: 10, rate: 50, amount: 500 },
						{ description: "UI Design", hours: 25, rate: 60, amount: 1500 },
						{ description: "Development", hours: 30, rate: 50, amount: 1500 },
					],
				},
				3: {
					id: 3,
					date: "Jun 9 2007",
					dueDate: "Jun 16 2007",
					jobDetails: "iPhone app landing page design and development",
					description:
						"Designed and developed a cross-platform landing page for iOS application with multimedia elements and subscription form.",
					hirer: "Paravel Inc.",
					status: "due",
					time: "02:15 pm",
					amount: 3500,
					hirerDetails: {
						companyName: "Paravel Inc.",
						address: "456 Mobile Drive",
						city: "Austin, TX 78701",
						email: "accounts@paravel.com",
						phone: "+1 (555) 987-6543",
					},
					invoiceItems: [
						{ description: "Wireframing", hours: 8, rate: 50, amount: 400 },
						{ description: "UI Design", hours: 22, rate: 60, amount: 1320 },
						{ description: "Development", hours: 32, rate: 50, amount: 1600 },
						{ description: "Testing", hours: 6, rate: 30, amount: 180 },
					],
				},
				4: {
					id: 4,
					date: "Jun 9 2007",
					dueDate: "Jun 23 2007",
					jobDetails: "Redesign of single property and landing pages",
					description:
						"Complete redesign of property listing pages and main landing page to improve conversion rates and user experience.",
					hirer: "Booking.com",
					status: "paid",
					time: "02:15 pm",
					amount: 400,
					hirerDetails: {
						companyName: "Booking.com",
						address: "789 Travel Plaza",
						city: "Amsterdam, 1017 CE",
						email: "invoices@booking.com",
						phone: "+31 20 123 4567",
					},
					invoiceItems: [
						{ description: "UX Research", hours: 5, rate: 40, amount: 200 },
						{ description: "UI Redesign", hours: 8, rate: 25, amount: 200 },
					],
				},
				5: {
					id: 5,
					date: "Dec 9 2022",
					dueDate: "Dec 23 2022",
					jobDetails: "Cox media Group mobile app design using Adobe XD",
					description:
						"Created comprehensive mobile app design for media consumption using Adobe XD, including user flows, wireframes, and high-fidelity mockups.",
					hirer: "Cox media group",
					status: "past-due",
					time: "04:45 pm",
					amount: 300,
					hirerDetails: {
						companyName: "Cox Media Group",
						address: "321 Broadcast Lane",
						city: "Atlanta, GA 30301",
						email: "billing@coxmedia.com",
						phone: "+1 (555) 444-3333",
					},
					invoiceItems: [
						{ description: "User Research", hours: 3, rate: 30, amount: 90 },
						{
							description: "Adobe XD Design",
							hours: 12,
							rate: 15,
							amount: 180,
						},
						{ description: "Design Review", hours: 2, rate: 15, amount: 30 },
					],
				},
			};

			setInvoice(mockInvoices[invoiceId] || null);
			setLoading(false);
		}, 500);
	}, [invoiceId]);

	if (loading) {
		return (
			<div className="flex-1 mx-3 flex items-center justify-center">
				<div className="text-lg text-mine-dark">Loading invoice details...</div>
			</div>
		);
	}

	if (!invoice) {
		return (
			<div className="flex-1 mx-3 flex flex-col items-center justify-center">
				<div className="text-xl text-mine-dark mb-4">Invoice not found</div>
				<button
					onClick={() => navigate("/invoices")}
					className="px-4 py-2 bg-malibu-blue text-white rounded-md hover:bg-blue-600 transition duration-300"
				>
					Back to Invoices
				</button>
			</div>
		);
	}

	// Helper function to render status icon
	const renderStatusIcon = (status) => {
		switch (status) {
			case "paid":
				return <IoCheckmarkCircle className="text-xl fill-kyrrex-green" />;
			case "past-due":
				return <IoRemoveCircleSharp className="text-xl fill-amaranth-pink" />;
			case "due":
				return <IoWarning className="text-xl fill-amber-500" />;
			default:
				return null;
		}
	};

	// Helper function to render status text
	const renderStatusText = (status) => {
		switch (status) {
			case "paid":
				return "Paid";
			case "past-due":
				return "Past Due";
			case "due":
				return "Due";
			default:
				return status;
		}
	};

	// Helper function for status text color
	const statusTextColor = (status) => {
		switch (status) {
			case "paid":
				return "text-kyrrex-green opacity-90";
			case "past-due":
				return "text-amaranth-pink";
			case "due":
				return "text-mine-dark opacity-90";
			default:
				return "text-mine-dark";
		}
	};

	return (
		<div className="flex-1 mx-3">
			<Header />
			<section className="flex items-center justify-between w-full px-5 py-2 mb-6 bg-white border rounded-md border-alto-light">
				<div className="flex items-center">
					<button
						onClick={() => navigate("/invoices")}
						className="mr-3 flex items-center text-malibu-blue hover:text-blue-700 transition duration-300"
					>
						<BiChevronLeft className="text-xl" />
						<span>Back to Invoices</span>
					</button>
					<h2 className="text-lg font-medium tracking-wider text-mine-dark">
						Invoice #{invoice.id}
					</h2>
				</div>

				<div className="flex items-center">
					<div
						className={`flex items-center gap-x-1 mr-6 font-medium ${statusTextColor(
							invoice.status
						)}`}
					>
						<i>{renderStatusIcon(invoice.status)}</i>
						{renderStatusText(invoice.status)}
					</div>

					<button className="flex items-center justify-between px-3 py-1.5 mr-3 transition duration-300 ease-in border rounded cursor-pointer hover:border-kyrrex-green hover:text-kyrrex-green w-fit opacity-80 text-mine-dark border-alto-light">
						<BsPrinter className="mr-2" />
						Print
					</button>

					<i className="text-xl transition duration-300 ease-in cursor-pointer text-kyrrex-green hover:text-malibu-blue">
						<BsThreeDotsVertical />
					</i>
				</div>
			</section>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
				{/* Invoice Summary Card */}
				<div className="bg-white border rounded-md border-alto-light p-5 shadow lg:col-span-2">
					<div className="flex justify-between mb-4">
						<div>
							<h3 className="text-lg font-semibold text-mine-dark">
								Invoice #{invoice.id}
							</h3>
							<p className="text-gray-500">
								<span className="font-medium">Date: </span>
								{dateFormat(invoice.date, "mediumDate")}
							</p>
							<p className="text-gray-500">
								<span className="font-medium">Due Date: </span>
								{dateFormat(invoice.dueDate, "mediumDate")}
							</p>
						</div>
						<div className="text-right">
							<h4 className="font-medium text-mine-dark">Amount Due:</h4>
							<p className="text-2xl font-bold text-mine-dark">
								${invoice.amount.toLocaleString()}
							</p>
						</div>
					</div>

					<div className="flex justify-between mb-8">
						<div>
							<h4 className="font-medium text-mine-dark mb-1">From:</h4>
							<p className="text-gray-600">Your Company Name</p>
							<p className="text-gray-600">123 Your Street</p>
							<p className="text-gray-600">Your City, State ZIP</p>
							<p className="text-gray-600">youremail@example.com</p>
						</div>
						<div className="text-right">
							<h4 className="font-medium text-mine-dark mb-1">To:</h4>
							<p className="text-gray-600">
								{invoice.hirerDetails.companyName}
							</p>
							<p className="text-gray-600">{invoice.hirerDetails.address}</p>
							<p className="text-gray-600">{invoice.hirerDetails.city}</p>
							<p className="text-gray-600">{invoice.hirerDetails.email}</p>
						</div>
					</div>

					<div className="border-t border-alto-light pt-6">
						<h4 className="font-medium text-mine-dark mb-3">Project Details</h4>
						<h5 className="text-malibu-blue font-medium mb-2">
							{invoice.jobDetails}
						</h5>
						<p className="text-gray-600 mb-6">{invoice.description}</p>

						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead>
									<tr className="border-b border-alto-light">
										<th className="text-left px-4 py-2 text-sm font-medium text-mine-dark">
											Description
										</th>
										<th className="text-right px-4 py-2 text-sm font-medium text-mine-dark">
											Hours
										</th>
										<th className="text-right px-4 py-2 text-sm font-medium text-mine-dark">
											Rate ($)
										</th>
										<th className="text-right px-4 py-2 text-sm font-medium text-mine-dark">
											Amount ($)
										</th>
									</tr>
								</thead>
								<tbody>
									{invoice.invoiceItems.map((item, index) => (
										<tr key={index} className="border-b border-alto-light">
											<td className="text-left px-4 py-3 text-sm text-gray-600">
												{item.description}
											</td>
											<td className="text-right px-4 py-3 text-sm text-gray-600">
												{item.hours}
											</td>
											<td className="text-right px-4 py-3 text-sm text-gray-600">
												{item.rate}
											</td>
											<td className="text-right px-4 py-3 text-sm font-medium text-mine-dark">
												{item.amount}
											</td>
										</tr>
									))}
								</tbody>
								<tfoot>
									<tr>
										<td
											colSpan="3"
											className="text-right px-4 py-4 font-medium text-mine-dark"
										>
											Total:
										</td>
										<td className="text-right px-4 py-4 font-bold text-mine-dark">
											${invoice.amount}
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>

				{/* Payment Section */}
				<div className="bg-white border rounded-md border-alto-light p-5 shadow h-fit">
					<h3 className="text-lg font-semibold text-mine-dark mb-4">
						Payment Information
					</h3>

					{invoice.status === "paid" ? (
						<div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
							<div className="flex items-center text-kyrrex-green mb-2">
								<IoCheckmarkCircle className="text-xl mr-2" />
								<span className="font-medium">Payment Received</span>
							</div>
							<p className="text-gray-600 text-sm">
								Thank you for your payment. This invoice has been fully paid.
							</p>
						</div>
					) : (
						<div
							className={`rounded-md p-4 mb-4 ${
								invoice.status === "past-due"
									? "bg-red-50 border border-red-200"
									: "bg-amber-50 border border-amber-200"
							}`}
						>
							<div className="flex items-center mb-2">
								{invoice.status === "past-due" ? (
									<>
										<IoRemoveCircleSharp className="text-xl mr-2 text-amaranth-pink" />
										<span className="font-medium text-amaranth-pink">
											Payment Overdue
										</span>
									</>
								) : (
									<>
										<IoWarning className="text-xl mr-2 text-amber-500" />
										<span className="font-medium text-amber-500">
											Payment Due
										</span>
									</>
								)}
							</div>
							<p className="text-gray-600 text-sm">
								Please make payment by{" "}
								{dateFormat(invoice.dueDate, "mediumDate")}.
							</p>
						</div>
					)}

					<div className="mb-4">
						<h4 className="font-medium text-mine-dark mb-2">Payment Methods</h4>
						<div className="border-b border-alto-light pb-3 mb-3">
							<p className="text-gray-600 mb-1">Bank Transfer</p>
							<p className="text-sm text-gray-500">Account: 1234567890</p>
							<p className="text-sm text-gray-500">Routing: 987654321</p>
							<p className="text-sm text-gray-500">Bank: Example Bank</p>
						</div>
						<div>
							<p className="text-gray-600 mb-1">PayPal</p>
							<p className="text-sm text-gray-500">
								Send to: payments@yourcompany.com
							</p>
						</div>
					</div>

					<div>
						<h4 className="font-medium text-mine-dark mb-2">Notes</h4>
						<p className="text-sm text-gray-600">
							Please include the invoice number in your payment reference. For
							questions regarding this invoice, contact billing@yourcompany.com.
						</p>
					</div>

					{invoice.status !== "paid" && (
						<button className="w-full mt-4 px-4 py-2 bg-malibu-blue text-white rounded-md hover:bg-blue-600 transition duration-300">
							Pay Now
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Invoice;
