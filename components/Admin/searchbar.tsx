import * as React from "react";
import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, setValue }) => {
	return (
		<form>
			<div className="lg:w-[465px] w-[250px] rounded-md bg-[#f0f0f0] h-[25px] lg:h-[50px] flex flex-row items-center">
				<img
					className="lg:w-[24px] h-[12px] w-[20px] lg:h-[24px] mx-6"
					src="/icons/search.svg"
					alt=""
				/>
				<input
					className=" w-[300px] h-[20px] lg:h-[40px] bg-[#f0f0f0] focus:outline-none "
					type="text"
					placeholder="Search"
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
