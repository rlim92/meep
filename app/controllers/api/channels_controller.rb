class Api::ChannelsController < ApplicationController

    def index
        if params[:userId]
            # debugger
            user_id = params[:userId].to_i
            @channels = User.find(user_id).channels.all
            if @channels
                render :index
            else
                render json: @channels.errors.full_messages, status: 420
            end
        else
            @channels = Channel.where(is_private: false)
            if @channels
                render :index
            else
                render json: @channels.errors.full_messages, status: 420
            end
        end
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id
        if @channel.save
            @channel.members << current_user
            render :show
        else
            render json: @channel.errors.full_messages, status: 420
        end
    end

    def show
        @channel = Channel.find(params[:id])
        if @channel
            render :show
        else
            render json: @channel.errors.full_messages, status: 420
        end
    end

    def update
        if params[:userId]
            # debugger
            user_id = params[:userId].to_i
            channel_id = params[:channelId].to_i
            @channel = Channel.find(channel_id)
            if @channel.member_ids.include?(user_id)
                render json: ["You are already a member of this channel!"], status: 420
            else
                @channel.members << User.find(user_id)
                render :show
            end
        else
            @channel = Channel.find(params[:id])
            if @channel.update(channel_params)
                render :show
            else
                render json: @channel.errors.full_messages, status: 420
            end
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        if @channel
            @channel.destroy
            render :show
        else
            render json: @channel.errors.full_messages, status: 420
        end            
    end

    private
    def channel_params
        params.require(:channel).permit(:name, :description, :is_private)
    end
end