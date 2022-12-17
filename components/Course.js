import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
  faNewspaper,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default Course = () => {

  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Google Course</Text>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </View>
      <View style={styles.storagecloudes}>
        <View style={{ ...styles.storagecards, backgroundColor: "#F46BF5" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Storage
          </Text>
        </View>
        <View style={styles.storagecards}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#CDD2DA" }}>
            Cloudes
          </Text>
        </View>
      </View>
      <View style={styles.gb}>
        <View style={styles.gbtop}>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Used 186 GB</Text>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Total 256 GB</Text>
        </View>
        <Image
          source={require("../assets/duration.png")}
          style={{ width: 300 }}
        />
      </View>
      <View style={styles.cards}>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: "#FFAC4E",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} size={30} color={"white"} />
          </View>
          <View style={styles.cardtext}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              New Video Shot
            </Text>
            <Text style={{ fontSize: 10, color: "#A6A6AF" }}>
              168 Videos * 3.8 GB
            </Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: "#3AEEDE",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} size={30} color={"white"} />
          </View>
          <View style={styles.cardtext}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Creative UI Design
            </Text>
            <Text style={{ fontSize: 12, color: "#A6A6AF" }}>
              518 Image * 1.9 GB
            </Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: "#FC64FD",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} size={30} color={"white"} />
          </View>
          <View style={styles.cardtext}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              UI/UX Design
            </Text>
            <Text style={{ fontSize: 12, color: "#A6A6AF" }}>
              134 Filess * 2.9 GB
            </Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: "#4CD3F8",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} size={30} color={"white"} />
          </View>
          <View style={styles.cardtext}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Case Study PDF
            </Text>
            <Text style={{ fontSize: 12, color: "#A6A6AF" }}>
              65 Files * 1.2 GB
            </Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: "#785FD7",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} size={30} color={"white"} />
          </View>
          <View style={styles.cardtext}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Image Editing Pro
            </Text>
            <Text style={{ fontSize: 12, color: "#A6A6AF" }}>
              896 images * 1.6 GB
            </Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 55,
    paddingHorizontal: 30,
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  storagecloudes: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 40,
  },
  storagecards: {
    paddingHorizontal: 45,
    paddingVertical: 12,
    borderRadius: 30,
  },
  gb: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 15,
  },
  gbtop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cards: {
    paddingTop: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
  cardtext: {
    justifyContent: "flex-start",
  },
});
