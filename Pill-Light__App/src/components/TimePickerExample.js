import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePickerExample = () => {
  const [time, setTime] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTime(currentDate);
  };

  const showTimePicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button title="복용시간 선택" onPress={showTimePicker} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text style={{ margin: 8, fontSize: 18 }}>
        {time.toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default TimePickerExample;
