<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">User List</h1>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-if="users.length === 0 && !error" class="text-gray-500">No users found.</div>
      <ul v-else class="space-y-4">
        <li v-for="user in users" :key="user._id" class="p-4 border rounded shadow">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Password:</strong> {{ user.password }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const users = ref([]);
  const error = ref('');
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      if (response.data.success) {
        users.value = response.data.data;
      } else {
        error.value = 'Failed to load users.';
      }
    } catch (err) {
      error.value = 'Error fetching users. Please try again.';
    }
  };
  
  onMounted(() => {
    fetchUsers();
  });
  </script>
  
 
  