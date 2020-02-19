json.set! msg.id do
    json.extract! msg, :id, :text, :author_id, :created_at
        json.author_name msg.author.username
end