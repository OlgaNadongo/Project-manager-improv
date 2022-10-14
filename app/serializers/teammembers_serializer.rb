class TeammembersSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id

  has_many :teammates
end
