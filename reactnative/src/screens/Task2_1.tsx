import {SafeAreaView, StyleSheet, TextInput, Text, View, Button, ScrollView} from "react-native";

const Task2_1 = ({navigation}:any) => {
    return(
        <SafeAreaView style={styles.background}>
            <View style={{ padding: 20, backgroundColor: '#6200ee', alignItems: 'center', marginBottom: 10, }} >
                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', }}>To-Do App</Text>
            </View >

            <View style={{flexDirection: 'row', marginBottom: 10, marginHorizontal: 16}}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderRadius: 6, padding: 10, backgroundColor: '#fff' }}
                    placeholder="Enter a new task..."
                    placeholderTextColor="#aaa"
                />
                <Button title="Done" onPress={() => { }} />
            </View>

            <View style={{ height: 6, backgroundColor: '#6200ee', marginBottom: 10,}} />

            <ScrollView>
                <View style={{backgroundColor: '#6200ee', borderRadius: 12, borderWidth: 1, borderColor:'#ddd',padding: 8,
                    flexDirection: 'row', marginBottom: 5,}}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <Text style={{fontSize: 17}}>This is a task to complete</Text>
                    </View>
                    <Button title="Done" onPress={() => console.log('Done')} />
                </View>

                <View style={{backgroundColor: '#6200ee', borderRadius: 12, borderWidth: 1, borderColor:'#ddd',padding: 8,
                    flexDirection: 'row', marginBottom: 5,}}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <Text style={{fontSize: 17}}>This is a task to complete</Text>
                    </View>
                    <Button title="Done" onPress={() => console.log('Done')} />
                </View>

                <View style={{backgroundColor: '#6200ee', borderRadius: 12, borderWidth: 1, borderColor:'#ddd',padding: 8,
                    flexDirection: 'row',}}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <Text style={{fontSize: 17}}>This is a task to complete</Text>
                    </View>
                    <Button title="Done" onPress={() => console.log('Done')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffffff",
        flex: 1,
    }
});

export default Task2_1;