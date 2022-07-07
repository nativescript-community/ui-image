#import "NSImageRoundAsCircleTransformer.h"
#import <SDWebImage/SDGraphicsImageRenderer.h>

@interface NSImageRoundAsCircleTransformer ()

@end

@implementation NSImageRoundAsCircleTransformer
+ (instancetype)transformer {

    NSImageRoundAsCircleTransformer *transformer = [NSImageRoundAsCircleTransformer new];
    return transformer;
}

- (NSString *)transformerKey {
    return [NSString stringWithFormat:@"NSImageRoundAsCircleTransformer"];
}

- (UIImage *)transformedImageWithImage:(UIImage *)image forKey:(NSString *)key {
    if (!image) {
        return nil;
    }

    CGFloat width = (CGFloat)image.size.width;
    CGFloat height = (CGFloat)image.size.height;
    CGFloat minwidth = MIN(width, height);
    CGFloat cornerRadius = minwidth / 2;

    UIImage * resultImage = [image sd_resizedImageWithSize:CGSizeMake(minwidth, minwidth) scaleMode:SDImageScaleModeAspectFill];
    resultImage = [resultImage sd_roundedCornerImageWithRadius:cornerRadius corners:UIRectCornerAllCorners borderWidth:0 borderColor:nil];
    return resultImage;
    //     const result = (image as any)
    //         .sd_resizedImageWithSizeScaleMode(CGSizeMake(minwidth, minwidth), SDImageScaleMode.AspectFill)
    //         .sd_roundedCornerImageWithRadiusCornersBorderWidthBorderColor(cornerRadius, UIRectCorner.BottomLeft | UIRectCorner.BottomRight | UIRectCorner.TopLeft | UIRectCorner.TopRight, 0, null)
    //         .sd_resizedImageWithSizeScaleMode(CGSizeMake(width, height), SDImageScaleMode.AspectFit);
    //     return result;
    // return resultImage;
}

@end
