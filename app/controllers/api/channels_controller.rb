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
        # elsif params[:name] && params[:author]
        #     name = params[:name]
        #     author = params[:author]
        #     # debugger
        #     @rich = User.find_by(username: author)
        #     @meeptown = Channel.where(name: name).where(admin_id: @rich.id)
        #     if @meeptown.length == 1 
        #         @channel = @meeptown[0]
        #         render :show
        #     else
        #         render json: ["Couldn't find Meeptown!"], status: 420
        #     end
        else
            @channels = Channel.where(:channels => { :is_private => false})
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
        elsif params[:leaverId]
            user_id = params[:leaverId].to_i
            channel_id = params[:id]

            @channel = Channel.find(channel_id)
            if @channel
                @membership = @channel.memberships.where(member_id: user_id)[0]
                @channel.member_ids -= [user_id]
                render :membership
            else
                render json: ["Channel not found!"], status: 420
            end
        else
            # debugger;
            @channel = Channel.find(params[:id])
            if params[:channel][:is_starred]
                if @channel.update(is_starred: params[:channel][:is_starred])
                    render :show
                else
                    render json: @channel.errors.full_messages, status: 420
                end
            elsif params[:channel][:description]
                if @channel.update(description: params[:channel][:description])
                    render :show
                else
                    render json: @channel.errors.full_messages, status: 420
                end
            end
        end
    end

    def destroy
        # debugger
        @channel = Channel.find(params[:id])
        if @channel
            @membership = @channel.memberships.where(member_id: current_user.id)[0]
            # debugger
            @channel.destroy
            render :membership
        else
            render json: @channel.errors.full_messages, status: 420
        end            
    end

    private
    # def channel_params
    #     params.require(:channel).permit(:name, :description, :is_private)
    # end
end
