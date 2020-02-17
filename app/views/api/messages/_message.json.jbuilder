json.set! msg.id do
    json.extract! msg, :id, :text, :author_id, :created_at
end