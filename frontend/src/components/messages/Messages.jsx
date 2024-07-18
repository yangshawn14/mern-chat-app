import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSearch from "./MessageSearch";

// const Messages = () => {
// 	const { messages, loading, filteredMessages } = useGetMessages();
// 	useListenMessages();
// 	const lastMessageRef = useRef();

// 	useEffect(() => {
// 		setTimeout(() => {
// 			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
// 		}, 100);
// 	}, [messages, filteredMessages]);

// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading &&
// 				messages.length > 0 &&
// 				messages.map((message) => (
// 					<div key={message._id} ref={lastMessageRef}>
// 						<Message message={message} />
// 					</div>
// 				))}

// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };

const Messages = ({ searchTerm }) => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	const filteredMessages = messages.filter((message) =>
		message.message.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const messagesToDisplay = searchTerm ? filteredMessages : messages;

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messagesToDisplay]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messagesToDisplay.length > 0 &&
				messagesToDisplay.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))
			}

			{!loading && messagesToDisplay.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;