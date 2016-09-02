class Api::UsersController < ApplicationController

  # before_action :require_signin, only: [:index, :update, :show]

  def create
    @user = User.new(user_params)

		if @user.save
			sign_in(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      session[:session_token] = @user.reset_session_token!
      render :show
    else
      render json: @user.errors.full_messages, status: 422
      render :show
    end
  end

  def index
    if params[:role]
      users_with_role = User.where(role: params[:role])
      @users = users_with_role.where(zip_code: params[:zip_code])
    end
    render :index
  end



  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :username, :password, :email, :photo_url, :zip_code, :role, :about, :looking_for, :id)
  end
end
