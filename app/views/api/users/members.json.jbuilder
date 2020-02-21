@dm_members.each do |dm|
    dm.members.each do |member|
        json.partial! "api/users/user", user: member
    end
end