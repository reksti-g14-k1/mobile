import { useFonts } from "@expo-google-fonts/poppins";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export const loadFonts = async () => {
  await useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
};

// Define interfaces for theme properties
interface Spacing {
  [key: string]: number;
}

interface Color {
  [key: string]: string;
}

interface FontFamily {
  [key: string]: string;
}

interface FontSize {
  [key: string]: number;
}

interface BorderRadius {
  [key: string]: number;
}

// Define theme constants
export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

export const COLORS: Color = {
  primaryRedHex: '#DC3535',
  primaryOrangeHex: '#D17842',
  primaryBlackHex: '#0C0F14',
  primaryDarkGreyHex: '#141921',
  secondaryDarkGreyHex: '#21262E',
  primaryGreyHex: '#252A32',
  secondaryGreyHex: '#252A32',
  primaryLightGreyHex: '#52555A',
  secondaryLightGreyHex: '#AEAEAE',
  primaryWhiteHex: '#FFFFFF',
  primaryBlackRGBA: 'rgba(12,15,20,0.5)',
  secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
};

export const FONTFAMILY: FontFamily = {
  poppins_black: "Poppins_900Black",
  poppins_bold: "Poppins_700Bold",
  poppins_extrabold: "Poppins_800ExtraBold",
  poppins_extralight: "Poppins_200ExtraLight",
  poppins_light: "Poppins_300Light",
  poppins_medium: "Poppins_500Medium",
  poppins_regular: "Poppins_400Regular",
  poppins_semibold: "Poppins_600SemiBold",
  poppins_thin: "Poppins_100Thin",
};

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};


