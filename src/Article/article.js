import React from 'react';
import {db,firestore} from '../firestore/firestoreConfig';
class Article extends React.component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            data:[],
            error:null
        };
        this.arrayArticle=[];
     }
    render(){
        this.setState({loading:true});
        const colArticle=db.collection('article');
        this.setState({
            loading:false,
            data:colArticle.get(),
            error :null
        });
        // data is an array of data used to create the list
        // renderItem is an individual element of the data array and render a component for it
        this.arrayArticle=colArticle.get();
        return(
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.title}
                subtitle={item.text}
                containerStyle={{ borderBottomWidth: 0 }}
               />
             )}
             keyExtractor={(item => item.id)}
             ItemSeparatorComponent={this.renderSeparator}
             ListHeaderComponent={this.renderHeader}
          />
        )
    }
}