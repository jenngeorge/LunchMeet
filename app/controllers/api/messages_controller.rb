class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      @conversation = @message.conversation
      render "api/conversations/show"
    else
      render json: @user.errors.full_messages, status: 422
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
