interface InputGroupProps {
	label: string;
	errors: string;
	arrayOfInputs: string[];
	setInputValues: (e: any, field: string) => void;
	inputValues: any;
	addInput: any;
	field: string;
	removeInput: any;
}

const MultiScamInput: React.FC<InputGroupProps> = ({ label, arrayOfInputs, setInputValues, inputValues, errors, addInput, field, removeInput }) => {
	return (
		<div className=" mx-auto flex mb-[10px] flex-col">
			<div className="flex w-full flex-col gap-y-[5px]">
				<label className="font-regular text-eccblue text-[18px] ">{label}</label>
				<div className="flex flex-row gap-x-3 items-start">
					<div className="flex flex-col gap-y-1 t">
						{arrayOfInputs.map((input: string, index) => (
							<div className={input !== "input1" ? "flex flex-row gap-x-3 items-center" : ""}>
								<input
									key={index}
									className="w-[250px] rounded-md border p-2 border-[#bdbcdb] h-[30px] focus:outline-none focus:border-eccblue"
									id={input}
									type="text"
									value={inputValues[input]}
									onChange={(e) => setInputValues(e, field)}
								/>
								{input !== "input1" && (
									<button onClick={() => removeInput(field, input)}>
										<img src="/icons/admin-icons/removeButton.svg" />
									</button>
								)}
							</div>
						))}
					</div>
					<button onClick={() => addInput(field)}>
						<img src="/icons/admin-icons/addButton.svg" />
					</button>
				</div>
			</div>
			{errors && <small className="">{errors}</small>}
		</div>
	);
};

export default MultiScamInput;
