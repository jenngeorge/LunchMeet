
const selectUnanswered = (questions, user) => {

  const unanswered = Object.keys(questions).map(key => {
    let question = questions[key];
    let respondedTo = (user.question_options.filter(option => {
      return option.question_id === question.id;})
      .length > 0);

      if (respondedTo === false){
        return question;
      }
    });
    return unanswered.filter(function(n){ return n !== undefined; });
  };

export default selectUnanswered;
