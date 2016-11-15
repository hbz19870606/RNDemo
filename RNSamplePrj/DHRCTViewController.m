

//
//  DHRCTViewController.m
//  RNSamplePrj
//
//  Created by 胡大海 on 16/11/14.
//  Copyright © 2016年 胡大海. All rights reserved.
//

#import "DHRCTViewController.h"

#import <RCTRootView.h>

@interface DHRCTViewController ()

@end

@implementation DHRCTViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.view.backgroundColor = [UIColor lightGrayColor];
    self.automaticallyAdjustsScrollViewInsets = NO;
    
    NSString *url = @"http://127.0.0.1:8081/index.ios.bundle?platform=ios&dev=true";    // local
    //NSString *url = @"http://xxx.ooo.com/ios.js"; // remote
    NSURL *jsCodeLocation = [NSURL URLWithString:url];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"entranceJS"
                                                 initialProperties:@{@"text":@"你好世界"}
                                                     launchOptions:nil];
    rootView.backgroundColor = [UIColor lightGrayColor];
    
    rootView.frame = CGRectMake(0, 20,[UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height - 20);
    //rootView.frame = self.view.bounds;
    [self.view addSubview:rootView];
}

@end
