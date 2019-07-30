class TrailsController < ApplicationController

    def index 
        @trails = Trail.all
        render json: @trails
    end

    def create
        @trail = Trail.new
        render json: @trail
    end
    def allowed_params
        params.require(:user).permit(:name, :summary, :type, :difficulty, :stars, :location,
         :url, :consitionStatus, :conditionDate, :img, :length, :ascent, :descent, :lat, :long, 
         :apiid, :user_id, :created_at, :updated_at, :user_id)
    end
end
