module Api
  class ProjectsController < ApiController
    def index
      @projects = Project.all.includes(:owner)
      render :index
    end

    def show
      @project = Project.includes(:owner, :rewards).find(params[:id])
      render :show
    end

    def create
      @project = current_user.owned_projects.new(project_params)
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

      project_params[:rewards_attributes] = rewards_params
      project_params
    end

    def rewards_params
      rewards_params = params.require(:project).require(:rewards)
      rewards_params.map do |key, value|
        reward = value.permit(:description, :amount)
        reward[:amount] = reward[:amount].gsub(/[\$,]/, "").to_i
        reward
      end
    end
  end
end
