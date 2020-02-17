class DirectMessage < ApplicationRecord
    validates :is_team, inclusion: { in: [true, false] }

    has_many :memberships, 
        as: :membershipable
    
    has_many :members,
        through: :memberships,
        source: :members
    
    has_many :messages, 
        as: :messageable

end
