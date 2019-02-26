import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parentView}>
        <LinearGradient
          colors={["#2D9CDB", "#56CCF2"]}
          style={styles.headerView}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
        >
          <View style={styles.wrapHeader}>
            <View style={styles.wrapTitle}>
              <Text style={styles.title}>Welcome Sarah Doe</Text>
              <Text style={styles.subtitle}>Upcoming Arisan</Text>
            </View>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://colorlib.com/etc/medi/img/doctor_3.jpg"
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.contentView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1
  },
  headerView: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  contentView: {
    flex: 2,
    backgroundColor: "#FCFCFC"
  },
  wrapHeader: {
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    padding: 20
  },
  wrapTitle: {
    flex: 4,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10
  },
  subtitle: {
    color: "#fff"
  },
  avatarWrapper: {
    flex: 1,
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: "#fff"
  }
});
