import Webcam from "react-webcam";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useCallback, useState } from "react";

interface WebCamProps {
	setWebCamShowing: Dispatch<SetStateAction<boolean>>;
}

const WebcamPort: React.FC<WebCamProps> = ({ setWebCamShowing }) => {
	const reader = new FileReader();

	const webCamRef = useRef(null);
	const [Image, setImage] = useState("");
	const [photoSelected, setPhotoSelected] = useState(false);
	const capture = useCallback(() => {
		const imageSrc = webCamRef.current.getScreenshot();
		setImage(imageSrc);
	}, [webCamRef]);
	const [unreadFile, setUnreadFile] = useState();

	const fileSelectHandler = (files) => {
		setUnreadFile(files[0]);
	};
	useEffect(() => {
		if (unreadFile) {
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(unreadFile);
			setPhotoSelected(true);
		} else {
			setImage("");
		}
	}, [unreadFile]);
	return (
		<div className="bg-white p-4 w-[400px] h-[400px] flex flex-col rounded-[18px] justify-center items-center">
			<div className="w-full flex justify-end mb-4">
				<button
					className="bg-eccblue rounded-full"
					onClick={() => setWebCamShowing(false)}
				>
					{" "}
					<img
						src="../icons/close.svg"
						alt=""
					/>
				</button>
			</div>
			{!photoSelected && Image.length < 1 ? (
				<Webcam
					ref={webCamRef}
					screenshotFormat="image/jpeg"
				/>
			) : (
				<img
					className="w-full object-cover h-[250px]"
					src={Image}
					alt=""
				/>
			)}

			<div className="mt-4 w-full flex-row justify-items-end">
				{!photoSelected && (
					<button
						onClick={() => {
							capture();
							setPhotoSelected(true);
						}}
						className="bg-eccblue text-white mr-4 rounded-md p-2"
					>
						Take Photo
					</button>
				)}
				{photoSelected && Image.length > 1 && (
					<button
						onClick={() => {
							setPhotoSelected(false);
							setImage("");
						}}
						className="bg-eccblue text-white mr-4 rounded-md p-2"
					>
						Retake
					</button>
				)}
				{!photoSelected && (
					<>
						<label
							className="border border-eccblue text-eccblue p-2 rounded-md"
							htmlFor="file-input"
						>
							Upload Photo
						</label>
						<input
							accept="image/*"
							multiple
							id="file-input"
							type="file"
							className="bg-eccblue hidden"
							onChange={(e) => fileSelectHandler(e.currentTarget.files)}
						/>
					</>
				)}
				{photoSelected && <button className="border border-eccblue text-eccblue p-2 rounded-md">Use Photo</button>}
			</div>
		</div>
	);
};

export default WebcamPort;
