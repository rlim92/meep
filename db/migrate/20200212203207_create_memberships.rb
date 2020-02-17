class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :member_id
      t.references :membershipable, polymorphic: true

      t.timestamps
    end
    add_index :memberships, :member_id
  end
end
