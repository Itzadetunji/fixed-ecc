import Wrapper from "../../../components/Admin/Navs/navWrapper";

import { useState, useEffect } from "react";
import UserTable from "../../../components/Admin/ManageUsers/userTable";
import UserOperation from "../../../components/Admin/ManageUsers/UserOperations";

import UserData from "./../../../components/Admin/userData";
import SearchBar from "../../../components/Admin/searchbar";
import PaginationSection from "../../../components/LatestScams/PaginationSection";
import { format } from "date-fns";

const Manage = () => {
	const [userData, setData] = useState(UserData);
	const [maxNumber, setMaxNumber] = useState(8);
	const [pageNumber, setPageNumber] = useState(1);
	const [value, setValue] = useState("");
	const [selected, setSelected] = useState<string[]>([]);
	const [isOperation, setOperation] = useState(false);
	const [operationType, setOperationType] = useState("");
	const [currentUserId, setUserId] = useState("");
	const [allSelected, setAllSelected] = useState(false);
	const [statusShowing, setStatusShowing] = useState(false);
	useEffect(() => {
		function filterBySearch() {
			const filteredData = userData.filter((user) => user.userEmail.toLowerCase().includes(value.toLowerCase()) || user.userName.toLowerCase().includes(value.toLowerCase()) || user.userPhone.toLowerCase().includes(value.toLowerCase()));
			if (filteredData.length > 0) {
				setData(filteredData);
			} else setData(UserData);
			if (value.length === 0) {
				setData(UserData);
			}
			setPageNumber(1);
		}

		filterBySearch();
	}, [value]);

	const onSelect = (id: string) => {
		let selectedItems: Array<string> = [];
		//check if the item is already in the selected list if it is remove it from the list if not add it to the list
		if (selected.includes(id)) {
			const removedItems = selected.filter((item) => item !== id);
			selectedItems = removedItems;
		} else {
			selectedItems = [...selected, id];
		}
		setSelected(selectedItems);
	};
	const selectAll = () => {
		if (selected.length < userData.length) {
			let selectedItems: Array<string> = [];
			userData.forEach((item) => selectedItems.push(item.userId));

			setSelected(selectedItems);
			setAllSelected(true);
		} else if (selected.length === userData.length) {
			let selectedItems = [...selected];
			selectedItems.length = 0;
			setSelected(selectedItems);
			setAllSelected(false);
		}
	};
	const handleStatusChange = (text: string) => {
		text = text === "Verify" ? "Verified" : "Unverified";
		const userDataTest = [...userData];
		userDataTest.forEach((item) => {
			if (selected.includes(item.userId)) {
				item.status = text;
			}
		});
		setData(userDataTest);
	};
	const addUser = (userObject: any) => {
		const userData1 = [...userData];
		const UserObject = {
			userId: (userData1.length + 1).toString(),
			profilePic: "/Images/profilePic.png",
			userName: userObject.fullName,
			userEmail: userObject.email,
			registrationDate: format(Date.now(), "MMMM dd,yyyy"),
			userPhone: userObject.phone,
			status: userObject.verify,
			complaints: [],
			state: userObject.state,
			lga: userObject.lga,
			nin: userObject.nin,
			userAddress: userObject.userAddress,
		};

		userData1.unshift(UserObject);
		setData(userData1);
	};

	const editUser = (userObject: any, Id: string) => {
		//find user

		if (userData) {
			const userData1 = [...userData];
			const user = userData1.filter((currentUser) => currentUser.userId == Id);
			user[0].status = userObject.verify;
			user[0].userName = userObject.fullName;
			user[0].userEmail = userObject.email;
			user[0].userPhone = userObject.phone;

			setData(userData1);
		}
	};

	const deleteUser = (Id: string) => {
		//get the user Id from the list
		const userData1 = [...userData];
		const newList = userData1.filter((currentUser) => currentUser.userId !== Id);
		setData(newList);
	};
	return (
		<Wrapper>
			<div className="">
				{isOperation && (
					<div className="w-full bg-[#f0f0f0] flex flex-col items-center h-screen">
						<UserOperation
							operationType={operationType}
							userId={currentUserId}
							setOperation={setOperation}
							userData={userData}
							// setUserData={userData}
							addUser={addUser}
							editUser={editUser}
							deleteUser={deleteUser}
						/>
					</div>
				)}

				<div className="w-[90%] mx-auto h-full ">
					<h1 className="text-eccblue text-[32px] my-6 ">Manage Users</h1>

					{userData.length > 0 && (
						<>
							<div className="bg-white rounded-[15px]">
								<div className="w-full h-[100px] flex flext-col items-center justify-between px-4">
									<div>
										<SearchBar
											value={value}
											setValue={setValue}
										/>
									</div>
									{selected.length > 0 && (
										<div>
											<button
												onClick={() => {
													setStatusShowing(!statusShowing);
												}}
												className="bg-[#D6D6D6] text-[#6D6D6D] w-[121px] py-2 rounded-lg font-semibold "
											>
												Status
											</button>
										</div>
									)}
									{selected.length > 0 && (
										<button
											disabled={isOperation}
											className=""
											onClick={() => {
												setOperation(true);
												setOperationType("delete");
												setUserId("1234");
											}}
										>
											<img
												src="/icons/admin-icons/delete.svg"
												alt=""
											/>
										</button>
									)}
									{/* <button6D6D6D
										disabled={isOperation}
										onClick={() => {
											setOperation(true);
											setOperationType("add");
											setUserId("");
										}}
										className={`h-[50px] ${isOperation ? "bg-[#838181]" : "bg-eccblue"}  flex flex-row items-center gap-x-4 rounded-md text-white w-auto px-2`}
									>
										<img
											src="/icons/admin-icons/userPlus.svg"
											alt=""
										/>
										Add user
									</button> */}
									{statusShowing && (
										<div className="flex flex-col relative  mt-4 items-center justify-center gap-y-2 h-auto w-[150px] rounded-md  px-4 py-4 border border-eccblue bg-white z-20">
											<div className={` w-[94px] h-fit bg-white cursor-pointer flex items-center justify-center rounded-md `}>
												<ul className="space-y-4">
													<li
														onClick={(e) => {
															handleStatusChange(e.currentTarget.innerText);
														}}
														className="text-success text-center bg-[#EBF6EB] py-2 w-[108px] rounded-[12px]"
													>
														Verify
													</li>
													<li
														onClick={(e) => {
															handleStatusChange(e.currentTarget.innerText);
														}}
														className="text-[#EF2E2E] text-center bg-[#FFF0F0] py-2 w-[108px] rounded-[12px]"
													>
														Unverify
													</li>
												</ul>
											</div>
										</div>
									)}
								</div>
								<UserTable
									allSelected={allSelected}
									selectAll={selectAll}
									selected={selected}
									select={onSelect}
									userData={userData}
									maxNumber={maxNumber}
									pageNumber={pageNumber}
									setOperation={setOperation}
									setOperationType={setOperationType}
									setUserId={setUserId}
									isOperation={isOperation}
								/>
								<div className="bg-white rounded-b-[15px] px-4 justify-between flex flex-row items-center ">
									{maxNumber <= 5 ? (
										<div className="mb-6">
											<PaginationSection
												pageSize={true}
												searchResults={userData}
												maxResultsPerPage={maxNumber}
												currentSearchPage={pageNumber}
												setCurrentSearchPage={setPageNumber}
												numberOfPages={Math.ceil(userData.length / maxNumber)}
											/>
										</div>
									) : (
										<div className="mb-6">
											<PaginationSection
												pageSize={false}
												searchResults={userData}
												maxResultsPerPage={maxNumber}
												currentSearchPage={pageNumber}
												setCurrentSearchPage={setPageNumber}
												numberOfPages={Math.ceil(userData.length / maxNumber)}
											/>
										</div>
									)}

									<div>
										<p>{`Showing ${(pageNumber - 1) * maxNumber + 1} to ${(pageNumber - 1) * maxNumber + 1 + (maxNumber - 1) > userData.length ? userData.length : (pageNumber - 1) * maxNumber + 1 + (maxNumber - 1)} of ${userData.length}`}</p>
									</div>

									<div className=" flex flex-row items-center">
										<div>
											<p>Rows per page</p>
										</div>
										<div>
											<input
												className="w-[30px] focus:outline-none border border-solid border-black ml-4"
												type="number"
												max={9}
												min={1}
												value={maxNumber}
												onChange={(e) => (parseInt(e.currentTarget.value) > 0 ? setMaxNumber(parseInt(e.target.value)) : setMaxNumber(8))}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default Manage;
