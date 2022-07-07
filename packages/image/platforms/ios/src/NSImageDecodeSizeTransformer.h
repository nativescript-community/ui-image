#import <SDWebImage/SDImageTransformer.h>

@interface NSImageDecodeSizeTransformer: NSObject <SDImageTransformer>

@property (nonatomic, assign, readonly) CGFloat decodeWidth;
@property (nonatomic, assign, readonly) CGFloat decodeHeight;

- (nonnull instancetype)init NS_UNAVAILABLE;
+ (nonnull instancetype)transformerWithDecodeWidth:(CGFloat)decodeWidth decodeHeight:(CGFloat)decodeHeight;

@end