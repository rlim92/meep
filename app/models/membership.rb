class Membership < ApplicationRecord
    validates :member_id, :membershipable_id, :membershipable_type, presence: true
    validates :member_id, uniqueness: { scope: [:membershipable_id, :membershipable_type] }

    belongs_to :membershipable,
        polymorphic: true

    belongs_to :member,
        class_name: :User,
        foreign_key: :member_id

end
