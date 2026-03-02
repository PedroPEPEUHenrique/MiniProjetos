import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { router } from 'expo-router';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: 'React Native | EFG',
        drawerActiveTintColor: '#000', 
        
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => router.replace('/')} 
            style={{ marginLeft: 15 }}
          >
            <Ionicons 
              name="logo-react" 
              size={28} 
              color="black" 
            />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginRight: 15 }}
          >
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      {}
      <Drawer.Screen 
        name="conta" 
        options={{ 
          drawerLabel: 'Apresenta',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }} 
      />

      {}
      <Drawer.Screen 
        name="extrato" 
        options={{ 
          drawerLabel: 'Contador',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={color} />
          )
        }} 
      />

      {}
      <Drawer.Screen 
        name="outra" 
        options={{ 
          drawerLabel: 'Outra',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          )
        }} 
      />
    </Drawer>
  );
}
