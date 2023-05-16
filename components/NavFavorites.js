import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination } from "../slices/navSlice";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Montreal, QC, Canada",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Laval, QC, Canada",
  },
];

const NavFavorites = () => {
  const dispatch = useDispatch();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => dispatch(setDestination(destination))}
        >
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
