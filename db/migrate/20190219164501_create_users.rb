class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    t.string :fname, null: false
    t.string :lname, null: false
    t.string :title, null: false
    t.integer :manager_id
    t.timestamps
  end
    add_index :users, [:fname, :lname]
    add_index :users, :manager_id
  end
end
