module Api
  class ApiController < ApplicationController
    before_action :check_logged_in

    def check_logged_in
      unless current_user
        render json: "You must be logged in", status: 401
      end
    end
  end
end
