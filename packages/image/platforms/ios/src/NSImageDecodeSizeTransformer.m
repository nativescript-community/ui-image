#import "NSImageDecodeSizeTransformer.h"
#import <SDWebImage/SDGraphicsImageRenderer.h>

@interface NSImageDecodeSizeTransformer ()

@property (nonatomic, assign) CGFloat decodeWidth;
@property (nonatomic, assign) CGFloat decodeHeight;

@end

@implementation NSImageDecodeSizeTransformer
+ (nonnull instancetype)transformerWithDecodeWidth:(CGFloat)decodeWidth decodeHeight:(CGFloat)decodeHeight {
  NSImageDecodeSizeTransformer *transformer = [NSImageDecodeSizeTransformer new];
    transformer.decodeWidth = decodeWidth;
    transformer.decodeHeight = decodeHeight;
    
    return transformer;
}

- (NSString *)transformerKey {
    return [NSString stringWithFormat:@"NSImageDecodeSizeTransformer(%f,%f)", self.decodeWidth, self.decodeHeight];
}

- (UIImage *)transformedImageWithImage:(UIImage *)image forKey:(NSString *)key {
    if (!image) {
        return nil;
    }
    CGFloat ratio = 1.0f;

    CGFloat width = (CGFloat)image.size.width;
    CGFloat height = (CGFloat)image.size.height;
    if (self.decodeWidth && self.decodeHeight) {
        ratio =  MIN(self.decodeWidth / width, self.decodeHeight / height);
    } else if (self.decodeWidth > 0) {
        ratio = self.decodeWidth / width;
    } else {
        ratio = self.decodeHeight / height;
    }
    return [image sd_resizedImageWithSize:CGSizeMake(width * ratio, height * ratio) scaleMode:2];
}

@end
