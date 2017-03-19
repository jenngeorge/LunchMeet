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

ActiveRecord::Schema.define(version: 20170319030006) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id",       null: false
    t.integer  "other_user_id", null: false
    t.index ["other_user_id"], name: "index_conversations_on_other_user_id", using: :btree
    t.index ["user_id"], name: "index_conversations_on_user_id", using: :btree
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
    t.index ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
    t.index ["receiver_id"], name: "index_messages_on_receiver_id", using: :btree
    t.index ["sender_id"], name: "index_messages_on_sender_id", using: :btree
  end

  create_table "question_options", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id"], name: "index_question_options_on_question_id", using: :btree
  end

  create_table "question_responses", force: :cascade do |t|
    t.integer  "user_id",              null: false
    t.integer  "acceptable_option_id", null: false
    t.integer  "importance",           null: false
    t.text     "explanation"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "question_option_id"
    t.index ["question_option_id"], name: "index_question_responses_on_question_option_id", using: :btree
    t.index ["user_id"], name: "index_question_responses_on_user_id", using: :btree
  end

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
    t.string   "mentor"
    t.string   "hiring"
    t.string   "friendship"
    t.integer  "collaboration"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["location_id"], name: "index_users_on_location_id", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
