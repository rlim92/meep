class Api::SessionsController < ApplicationController
    def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Wrong username/password'], status: 420
    end
  end

  def destroy
    logout!
    render json: { message: 'Logged out!' }
  end
end
