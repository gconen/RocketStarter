class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = "The email address and password you entered do not match"
      render :new
    end
  end

  def destroy
    log_out
  end

end
