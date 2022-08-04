import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function Home(props) {
  const INSPECTION_CHECK_LIST = [
    {
      CHECK_LIST_ID: "1646",
      CHECK_LIST_NAME: "Purchase Order",
      CHECK_STATUS: "1",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1647",
      CHECK_LIST_NAME: "Tech Pack",
      CHECK_STATUS: "1",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1648",
      CHECK_LIST_NAME: "Gold Seal Sample",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1649",
      CHECK_LIST_NAME: "Vendor Production File",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1650",
      CHECK_LIST_NAME: "FPT Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1651",
      CHECK_LIST_NAME: "GPT Report",
      CHECK_STATUS: "1",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1652",
      CHECK_LIST_NAME: "Fabric Shrinkage Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1653",
      CHECK_LIST_NAME: "Fit Approved Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
  ];

  const [dropDownValue, setDropDownValue] = useState("");
  const updater = (dropDownValue) => {
    setDropDownValue(dropDownValue);
    console.log(dropDownValue);
  };
  // console.log(props);

  return (
    <View
      testID="container"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Hi!</Text>
      <Text testID="passingProp">{props.route.params.name ?? null}</Text>
    </View>
  );
}

export default Home;
