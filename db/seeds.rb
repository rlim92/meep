# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Channel.destroy_all
DirectMessage.destroy_all
Message.destroy_all
Membership.destroy_all


demo = User.create!(username: 'DemoUser', password: 'hunter12', email: 'demo@meep.com')
rich = User.create!(username: 'rich', password: 'hunter12', email: 'rich@meep.com')
paul = User.create!(username: 'paul', password: 'hunter12', email: 'paul@meep.com')
kai = User.create!(username: 'kai', password: 'hunter12', email: 'kai@meep.com')


meep = Channel.create!(name: 'Meeptown', description: 'place for meep', is_private: false, admin_id: rich.id)
react = Channel.create!(name: 'react-redux', description: 'discussion of react/redux', is_private: true, admin_id: demo.id)
food = Channel.create!(name: 'food', description: 'best foods', is_private: false, admin_id: rich.id)


rich_dm = DirectMessage.create!(is_team: false)
# rich_dm.member_ids = [demo.id, rich.id]
paul_dm = DirectMessage.create!(is_team: false)
# paul_dm
kai_dm = DirectMessage.create!(is_team: false)


team_dm = DirectMessage.create!(is_team: true)


meep.messages.create!(text: 'welcome to meeptown', author_id: demo.id)
rich_dm.messages.create!(text: 'hello!!!!!', author_id: demo.id)


meep.memberships.create!(member_id: demo.id)
meep.memberships.create!(member_id: rich.id)
meep.memberships.create!(member_id: paul.id)
meep.memberships.create!(member_id: kai.id)


react.memberships.create!(member_id: rich.id)
react.memberships.create!(member_id: demo.id)


food.memberships.create!(member_id: rich.id)
food.memberships.create!(member_id: demo.id)
food.memberships.create!(member_id: paul.id)
food.memberships.create!(member_id: kai.id)


rich_dm.memberships.create!(member_id: demo.id)
rich_dm.memberships.create!(member_id: rich.id)

paul_dm.memberships.create!(member_id: paul.id)
paul_dm.memberships.create!(member_id: demo.id)

kai_dm.memberships.create!(member_id: demo.id)
kai_dm.memberships.create!(member_id: kai.id)

team_dm.memberships.create!(member_id: demo.id)
team_dm.memberships.create!(member_id: rich.id)
team_dm.memberships.create!(member_id: paul.id)
team_dm.memberships.create!(member_id: kai.id)