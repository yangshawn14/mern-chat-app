import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

// const MessageSearch = () => {
//     const { messages, setFilteredMessages } = useConversation();
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (!searchTerm.trim()) {
//             toast.error("Please enter a search term");
//             return;
//         }
//         if (searchTerm.length < 2) {
//             return toast.error("Search term must be at least 2 characters long");
//         }

//         const filteredMessages = messages.filter((message) =>
//             message.message.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredMessages(filteredMessages);
//     };

//     return (
//         <form onSubmit={handleSearch} className='flex items-center gap-2'>
//             <input
//                 type='text'
//                 placeholder='Search messages'
//                 className='input input-bordered rounded-full'
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//                 type='button'
//                 className='btn btn-circle bg-sky-500 text-white'
//             >
//                 <IoSearchSharp className='w-6 h-6 outline-none' />
//             </button>
//         </form>
//     );
// };

const MessageSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            toast.error("Please enter a search term");
            return;
        }
        if (searchTerm.length < 2) {
            return toast.error("Search term must be at least 2 characters long");
        }
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className='flex items-center gap-2'>
            <input
                type='text'
                placeholder='Search messages'
                className='input input-bordered rounded-full'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type='submit'
                className='btn btn-circle bg-sky-500 text-white'
            >
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    );
};

export default MessageSearch;
