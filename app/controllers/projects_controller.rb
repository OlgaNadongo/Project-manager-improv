class ProjectsController < ApplicationController

    #GET /projects
    def index
        projects=Project.all
        render json: projects, status: :ok
    end

    #GET /projects/:id
      def show
        project=Project.find_by(id: params[:id])
        
        if project
            # render json: project.to_json(include:[:teammates]), status: :ok
            render json: project, serializer:TeammembersSerializer, status: :ok
        else
            render json: {error:"Project not found"}, status: :not_found
        end
      end

    #POST /projects

    def create 
      
        project=Project.create(project_params)
           render json: project, status: :created
        # if project.valid?
        #     render json: project, status: :created
        # else
        #     render json: {errors: project.errors.full_messages}, status: :unprocessable_entity
        # end
    end

    #PATCH /projects/:id

    def update
        project=Project.find_by(id: params[:id])

        if project 
            project.update(project_params)
            render json: project, status: :accepted
        else
             render json: {error: "Project not found"}, status: :not_found
        end
    end

    #DELETE /projects/:id
    def destroy
        project=Project.find_by(id: params[:id])
         
        if project
            project.destroy
            head :no_content
        else
            render json: {error: "Project not found"}, status: :not_found
        end
    end 
    
    private

    def project_params
        params.permit(:title, :user_id)
    end
end
