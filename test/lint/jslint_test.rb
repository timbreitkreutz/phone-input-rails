require "test_helper"

class JSLintTest < ActiveSupport::TestCase
  # Library source modules must pass jslint
  test "check the real files with jslint" do
    files = Dir.glob("./app/javascript/modules/phone_input_international/*.js")
    puts "Jslint: #{files.join(',')}"
    system("yarn run jslint-lite #{files.join(' ')}")
  end

  # Because jslint won't allow mocha or chai into modules
  # relax to regular eslint for test files
  test "check the test files with eslint" do    
    files = Dir.glob("./test/mocha/**/*Test.js")
    puts "Eslint: #{files.join(',')}"
    system("yarn run eslint --global describe,it,chai #{files.join(' ')}")
  end
end
