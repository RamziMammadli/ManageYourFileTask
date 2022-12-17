import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDashboard,
  faEllipsisVertical,
  faNewspaper,
  faPhotoFilm,
  faSearch,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";


export default Main = () => {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
        <View style={styles.maintop}>
          <View>
            <FontAwesomeIcon icon={faDashboard} />
          </View>
          <View>
            <FontAwesomeIcon icon={faSearch} />
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.hiramzi}>Hi Ramzi</Text>
          <Text style={styles.manageyourfile}>Manage your file</Text>
        </View>
        <View style={styles.mainbanner}>
          <View>
            <Image
              source={require("../assets/mainb.png")}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View style={{ justifyContent: "space-between" }}>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 12, color: "white" }}>
                Unlimited Storage
              </Text>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                $30/year
              </Text>
              <Text style={{ fontSize: 11, color: "white" }}>
                Offer till May 26
              </Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("GoogleCourse")}
              style={{
                backgroundColor: "#FFA22C",
                padding: 7,
                alignItems: "center",
                width: "65%",
                borderRadius: 30,
              }}
            >
              <Text style={{ color: "white" }}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mediacategory}>
          <View style={styles.mediacards}>
            <View style={{ ...styles.cardimage, backgroundColor: "#FD63FF" }}>
              <FontAwesomeIcon icon={faPhotoFilm} size={35} color={"white"} />
            </View>
            <Text style={{ fontWeight: "bold", paddingTop: 8 }}>Picture</Text>
            <Text style={{ fontSize: 12, color: "grey", paddingTop: 3 }}>
              806 Items
            </Text>
          </View>
          <View style={styles.mediacards}>
            <View style={{ ...styles.cardimage, backgroundColor: "#FFBA6B" }}>
              <FontAwesomeIcon icon={faVideo} size={35} color={"white"} />
            </View>
            <Text style={{ fontWeight: "bold", paddingTop: 8 }}>Video</Text>
            <Text style={{ fontSize: 12, color: "grey", paddingTop: 3 }}>
              250 Items
            </Text>
          </View>
          <View style={styles.mediacards}>
            <View style={{ ...styles.cardimage, backgroundColor: "#49D3F7" }}>
              <FontAwesomeIcon icon={faNewspaper} size={35} color={"white"} />
            </View>
            <Text style={{ fontWeight: "bold", paddingTop: 8 }}>File</Text>
            <Text style={{ fontSize: 12, color: "grey", paddingTop: 3 }}>
              150 Items
            </Text>
          </View>
        </View>
        <View style={styles.recenttext}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Recents Files
          </Text>
          <Text style={{ color: "grey" }}>View all</Text>
        </View>
        <View style={styles.file}>
          <View style={styles.files}>
            <Image
              source={require("../assets/folder.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{paddingRight:60}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Google UX Course</Text>
              <Text style={{fontSize:10, color:'grey'}}>Uploaded April 28</Text>
            </View>
            <FontAwesomeIcon icon={faEllipsisVertical} color={'grey'} />
          </View>
          <View style={styles.files}>
            <Image
              source={require("../assets/folder.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{paddingRight:70}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Dribble Shot File</Text>
              <Text style={{fontSize:10, color:'grey'}}>Uploaded April 26</Text>
            </View>
            <FontAwesomeIcon icon={faEllipsisVertical} color={'grey'} />
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 55,
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  maintop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    paddingVertical: 25,
  },
  hiramzi: {
    fontSize: 16,
    color: "#A3A3B1",
    fontWeight: "bold",
  },
  manageyourfile: {
    fontSize: 30,
    fontWeight: "bold",
  },
  mainbanner: {
    backgroundColor: "#8C62FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 30,
  },
  mediacategory: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 35,
    justifyContent: "space-between",
  },
  cardimage: {
    backgroundColor: "#FB62FF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  mediacards: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
  },
  recenttext: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  file:{
    paddingVertical:25,
    justifyContent:'space-between',
    height:240
  },
  files: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
