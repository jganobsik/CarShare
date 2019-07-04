class UsersController < ApplicationController

def new
    @user = User.new
end

def create 
    @user = User.new(user_params)

    if @user.save
        session[:user_id] = @user.id
        redirect_to dashboard_path
    else 
        render :new
    end
end


def toptwo
@users = User.top_two
render :top_two
end
private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
