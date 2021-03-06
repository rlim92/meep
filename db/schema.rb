# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_03_011648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.boolean "is_private"
    t.integer "admin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_starred"
    t.index ["admin_id"], name: "index_channels_on_admin_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.boolean "is_team"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_starred"
  end

  create_table "memberships", force: :cascade do |t|
    t.integer "member_id"
    t.string "membershipable_type"
    t.bigint "membershipable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_memberships_on_member_id"
    t.index ["membershipable_type", "membershipable_id"], name: "index_memberships_on_membershipable_type_and_membershipable_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "text", null: false
    t.string "messageable_type"
    t.bigint "messageable_id"
    t.integer "author_id", null: false
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_pinned"
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["messageable_type", "messageable_id"], name: "index_messages_on_messageable_type_and_messageable_id"
    t.index ["parent_id"], name: "index_messages_on_parent_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
