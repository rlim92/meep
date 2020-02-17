class Message < ApplicationRecord
    validates :text, :messageable_id, :messageable_type, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :messageable, polymorphic: true
    
    has_one :reply_message,
        class_name: :Message,
        foreign_key: :parent_id
end
