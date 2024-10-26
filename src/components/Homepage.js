import logo from './../images/logo.svg';

function Homepage() {
	return(
		<>
			<div className="sticky top-[0px] bg-[#feffcd]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] flex items-center justify-between font-['Lexend']">
					<img className="sm:w-[200px] w-[150px]" src={logo} />
					<div className="flex items-center text-[#082d60] font-medium text-[18px]">
						<div className="cursor-pointer mr-[20px] sm:block hidden">Pricing</div>
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
			<div className="font-['Lexend'] bg-[#feffcd] text-[#082d60] rounded-b-[40px]">
				<div className="max-w-[1400px] mx-auto sm:px-[50px] px-[20px] font-['Lexend'] pt-[200px]">
					<div className="max-w-[900px]">
						<div className="font-medium sm:text-[48px] text-[32px]">
							<div className="">Comprehensive <span className="">Accounting Platform</span> for growing businesses</div>
						</div>
						<div className="flex flex-col gap-[10px] mt-[30px] text-[#0099ff]">
							<div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0099ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Comprehensive GST solutions
				                </div>
				            </div>
				            <div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0099ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Full financial compliance
				                </div>
				            </div>
				            <div className="flex items-center">
			                	<svg width="20" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			                		<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0099ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
			                	</svg>
				                <div className="text-[18px] font-normal ml-[5px]">
				                	Seamless tax filing
				                </div>
				            </div>
			            </div>
		            </div>
		            <div className="max-w-[500px] ml-auto mt-[50px] bg-[#082d60] px-[50px] py-[40px] rounded-[20px] mb-[-50px]">
		            	<div className="text-[25px] text-white font-medium mb-[30px]">Try Wert Consultancy for free</div>
		            	<div className="flex flex-col gap-[20px]">
		            		<div className="flex items-center border-[1.5px] border-solid border-white p-[10px] rounded-[5px] bg-white">
		            			<svg fill="#000000" width="30px" height="30px" viewBox="0 0 50 50">
		            				<path d="M8 2L8 6L4 6L4 48L15 48L15 39L19 39L19 48L30 48L30 6L26 6L26 2 Z M 10 10L12 10L12 12L10 12 Z M 14 10L16 10L16 12L14 12 Z M 18 10L20 10L20 12L18 12 Z M 22 10L24 10L24 12L22 12 Z M 32 14L32 18L34 18L34 20L32 20L32 22L34 22L34 24L32 24L32 26L34 26L34 28L32 28L32 30L34 30L34 32L32 32L32 34L34 34L34 36L32 36L32 38L34 38L34 40L32 40L32 42L34 42L34 44L32 44L32 48L46 48L46 14 Z M 10 15L12 15L12 19L10 19 Z M 14 15L16 15L16 19L14 19 Z M 18 15L20 15L20 19L18 19 Z M 22 15L24 15L24 19L22 19 Z M 36 18L38 18L38 20L36 20 Z M 40 18L42 18L42 20L40 20 Z M 10 21L12 21L12 25L10 25 Z M 14 21L16 21L16 25L14 25 Z M 18 21L20 21L20 25L18 25 Z M 22 21L24 21L24 25L22 25 Z M 36 22L38 22L38 24L36 24 Z M 40 22L42 22L42 24L40 24 Z M 36 26L38 26L38 28L36 28 Z M 40 26L42 26L42 28L40 28 Z M 10 27L12 27L12 31L10 31 Z M 14 27L16 27L16 31L14 31 Z M 18 27L20 27L20 31L18 31 Z M 22 27L24 27L24 31L22 31 Z M 36 30L38 30L38 32L36 32 Z M 40 30L42 30L42 32L40 32 Z M 10 33L12 33L12 37L10 37 Z M 14 33L16 33L16 37L14 37 Z M 18 33L20 33L20 37L18 37 Z M 22 33L24 33L24 37L22 37 Z M 36 34L38 34L38 36L36 36 Z M 40 34L42 34L42 36L40 36 Z M 36 38L38 38L38 40L36 40 Z M 40 38L42 38L42 40L40 40 Z M 10 39L12 39L12 44L10 44 Z M 22 39L24 39L24 44L22 44 Z M 36 42L38 42L38 44L36 44 Z M 40 42L42 42L42 44L40 44Z"/>
		            			</svg>
		            			<input className="outline-none w-full ml-[10px]" type="text" placeholder="Company Name" />
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
		            			<input className="outline-none w-full ml-[10px]" type="text" placeholder="Email Address" />
		            		</div>
		            		<div className="flex items-center border-[1.5px] border-solid border-white p-[10px] rounded-[5px] bg-white">
		            			<svg width="30" height="30" viewBox="0 0 23 23" fill="" xmlns="http://www.w3.org/2000/svg">
		            				<path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
		            			</svg>
		            			<input className="outline-none w-full ml-[10px]" type="text" placeholder="Mobile Number" />
		            		</div>
		            		<div className="bg-[#ffc94d] text-[18px] font-medium text-center p-[10px] cursor-pointer rounded-[5px]">SUBMIT</div>
		            	</div>
		            </div>
				</div>
			</div>
			<div className="h-[2000px]">
			</div>
		</>
	)
}

export default Homepage;