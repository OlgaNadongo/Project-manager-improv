class TeammateProjectsController < ApplicationController

    #GET /teammates
    def index
        teammate_projects=TeammateProject.all
        render json: teammate_projects, status: :ok
    end

    #GET /teammates/:id
      def show
        teammate_project=TeammateProject.find_by(id: params[:id])
        
        if teammate_project
            render json: teammate_project, status: :ok
        else
            render json: {error:"Project not found"}, status: :not_found
        end
      end

    #POST /teammates

    def create 
        teammate_project=TeammateProject.create(project_params)

        if teammate_project.valid?
            render json: teammate_project, status: :created
        else
            render json: {errors: teammate_project.errors.full_messages}, status: :unprocessable_entity
        end
    end

    #PATCH /teammates/:id

    def update
        teammate_project=TeammateProject.find_by(id: params[:id])

        if teammate_project 
            teammate_project.update(project_params)
            render json: teammate_project, status: :accepted
        else
             render json: {error: "Project not found"}, status: :not_found
        end
    end

    #DELETE /teammates/:id
    def destroy
        teammate_project=TeammateProject.find_by(id: params[:id])
         
        if teammate_project
            teammate_project.destroy
            head :no_content
        else
            render json: {error: "TeammateProject not found"}, status: :not_found
        end
    end 
    
    private

    def project_params
        params.permit(:teammate_id, :project_id)
    end
end
