export const ConversationConstants = {
  REQUEST_CONVERSATIONS: "REQUEST_CONVERSATIONS",
  REQUEST_SINGLE_CONVERSATION: "REQUEST_SINGLE_CONVERSATION",
  RECEIVE_CONVERSATIONS: "RECEIVE_CONVERSATIONS",
  RECEIVE_SINGLE_CONVERSATION: "RECEIVE_SINGLE_CONVERSATION",
  MAKE_CONVERSATION: "MAKE_CONVERSATION",
  SEND_MESSAGE: "SEND_MESSAGE"
};

export const requestConversations = () => ({
  type: ConversationConstants.REQUEST_CONVERSATIONS
});

export const requestSingleConversation = id => ({
  type: ConversationConstants.REQUEST_SINGLE_CONVERSATION,
  id
});

export const receiveConversations = conversations => ({
  type: ConversationConstants.RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveSingleConversation = conversation => ({
  type: ConversationConstants.RECEIVE_SINGLE_CONVERSATION,
  conversation
});

export const makeConversation = conversation => ({
  type: ConversationConstants.MAKE_CONVERSATION,
  conversation
});

export const sendMessage = message => ({
  type: ConversationConstants.SEND_MESSAGE,
  message
});
