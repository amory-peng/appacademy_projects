class UpdateUsersTable < ActiveRecord::Migration[5.0]
  def up
    remove_column :users, :name
    remove_column :users, :email
  end
  def down
    add_column :users, :username
  end
end
