#import <SDWebImage/SDImageTransformer.h>

@interface NSImageRoundAsCircleTransformer: NSObject <SDImageTransformer>

- (nonnull instancetype)init NS_UNAVAILABLE;
+ (nonnull instancetype)transformer;

@end