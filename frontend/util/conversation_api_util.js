
export const fetchConversations = function (success) {
  $.ajax({
    method: 'GET',
    url: 'api/conversations',
    success
  });
};

export const fetchSingleConversation = function (id, success){
  $.ajax({
    method: 'GET',
    url: `api/conversations/${id}`,
    success
  });
};

export const createConversation = function(conversation, success, errors){
  $.ajax({
    method: 'POST',
    url: 'api/conversations',
    data: conversation,
    success,
    errors
  });
};

export const createMessage = function (message, conversationId, success, errors){
  $.ajax({
    method: 'POST',
    url: `api/conversations/${conversationId}/messages`
  });
};
