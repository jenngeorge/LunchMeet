class Api::QuestionResponsesController < ApplicationController

  def create
    @question_response = QuestionResponse.new(
      question_option_id: response_params[:question_option_id],
      user_id: response_params[:user_id],
      importance: response_params[:importance],
      explanation: response_params[:explanation],
      acceptable: response_params[:acceptable]
    )

    if @question_response.save!
      #
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
    params.require(:question_response).permit(
      :question_id, :question_option_id, :user_id,
      :acceptable, :importance, :explanation)
  end
end
