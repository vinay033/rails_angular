class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :login
      t.string :password
      t.string :title
      t.string :last_name
      t.string :first_name
      t.string :gender
      t.string :email
      t.string :picture
      t.string :address

      t.timestamps
    end
  end
end
