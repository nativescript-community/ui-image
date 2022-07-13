import { Img } from '@nativescript-community/ui-image';
import { CssProperty } from '@nativescript/core/ui/core/properties';
import { Style } from '@nativescript/core/ui/styling/style';

export function applyMixins(
    derivedCtor: any,
    baseCtors: any[],
    options?: {
        after?: boolean;
        override?: boolean;
        callWithSuper?: boolean;
        omit?: (string | symbol)[];
    }
) {
    const omits = options && options.omit ? options.omit : [];
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            if (omits.indexOf(name) !== -1) {
                return;
            }
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);

            if (name === 'constructor') return;
            if (descriptor && (descriptor.get || descriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, name, descriptor);
            } else {
                const oldImpl = derivedCtor.prototype[name];
                if (!oldImpl) {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                } else {
                    derivedCtor.prototype[name] = function (...args) {
                        if (options) {
                            if (!!options.callWithSuper) {
                                return baseCtor.prototype[name].call(this, oldImpl, ...args);
                            } else if (!!options.override) {
                                return baseCtor.prototype[name].apply(this, args);
                            } else if (!!options.after) {
                                oldImpl.apply(this, args);
                                return baseCtor.prototype[name].apply(this, args);
                            } else {
                                baseCtor.prototype[name].apply(this, args);
                                return oldImpl.apply(this, args);
                            }
                        } else {
                            baseCtor.prototype[name].apply(this, args);
                            return oldImpl.apply(this, args);
                        }
                    };
                }
            }
        });
        Object.getOwnPropertySymbols(baseCtor.prototype).forEach((symbol) => {
            if (omits.indexOf(symbol) !== -1) {
                return;
            }
            const oldImpl: Function = derivedCtor.prototype[symbol];
            if (!oldImpl) {
                derivedCtor.prototype[symbol] = baseCtor.prototype[symbol];
            } else {
                derivedCtor.prototype[symbol] = function (...args) {
                    if (options) {
                        if (!!options.override) {
                            return baseCtor.prototype[symbol].apply(this, args);
                        } else if (!!options.after) {
                            oldImpl.apply(this, args);
                            return baseCtor.prototype[symbol].apply(this, args);
                        } else {
                            baseCtor.prototype[symbol].apply(this, args);
                            return oldImpl.apply(this, args);
                        }
                    } else {
                        baseCtor.prototype[symbol].apply(this, args);
                        return oldImpl.apply(this, args);
                    }
                };
            }
        });
    });
}
function createGetter(key) {
    return function () {
        return this.style[key];
    };
}
function createSetter(key) {
    return function (newVal) {
        this.style[key] = newVal;
    };
}

export const cssProperty = (target: Object, key: string | symbol) => {
    Object.defineProperty(target, key, {
        get: createGetter(key),
        set: createSetter(key),
        enumerable: true,
        configurable: true
    });
};
export const colorMatrixProperty = new CssProperty<Style, number[]>({
    name: 'colorMatrix',
    cssName: 'color-matrix',
    valueConverter: (v) => {
        if (typeof v === 'string') {
            if (!v.startsWith('[')) {
                v = `[${v}]`;
            }
            return JSON.parse(v);
        }
        return v;
    }
});
colorMatrixProperty.register(Style);
