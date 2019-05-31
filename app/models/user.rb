class User < ApplicationRecord
  
  def self.upload_data path
    url = path

    if url.include?(".json")
      # JSON file from URL
      response = HTTParty.get(url).body
      data = JSON.parse(response)
      arr = []
      data.each do |d|
         arr << d.values
      end
      User.import([:login, :password, :title, :last_name, :first_name, :gender, :email, :picture, :address], arr, validate: false)
    elsif url.include?(".csv")
      # CSV file from URL
      response = HTTParty.get(url).body
      arr = CSV.parse(response)
      arr.shift
      User.import([:login, :password, :title, :last_name, :first_name, :gender, :email, :picture, :address], arr, validate: false)
    end

  end
end
