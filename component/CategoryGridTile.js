// 93 created

import { View, Text, Pressable } from 'react-native';
import React from 'react';

function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
