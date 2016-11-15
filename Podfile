platform :ios, "7.1"

source 'https://github.com/CocoaPods/Specs.git'

# 忽略三方库警告
inhibit_all_warnings!

# 公有库
def public_pods

# react native
pod 'React', :path => './node_modules/react-native', :subspecs => [
    'Core',
    'RCTActionSheet',
    'RCTGeolocation',
    'RCTImage',
    'RCTLinkingIOS',
    'RCTNetwork',
    'RCTSettings',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket',
]

end


#From my understanding :exclusive => true means that ONLY the pods in the block will be added to these targets
#target 'RNSamplePrj', :exclusive => true do
target 'RNSamplePrj' do

public_pods

end

# For Unit Test
target 'RNSamplePrjTests' do

end
