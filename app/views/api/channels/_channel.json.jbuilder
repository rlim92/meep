json.set! channel.id do
    json.extract! channel, :id, :name, :is_private, :admin_id, :member_ids, :message_ids
end