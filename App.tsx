import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import ViewPager from '@react-native-community/viewpager';

const styles = StyleSheet.create({
  viewPagerParentView: {
    flex: 1,
  },
  viewPagerPrimaryChildView: {

  },
  viewPagerSecondaryChildView: {
    flex: 1
  },
  videoParentView: {
    flex: 4
  },
  videoTitleParentView: {
    flex: 2
  },
  likeShareParentView: {
    flex: 2,
    flexDirection: "row"
  },
  likeparentView: {
    flex: 1
  },
  shareParentView: {
    flex: 1
  },
  topCommentListParentView: {
    flex: 4
  }
});

export default class FetchExample extends React.Component<{}, { isLoading: boolean, dataSource: any[]}> {

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

    var viewPagerChildernContent = this.state.dataSource.map(function(data){
    return <View style={styles.viewPagerPrimaryChildView}>
          <View style={styles.viewPagerSecondaryChildView}>
            <View style={styles.videoParentView}>
              <Text>video parent layout comes here</Text>
              <Video
                source={{ uri: data.source }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="stretch"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
              />
            </View>
            <View style={styles.videoTitleParentView}><Text>Video title comes here</Text></View>
            <View style={styles.likeShareParentView}>
              <View style={styles.likeparentView}>
                <Text>Like text comes here</Text>
              </View>
              <View style={styles.shareParentView}>
                <Text>Share text comes here</Text>
              </View>
            </View>
            <View style={styles.topCommentListParentView}>
              <Text>top comment list comes here</Text>
              <FlatList
          data={data.top_comments}
          renderItem={({ item }) => <Text>{item.comment}</Text>}
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




// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component<{text: string}, {isShowingText: boolean}> {

//   componentDidMount(){
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }


{/* <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
        /> */}
{/* <Video
          source={{ uri: 'https://res.cloudinary.com/stumblercdn/video/upload/w_576,h_720,c_fit,br_2000k,vc_auto/v1581846837/H_510.mp4' }} 
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        /> */}

{/* <ViewPager style={styles.viewPager} initialPage={0}>
          
        </ViewPager> */}