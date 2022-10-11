class CreateTeammateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :teammate_projects do |t|
      t.integer :teammate_id
      t.integer :project_id

      t.timestamps
    end
  end
end
