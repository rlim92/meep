class Api::MessagesController < ApplicationController

    def index
        # debugger
        # msg_ids = params[:messageIds].map(&:to_i)
        if params[:channelId]
            ch_id = params[:channelId].to_i
            @messages = Channel.find(ch_id).messages.includes(:author)
        elsif params[:dmId]
            dm_id = params[:dmId].to_i
            @messages = DirectMessage.find(params[:dmId]).messages.all
        end
        if @messages
            render :index
        else
            render json: @messages.errors.full_messages, status: 420
        end
    end

    def create
    end

    def message_params
        params.require(:message).permit(:text)
    end
end
