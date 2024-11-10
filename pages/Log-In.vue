<template>
<div class=" items-center container block w-fit gap-3">
    <form @submit.prevent="login">
    <label class="input input-bordered flex items-center gap-2">
        Email
        <input v-model="email" id="email" type="text" class="grow" placeholder="daisy@site.com" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
        <input v-model="password" id="password" type="password" class="grow" placeholder="password" />
    </label>
    <button type="submit" class="btn btn-primary">send</button>
    </form>
    <p v-if="message" :class="{ 'text-green-500': success, 'text-red-500': !success }" class="mt-4">
      {{ message }}
    </p>
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const message = ref('');
const success = ref(false);

const login = async () => {
  try {
    const response = await axios.post('/api/login', { email: email.value, password: password.value });
    if (response.data.success) {
      message.value = 'Login successful';
      success.value = true;
      // Handle post-login actions here, e.g., saving tokens or redirecting
    } else {
      message.value = response.data.message;
      success.value = false;
    }
  } catch (error) {
    message.value = 'Login failed. Please try again.';
    success.value = false;
  }
};
</script>