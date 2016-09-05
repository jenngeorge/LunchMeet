class Api::QuestionResponsesController < ApplicationController

  def create
    @question_response = QuestionResponse.new(
      question_option_id: response_params[:question_option_id],
      user_id: response_params[:user_id],
      importance: response_params[:importance],
      explanation: response_params[:explanation],
      acceptable: response_params[:acceptable]
    )

    if @question_response.save
      @question_response.add_match_responses(response_params[:match_responses])
      render :show
    else
      render json: @question_response.errors
    end

  end

  def destroy
  end

  def show
    @question_response = QuestionResponse.find(params[:id])
  end

  def response_params
    params.require(:question_resposne).permit(
      :question_id, :question_option_id,
      :acceptable, :importance, :explanation)
end
