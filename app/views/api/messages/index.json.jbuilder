@messages.each do |msg|
    json.partial! "api/messages/message", msg: msg
end