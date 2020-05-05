import React from 'react';
import { StyleSheet, Text, View,TextInput, Button, Alert , FlatList,
  ActivityIndicator,
  Platform} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { RadioGroup } from 'react-native-btr';

export default class SearchBarComponent extends React.Component {
  
  
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    const data = require('./data.json');
        this.setState(
          {
            isLoading: false,
            dataSource: data.Plugs,
          },
          function() {
            this.arrayholder = data.Plugs;
          }
        );
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.PlugId ? item.PlugId.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });

    console.log(this);
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  searchid = () => {
     var id = this.state.search;
     this.props.searchPlug(id);
  }

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon= {{size : 24}}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          lightTheme
          placeholderTextColor={'#g5g5g5'}
          cancelButtonTitle="Cancel"
          shadowColor="#282828"
          
        />
        <RadioButtons
        options={ options }
        onSelection={ setSelectedOption.bind(this) }
        selectedOption={this.state.selectedOption }
        renderOption={ renderOption }
        renderContainer={ renderContainer }
      />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text style={styles.textStyle}>{item.PlugId}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

}
 
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 0
  },
  textStyle: {
    padding: 10,
  },
});

