class UnitController < ApplicationController
  def create
    Unit.create(:unit => params[:unit]);
  end
end
