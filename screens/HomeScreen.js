import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "../components/ListItem";
import axios from "axios";
import { Constants } from "expo-constants";

// const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;
const URL =
  "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=a8bac3806f5c4109bec596420f9f457e";

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.articles);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article")}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
