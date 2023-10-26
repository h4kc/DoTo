import React from "react";
import AppTextInput from "./AppTextInput";
import { useController } from "react-hook-form";
import { StyleSheet } from "react-native";

const FormTextInput = ({ placeholder, control, defaultValue, name }) => {
  const { field } = useController({
    control,
    defaultValue: defaultValue,
    name,
  });
  return (
    <AppTextInput
      value={field.value}
      placeholder={placeholder}
      onChangeText={field.onChange}
    />
  );
};

export default FormTextInput;

const styles = StyleSheet.create({});
