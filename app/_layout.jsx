import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'; // Importe o StatusBar

export default function Layout() {
  return (
    <>

      <Stack screenOptions={{ headerShown: false }} />


      <StatusBar style="light" />
    </>
  );
}