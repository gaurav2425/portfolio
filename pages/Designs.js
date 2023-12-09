import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DesignCard from "./components/DesignCard";

const Designs = () => {
  return (
    <View>
      <DesignCard></DesignCard>
      <DesignCard></DesignCard>
      <DesignCard></DesignCard>
    </View>
  );
};

export default Designs;

const styles = StyleSheet.create({});
