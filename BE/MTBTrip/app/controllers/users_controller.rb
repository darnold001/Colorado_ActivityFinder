class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: [:trails]
    end

    def create
        @user = User.find_by(firstname:params[:firstname], lastname:params[:lastname])
        if !@user
          @user = User.create(allowed_params)
        end
    render json: @user
    end


private
    def allowed_params
        params.require(:user).permit(:firstname, :lastname)
    end

end
