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


# sqlite数据库的封装
pod 'FMDB', '2.6.2'

# 网络请求
pod 'AFNetworking', '3.1.0'

# 简化自动布局的使用
pod 'Masonry', '0.6.2'

# 字符串（如JSON）和模型的相互转换
pod 'Mantle', '2.0.5'

# 图片加载类库
pod 'SDWebImage', '3.7.3'

# “菊花转”
pod 'MBProgressHUD', '0.9.1'

# “toast”
pod 'KSToastView', '~> 0.5.7'

# 智能键盘
pod 'IQKeyboardManager', '3.3.7'

# 模板渲染成HTML
pod 'GRMustache', '7.3.2'

# Categories on NSAttributedString to add a lot of useful convenience methods.
pod 'OHAttributedStringAdditions', '1.3.0'

# 富文本的UILabel
pod 'TTTAttributedLabel', '1.13.4'

# FXBlurView
pod 'FXBlurView', '1.6.4'

# Cover Flow效果
pod 'iCarousel', '1.8.2'

# 带占位符的UITextView
pod 'UITextView+Placeholder', '1.1.0'

#海外资产引用-下面
pod 'Protobuf', '~> 3.0.0'
#pod 'Protobuf', '3.0.0'
pod 'MOAspects', '2.1.1'
# YYText
pod 'YYText', '~> 1.0.5'

pod 'pop', '~> 1.0.9'

# 来自微信阅读的内存泄露检测库。DEBUG编译检测到内存泄露时会抛出异常
# pod 'MLeaksFinder', '~> 0.1.1'

end


#From my understanding :exclusive => true means that ONLY the pods in the block will be added to these targets
#target 'RNSamplePrj', :exclusive => true do
target 'RNSamplePrj' do

# Debug Test Using.
pod 'Reveal-iOS-SDK', :configurations => ['Debug']

public_pods

end

# For Unit Test
target 'RNSamplePrjTests' do

end
