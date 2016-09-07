# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160907001325) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "zip_code",     null: false
    t.float    "lat",          null: false
    t.float    "long",         null: false
    t.string   "neighborhood", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "conversation_id", null: false
    t.integer  "sender_id",       null: false
    t.integer  "receiver_id",     null: false
    t.text     "content"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "messages", ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
  add_index "messages", ["receiver_id"], name: "index_messages_on_receiver_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "question_options", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "question_options", ["question_id"], name: "index_question_options_on_question_id", using: :btree

  create_table "question_responses", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.integer  "acceptable",         null: false
    t.integer  "importance",         null: false
    t.text     "explanation"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "question_option_id"
  end

  add_index "question_responses", ["question_option_id"], name: "index_question_responses_on_question_option_id", using: :btree
  add_index "question_responses", ["user_id"], name: "index_question_responses_on_user_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.text     "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.string   "photo_url"
    t.string   "zip_code",        null: false
    t.string   "role",            null: false
    t.text     "about"
    t.string   "looking_for",     null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "location_id"
    t.integer  "mentor"
    t.integer  "hiring"
    t.integer  "friendship"
    t.integer  "collaboration"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["location_id"], name: "index_users_on_location_id", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
