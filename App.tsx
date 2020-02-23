import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';
import ViewPager from '@react-native-community/viewpager';

const styles = StyleSheet.create({
  viewPagerParentView: {
    flex: 1,
  },
  viewPagerPrimaryChildView: {
    backgroundColor: "#404040"
  },
  viewPagerSecondaryChildView: {
    flex: 1
  },
  videoParentView: {
    flex: 4,
    marginStart: 12,
    marginEnd: 12,
  },
  videoTitleParentView: {
    flex: 2
  },
  likeShareParentView: {
    flex: 2,
    flexDirection: "row"
  },
  likeparentView: {
    flex: 1,
    marginEnd: 6,
    marginStart: 12
  },
  shareParentView: {
    flex: 1,
    marginEnd: 12,
    marginStart: 6
  },
  topCommentListParentView: {
    flex: 4
  },
  commentRow: {
    marginStart: 12,
    marginEnd: 12,
    marginTop: 6,
    marginBottom: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingStart: 4,
    paddingEnd: 4,
    backgroundColor: "#bbbbbb"
  }
});

export default class FetchExample extends React.Component<{}, { isLoading: boolean, dataSource: any[] }> {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    return fetch('https://stumbler.com/apiv1/videos/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    function onLikeButtonPressed() {
      alert('like button pressed')
    }
    function onShareButtonPressed() {
      alert('share button pressed')
    }
    var viewPagerChildernContent = this.state.dataSource.map(function (data) {
      return <View style={styles.viewPagerPrimaryChildView}>
        <View style={styles.viewPagerSecondaryChildView}>
          <View style={styles.videoParentView}>
            <Video
              source={{ uri: data.source }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="stretch"
              shouldPlay
              isLooping
              style={{ width: "auto", height: 300 }}
            />
          </View>
          <View style={styles.videoTitleParentView}><Text>{data.title}</Text></View>
          <View style={styles.likeShareParentView}>
            <View style={styles.likeparentView}>
              <Button onPress={onLikeButtonPressed} title="Like" />
            </View>
            <View style={styles.shareParentView}>
              <Button onPress={onShareButtonPressed} title="Share" />
            </View>
          </View>
          <View style={styles.topCommentListParentView}>
            <FlatList
              data={data.top_comments}
              renderItem={({ item }) => <View style={styles.commentRow}><Text>{item.comment}</Text></View>}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      </View>


    })

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <ViewPager style={styles.viewPagerParentView} initialPage={0}>
        {viewPagerChildernContent}
      </ViewPager>
    );

  }
}
