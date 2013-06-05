class RecipeController < ApplicationController
  def index
  end

  def show
    test = {title: 'My favourite recipe', id: params[:id] } 
    render :json => @recipe = test.to_json
  end

  def create
  end

  def update
  end

  def delete
  end
end
