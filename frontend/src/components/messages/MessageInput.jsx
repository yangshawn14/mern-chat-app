import React, { useState } from "react";
// import { HiPhoto } from "react-icons/hi2";
import { CgAttachment } from "react-icons/cg";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	// const [file, setFile] = useState(null);
	// const [fileUrl, setFileUrl] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleFileChange = async (e) => {
		const file = e.target.files[0]; // Get the first file from the input
		if (!file) return; // If no file was selected, do nothing

		try {
			// Send the file immediately
			await sendMessage("", file);
			// setFileUrl(URL.createObjectURL(file)); // Set the file URL for display
		} catch (error) {
			console.error("Error sending file:", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message, null);
		setMessage("");
		// setFile(null);
		// setFileUrl("");
	};

	return (
		<form className="px-4 my-3" onSubmit={handleSubmit}>
			<div className="flex items-center gap-1">
				<label htmlFor="file-input">
					<CgAttachment size={25} className="text-white cursor-pointer" />
				</label>
				<input
					id="file-input"
					type="file"
					style={{ display: "none" }}
					onChange={handleFileChange}
				/>
				<div className="w-full relative">
					<input
						type="text"
						className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
						placeholder="Send a message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button
						type="submit"
						className="absolute inset-y-0 end-0 flex items-center pe-3"
					>
						{loading ? (
							<div className="loading loading-spinner"></div>
						) : (
							<BsSend className="text-white" />
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default MessageInput;


// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;