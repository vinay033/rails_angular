class UsersController < ApplicationController
  # respond_to :html, :xml, :json, :js
  
  def index
    @users = User.all
    render json: @users
  end

  def upload
    User.upload_data(params[:url])
    render json: User.all
  end

  def destroy
  	user = User.find(params[:id])
  	user.destroy
  end

end
