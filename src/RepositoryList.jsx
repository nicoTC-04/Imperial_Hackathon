import React from "react";
import {View, Text, FlatList} from 'react-native'
import repositories from "../data/completedData";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
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

export default RepositoryList