module Api
  class PledgesController < ApiController
    def create
      @pledge = current_user.pledges.new(pledge_params)
      if @pledge.save
        render json: @pledge
      else
        render json: @pledge.errors.full_messages, status: 422
      end
    end

    private

    def pledge_params
      pledge_params = params.require(:pledge).permit(:amount, :project_id)
      pledge_params[:amount] = pledge_params[:amount]
                                        .gsub(/[\$,]/, "")
                                        .to_i
      pledge_params
    end
  end
end
