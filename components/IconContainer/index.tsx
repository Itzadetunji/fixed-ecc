import React from "react";
import Image from "next/image";

interface IconContainerProps {
	iconPath: string;
	size?: number;
}

export const IconContainer: React.FC<IconContainerProps> = ({ iconPath, size }) => {
	return (
		<div className={`w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-gradient-to-br from-eccblue to-[#0953A4] md:-rotate-[8deg] rounded-[16px] flex items-center justify-center`}>
			<div className="relative w-6 md:w-10 h-6 md:h-10">
				<Image
					src={iconPath}
					width={size ? size / 2 : 40}
					height={size ? size / 2 : 40}
					alt={"An Image"}
				/>
			</div>
		</div>
	);
};
