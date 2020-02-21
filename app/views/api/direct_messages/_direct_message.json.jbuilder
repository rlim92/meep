json.set! dm.id do
    json.extract! dm, :id, :member_ids, :message_ids
end