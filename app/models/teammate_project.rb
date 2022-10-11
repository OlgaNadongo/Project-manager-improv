class TeammateProject < ApplicationRecord
    belongs_to :teammate
    belongs_to :project
end
