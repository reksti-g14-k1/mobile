import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

const CafeCondition = ({condition}) => {
  let textColor;
  let conditionText;

  // Set text and color based on the condition
  switch (condition) {
    case 'RINGAN':
      textColor = '#2dc937';
      conditionText = 'RINGAN';
      break;
    case 'SEDANG':
      textColor = '#e7b416';
      conditionText = 'SEDANG';
      break;
    case 'PADAT':
      textColor = '#cc3232';
      conditionText = 'PADAT';
      break;
    default:
      textColor = '#000'; // Default color
      conditionText = 'Unknown'; // Default text
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: textColor}]}>{conditionText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
});

export default CafeCondition;