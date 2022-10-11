class TeammatesController < ApplicationController
    #GET /teammates

    def index
        teammates=Teammate.all
        render json: teammates, status: :ok
    end

     #GET /teammates/:id

     def show
        teammate= Teammate.find_by(id: params[:id])

        if teammate
            render json: teammate, status: :ok
        else 
            render json: {error: "Teammate not found"}, status: :not_found
        end
     end

      #POST /teammates

      def create
        teammate=Teammate.create(teammate_params )

        if teammate.valid?
            render json: teammate, status: :created
        else
            render json: {errors: teammate.errors.full_messages}, status: :unprocessable_entity
        end

      end

      #PATCH /teammates/:id

      def update
         teammate=Teammate.find_by(id: params[:id])
       
         if teammate
            teammate.update(teammate_params)
            render json:teammate, status: :accepted
         else
            render json:{error: "Teammate not found"}, status: :not_found
         end

      end

      #DELETE /teammates/:id

      def destroy

        teammate=Teammate.find_by(id: params[:id])
        if teammate
            teammate.destroy
            head :no_content
        else
            render json: {error: "Teammate not found"}, status: :not_found
        end
      end

      private

      def teammate_params
        params.permit(:name, :email)
      end
end
