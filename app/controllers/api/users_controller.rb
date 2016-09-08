

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
    @users = User.all
    if params[:role] != nil && params[:role] != "any"
      @users = User.where(role: params[:role])
    end
    if params[:distance] != nil && params[:distance] !="any"
      user_location = Location.find(current_user.location_id)
      user_lat = user_location.lat
      user_long = user_location.long
      distance = params[:distance].to_i
      locations = Location.within(distance, :origin => [user_lat, user_long])

      location_ids = locations.map{|location| location.id}
      @users = @users.where(location_id: location_ids)
    end
    @users
  end


  def show
    @user = User.includes(
    :question_responses, :questions, :question_options)
    .find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :username, :password, :email,
      :photo_url, :zip_code, :role,
      :about, :looking_for, :mentor,
      :hiring, :friendship, :collaboration,
      :id)
  end
end
