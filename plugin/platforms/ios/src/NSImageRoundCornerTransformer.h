#import <SDWebImage/SDImageTransformer.h>

@interface NSImageRoundCornerTransformer: NSObject <SDImageTransformer>

@property (nonatomic, assign, readonly) CGFloat topLeftRadius;
@property (nonatomic, assign, readonly) CGFloat topRightRadius;
@property (nonatomic, assign, readonly) CGFloat bottomRightRadius;
@property (nonatomic, assign, readonly) CGFloat bottomLeftRadius;

- (nonnull instancetype)init NS_UNAVAILABLE;
+ (nonnull instancetype)transformerWithTopLefRadius:(CGFloat)topLeftRadius topRightRadius:(CGFloat)topRightRadius bottomRightRadius:(CGFloat)bottomRightRadius bottomLeftRadius:(CGFloat)bottomLeftRadius;

@end