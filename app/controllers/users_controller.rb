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

end
