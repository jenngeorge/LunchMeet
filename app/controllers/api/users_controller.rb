class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

		if @user.save
			sign_in(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages
		end
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render "api/users/show"
      # TODO: change to current_user's profile
    else
      render json: @user.errors.full_messages
    end
  end

  def index
    User.all
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :username, :password, :email, :photo_url, :zip_code, :type, :about, :looking_for)
  end
end
