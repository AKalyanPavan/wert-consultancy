import React, { useState, useEffect } from 'react';
import logo from './../images/logo.svg';
import registrationIcon from './../images/registration-icon.svg';
import freelancers from './../images/freelancers.png';
import consultants from './../images/consultants.png';
import smeBusiness from './../images/sme-business.png';
import ramaChandran from './../images/rama-chandran.png';
import ssTech from './../images/ss-tech.svg';
import naveenKiran from './../images/naveen-kiran.png';
import aravindhRV from './../images/aravindh-rv.png';
import nithyaRagunathasamy from './../images/nithya-ragunathasamy.svg';
import dhiveshPM from './../images/dhivesh-pm.svg';
import star from './../images/star.svg';

import Check from './Check.js';
import PlanCard from './PlanCard.js';
import PlanModal from './PlanModal.js';


function Homepage() {

	const plans = [
		{
			type: 'tds',
			title: 'TDS Filing Plan',
			price: '₹997',
			priceDuration: '/ month',
			planFeatures: [
				{
					title: 'Registration on TRACES & TDS Returns E-filing',
					subFeatures: [
						'Form 24Q (Statement of tax deducted at source on salaries)',
						'Form 26Q (Certificate of tax deducted at source)',
						'Form 26QC (TDS on Renting of property Transactions)',
						'Generation of Form 16 & 16A',
					],
				},
				{
					title: 'Includes support for Challan Payments',
				},
			],
			applicableTo: [
				'Up to 25 Deductees',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'TAN registration fees separate ₹497',
			],
			Documents: [
				'PAN & other Details of deductor',
				'PAN & other Details of deductee',
				'Applicable Deduction details',
				'Tax payment details',
			],
		},
		{
			type: 'tds',
			title: 'TDS on Purchase of Immovable Property',
			price: '₹1,497',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Registration on TRACES',
				},
				{
					title: 'E-filing Form 26QB (TDS on sale of immovable property)',
				},
				{
					title: 'Generation of Form 16B',
				},
				{
					title: 'Includes support for Challan Payments',
				},
			],
			applicableTo: [
				'For single 26QB form',
				'For every additional Challan & forms - ₹497',
				'Email / WhatsApp Support',
			],
			Documents: [
				'PAN of buyer(s) and seller(s)',
				'Sale/Purchase Deed (If applicable)',
				'Address and Phone number of buyer(s) and seller(s)',
				'Tax payment details',
			],
		},
		{
			type: 'gst',
			title: 'GST Filing Service for Providers & Professionals',
			price: '₹747',
			yearlyPrice: '₹7,470',
			priceDuration: '/ month',
			yearlyPriceDuration: '/ year',
			planFeatures: [
				{
					title: 'GSTR-1 and GSTR-3B Returns for single GSTN',
				},
				{
					title: 'If TDS returns applicable, ₹497 extra will be charged',
				},
				{
					title: 'Bookkeeping and Accounting are not part of the package',
				},
				{
					title: '2B vs Books Reconciliation',
				},
			],
			applicableTo: [
				'Valid for Turnover less than ₹5 Cr',
				'Applicable for Service providers, professionals, and Composition dealers (up to ₹1.5 Cr turnover)',
				'Email / WhatsApp Support',
				'For Turnover above ₹5 Cr, contact for customized pricing',
			],
			Documents: [
				'Sales details for the month in Excel, JSON, or any accounting software such as Tally, Zoho Books, etc.',
				'Purchase details in Excel or any accounting software such as Tally, Zoho Books',
			],
		},
		{
			type: 'gst',
			title: 'GST Filing E-Commerce',
			price: '₹997',
			yearlyPrice: '₹9,970',
			priceDuration: '/ month',
			yearlyPriceDuration: '/ year',
			planFeatures: [
				{
					title: 'GSTR-1 and GSTR-3B Returns for single GSTN',
				},
				{
					title: 'Bookkeeping and Accounting are not part of the package',
				},
				{
					title: '2B vs Books Reconciliation',
				},
			],
			applicableTo: [
				'Valid for Turnover less than ₹2 Cr',
				'For sellers on multiple e-commerce platforms',
				'Email / WhatsApp Support',
			],
			Documents: [
				'Sales details for the month in Excel, JSON, or any accounting software such as Tally, Zoho Books, etc.',
				'Purchase details in Excel or any accounting software such as Tally, Zoho Books',
			],
		},
		{
			type: 'gst',
			title: 'GST Filing Business',
			price: '₹1,247',
			yearlyPrice: '₹12,470',
			priceDuration: '/ month',
			yearlyPriceDuration: '/ year',
			planFeatures: [
				{
					title: 'GSTR-1 and GSTR-3B Returns for single GSTN',
				},
				{
					title: 'If TDS returns applicable, ₹497 extra will be charged',
				},
				{
					title: 'Bookkeeping and Accounting are not part of the package',
				},
				{
					title: '2B vs Books Reconciliation',
				},
			],
			applicableTo: [
				'Valid for Turnover less than ₹2 Cr',
				'Manufacturing / Trading',
				'For sellers on multiple e-commerce platforms',
				'Email / WhatsApp Support',
			],
			Documents: [
				'Sales details for the month in Excel, JSON, or any accounting software such as Tally, Zoho Books, etc.',
				'Purchase details in Excel or any accounting software such as Tally, Zoho Books',
			],
		},
		{
			type: 'gst',
			title: 'GST Annual Return Filing',
			price: '₹9,997',
			priceDuration: '',
			planFeatures: [
				{
					title: 'GSTR-9 filing',
				},
				{
					title: 'GSTR-9C Reconciliation statement',
				},
				{
					title: 'Includes CA certification',
				},
			],
			applicableTo: [
				'Turnover less than ₹10 Cr',
				'Email / WhatsApp Support',
				'Per GSTN',
			],
			Documents: [
				'Sales details for the month in Excel, JSON, or any accounting software such as Tally, Zoho Books, etc.',
				'Purchase details in Excel or any accounting software such as Tally, Zoho Books',
			],
		},
		{
			type: 'itr',
			title: 'Salary Basic ITR-1 Plan',
			price: '₹997',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Salary Income - Single & Multiple Employers',
				},
				{
					title: 'Rental income up to 3 properties',
				},
				{
					title: 'Interest and Dividend Incomes',
				},
				{
					title: 'Agriculture Income',
				},
			],
			applicableTo: [
				'Basic Tax Planning',
				'New & Old regime comparison',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Salary less than ₹50 lakhs',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Bank statement if interest received is above ₹10,000',
				'March 2024 Payslip or Annual Tax Statement',
				'Annual Information Statement (AIS)',
			],
		},
		{
			type: 'itr',
			title: 'Salary Pro ITR-2 Plan',
			price: '₹1,997',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Salary Income - Single & Multiple Employers',
				},
				{
					title: 'ESOP / ESSP / RSU holding (Reporting only)',
				},
				{
					title: 'Rental Income - up to 5 properties',
				},
				{
					title: 'Interest and Dividend Incomes',
				},
				{
					title: 'Arrears of salary - Sec 89 Relief',
				},
				{
					title: 'Shareholder / Director in Unlisted Company / Partner in a firm',
				},
			],
			applicableTo: [
				'Advanced Tax Planning',
				'New & Old regime comparison',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Salary Above ₹50 lakhs',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Bank statement if interest received is above ₹10,000',
				'March 2024 Payslip or Annual Tax Statement',
				'Annual Information Statement (AIS)',
				'Filled up schedule AL',
			],
		},
		{
			type: 'itr',
			title: 'House Property Pro Plan',
			price: '₹2,497',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Includes all income in ITR Pro Plan',
				},
				{
					title: 'Salary Income - Single & Multiple Employers',
				},
				{
					title: 'Rental Income - unlimited properties',
				},
				{
					title: 'Interest and Dividend Incomes',
				},
				{
					title: 'Arrears of salary - Sec 89 Relief',
				},
				{
					title: 'Shareholder / Director in Unlisted Company / Partner in a firm',
				},
			],
			applicableTo: [
				'Advanced Tax Planning',
				'New & Old regime comparison',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Salary Above ₹50 lakhs',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Bank statement if interest received is above ₹10,000',
				'March 2024 Payslip or Annual Tax Statement',
				'Annual Information Statement (AIS)',
				'Filled up schedule AL',
				'Rental Income details',
			],
		},
		{
			type: 'itr',
			title: 'Capital Gain Basic Plan',
			price: '₹2,997',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Includes all income in Salary Pro Plan',
				},
				{
					title: 'Capital Gain / Loss:',
					subFeatures: [
						'Up to 5 Sales of Properties (Land & Building)',
						'Up to 5 Brokerage (Stocks & Mutual Funds) / CAMS / KFINTECH / Portfolio Statements',
						'Sale of Unlimited Agricultural Properties',
					],
				},
			],
			applicableTo: [
				'Capital Gain Tax Exemption Planning',
				'Tax Loss Harvesting Advisory',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Support to Obtain All Statements',
				'Only for Long / Short Term Capital Gain',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Annual Information Statement (AIS)',
				'Bank Statements',
				'March 2024 Payslip or Annual Tax Statement',
				'Rental Agreements & Property Tax Receipts',
				'Investment / Portfolio Statements',
				'Trading Account Statements',
				'CAMS / KFINTECH / Mutual Fund Statements',
				'Property Sale & Purchase Deed',
			],
		},
		{
			type: 'itr',
			title: 'Freelancer / Trader Plan',
			price: '₹3,497',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Includes all income in Capital Gain Basic Plan',
				},
				{
					title: 'Trading:',
					subFeatures: [
						'Intraday',
						'Futures & Options',
						'Crypto',
					],
				},
				{
					title: 'Business / Professional Income under presumptive taxation scheme:',
					subFeatures: [
						'Businesses with annual turnover under ₹2 Cr',
						'Professionals & Freelancers with annual gross receipts under ₹50 Lakh',
					],
				},
				{
					title: 'Any other casual income',
				},
			],
			applicableTo: [
				'Capital Gain Tax Exemption Planning',
				'Tax Loss Harvesting Advisory',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Self-Employed individuals',
				'Without detailed Financial statements / Audit',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Annual Information Statement (AIS)',
				'Bank statements',
				'March 2024 Payslip or Annual Tax Statement',
				'Rental agreements & Property tax receipts',
				'Investment / portfolio statements',
				'Trading account statements',
				'CAMS / KFINTECH / Mutual fund statements',
				'Property Sale & Purchase deed',
				'Business Information, Turnover / Gross receipts details',
			],
		},
		{
			type: 'itr',
			title: 'Capital Gain Pro / NRI Plan',
			price: '₹4,497',
			priceDuration: '',
			planFeatures: [
				{
					title: 'Includes all income in Capital Gain Basic Plan',
				},
				{
					title: 'Capital Gain / Loss & Trading Income from:',
					subFeatures: [
						'Intraday / Futures & Options / Crypto',
						'Sale of ESOP or RSU and tax',
						'Sale of Foreign Shares - shares listed in Nasdaq, NYSE',
						'Declaration of foreign assets for Indian residents (Schedules FA / FSI and TR in the Income Tax Return)',
					],
				},
				{
					title: 'Filing of your Form 67 / double taxation avoidance (DTAA)',
				},
				{
					title: 'Foreign Income to residents in India / Foreign nationals who earned salary in India or have India sourced income like capital gains, interest income or dividend income etc / Indian citizens who are permanently residing outside India but have some assets in India which generate income.',
				},
				{
					title: 'Salary plus trading',
				},
			],
			applicableTo: [
				'Capital Gain Tax Exemption Planning',
				'Tax Loss Harvesting Advisory',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Support to get all statements',
				'Indian citizens outside India',
				'Indian citizens who have worked at client locations outside India',
				'Foreign nationals who have worked any time during last FY in India',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Annual Information Statement (AIS)',
				'Bank statements',
				'March 2024 Payslip or Annual Tax Statement',
				'Rental agreements & Property tax receipts',
				'Investment / portfolio statements',
				'Trading account statements',
				'CAMS / KFINTECH / Mutual fund statements',
				'Property Sale & purchase deed',
				'ESOP / RSU / Foreign Dividend statements',
				'Foreign Income Statements',
			],
		},
		{
			type: 'itr',
			title: 'Business / Profession Plan',
			price: '₹5,497',
			priceDuration: '',
			planFeatures: [
				{
					title: 'All incomes in Capital Gain Basic Plan',
				},
				{
					title: 'Business owner with turnover more than ₹2 Cr up to ₹5 Cr during the year and for whom tax audit is required',
				},
				{
					title: 'Professional / Freelancers with receipts more than ₹50 Lakhs up to ₹5 Cr during the year and for whom tax audit is required',
				},
				{
					title: 'GST reconciliation and matching',
				},
				{
					title: 'Preparation of summary profit and loss statement and balance sheet',
				},
			],
			applicableTo: [
				'Advance tax planning',
				'Email / WhatsApp Support',
				'1 Return Revision',
				'Single or multiple Business / Profession combined turnover up to ₹5 Cr',
				'Accounting fees / Tax audit fees are not included in the pricing of the plan',
			],
			Documents: [
				'Form 16 (Part A, Part B & Annexure to Part B)',
				'Form 26AS',
				'Annual Information Statement (AIS)',
				'March 2024 Payslip or Annual Tax Statement',
				'Rental agreements & Property tax receipts',
				'Investment / portfolio statements',
				'Trading account statements',
				'CAMS / KFINTECH / Mutual fund statements',
				'Property Sale & purchase deed',
				'Business and GST Information',
				'Bank statements',
				'Turnover / Gross receipts details',
			],
		},
	];

	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const [scrollDirection, setScrollDirection] = useState('right');
	const [planType, setPlanType] = useState('tds');
	const [currentPlans, setCurrentPlans] = useState(toggleCurrentPlans(planType));
	const [planDuration, setPlanDuration] = useState('yearly');
	const [modalDisplay, setModalDisplay] = useState('hidden');
	const [modalPlan, setModalPlan] = useState(plans[0]);

	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	document.addEventListener('scroll', () => {
	    let header = document.getElementById("header");
	    if (window.scrollY > 20) {
	    	header.style.boxShadow = "0 0 15px -1px #00000014";
	    } else {
	    	header.style.boxShadow = "";
	    }
	});

	function toggleCurrentPlans(planType) {

		let _currentPlans = [];

		plans.forEach((plan, index) => {
			if (plan.type === planType) {
				_currentPlans.push(plan);
			}
		});

		return _currentPlans;
	}

	function togglePlanDuration(planDuration) {

		let monthly = document.getElementById("monthly");
		let yearly = document.getElementById("yearly");

		if (planDuration == "monthly" && !monthly.classList.contains("text-white")) {

			yearly.classList.remove("text-white");
			yearly.classList.remove("bg-[#082d60]");

			monthly.classList.add("text-white");
			monthly.classList.add("bg-[#082d60]");

		} else if (planDuration == "yearly" && !yearly.classList.contains("text-white")) {

			monthly.classList.remove("text-white");
			monthly.classList.remove("bg-[#082d60]");

			yearly.classList.add("text-white");
			yearly.classList.add("bg-[#082d60]");

		}

		setPlanDuration(planDuration);
	}

	function scrollTestimonial(direction) {

		let scrollArrows = document.getElementsByClassName("scrollArrow");

	    let testimonialContainerFixed = document.getElementById("testimonialContainerFixed");
	    let testimonialContainerParent = document.getElementById("testimonialContainerParent");
	    let testimonial = document.getElementsByClassName("testimonial")[0];
	    let testimonialIndex = document.getElementsByClassName("testimonialIndex");

	    let transformValue;
	    let translateXValue;

	    if (direction == "initialLeft") {

	      translateXValue = ( ( (testimonialContainerFixed.clientWidth ) - ( (testimonial.clientWidth * 3) + (2 * 20)) ) / 2 );
	      transformValue = `translateX(${translateXValue}px)`;
	      setTranslateX(translateXValue);

	    } else if (direction == "left" && activeTestimonial > 0) {

	    	for (var i = 0; i < scrollArrows.length; i++) {
				scrollArrows[i].classList.add("pointer-events-none");
			}

	      translateXValue = translateX + testimonial.clientWidth + 20;
	      transformValue = `translateX(${translateXValue}px)`;
	      setTranslateX(translateXValue);

	      // setTimeout(function(){
	        testimonialIndex[activeTestimonial].children[0].setAttribute("fill", "#082d60");
	        testimonialIndex[activeTestimonial - 1].children[0].setAttribute("fill", "#ffc94d");
	        setActiveTestimonial(activeTestimonial - 1);
	        for (var i = 0; i < scrollArrows.length; i++) {
				scrollArrows[i].classList.remove("pointer-events-none");
			}
	      // }, 500);

	    } else if (direction == "right" && activeTestimonial < 5) {

	    	for (var i = 0; i < scrollArrows.length; i++) {
				scrollArrows[i].classList.add("pointer-events-none");
			}

	      translateXValue = translateX - testimonial.clientWidth - 20;
	      transformValue = `translateX(${translateXValue}px)`;
	      setTranslateX(translateXValue);

	      // setTimeout(function(){
	        testimonialIndex[activeTestimonial].children[0].setAttribute("fill", "#082d60");
	        testimonialIndex[activeTestimonial + 1].children[0].setAttribute("fill", "#ffc94d");
	        setActiveTestimonial(activeTestimonial + 1);
	        for (var i = 0; i < scrollArrows.length; i++) {
				scrollArrows[i].classList.remove("pointer-events-none");
			}
	      // }, 500);

	    }

	    testimonialContainerParent.style.transform = transformValue;
	}

	function scrollPage(id) {

		let element = document.getElementById(id);

        window.scrollTo({
            top: element.offsetTop - 120,
            left: 0,
            behavior: 'smooth'
        });
    }

    // function needs to be optimized
    function togglePlanType(planType) {

		let tds = document.getElementById("tds");
		let itr = document.getElementById("itr");
		let gst = document.getElementById("gst");

		if (planType == "tds" && !tds.classList.contains("text-white")) {

			itr.classList.remove("text-white");
			itr.classList.remove("bg-[#082d60]");

			gst.classList.remove("text-white");
			gst.classList.remove("bg-[#082d60]");

			tds.classList.add("text-white");
			tds.classList.add("bg-[#082d60]");

		} else if (planType == "itr" && !itr.classList.contains("text-white")) {

			tds.classList.remove("text-white");
			tds.classList.remove("bg-[#082d60]");

			gst.classList.remove("text-white");
			gst.classList.remove("bg-[#082d60]");

			itr.classList.add("text-white");
			itr.classList.add("bg-[#082d60]");

		} else if (planType == "gst" && !gst.classList.contains("text-white")) {

			tds.classList.remove("text-white");
			tds.classList.remove("bg-[#082d60]");

			itr.classList.remove("text-white");
			itr.classList.remove("bg-[#082d60]");

			gst.classList.add("text-white");
			gst.classList.add("bg-[#082d60]");

		}

		setPlanType(planType);

		setCurrentPlans(toggleCurrentPlans(planType));

	}

	function openCardModal(plan) {

		setModalPlan(plan);

        let modal = document.querySelector("#modal");
        
        if (modal) {
            modal.style.animationName = "slideIn"
            setModalDisplay("");
        }
    }

	function onModalOverlayClicked(event) {

        let modal = document.querySelector("#modal");

        if (modal) {
            modal.style.animationName = "slideOut"
            setTimeout(() => {
                setModalDisplay("hidden");
            }, 180);
        }
    }

    function validateInput(companyId, emailId, mobileId) {

    	const companyInput = document.getElementById(companyId);
    	const emailInput = document.getElementById(emailId);
    	const mobileInput = document.getElementById(mobileId);

    	let isError = false;

    	if(!companyInput.value.trim()) {
    		window.alert("Company Name Cannot be Empty");
    		isError = true;
    		return;
    	}

    	if(!emailRegex.test(emailInput.value)) {
    		window.alert("Please Enter Valid Email Address");
    		isError = true;
    		return;
    	}

    	if(!phoneRegex.test(mobileInput.value)) {
    		window.alert("Please Enter Valid Email Address");
    		isError = true;
    		return;
    	}

    	if(!isError){
      
		    // Making input values empty
		    companyInput.value = "";
		    emailInput.value = "";
		    mobileInput.value = "";

		    // Opening thank-you modal
		    openThankYouModal();

		    // Closing thank-you modal
		    setTimeout(closeThankYouModal, 5000);
		}
    }

    function openThankYouModal() {

	    let thankYouModal = document.getElementById("thankYouModal");

	    if(thankYouModal.classList.contains("hidden")){
	        thankYouModal.classList.remove("hidden");
	    }
	}

	function closeThankYouModal() {

	    let thankYouModal = document.getElementById("thankYouModal");

	    if(!thankYouModal.classList.contains("hidden")){
	        thankYouModal.classList.add("hidden");
	    }
	}

	useEffect(() => {

		const interval =setInterval(() => {

			if (activeTestimonial == 5) {
				setScrollDirection('left');
			} else if (activeTestimonial == 0) {
				setScrollDirection('right');
			}

			scrollTestimonial(scrollDirection);

        }, 4000);

        return () => clearInterval(interval);
	}, [activeTestimonial, scrollDirection]);

	return(
		<>
			{/*Modal*/}
            <div 
                id="modalOverlay" 
                className={"w-[100%] bg-[#000000ab] fixed top-[0px] left-[0px] h-[100%] z-[5] " + modalDisplay}>

                <div 
                    style={{
                        animationName: "slideIn",
                        animationDuration: "0.5s",
                        transform: "translate(-50%, -50%)",
                        maxHeight: "calc(100vh - 150px)",
                        overflowY: "auto",
                    }}
                    id="modal" 
                    className={"w-[80%] min-[500px]:w-[400px] bg-[#d7e9f7] fixed top-[50%] left-[50%] rounded-[20px] " + modalDisplay}>

                    <div className="max-w-[400px]">
                    	<PlanModal plan={modalPlan} planDuration={planDuration} onModalOverlayClicked={onModalOverlayClicked} />
                    </div>

                </div>
            </div>

            {/*"Thank You" Modal*/}
            <div id="thankYouModal" className="w-[100%] h-[100%] bg-[#494949c4] fixed z-[4]">
		        <div style={{
		              transform: "translate(-50%, -50%)"
		            }}
		            className="text-[#082d60] fixed bg-[#d7e9f7] top-[50%] left-[50%] py-[30px] px-[10px] min-[500px]:px-[30px] min-[700px]:px-[50px] min-[1000px]:px-[100px] rounded-[10px] z-[5] leading-[35px] min-w-[245px]">
		            <div className="bg-[#082d60] w-max px-[10px] py-[15px] rounded-[50%] mx-auto">
		                <svg width="40" height="32" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
		                </svg>
		            </div>
		            <div className="text-[30px] font-semibold my-[20px] text-center">Thank You!</div>
		            <div className="">We'll reach You Out Soon!</div>
		            <div className="bg-[#ca3535] text-[#FFFFFF] cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium" onClick={() => closeThankYouModal()}>Close</div>
		        </div>
		    </div>

			<div id="header" className="sticky top-[0px] bg-[#d7e9f7] z-[1]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] py-[20px] flex items-center justify-between font-['Lexend']">
					<img className="sm:w-[200px] w-[150px]" src={logo} />
					<div className="flex items-center text-[#082d60] font-medium text-[18px]">
						<div className="cursor-pointer mr-[20px] sm:block hidden" onClick={() => scrollPage("pricing")}>Pricing</div>
						<a class="" href="tel:+916381637626">
			              <div className="w-fit border-[solid] border-[1.5px] border-[#082d60] sm:px-[20px] px-[10px] py-[5px] rounded-[10px] items-center flex cursor-pointer">
			                <div className="flex items-center border-[solid] pr-[5px] py-[5px]">
			                  <svg width="20" height="20" viewBox="0 0 23 23" fill="#082d60" xmlns="http://www.w3.org/2000/svg">
			                    <path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#082d60" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
			                  </svg>
			                </div>
			                <span class="sm:block hidden">+91 638-163-7626</span>
			                <span class="max-sm:block hidden">Call Us</span>
			              </div>
			            </a>
					</div>
				</div>
			</div>
			<div className="font-['Lexend'] bg-[#d7e9f7] text-[#082d60] sm:rounded-b-[40px] pb-[50px]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] font-['Lexend'] pt-[150px]">
					<div className="max-w-[900px]">
						<div className="font-medium sm:text-[48px] text-[32px]">
							<div className="">Comprehensive <span className="">Accounting Platform</span> for growing businesses</div>
						</div>
						<div className="flex flex-col gap-[10px] mt-[30px] text-black">
							<div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Comprehensive GST solutions
				                </div>
				            </div>
				            <div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Full financial compliance
				                </div>
				            </div>
				            <div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Seamless tax filing
				                </div>
				            </div>
			            </div>
		            </div>
		            <div className="max-w-[500px] max-md:mx-auto md:ml-auto mt-[50px] bg-[#082d60] md:px-[40px] px-[20px] py-[30px] rounded-[20px]">
		            	<div className="text-[25px] text-white font-medium mb-[30px]">Get Your First Consultation at Wert Consultancy—Completely Free!</div>
		            	<div className="flex flex-col gap-[20px]">
		            		<div className="flex items-center border-[1.5px] border-solid border-white p-[10px] rounded-[5px] bg-white">
		            			<svg fill="#000000" width="30px" height="30px" viewBox="0 0 50 50">
		            				<path d="M8 2L8 6L4 6L4 48L15 48L15 39L19 39L19 48L30 48L30 6L26 6L26 2 Z M 10 10L12 10L12 12L10 12 Z M 14 10L16 10L16 12L14 12 Z M 18 10L20 10L20 12L18 12 Z M 22 10L24 10L24 12L22 12 Z M 32 14L32 18L34 18L34 20L32 20L32 22L34 22L34 24L32 24L32 26L34 26L34 28L32 28L32 30L34 30L34 32L32 32L32 34L34 34L34 36L32 36L32 38L34 38L34 40L32 40L32 42L34 42L34 44L32 44L32 48L46 48L46 14 Z M 10 15L12 15L12 19L10 19 Z M 14 15L16 15L16 19L14 19 Z M 18 15L20 15L20 19L18 19 Z M 22 15L24 15L24 19L22 19 Z M 36 18L38 18L38 20L36 20 Z M 40 18L42 18L42 20L40 20 Z M 10 21L12 21L12 25L10 25 Z M 14 21L16 21L16 25L14 25 Z M 18 21L20 21L20 25L18 25 Z M 22 21L24 21L24 25L22 25 Z M 36 22L38 22L38 24L36 24 Z M 40 22L42 22L42 24L40 24 Z M 36 26L38 26L38 28L36 28 Z M 40 26L42 26L42 28L40 28 Z M 10 27L12 27L12 31L10 31 Z M 14 27L16 27L16 31L14 31 Z M 18 27L20 27L20 31L18 31 Z M 22 27L24 27L24 31L22 31 Z M 36 30L38 30L38 32L36 32 Z M 40 30L42 30L42 32L40 32 Z M 10 33L12 33L12 37L10 37 Z M 14 33L16 33L16 37L14 37 Z M 18 33L20 33L20 37L18 37 Z M 22 33L24 33L24 37L22 37 Z M 36 34L38 34L38 36L36 36 Z M 40 34L42 34L42 36L40 36 Z M 36 38L38 38L38 40L36 40 Z M 40 38L42 38L42 40L40 40 Z M 10 39L12 39L12 44L10 44 Z M 22 39L24 39L24 44L22 44 Z M 36 42L38 42L38 44L36 44 Z M 40 42L42 42L42 44L40 44Z"/>
		            			</svg>
		            			<input id="firstSectionCompany" className="outline-none w-full ml-[10px]" type="text" placeholder="Company Name" />
		            		</div>
		            		<div className="flex items-center border-[1.5px] border-solid border-white p-[10px] rounded-[5px] bg-white">
		            			<svg fill="#000000" width="30px" height="30px" viewBox="0 0 528.633 528.632">
									<g>
										<g>
											<path d="M264.317,326.235c-13.739,0-26.659-5.349-36.371-15.067L0.692,83.914v356.863c0,16.897,13.703,30.601,30.6,30.601h466.044
												c16.896,0,30.6-13.703,30.6-30.601V83.92L300.693,311.167C290.977,320.886,278.057,326.235,264.317,326.235z"/>
											<path d="M0.692,57.255H0l0.698,0.697l240.229,240.234c6.463,6.457,14.927,9.688,23.391,9.688c8.464,0,16.933-3.231,23.39-9.688
												L527.936,57.953l0.697-0.697h-0.697H0.692L0.692,57.255z"/>
										</g>
									</g>
								</svg>
		            			<input id="firstSectionEmail" className="outline-none w-full ml-[10px]" type="text" placeholder="Email Address" />
		            		</div>
		            		<div className="flex items-center border-[1.5px] border-solid border-white p-[10px] rounded-[5px] bg-white">
		            			<svg width="30" height="30" viewBox="0 0 23 23" fill="" xmlns="http://www.w3.org/2000/svg">
		            				<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
		            			</svg>
		            			<input id="firstSectionMobile" className="outline-none w-full ml-[10px]" type="text" placeholder="Mobile Number" />
		            		</div>
		            		<div className="bg-[#ffc94d] text-[18px] font-medium text-center p-[10px] cursor-pointer rounded-[5px]" onClick={() => validateInput('firstSectionCompany', 'firstSectionEmail', 'firstSectionMobile')}>SUBMIT</div>
		            	</div>
		            </div>
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Lexend']">
				<div className="text-[32px] text-center font-semibold text-[#082d60] py-[70px]">POPULAR SERVICES</div>
				<div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Income Tax Notice Assistance
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							A dedicated tax expert helps you navigate and respond to notices under sections 139(9), 143(1), high-value transactions, and other notices from the Income Tax Department.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Expert Assisted ITR Filing
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Experts to do Income Tax Filing for you. It is convenient & fast, with maximum eligible refund calculated for you.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Updated Return Filing (ITR-U)
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							ITR-U helps individuals to update the correct income in the already filed ITR and also provides an opportunity for those who have not filed previously.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Foreign Income Tax Filing
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Ease your Indian tax filing with our experts, covering both foreign income like RSU / ESOP / ESSP. We ensure compliance with the Income tax laws and help you declare foreign income and claim eligible tax deductions.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							E-commerce, SEZ &. Export Refunds
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Our expert handles all GST and Income tax compliance for sellers in E commerce and Business in SEZ and help claim benefits under SEZ.We will help you get your GST refund of ITC on export of goods and services under LUT/Bond and Accumulated unutilized ITC.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Capital Gain Tax Filing
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Seeking tax expert advice on the transaction done with respect to the sale of property, equity shares, mutual fund units, or bonds in addition to salary/business income.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							Domestic and International Bookkeeping
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Our team keeps your transactions in order and provides monthly financial reports. Access an up-to-date summary of your earnings and spending anytime, without waiting for final reports.We are expert in Tally,Quickbooks, Zoho books, MYOB and Xero. we can handle US, UK, Netherlands, Australia and UAE bookkeeping.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] px-[30px] py-[30px] rounded-[10px]">
						<div className="font-semibold text-[20px] h-[50px]">
							US Tax preparation
						</div>
						<div className="text-[#6b6b6b] mt-[10px]">
							Our team of experienced accountants specializes in individual and business tax preparation to meet your practice’s needs. We’re flexible and work with your preferred software to provide reliable, efficient, and high-quality accounting and bookkeeping services but we are already comfortable with CCH products. From preparing 1099s to preparing complex 1065,1120,1120S, 1041 and 1040 we can help prepare the tax returns with provided infrastructure.
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#d7e9f7] mt-[100px]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] font-['Lexend'] py-[70px]">
					<div className="text-[32px] text-center font-semibold text-[#082d60] mb-[30px]">We Can Offer</div>
					<div className="flex md:flex-row flex-col justify-center gap-[30px] items-center">
						<div className="bg-[#082d60] py-[40px] px-[25px] rounded-[25px] text-white max-w-[400px]">
							<div className="text-[24px] font-medium text-[#ffc94d] text-center">Business Registrations</div>
							<div className="flex flex-col mt-[30px] gap-[15px]">
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Private Limited Company</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Limited Liability Partnership</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>One Person Company Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Partnership Firm Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Sole Proprietorship Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>GST Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Trust, 80G and 12A Registration 12AA Registration</span>
								</div>
							</div>
						</div>
						<div className="bg-[#082d60] py-[40px] px-[25px] rounded-[25px] text-white max-w-[400px]">
							<div className="text-[24px] font-medium text-[#ffc94d] text-center">Other Registrations</div>
							<div className="flex flex-col mt-[30px] gap-[15px]">
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>MSME Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Import & Export Code (DGFT)</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>FSSAI Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Shop & Establishment</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Professional Tax Registration</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Digital Signature Certificate (Emudhra- DSC)</span>
								</div>
								<div className="flex gap-[5px] items-start">
									<img src={registrationIcon} />
									<span>Trademark Registration</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] py-[70px] font-['Lexend'] text-center">
				<div className="text-[32px] text-center font-semibold text-[#082d60] pb-[70px]">Supporting All Your Growth Needs</div>
				<div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 border-collapse">
					<div className="border-solid border-[1px] border-[#e6e6e6] p-[30px]">
						<img className="w-[60px] mx-auto" src={freelancers} />
						<div className="font-medium text-[18px] mt-[20px] h-[50px]">
							For Salaried Individuals & Freelancers
						</div>
						<div className="mt-[10px] text-[#a7a7a7] text-[16px]">
							Build a tax-compliant freelance career effortlessly with our expert support. We help ensure smooth tax planning and filing for your growing career.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] p-[30px]">
						<img className="w-[60px] mx-auto" src={smeBusiness} />
						<div className="font-medium text-[18px] mt-[20px] h-[50px]">
							For SMEs & MSME Businesses
						</div>
						<div className="mt-[10px] text-[#a7a7a7] text-[16px]">
							Eliminate the stress of business accounting and compliance with our tailored services. We ensure your business remains compliant, freeing you to focus on growth.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] p-[30px]">
						<img className="w-[60px] mx-auto" src={consultants} />
						<div className="font-medium text-[18px] mt-[20px] h-[50px]">
							For Consultants and Professionals
						</div>
						<div className="mt-[10px] text-[#a7a7a7] text-[16px]">
							Stay on top of your profits and plan your taxes efficiently with our guidance. Our services offer precise tax management for seamless financial control.
						</div>
					</div>
					<div className="border-solid border-[1px] border-[#e6e6e6] p-[30px]">
						<img className="w-[60px] mx-auto" src={smeBusiness} />
						<div className="font-medium text-[18px] mt-[20px] h-[50px]">
							For Equity, Intraday, and F&O Traders
						</div>
						<div className="mt-[10px] text-[#a7a7a7] text-[16px]">
							Ensure accurate tax filing for your trading activities with our expert help. We handle all tax aspects of equity, intraday, and F&O trading, keeping you compliant.
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#d7e9f7] py-[70px]">
				<div className="w-[100%] tracking-[1px]">
			        <div className="max-w-[1400px] w-[100%] mx-auto px-[20px] md:px-[50px]">
			          <div id="testimonialContainerFixed" className="overflow-hidden">
			            <div className="text-[32px] text-center font-semibold text-[#082d60]">What Our Customers Say</div>
			            <div id="testimonialContainerParent" className="flex w-[800%]" style={{
			              transition: 'transform 0.5s ease-in-out'
			            }}>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#8ADCFF] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
								<div className="">
									I visited Wert Consultancy for tax filing, and I was impressed with how quickly Naveen and Satish handled everything. Their promptness and attention to detail were outstanding, making the process smooth and efficient.
								</div>
								<div className="flex items-center">
									<img className="w-[60px] h-[60px]" src={ramaChandran} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">Rama Chandran</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#FFDF73] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
								<div className="">
									Wert Consultancy ensures timely tax returns and compliance with GST regulations. Their thorough advice and consistent support have allowed us to manage our business seamlessly, without worrying about tax obligations.
								</div>
								<div className="flex">
									<img src={ssTech} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">SS Tech</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#E0FF88] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
			                	<div className="">
			                		I’ve worked with Wert Consultancy on both direct and indirect taxation, and their professionalism and dedication were evident throughout our collaboration. Their expertise has been invaluable.
			                	</div>
								<div className="flex">
									<img src={naveenKiran} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">Naveen Kiran</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#8ADCFF] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
			                	<div className="">
			                		Highly professional service! They helped me understand complex tax issues and provided clear, practical solutions. Their transparency and expertise make them highly recommended for anyone needing tax assistance.
			                	</div>
								<div className="flex">
									<img src={aravindhRV} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">Aravinth Rv</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#67ac5c] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
			                	<div className="">
			                		Wert Consultancy is a highly recommended firm for addressing financial queries. They ensure timely services and provide excellent guidance on all financial matters.
			                	</div>
								<div className="flex">
									<img src={nithyaRagunathasamy} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">Nithya Ragunathasamy</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			                <div className="flex flex-col justify-between gap-[50px] bg-[#ffcb8a] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] min-[700px]:w-[555px] w-[300px] text-left text-[16px] mr-[20px] testimonial">
			                	<div className="">
			                		Wert Consultancy handled my F.Y. 2023-2024 tax return with exceptional service. Their professionalism and quick communication made the process smooth. Highly recommend for tax matters
			                	</div>
								<div className="flex">
									<img src={dhiveshPM} />
									<div className="ml-[15px]">
										<span className="text-[24px] font-semibold">Dhivesh Pm</span>
										<div className="flex gap-[2px]">
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</div>
									</div>
								</div>
			                </div>
			            </div>
			          </div>
			          <div className="mt-[50px] flex items-center justify-center">
			            <div className="scrollArrow bg-[#082d60] p-[15px] rounded-[50%] w-fit cursor-pointer" onClick={() => scrollTestimonial("left")}>
			              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <path d="M6 9L1 5L6 1" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			              </svg>
			            </div>
			            <div className="flex mx-[30px] gap-[10px]">
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#ffc94d"/>
			              </svg>
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#082d60"/>
			              </svg>
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#082d60"/>
			              </svg>
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#082d60"/>
			              </svg>
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#082d60"/>
			              </svg>
			              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <circle cx="5" cy="5" r="5" fill="#082d60"/>
			              </svg>
			            </div>
			            <div className="scrollArrow bg-[#082d60] p-[15px] rounded-[50%] w-fit cursor-pointer" onClick={() => scrollTestimonial("right")}>
			              <svg className="mt-[2px] ml-[3px]" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <path d="M1 9L6 5L1 1" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			              </svg>
			            </div>
			          </div>
			        </div>
			    </div>
			</div>
			<div id="pricing" className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] font-['Lexend'] mt-[100px]">
				<div className="text-center text-[32px] text-center font-semibold text-[#082d60]">
					Plans based on your selection
				</div>
				<div className="bg-[#f5f5f5] w-fit px-[10px] py-[5px] mx-auto mt-[50px] rounded-[50px] text-[14px] flex items-center font-semibold">
					<span id="tds" className="px-[20px] py-[10px] rounded-[50px] cursor-pointer bg-[#082d60] text-white" onClick={() => togglePlanType("tds")}>TDS</span>
					<span id="itr" className="px-[20px] py-[10px] rounded-[50px] cursor-pointer" onClick={() => togglePlanType("itr")}>Income Tax</span>
					<span id="gst" className="cursor-pointer rounded-[50px] px-[20px] py-[10px]" onClick={() => togglePlanType("gst")}>GST</span>
				</div>
				{(planType === 'gst') && 
					<>
						<div className="bg-[#f5f5f5] w-fit px-[10px] py-[5px] mx-auto mt-[30px] rounded-[50px] text-[14px] flex items-center font-semibold">
							<span id="monthly" className="px-[20px] py-[10px] rounded-[50px] cursor-pointer" onClick={() => togglePlanDuration("monthly")}>Monthly</span>
							<span id="yearly" className="px-[20px] py-[10px] rounded-[50px] cursor-pointer bg-[#082d60] text-white" onClick={() => togglePlanDuration("yearly")}>Yearly</span>
						</div>
						<div className="text-center mt-[20px] text-[#0068ff] text-[18px] font-normal">
							<span>*</span>
							Save *8.33% - Pay for 10 months ( We offer 2 months for free).
						</div>
					</>
				}
				<div className={`w-fit mx-auto grid gap-[30px] min-[700px]:grid-cols-2 grid-cols-1 mt-[50px] ${(planType === 'tds') ? '' : 'xl:grid-cols-3'}`}>
					{currentPlans.map((currentPlan, i) => 
						<PlanCard openCardModal={openCardModal} plan={currentPlan} planDuration={planDuration} />
					)}
				</div>
			</div>
			<div className="bg-[#071E22]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] font-['Lexend'] mt-[100px] text-white py-[50px]">
					<div className="sm:text-[32px] text-[24px] text-center font-medium">
						Find Out what Wert Consultancy can do for you
					</div>
					<div className="text-center mt-[10px]">
						Get the peace of mind that comes from partnering with our experienced finance team.
					</div>
					<div className="flex md:flex-row flex-col-reverse justify-center gap-[50px] items-center mt-[100px]">
						<div className="flex flex-col gap-[20px]">
							<div className="flex items-start gap-[10px]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="25px" height="25px" viewBox="0 0 24 24" stroke="#ffffff">
									<g id="SVGRepo_bgCarrier" stroke-width="0"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier">
									<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
									</g>
								</svg>
								<div className="text-[18px]">
									<div>46, Bharathi Colony Rd,</div>
									<div>Lal Bahadhur Colony, Coimbatore,</div>
									<div>Tamil Nadu 641004</div>
								</div>
							</div>
							<a href="tel:+916381637626">
								<div className="flex items-center gap-[10px]">
									<svg width="25" height="25" viewBox="0 0 23 23" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
					                    <path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#082d60" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
					                </svg>
					                <div className="text-[18px]">+91 638-163-7626</div>
					            </div>
				            </a>
				            <a href="mailto:+916381637626">
					            <div className="flex items-center gap-[10px]">
									<svg fill="#ffffff" width="22px" height="22px" viewBox="0 0 528.633 528.632">
										<g>
											<g>
												<path d="M264.317,326.235c-13.739,0-26.659-5.349-36.371-15.067L0.692,83.914v356.863c0,16.897,13.703,30.601,30.6,30.601h466.044
													c16.896,0,30.6-13.703,30.6-30.601V83.92L300.693,311.167C290.977,320.886,278.057,326.235,264.317,326.235z"/>
												<path d="M0.692,57.255H0l0.698,0.697l240.229,240.234c6.463,6.457,14.927,9.688,23.391,9.688c8.464,0,16.933-3.231,23.39-9.688
													L527.936,57.953l0.697-0.697h-0.697H0.692L0.692,57.255z"/>
											</g>
										</g>
									</svg>
					                <div className="text-[18px]">wertconsultancy@gmail.com</div>
					            </div>
					        </a>
						</div>
						<div className="flex flex-col gap-[20px] sm:w-[400px] w-full bg-[#fefefe] px-[30px] py-[50px] rounded-[20px] text-black">
		            		<div className="flex items-center border-[1px] border-solid border-black p-[10px] rounded-[5px] bg-white">
		            			<svg fill="#000000" width="30px" height="30px" viewBox="0 0 50 50">
		            				<path d="M8 2L8 6L4 6L4 48L15 48L15 39L19 39L19 48L30 48L30 6L26 6L26 2 Z M 10 10L12 10L12 12L10 12 Z M 14 10L16 10L16 12L14 12 Z M 18 10L20 10L20 12L18 12 Z M 22 10L24 10L24 12L22 12 Z M 32 14L32 18L34 18L34 20L32 20L32 22L34 22L34 24L32 24L32 26L34 26L34 28L32 28L32 30L34 30L34 32L32 32L32 34L34 34L34 36L32 36L32 38L34 38L34 40L32 40L32 42L34 42L34 44L32 44L32 48L46 48L46 14 Z M 10 15L12 15L12 19L10 19 Z M 14 15L16 15L16 19L14 19 Z M 18 15L20 15L20 19L18 19 Z M 22 15L24 15L24 19L22 19 Z M 36 18L38 18L38 20L36 20 Z M 40 18L42 18L42 20L40 20 Z M 10 21L12 21L12 25L10 25 Z M 14 21L16 21L16 25L14 25 Z M 18 21L20 21L20 25L18 25 Z M 22 21L24 21L24 25L22 25 Z M 36 22L38 22L38 24L36 24 Z M 40 22L42 22L42 24L40 24 Z M 36 26L38 26L38 28L36 28 Z M 40 26L42 26L42 28L40 28 Z M 10 27L12 27L12 31L10 31 Z M 14 27L16 27L16 31L14 31 Z M 18 27L20 27L20 31L18 31 Z M 22 27L24 27L24 31L22 31 Z M 36 30L38 30L38 32L36 32 Z M 40 30L42 30L42 32L40 32 Z M 10 33L12 33L12 37L10 37 Z M 14 33L16 33L16 37L14 37 Z M 18 33L20 33L20 37L18 37 Z M 22 33L24 33L24 37L22 37 Z M 36 34L38 34L38 36L36 36 Z M 40 34L42 34L42 36L40 36 Z M 36 38L38 38L38 40L36 40 Z M 40 38L42 38L42 40L40 40 Z M 10 39L12 39L12 44L10 44 Z M 22 39L24 39L24 44L22 44 Z M 36 42L38 42L38 44L36 44 Z M 40 42L42 42L42 44L40 44Z"/>
		            			</svg>
		            			<input id="footerCompany" className="outline-none w-full ml-[10px]" type="text" placeholder="Company Name" />
		            		</div>
		            		<div className="flex items-center border-[1px] border-solid border-black p-[10px] rounded-[5px] bg-white">
		            			<svg fill="#000000" width="30px" height="30px" viewBox="0 0 528.633 528.632">
									<g>
										<g>
											<path d="M264.317,326.235c-13.739,0-26.659-5.349-36.371-15.067L0.692,83.914v356.863c0,16.897,13.703,30.601,30.6,30.601h466.044
												c16.896,0,30.6-13.703,30.6-30.601V83.92L300.693,311.167C290.977,320.886,278.057,326.235,264.317,326.235z"/>
											<path d="M0.692,57.255H0l0.698,0.697l240.229,240.234c6.463,6.457,14.927,9.688,23.391,9.688c8.464,0,16.933-3.231,23.39-9.688
												L527.936,57.953l0.697-0.697h-0.697H0.692L0.692,57.255z"/>
										</g>
									</g>
								</svg>
		            			<input id="footerEmail" className="outline-none w-full ml-[10px]" type="text" placeholder="Email Address" />
		            		</div>
		            		<div className="flex items-center border-[1px] border-solid border-black p-[10px] rounded-[5px] bg-white">
		            			<svg width="30" height="30" viewBox="0 0 23 23" fill="" xmlns="http://www.w3.org/2000/svg">
		            				<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
		            			</svg>
		            			<input id="footerMobile" className="outline-none w-full ml-[10px]" type="text" placeholder="Mobile Number" />
		            		</div>
		            		<div className="bg-[#ffc94d] text-[18px] font-medium text-center p-[10px] cursor-pointer rounded-[5px]" onClick={() => validateInput('footerCompany', 'footerEmail', 'footerMobile')}>SUBMIT</div>
		            	</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Homepage;