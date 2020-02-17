require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get Messages" do
    get api_Messages_url
    assert_response :success
  end

end
