import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../components/tasks'

export default function Buffer() {
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (record) => {
    setTaskItems([...taskItems, record])
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const test = () => {
    fetch('http://10.22.200.48:3000/users')
      .then(response => response.json())
      .then(users => func2(users));
  
    console.log('Constructor Called.');
  };

  const func2 = (response) => {
    response.map(object => handleAddTask(object));
  }

  return (
    <View style={styles.container}>

    {/* Tasks */}
    
      <View style={styles.tasksWraper}>
        <View style={styles.topNoch}>
          <Text style ={styles.sectionTittle}> Today's Tasks</Text>
        </View>
      <View style = {styles.items}>
      {/*Tasks*/}


      {
        taskItems.map((item, index) =>{
          return(
            console.log(item),
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task {...item}/>
            </TouchableOpacity>
          )
           
        })
      }
      
    
      </View>

    </View>
      {/*Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
        >
          
          <TouchableOpacity onPress={() => test()}> 
            <View style= {styles.addWrapper}>
              <Text style= {styles.addText}>+</Text>

            </View>
          
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  )
}

const styles = StyleSheet.create({
  topNoch:{
    backgroundColor: '#4c9ccf',
    height: 140,
    borderRadius:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#DADAE6',

  },
    tasksWraper: {
     
    },
    sectionTittle:{
      color: '#fff',
      paddingLeft: 20,
      paddingTop: 80,
      fontSize: 24,
      fontWeight: 'bold',

    },
    items:{
      marginTop:40,
      paddingHorizontal: 15,

    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#COCOCO',
      borderWidth: 1, 
      width: 250,


    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#2100C4',
      opacity: 0.6,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#COCOCO',
      borderWidth: 1, 



    },
    addText: {},



});
