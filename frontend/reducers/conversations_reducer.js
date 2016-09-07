import { ConversationConstants } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const ConversationsReducer = function(state = {}, action){

  switch(action.type){

    // case ConversationConstants.RECEIVE_CONVERSATIONS:
    //   console.log('convo reducer receive convos');
    //   const mergedConversations = merge({}, state.session.currentUser, action.conversations);
    //   return mergedConversations;
    case ConversationConstants.RECEIVE_SINGLE_CONVERSATION:
      console.log('convo reducer receive single convo');
      const conversation = {[action.conversation.id]: action.conversation};
      const mergedConversation = merge({}, state.session.currentUser, conversation);
      return merge({}, state, mergedConversation);
    default:
      return state;
  }
};

export default ConversationsReducer;
