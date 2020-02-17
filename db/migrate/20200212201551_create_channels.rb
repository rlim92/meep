class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      t.boolean :is_private
      t.integer :admin_id, null: false

      t.timestamps
    end
    add_index :channels, :admin_id
  end
end
