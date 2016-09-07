
import {
  ConversationConstants,
  requestConversations,
  receiveConversations,
  requestSingleConversation,
  receiveSingleConversation,
  makeConversation,
  sendMessage
} from '../actions/conversation_actions';

import {
  fetchConversations,
  fetchSingleConversation,
  createConversation,
  createMessage
} from '../util/conversation_api_util';

//session actions
import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

export default ({getState, dispatch}) => next => action => {
  // success constants
  const conversationsSuccess = conversations => dispatch(receiveConversations(conversations));
  const singleConversationSuccess = conversation => dispatch(receiveSingleConversation(conversation));
  const makeConversationSuccess = user => dispatch(receiveCurrentUser(user));

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  const result = next(action);

  switch(action.type){
    // case ConversationConstants.REQUEST_CONVERSATIONS:
    //   console.log('convo middleware request questions');
    //   fetchConversations(conversationsSuccess);
    //   break;
    case ConversationConstants.REQUEST_SINGLE_CONVERSATION:
      console.log('convo middleware request question');
      fetchSingleConversation(action.id, singleConversationSuccess);
      break;
    case ConversationConstants.MAKE_CONVERSATION:
      console.log('convo middleware make convo');
      createConversation(action.conversation, makeConversationSuccess, errorCallback);
      break;
    case ConversationConstants.SEND_MESSAGE:
    console.log('convo middleware send message');
      createMessage(action.message, action.message.conversation_id, makeConversationSuccess, errorCallback);
      break;
    default:
      break;
  }
  return result;
};
