class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :name, presence: true
    validates :password, length:{minimum: 6},
                if: -> {new_record? || !password.nil?}  #password can't be null for an existing user in the database

    has_many :projects
    # has_many :teammates
end
