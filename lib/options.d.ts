import { EncodeOptions as MozjpegOptions } from '@wasm-codecs/mozjpeg/lib/types';
import { EncodeOptions as OxipngOptions } from '@wasm-codecs/oxipng/lib/types';
import { EncodeOptions as GifsicleOptions } from '@wasm-codecs/gifsicle/lib/types';
import { Options as ImageminMozjpegOptions } from 'imagemin-mozjpeg';
import { Options as ImageminOptipngOptions } from 'imagemin-optipng';
import { Options as ImageminPngquantOptions } from 'imagemin-pngquant';
import { WebpOptions } from 'sharp';
export interface ImageminOptions {
    mozjpeg?: ImageminMozjpegOptions | boolean;
    optipng?: ImageminOptipngOptions | boolean;
    pngquant?: ImageminPngquantOptions | boolean;
}
export interface LoaderOptions {
    optimize?: boolean;
    cacheFolder?: string;
    includeStrategy?: 'string' | 'react';
    mozjpeg?: MozjpegOptions;
    oxipng?: OxipngOptions;
    webp?: WebpOptions;
    gifsicle?: GifsicleOptions;
    svgo?: Record<string, unknown>;
    svgr?: Record<string, unknown>;
    imagemin?: ImageminOptions;
}
export interface OptionObject {
    [key: string]: any;
}
export declare const defaultFurtherLoaderOptions: {
    name: string;
    limit: number;
};
