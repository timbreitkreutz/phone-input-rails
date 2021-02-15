require "test_helper"

class JSLintTest < ActiveSupport::TestCase
  test "all the filez" do
    files = Dir.glob("./app/javascript/modules/phone_input_international/*.js") +
      Dir.glob("./test/mocha/**/*.js")
    files.sort.uniq.each do |file|
      puts "File: #{file}"
      system("jslint-lite #{file}")
    end
  end
end
