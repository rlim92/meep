class ChatChannel < ApplicationCable::Channel

  def subscribed
    @chat_channel = Channel.find(params[:id])

    @author_id = params[:authorId].to_i
    stream_for @chat_channel
  end

  def speak(data)
    # debugger
    message = @chat_channel.messages.new(text: data['message'])
    # debugger
    # message.author_id = current_user.id
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
      ChatChannel.broadcast_to(@chat_channel, socket)
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
