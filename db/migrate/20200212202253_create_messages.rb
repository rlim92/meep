class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :text, null: false
      t.references :messageable, polymorphic:true
      t.integer :author_id, null: false
      t.integer :parent_id, null: false

      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :parent_id, unique: true
  end
end
