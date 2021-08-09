import MapView from "react-native-maps";
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native";
import { SIZES, FONTS, COLORS, icons, GOOGLE_API_KEY } from "../constants";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import RadioButton from 'expo-radio-button';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Placesearch from 'react-native-placesearch';
import { Icon } from "native-base";



const Booking = ({ navigation }) => {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrormsg] = React.useState(null)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [current, setCurrent] = React.useState('road');
  const [address, setAddress] = React.useState('')




  function renderPlacesInput() {


    const onchange = (data) => {
      setAddress(data);
    };

    return (

      <Placesearch
        apikey={GOOGLE_API_KEY}
        selectedAddress={(value) => console.log(value)}
        // country='in'
        removeImg={true}

        Changeheader={false}
        CustomHeader={
          <View style={{ flexDirection: 'row', height: 45, alignItems: 'center' }}>

            <TextInput
              placeholder="Search for Places"
              underlineColorAndroid='transparent'
              autoFocus={true}
              // onKeyPress={() => searchAddress()}
              onChangeText={(value) => onchange(value)}
              style={{
                color: COLORS.black,
                fontSize: 20,
              }}
            />
          </View>
        }
        ChangList={true}
        CustomList={(item) =>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, width: '100%', height: 45 }}>
              <Image source={icons.pin} style={{ width: 20, height: 20, tintColor: COLORS.black, }} />
              <Text>
                {item.description}
              </Text>
            </View>
          </View>
        }


        InputContainer={{

        }}
        MainContainer={{
          backgroundColor: COLORS.primary
        }}

        ImgStyle={{
          display: 'none',
        }}

      />
      // <GooglePlacesAutocomplete

      //   query={{
      //     key: GOOGLE_API_KEY,
      //     language: 'en',

      //   }}
      //   onPress={(data, details) => console.log(data, details)}
      //   placeholder='Search'
      //   requestUrl={{
      //     url: 'https://maps.googleapis.com/maps/api/place'
      //   }}
      //   textInputProps={{
      //     inputComp: TextInput,
      //     errorStyle: { color: 'red' },

      //   }}
      //   fetchDetails={true}
      //   styles={{
      //     textInput: {
      //       color: COLORS.black,
      //       fontSize: 18,
      //     }

      //   }}
      // />
    )

  }


  // React.useEffect(() => {
  //   setModalVisible(!modalVisible)
  // }, [])

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      {/* <ScrollView> */}

      <ProgressSteps
        completedProgressBarColor="#211b47"
        completedStepIconColor="#211b47"
        activeStepIconBorderColor="lightgray"
        activeLabelColor="#211b47"
        completedLabelColor="blue"
      >
        <ProgressStep
          previousBtnStyle={styles.prev1}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.text}
          label="Schedule Shipment"
        >

          {/* location form */}
          <View style={{
            position: "relative",
            bottom: 10,
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}>
            <View
              style={{
                width: SIZES.width,
                // height: SIZES.height,
                paddingVertical: SIZES.padding * 4,
                paddingHorizontal: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                paddingTop: 20,
                marginTop: 20,

              }}
            >

              {/* house number */}
              <View>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                    Moving From:
                  </Text>
                  <TouchableOpacity style={{
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 45,
                    padding: 5,
                    marginLeft: 10,
                  }}>
                    <Image
                      source={icons.question}
                      style={{
                        width: 20,
                        height: 20,

                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginVertical: SIZES.padding / 3,
                  borderBottomColor: COLORS.gray,
                  borderBottomWidth: 1,
                  marginBottom: 20
                }}>

                  <Image
                    source={icons.edit}
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 5,

                    }}
                  />

                  <TextInput
                    style={{
                      width: SIZES.width * 0.83,
                      height: 40,
                      color: COLORS.black,
                      ...FONTS.body3,

                    }}
                    placeholder="14, 12 Rue Pierre Castagnou, Paris France"
                    onFocus={() => setModalVisible(!modalVisible)}
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.black}
                  />


                </View>
              </View>
              {/* using current location */}
              <TouchableOpacity style={{ display: "flex", flexDirection: 'row', marginBottom: 20, }}>
                <Image
                  source={icons.location}
                  style={{

                    // backgroundColor: COLORS.secondary,
                    height: 22,
                    width: 22,
                    marginRight: 5,
                  }}
                />

                <Text>Use Current Location</Text>
              </TouchableOpacity>
              {/* house number */}
              <View >
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                    Moving TO:
                  </Text>
                  <TouchableOpacity style={{
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 45,
                    padding: 5,
                    marginLeft: 10,
                  }}>
                    <Image
                      source={icons.question}
                      style={{
                        width: 20,
                        height: 20,

                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginVertical: SIZES.padding / 3,
                  borderBottomColor: COLORS.gray,
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  alignItems: 'center'
                }}>

                  <Image
                    source={icons.search}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      tintColor: COLORS.gray

                    }}
                  />

                  <TextInput
                    style={{
                      width: SIZES.width * 0.83,
                      height: 40,
                      color: COLORS.black,
                      ...FONTS.body3,

                    }}
                    placeholder="14, 12 Yonge Street, Toronto, ON, Canada"
                    onFocus={() => setModalVisible(!modalVisible)}
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.black}
                  />


                </View>

              </View>
              <View >
                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                  Moving Date:
                </Text>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginVertical: SIZES.padding / 3,
                  borderBottomColor: COLORS.gray,
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  alignItems: 'center',
                }}>

                  <Image
                    source={icons.date}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 10,


                    }}
                  />

                  <TextInput
                    style={{
                      width: SIZES.width * 0.83,
                      height: 40,
                      color: COLORS.black,
                      ...FONTS.body3,

                    }}
                    placeholder="2021-07-18"

                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.black}
                  />


                </View>

              </View>
              <View>
                <Text>Shippment Mode:</Text>
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  marginHorizontal: SIZES.base * 2,
                }}>
                  <RadioButton selected={current} onSelected={(value) => setCurrent(value)} value='sea' radioBackground={COLORS.gray}>
                    <Text>SEA</Text>
                  </RadioButton>
                  <RadioButton selected={current} onSelected={(value) => setCurrent(value)} value='air' radioBackground={COLORS.gray}>
                    <Text>AIR</Text>
                  </RadioButton>
                  <RadioButton selected={current} onSelected={(value) => setCurrent(value)} value='road' radioBackground={COLORS.gray}>
                    <Text>ROAD</Text>
                  </RadioButton>
                </View>

              </View>
            </View>

          </View>
          <View style={{

            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,

          }}>
            <Modal animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}>
              <View style={{
                position: "absolute",
                bottom: 10,
                left: 0,
                right: 0,
                alignItems: "center",
                justifyContent: "center",
              }}>
                <View style={{
                  width: SIZES.width,
                  paddingVertical: SIZES.padding * 10,
                  paddingHorizontal: SIZES.padding,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.white,
                  // paddingTop: 40,
                  display: 'flex',
                  alignItems: 'center',

                }}>
                  <View style={{
                    flex: 1,
                    position: 'absolute',

                    top: 20,
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    width: SIZES.width,
                    backgroundColor: '#ededed',
                    height: 40,
                    borderRadius: 10,


                  }}>
                    <Text style={{ ...FONTS.body2 }}>Search Location</Text>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Image
                        source={icons.close}
                        resizeMode="cover"
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: COLORS.black,
                          // position: 'absolute',
                          // right: 20,
                          // top: 20,
                        }}
                      />
                    </TouchableOpacity>
                  </View>


                  <View >
                    <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>
                      Type a Post Code or Part of your address to begin with
                    </Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginVertical: SIZES.padding / 3,
                      borderBottomColor: COLORS.gray,
                      borderBottomWidth: 1,
                      marginBottom: 20,
                      alignItems: 'center',
                    }}>

                      <Image
                        source={icons.search}
                        style={{
                          width: 25,
                          height: 25,
                          marginRight: 10,
                          tintColor: COLORS.gray


                        }}
                      />
                      {renderPlacesInput()}
                      {/* <TextInput
                        style={{
                          width: SIZES.width * 0.83,
                          height: 40,
                          color: COLORS.black,
                          ...FONTS.body3,

                        }}
                        placeholder="14 , 12"

                        placeholderTextColor={COLORS.gray}
                        selectionColor={COLORS.black}
                      /> */}




                    </View>

                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ProgressStep>
        <ProgressStep
          previousBtnStyle={styles.prev}
          previousBtnTextStyle={styles.text}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.text}
          label="Shipment Details"
        >
          <Text>Shipment Details</Text>
        </ProgressStep>
        <ProgressStep
          previousBtnStyle={styles.prev}
          previousBtnTextStyle={styles.text}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.text}
          label="Customer Details"
        >
          <Text>Customer Details</Text>
        </ProgressStep>
        <ProgressStep
          previousBtnStyle={styles.prev}
          previousBtnTextStyle={styles.text}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.text}
          label="View & Pay"
          onSubmit={() => navigation.navigate("Address")}
        >
          <Text>View and Pay</Text>
        </ProgressStep>
      </ProgressSteps>
      {/* </ScrollView> */}
    </KeyboardAvoidingView >


  );
};

const styles = {
  button: {
    backgroundColor: "#6e59f3",
    // padding: 30,
    borderRadius: 25,
    height: 50,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: SIZES.padding * 2,
  },
  prev1: {
    display: "none",
  },
  prev: {
    backgroundColor: "#6e59f3",

    borderRadius: 25,
    height: 50,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: COLORS.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
};

export default Booking;
