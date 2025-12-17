import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if (enteredGoalText.trim() === '') return;
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    value={enteredGoalText}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelButton}>
                        <Button title='Cancel' onPress={props.onCloseGoal} color='#f31282'/>
                    </View>
                    <View style={styles.confirmButton}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cancelButton: {
        width: 100,
    },
    confirmButton: {
        width: 100,
        marginLeft: 16,
    }
});