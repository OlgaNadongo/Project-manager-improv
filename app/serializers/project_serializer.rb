class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title

  #has_many :teammates
end
