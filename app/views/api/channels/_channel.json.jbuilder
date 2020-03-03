json.set! channel.id do
    json.extract! channel, :id, :name, :description, :is_private, :is_starred, :admin_id, :member_ids, :message_ids
end