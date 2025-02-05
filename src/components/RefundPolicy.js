import Header from './Header.js';

export default function RefundPolicy() {
	return(
		<>
			<Header />
			<div className="bg-[#f8f8f8] py-[50px] px-[20px] sm:px-[50px] font-['Lexend']">
				<div className="max-w-[1000px] bg-white mx-auto shadow-xl rounded-[10px] py-[20px] px-[20px] sm:px-[30px] font-normal text-[#4e4e4e] leading-[30px]">
					<div className="text-[24px] sm:text-[30px] font-semibold mb-[10px] text-black">
					    Cancellation and Refund Policy
					</div>
					<p>
					    This document outlines WERT Consultancy’s policy regarding cancellations and refunds for services provided through the Website (“Cancellation and Refund Policy”). Any capitalized terms used but not defined herein shall have the meaning assigned to them in the Terms of Use.
					</p>
					<div className="text-[24px] sm:text-[30px] font-semibold mb-[10px] mt-[30px] text-black">
					    Cancellation and Refunds by the Company
					</div>
					<p>
					    Please be aware that certain orders may not be accepted and may need to be canceled. We reserve the right, at our sole discretion, to decline or cancel any order without obligation to pay interest or finance charges. Reasons for order cancellation may include, but are not limited to, inaccuracies in pricing or service details, technical issues, or suspected fraud related to credit or debit transactions. Additional verification or information may be required before accepting an order. If your order or a portion of it is canceled, or if further details are necessary for processing, we will notify you. If a cancellation occurs after your credit or debit card has been charged, the amount will be refunded to the respective account.
					</p>
					<div className="text-[24px] sm:text-[30px] font-semibold mb-[10px] mt-[30px] text-black">
					    Cancellation by you
					</div>
					<p>
					    You acknowledge and agree that, unless explicitly mentioned otherwise, you are not entitled to cancel any orders placed on this website. If you have subscribed to any services, you may cancel your subscription at least one month before the scheduled service date, in which case you will receive a full refund after deducting any applicable bank charges. If a cancellation request is made between one month and 14 days prior to the service date, we may, at our discretion, refund 50% of the amount after deducting any applicable bank charges. However, cancellations requested within 14 days of the scheduled service will not be accepted.
					</p>
				</div>
			</div>
		</>
	)
}