import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export class Util {

    static SCREEN_HEIGHT = SCREEN_HEIGHT;
    static SCREEN_WIDTH = SCREEN_WIDTH;

    static wScale = SCREEN_WIDTH / 375;
    static hScale = SCREEN_HEIGHT / 667;

    static normalizeSize(size, base = 'width'){
        const newSize = base === 'height' ? size * this.hScale : size * this.wScale;
        if(Platform.OS === 'ios'){
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        }else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }
}