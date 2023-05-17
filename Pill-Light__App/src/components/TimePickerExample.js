import React, { useState } from 'react';
import { View, Button, DatePickerIOS, Text, StyleSheet} from 'react-native';

const TimePickerExample = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onTimeChange = (time) => {
    setSelectedTime(time);
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  const hideTimePicker = () => {
    setShowPicker(false);
  };

  return (
    <View>
      <Button title="Select Time" onPress={showTimePicker} />
      {showPicker && (
        <DatePickerIOS
          date={selectedTime}
          mode="time"
          onDateChange={onTimeChange}
          onCancel={hideTimePicker}
          onConfirm={hideTimePicker}
        />
      )}
      <Text style={styles.selectedTimeText}>{selectedTime.toLocaleTimeString()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    selectedTimeText: {
      fontSize: 14,
    },
  });
export default TimePickerExample;
