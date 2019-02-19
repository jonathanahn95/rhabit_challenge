class Api::UsersController < ApplicationController

  def index
    @users = User.get_hierarchy
    render json: @users
  end

  def create

  end

  def show

  end


  private
  def user_params
    params.require(:user).permit(:fname, :lname, :title)
  end
end
