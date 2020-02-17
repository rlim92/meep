class ChangeColumnInMessages < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :parent_id, :integer, null: true
    remove_column :users, :profile_picture
  end
end
