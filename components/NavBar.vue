<template>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <NuxtLink to="/"><a class="btn btn-ghost text-xl">API Test - Auth </a></NuxtLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 gap-3">
        <NuxtLink to="/Log-In"><li class="btn btn-secondary btn-outline"><a>Log in</a></li></NuxtLink>
        <NuxtLink to="/Register"><li class="btn btn-accent btn-outline"><a>Register</a></li></NuxtLink>
    </ul>
  </div>
</div>
</template>