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
      @user = User.new(email: params[:user][:email])
      flash.now[:errors] = ["The email address and password you entered do not match."]
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end

end
