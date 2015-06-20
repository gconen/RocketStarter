class StaticPagesController < ApplicationController
  def root
    unless current_user
      redirect_to new_session_url
    else
      render :root
    end
  end

end
