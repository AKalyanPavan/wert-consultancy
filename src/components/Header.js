import logo from './../images/logo.svg';

export default function Header({page}) {

	document.addEventListener('scroll', () => {
		let header = document.getElementById("header");
		if (window.scrollY > 20) {
			header.style.boxShadow = "0 0 15px -1px #00000014";
		} else {
			header.style.boxShadow = "";
		}
	});

	function scrollPage(id) {

		let element = document.getElementById(id);

		window.scrollTo({
			top: element.offsetTop - 120,
			left: 0,
			behavior: 'smooth'
		});
	}

	return(
		<div id="header" className="sticky top-[0px] bg-[#d7e9f7] z-[1]">
			<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] py-[20px] flex items-center justify-between font-['Lexend']">
				<a href="/">
					<img className="sm:w-[200px] w-[150px]" src={logo} />
				</a>
				<div className="flex items-center text-[#082d60] font-medium text-[18px]">
					{page == 'Homepage' && <div className="cursor-pointer mr-[20px] sm:block hidden" onClick={() => scrollPage("pricing")}>Pricing</div>}
					<a className="" href="tel:+916381637626">
						<div className="w-fit border-[solid] border-[1.5px] border-[#082d60] sm:px-[20px] px-[10px] py-[5px] rounded-[10px] items-center flex cursor-pointer">
							<div className="flex items-center border-[solid] pr-[5px] py-[5px]">
								<svg width="20" height="20" viewBox="0 0 23 23" fill="#082d60" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#082d60" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<span className="sm:block hidden">+91 638-163-7626</span>
							<span className="max-sm:block hidden">Call Us</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}