import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 18, color: '#ddd' }}>Dashboard</Text>
      <TouchableOpacity
        onPress={signOut}
        style={{
          width: 200,
          height: 60,
          borderRadius: 8,
          backgroundColor: '#c53030',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Clique para sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
