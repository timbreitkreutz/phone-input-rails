require "test_helper"

class PersonTest < ActiveSupport::TestCase
  test "the truth" do
    system("jslint-lite app/javascript/packs/phone*.js")
  end
end
