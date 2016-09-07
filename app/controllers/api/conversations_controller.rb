class Api::ConversationsController < ApplicationController

  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save
      render '../users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @conversation = Conversation.includes(:messages).find(params[:id])
    render '../users/show'
  end

  #index is for each current user's inbox
  def index
    @conversations = Conversation
      .where("user_id = ? OR other_user_id = ?",
      current_user.id, current_user.id)
    render '../users/show'
  end

  def conversation_params
    params.require(:conversation).permit(:user_id, :other_user_id)
  end

end #class end
