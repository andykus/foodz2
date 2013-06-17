class IndexController < ApplicationController
  def index
  	
  	@test = request.original_fullpath()
  	test.split('/')
  	test[0]
  	# @test = url[:controller]

  end
end
