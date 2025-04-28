#import "MyHelloModule.h"

@implementation MyHelloModule

RCT_EXPORT_MODULE(MyHelloModule);

RCT_EXPORT_METHOD(getHello:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  resolve(@"Hello World from Native (iOS)!");
}

@end
