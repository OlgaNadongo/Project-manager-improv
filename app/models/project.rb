class Project < ApplicationRecord
    
    belongs_to :user
    has_many :teammate_projects
    has_many :teammates, through: :teammate_projects
end
