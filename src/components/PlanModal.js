import Check from './Check.js';

export function SubFeatureList({subFeatures}) {
	return(
		<ul className="list-disc ml-[60px] mt-[10px] flex flex-col gap-[10px] mb-[10px]">
			{subFeatures.map(function (subFeature, i) {
				return (
					<li>{subFeature}</li>
				)
			})}
		</ul>
	);
};

export default function PlanModal({plan, planDuration, onModalOverlayClicked}) {
	return(
		<div className="p-[30px] rounded-[10px] relative">
			<div onClick={onModalOverlayClicked} className="font-bold w-fit sticky top-[30px] hover:bg-[#0077b6] bg-[#082d60] text-white rounded-[5px] cursor-pointer py-[5px] px-[10px] ml-auto">X</div>
			<div className="font-bold text-[24px] text-left">{plan.title}</div>
			<div className="mt-[20px] flex items-center">
				<div className="text-[48px] font-bold">{( (planDuration === 'yearly') && (plan.yearlyPrice) ) ? plan.yearlyPrice : plan.price}</div>
				<div className="ml-[10px] text-[18px]">{( (planDuration === 'yearly') && (plan.yearlyPriceDuration) ) ? plan.yearlyPriceDuration : plan.priceDuration}</div>
			</div>
			<div className="text-[18px] mt-[-5px]">*Exclusive of Taxes</div>
			<div className="mt-[30px] mb-[10px] font-bold text-[16px] text-[#0077b6]">Plan Features</div>
			<div className="flex flex-col gap-[15px]">
				{plan.planFeatures.map(function (feature, i) {
		            return (
		            	<div>
							<div className="flex gap-[10px] items-start">
								<Check customStyle={"bg-[#d7e9f7]"} />
								<span>{feature.title}</span>
							</div>
							{
								feature.subFeatures && <SubFeatureList subFeatures={feature.subFeatures} />
							}
						</div>
		            );
		        })}
			</div>
			<div className="mt-[30px] mt-[20px] mb-[10px] font-bold text-[16px] text-[#0077b6]">Applicable To</div>
			<div className="flex flex-col gap-[10px]">
				{plan.applicableTo.map(function (applicableItem, i) {
		            return (
		            	<div>
							<div className="flex gap-[10px] items-start">
								<Check customStyle={"bg-[#d7e9f7]"} />
								<span>{applicableItem}</span>
							</div>
						</div>
		            );
		        })}
			</div>
			<div className="mt-[30px] mt-[20px] mb-[10px] font-bold text-[16px] text-[#0077b6]">Documents</div>
			<div className="flex flex-col gap-[10px]">
				{plan.Documents.map(function (document, i) {
		            return (
		            	<div>
							<div className="flex gap-[10px] items-start">
								<Check customStyle={"bg-[#d7e9f7]"} />
								<span>{document}</span>
							</div>
						</div>
		            );
		        })}
			</div>
		</div>
	)
}