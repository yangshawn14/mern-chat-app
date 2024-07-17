import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	filteredMessages: [], // Initialize filtered messages state
	setFilteredMessages: (filteredMessages) => set({ filteredMessages }),
}));

export default useConversation;
