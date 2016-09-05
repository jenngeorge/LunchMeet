
export const fetchQuestions = function (success){
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    success
  });
};

export const fetchSingleQuestion = function (id, success){
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`,
    success
  });
};

export const createResponse = function (response, success, errors){
  $.ajax({
    method: 'POST',
    url: `api/question_responses`,
    data: response,
    success,
    errors
  });
};
