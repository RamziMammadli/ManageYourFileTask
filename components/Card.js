import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default Card = ({ title, date }) => {
  return (
    <View style={styles.files}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          source={require("../assets/folder.png")}
          style={{ width: 70, height: 70 }}
        />
        <View style={{ paddingLeft:10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 10, color: "grey" }}>{date}</Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsisVertical} color={"grey"} />
    </View>
  );
};

const styles = StyleSheet.create({
  files: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
