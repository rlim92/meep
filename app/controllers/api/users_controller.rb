class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            @user.channels << Channel.find_by(name: 'Meeptown')
            @user.direct_messages.create(is_team: false)
            rich = User.find_by(email: 'rich@meep.com')
            @user.direct_messages[0].member_ids = [@user.id, rich.id]
            @user.direct_messages[0].messages.create(author_id: rich.id, text: "Welcome to Meep! To create a DM, click the button next to 'Direct Messages' on the left and search for members in your subscribed channels.")
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 420
        end
    end

    def index
        # debugger
        if params[:channelId]
            ch_id = params[:channelId].to_i
            @users = Channel.find(ch_id).members.includes(:channels, :direct_messages)
        elsif params[:dmId]
            dm_id = params[:dmId].to_i
            # debugger
            @users = DirectMessage.find(dm_id).members.includes(:channels, :direct_messages)
        elsif params[:userDmId]
            user_id = params[:userDmId]
            @dm_members = User.find(user_id).direct_messages.includes(:members)
        end
        if @users
            render :index
        elsif @dm_members
            render :members
        else
            render json: @users.errors.full_messages, status: 420
        end
    end

    def show
        # debugger
        @user = User.find(params[:id]).includes(:channels, :direct_messages)
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
