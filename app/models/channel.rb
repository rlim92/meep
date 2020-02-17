class Channel < ApplicationRecord
    validates :name, :admin_id, presence: true
    validates :is_private, inclusion: { in: [true, false] }

    belongs_to :admin,
        class_name: :User,
        foreign_key: :admin_id

    has_many :memberships, 
        as: :membershipable
    
    has_many :messages, 
        as: :messageable

    has_many :members,
        through: :memberships,
        source: :member
end
