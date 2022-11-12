import React from "react";
import {View, Text, FlatList} from 'react-native'
import repositories from "../data/urgentData";
import RepositoryItem from "./RepositoryItem";

const RepositoryListUrgent = () => {
    return(
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item: repo}) => (
                <RepositoryItem{...repo}/>
            )}

        />
    )
}

export default RepositoryListUrgent