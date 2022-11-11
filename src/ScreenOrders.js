import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Task from '../components/tasks';

export default function ScreenA({navigation}) {
  const [task, setTask]=useState(); 
  const [taskItems, setTaskItems]= useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);    
  }

  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
     
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
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item}/>
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
          <TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text=> setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}> 
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
    backgroundColor: '#55BCF6',
    height: 140,
    borderRadius:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
    tasksWraper: {
     
      
      
      
    },
    sectionTittle:{
      paddingLeft: 20,
      paddingTop: 80,
      fontSize: 24,
      fontWeight: 'bold',

    },
    items:{
      marginTop:30,

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
      backgroundColor: '#55BCF6',
      opacity: 0.6,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#COCOCO',
      borderWidth: 1, 



    },
    addText: {},



});