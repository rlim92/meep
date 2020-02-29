class Api::DirectMessagesController < ApplicationController
    def index
        if params[:userId]
            # debugger
            user_id = params[:userId].to_i
            @dms = User.find(user_id).direct_messages.all
            if @dms
                # debugger
                render :index
            else
                render json: @dms.errors.full_messages, status: 420
            end
        # else
        #     @channels = Channel.where(:channels => { :is_private => false})
        #     if @channels
        #         render :index
        #     else
        #         render json: @channels.errors.full_messages, status: 420
        #     end
        end
    end

    def create
        @dm = DirectMessage.new(is_team: params[:dm][:is_team])
        # @dm.admin_id = current_user.id
        # debugger
        if @dm.save
            @dm.member_ids = params[:dm][:member_ids]
            render :show
        else
            render json: @dm.errors.full_messages, status: 420
        end
    end

    def show
        @dm = DirectMessage.find(params[:id])
        if @dm
            @dm.member_ids -= [@current_user.id]
            render :show
        else
            render json: @dm.errors.full_messages, status: 420
        end
    end

    # def update
    #     if params[:userId]
    #         # debugger
    #         user_id = params[:userId].to_i
    #         channel_id = params[:channelId].to_i

    #         @channel = Channel.find(channel_id)

    #         if @channel.member_ids.include?(user_id)
    #             render json: ["You are already a member of this channel!"], status: 420
    #         else
    #             @channel.members << User.find(user_id)
    #             render :show
    #         end
    #     elsif params[:leaverId]
    #         user_id = params[:leaverId].to_i
    #         channel_id = params[:id]

    #         @channel = Channel.find(channel_id)
    #         if @channel
    #             @membership = @channel.memberships.where(member_id: user_id)[0]
    #             @channel.member_ids -= [user_id]
    #             render :membership
    #         else
    #             render json: ["Channel not found!"], status: 420
    #         end
    #     else
    #         @channel = Channel.find(params[:id])
    #         if @channel.update(channel_params)
    #             render :show
    #         else
    #             render json: @channel.errors.full_messages, status: 420
    #         end
    #     end
    # end

    private
    def dm_params
        params.require(:direct_message).permit(:is_team, :member_ids)
    end
end
