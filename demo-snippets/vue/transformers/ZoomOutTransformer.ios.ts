export default function (index, attributes, owner, collectionView) {
    const frame = attributes.frame;
    attributes.frame.size.width = attributes.frame.size.width * 0.75;
    attributes.frame.size.height = attributes.frame.size.height * 0.75;
    const spacing = owner.convertToSize(owner.spacing);
    const distance = Math.abs(collectionView.contentOffset.x + collectionView.contentInset.left + spacing - frame.origin.x);
    const scale = Math.min(Math.max(1 - distance / collectionView.bounds.size.width, 0.75), 1);
    attributes.transform = CGAffineTransformScale(attributes.transform, 1, scale);
}
