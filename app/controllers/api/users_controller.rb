class Api::UsersController < ApplicationController

  def index
    @users = User.get_hierarchy
    render json: @users
  end

  def create
     @user = User.new(user_params)
     if @user.save!
       render "api/users/show"
     else
       render json: ['Please fill all fields, please try again.'], status: 422
     end
  end

  def show

  end



  def destroy
     user = User.find(params[:id])
     User.destroy_subordinates(user)
     @users = User.get_hierarchy
     render json: @users
  end


  private
  def user_params
    params.require(:user).permit(:fname, :lname, :title, :manager_id)
  end
end
