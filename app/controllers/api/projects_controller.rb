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
      @project = current_user.projects.new(params[:id])
      if @project.save
        render json: @project
      else
        render json: @project.errors.full_messages, status: 422
      end
    end

  end
end
