
platform :ios, '13.0'
use_frameworks!

# workaround to avoid Xcode caching of Pods that requires
# Product -> Clean Build Folder after new Cordova plugins installed
# Requires CocoaPods 1.6 or newer
install! 'cocoapods', :disable_input_output_paths => true

def capacitor_pods
  pod 'Capacitor', :path => '../../node_modules/@capacitor/ios'
  pod 'CapacitorCordova', :path => '../../node_modules/@capacitor/ios'
  pod 'CapacitorCommunityAdmob', :path => '../../node_modules/@capacitor-community/admob'
  pod 'CapacitorCommunityContacts', :path => '../../node_modules/@capacitor-community/contacts'
  pod 'CapacitorCommunityHttp', :path => '../../node_modules/@capacitor-community/http'
  pod 'CapacitorApp', :path => '../../node_modules/@capacitor/app'
  pod 'CapacitorDevice', :path => '../../node_modules/@capacitor/device'
  pod 'CapacitorDialog', :path => '../../node_modules/@capacitor/dialog'
  pod 'CapacitorFilesystem', :path => '../../node_modules/@capacitor/filesystem'
  pod 'CapacitorHaptics', :path => '../../node_modules/@capacitor/haptics'
  pod 'CapacitorKeyboard', :path => '../../node_modules/@capacitor/keyboard'
  pod 'CapacitorPushNotifications', :path => '../../node_modules/@capacitor/push-notifications'
  pod 'CapacitorStatusBar', :path => '../../node_modules/@capacitor/status-bar'
  pod 'CapacitorCodepush', :path => '../../node_modules/capacitor-codepush'
  pod 'CordovaPlugins', :path => '../capacitor-cordova-ios-plugins'
  pod 'CordovaPluginsStatic', :path => '../capacitor-cordova-ios-plugins'
  pod 'CordovaPluginsResources', :path => '../capacitor-cordova-ios-plugins'
end

target 'App' do
  capacitor_pods
  # Add your Pods here
  pod 'Firebase/Messaging' # Add this line
end
