module Api
  class CategoriesController < ApiController
    def index
      @categories = Category.all
      render :index
    end

    def show
      @category = Category.includes(:projects, projects: :owner).find(params[:id])
      render :show
    end
  end
end
