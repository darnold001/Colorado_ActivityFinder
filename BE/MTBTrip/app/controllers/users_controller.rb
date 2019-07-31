class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @trails
    end
private
    def allowed_params
        params.require(:trail).permit(:first_name, :last_name, :trail_id)
    end

end
