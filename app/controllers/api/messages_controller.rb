class Api::MessagesController < ApplicationController
  
  def create
    @message = Message.new(message_params)
    if @message.save
      render :index
    else
      render json: @user.errors.full_messages, status: 422
      render :index
    end
  end

  def message_params
    params.require(:message).permit(
      :sender_id,
      :receiver_id,
      :content,
      :conversation_id)
  end

end #class end
