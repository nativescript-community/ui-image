#import "NSImageRoundCornerTransformer.h"
#import <SDWebImage/SDGraphicsImageRenderer.h>

@interface NSImageRoundCornerTransformer ()

@property (nonatomic, assign) CGFloat topLeftRadius;
@property (nonatomic, assign) CGFloat topRightRadius;
@property (nonatomic, assign) CGFloat bottomRightRadius;
@property (nonatomic, assign) CGFloat bottomLeftRadius;

@end

@implementation NSImageRoundCornerTransformer
+ (instancetype)transformerWithTopLefRadius:(CGFloat)topLeftRadius topRightRadius:(CGFloat)topRightRadius bottomRightRadius:(CGFloat)bottomRightRadius bottomLeftRadius:(CGFloat)bottomLeftRadius {

    NSImageRoundCornerTransformer *transformer = [NSImageRoundCornerTransformer new];
    transformer.topLeftRadius = topLeftRadius;
    transformer.topRightRadius = topRightRadius;
    transformer.bottomRightRadius = bottomRightRadius;
    transformer.bottomLeftRadius = bottomLeftRadius;
    
    return transformer;
}

- (NSString *)transformerKey {
    return [NSString stringWithFormat:@"NSImageRoundCornerTransformer(%f,%f,%f,%f)", self.topLeftRadius,self.topRightRadius,self.bottomRightRadius,self.bottomLeftRadius];
}

- (UIImage *)transformedImageWithImage:(UIImage *)image forKey:(NSString *)key {
    if (!image) {
        return nil;
    }
    
    SDGraphicsImageRendererFormat *format = [[SDGraphicsImageRendererFormat alloc] init];
    format.scale = image.scale;
    SDGraphicsImageRenderer *renderer = [[SDGraphicsImageRenderer alloc] initWithSize:image.size format:format];
    UIImage *resultImage = [renderer imageWithActions:^(CGContextRef  _Nonnull context) {
        CGRect rect = CGRectMake(0, 0, image.size.width, image.size.height);
        
        UIBezierPath *newPath = [UIBezierPath bezierPath];

        CGFloat left  = M_PI;
        CGFloat up    = 1.5*M_PI;
        CGFloat down  = M_PI_2;
        CGFloat right = 0.0;
        [newPath addArcWithCenter:CGPointMake( CGRectGetMinX(rect) +  self.topLeftRadius,  CGRectGetMinY( rect) +  self.topLeftRadius) radius:  self.topLeftRadius startAngle: left  endAngle: up    clockwise: true];
        [newPath addArcWithCenter:CGPointMake( CGRectGetMaxX(rect) - self.topRightRadius,  CGRectGetMinY( rect) + self.topRightRadius) radius: self.topRightRadius startAngle: up   endAngle: right clockwise: true];
        [newPath addArcWithCenter:CGPointMake( CGRectGetMaxX(rect) - self.bottomRightRadius,  CGRectGetMaxY( rect) - self.bottomRightRadius) radius: self.bottomRightRadius startAngle: right endAngle: down clockwise: true];
        [newPath addArcWithCenter:CGPointMake(CGRectGetMinX(rect) + self.bottomLeftRadius,  CGRectGetMaxY( rect) - self.bottomLeftRadius) radius: self.bottomLeftRadius startAngle: down  endAngle: left  clockwise: true];
        [newPath closePath];
        CGContextSaveGState(context);
        [newPath addClip];
        [image drawInRect:rect];
        CGContextRestoreGState(context);
    }];
    return resultImage;
}

@end
