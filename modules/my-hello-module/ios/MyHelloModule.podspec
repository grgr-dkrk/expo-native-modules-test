Pod::Spec.new do |s|
  s.name         = "MyHelloModule"
  s.version      = "1.0.0"
  s.summary      = "expo-native-modules-test"
  s.description  = "expo-native-modules-test"
  s.homepage     = "https://github.com/expo/expo"
  s.license      = "MIT"
  s.author       = { "grgr-dkr" => "40130327+grgr-dkrk@users.noreply.github.com" }
  s.platform     = :ios, "12.0"
  s.source       = { :path => "." }
  s.source_files  = "**/*.{h,m}"
  s.requires_arc = true
  s.dependency 'React-Core'
end
