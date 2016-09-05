class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render :index
  end

  def show
    @question = Question.find(params[:id])
    @question_options= QuestionOption.where(question_id: @question_id)
    render :show
  end

  def question_params
    params.require(:question).permit(:user_id)
end
