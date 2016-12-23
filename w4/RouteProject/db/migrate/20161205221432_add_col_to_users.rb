class AddColToUsers < ActiveRecord::Migration[5.0]
  def up
    add_column :users, :username
  end
end
