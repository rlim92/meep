class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            @user.channels << Channel.find_by(name: 'Meeptown')
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 420
        end
    end

    def index
        if params[:channelId]
            ch_id = params[:channelId].to_i
            @users = Channel.find(ch_id).members.all
        elsif params[:dmId]
            dm_id = params[:dmId].to_i
            @users = DirectMessage.find(dm_id).members.all
        end
        if @users
            render :index
        else
            render json: @users.errors.full_messages, status: 420
        end
    end

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
