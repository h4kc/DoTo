import Constants from "expo-constants";
import { Dimensions, Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('screen');
export const WIDTH = width;
export const HEIGHT = height;
export const STATUS_BAR_HEIGHT= Constants.statusBarHeight