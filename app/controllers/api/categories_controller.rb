module Api
  class CategoriesController < ApiController
    def index
      @categories = Category.all
      render :index
    end

    def show
      @category = Category.find(params[:id])
      @projects = Project.sort_by(params[:sort_by])
                  .where("category_id = ?", params[:id])
      render :show
    end
  end
end
