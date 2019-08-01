class TrailsController < ApplicationController

    def index 
        @trails = Trail.all
        render json: @trails
    end

    def create
        @trail = Trail.create(allowed_params)
        render json: @trail
    end
    def destroy
        trail = Trail.find(params[:id])
        trail.destroy
    end

private
    def allowed_params
        params.require(:trail).permit(:name, :difficulty, :rating,
         :url, :img, :length, :eChange, :created_at, :updated_at, :user_id)
    end
end
