class DmChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    @dm_channel = DirectMessage.find(params[:id])

    @author_id = params[:authorId].to_i
    stream_for @dm_channel
  end

  def speak(data)
    # debugger
    message = @dm_channel.messages.new(text: data['message'])
    # debugger
    message.author_id = @author_id
    if message.save!
      # debugger
      msg = {}
      msg[message.id] = { 
        id: message.id, 
        text: message.text,
        author_id: message.author_id,
        created_at: message.created_at
      }
      socket = { message: msg.to_json, type: 'message' }
      DmChannel.broadcast_to(@dm_channel, socket)
    end
  end

  # def load
  #   messages = @chat_channel.messages.all.collect(&:text)
  #   socket = { messages: messages, type: 'messages' }
  #   ChatChannel.broadcast_to(@chat_channel, socket)
  # end

  def unsubscribed
  end
end
