import Check from './Check.js';
import { v4 as uuidv4 } from 'uuid';

export function SubFeatureList({ subFeatures }) {
	return (
		<ul className="list-disc ml-[60px] mt-[10px] flex flex-col gap-[10px] mb-[10px]">
			{subFeatures.map((subFeature, index) => (
				<li key={uuidv4()}>{subFeature}</li> // Use a unique key or array index as a fallback
			))}
		</ul>
	);
}

export default function PlanCard({ plan, planDuration, openCardModal }) {
	return (
		<div className="bg-[#f5f5f5] p-[30px] rounded-[10px] max-w-[420px]">
			<div className="font-bold text-[24px] h-[80px] text-left">{plan.title}</div>
			<div className="mt-[20px] flex items-center">
				<div className="text-[48px] font-bold">
					{(planDuration === 'yearly' && plan.yearlyPrice) ? plan.yearlyPrice : plan.price}
				</div>
				<div className="ml-[10px] text-[18px]">
					{(planDuration === 'yearly' && plan.yearlyPriceDuration) ? plan.yearlyPriceDuration : plan.priceDuration}
				</div>
			</div>
			<div className="text-[18px] mt-[-5px]">*Exclusive of Taxes</div>
			<div className="mt-[30px] mb-[20px] font-bold text-[16px] text-[#0077b6]">Plan Features</div>
			<div className="flex flex-col gap-[20px]">
				{plan.planFeatures.map((feature, index) => ( // Add a unique key here
					<div key={uuidv4()}>
						<div className="flex gap-[10px] items-start">
							<Check customStyle={"bg-[#ebebeb]"} />
							<span>{feature.title}</span>
						</div>
						{feature.subFeatures && <SubFeatureList subFeatures={feature.subFeatures} />}
					</div>
				))}
				<div className="text-[18px] h-full font-medium text-center cursor-pointer w-fit text-[#0068ff] hover:underline underline-offset-4 decoration-2 ml-auto mt-auto">
					<div onClick={() => openCardModal(plan)}>Show More >></div>
				</div>
			</div>
		</div>
	);
}
