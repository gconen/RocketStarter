module Api
  class ProjectsController < ApiController
    def index
      @projects = Project.all;
      render json: @projects
    end

    def show
      @project = Project.includes(:owner).find(params[:id])
      render :show
    end

    def create
      @project = current_user.projects.new(project_params)
      if @project.save
        render json: @project
      else
        render json: @project.errors.full_messages, status: 422
      end
    end

    private

    def project_params
      project_params = params.require(:project)
                            .permit(:id, :title, :description, :goal_amount)
      project_params[:goal_amount] = project_params[:goal_amount]
                                        .gsub(/[\$,]/, "")
                                        .to_i

      project_params
    end
  end
end
