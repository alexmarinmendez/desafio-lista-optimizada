import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {  styles } from './styles'


const ListItem = ({ item, onPressItem}) => {
  let stylesItem = item.done ? [styles.item, styles.itemDone] : [styles.item];

    return (
        <View style={styles.containerItem}>
          <Text style={stylesItem}>{item.value}</Text>
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => onPressItem(item.id, 'done')}
            >
              <Text style={styles.doneButtonText}>{item.done ? 'Undone' : 'Done'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => onPressItem(item.id, 'edit')}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onPressItem(item.id, 'delete')}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
}

export default ListItem