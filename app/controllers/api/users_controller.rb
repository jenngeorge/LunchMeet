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
      render "api/users/show"
      # TODO: change to current_user's profile
    else
      render json: @user.errors.full_messages, status: 422
      render :show
    end
  end

  def index
    render :show
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
