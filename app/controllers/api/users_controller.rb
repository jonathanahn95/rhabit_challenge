class Api::UsersController < ApplicationController
  def index
    @users = User.get_hierarchy
    render json: @users
  end

  def create
    user = User.new(user_params)
    user.save!
    @users = User.get_hierarchy
    render json: @users
  end

  def show
    user = User.find(params[:id])
    @users = User.get_user_hierarchy(user)
    render json: @users
  end

  def destroy
     user = User.find(params[:id])
     User.reassign_subs_manager(user, user.superior)
     user.destroy
     @users = User.get_hierarchy
     render json: @users
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    @users = User.get_hierarchy
    render json: @users
  end


  private
  def user_params
    params.require(:user).permit(:fname, :lname, :title, :manager_id, :id)
  end
end
