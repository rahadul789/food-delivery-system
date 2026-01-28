import { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";

const API_URL = "http://localhost:4000";

export default function App() {
  const [email, setEmail] = useState("reason@gmail.com");
  const [password, setPassword] = useState("1212");
  const [token, setToken] = useState("");
  const [response, setResponse] = useState("");

  const register = async () => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John",
        email,
        password,
        role: "customer",
      }),
    });

    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  const login = async () => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setToken(data.token);
    setResponse(JSON.stringify(data, null, 2));
  };

  const createOrder = async () => {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  const getOrders = async () => {
    const res = await fetch(`${API_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>API Tester</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Register" onPress={register} />
      <Button title="Login" onPress={login} />
      <Button title="Create Order" onPress={createOrder} />
      <Button title="Get Orders" onPress={getOrders} />

      <Text style={styles.label}>Response:</Text>
      <Text style={styles.response}>{response}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  response: {
    marginTop: 10,
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 5,
  },
});
