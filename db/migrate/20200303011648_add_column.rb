class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :is_starred, :boolean
    add_column :direct_messages, :is_starred, :boolean
    add_column :messages, :is_pinned, :boolean
  end
end
