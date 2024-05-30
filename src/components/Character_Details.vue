<script setup>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import {useRoute} from "vue-router";
const route= useRoute()
const id= route.params.id

const CHARACTER_BY_ID_QUERY = gql`
  query  {
    character(id: ${id}) {
          id
          name
          image
          status
          gender
          species
          episode{
            id
            name
            episode
            air_date
            created
          }
          location{
            name
          }
    }
  }
`;

const { result, loading: charactersLoading, error: charactersError } = useQuery(CHARACTER_BY_ID_QUERY);
</script>
<template>
<div class="bg-gray-900 text-gray-400 min-h-screen flex flex-col justify-between">
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black border border-blue-700 p-4 h-25">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BT3-8XhbPuOQcsWDyzXdKlH-1Jum33eMjA&s" class="w-[150px]">
        <div class="flex space-x-4">
          <a target="_blank" href="https://www.figma.com/design/GVFKwGgsVCxHkK2Ox5Bwj0/Rick-and-Morty?node-id=102-2&t=0jwXQHSZ8DJILdMj-0"><button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110 bg-white"><i class="fa-brands fa-figma"></i></button></a>
          <a target="_blank" href="https://github.com/RedietBT"><button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110 bg-white"><i class="fa-brands fa-github"></i></button></a>
          <RouterLink to="/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Home</button>
          </RouterLink>
          <RouterLink to="/episode/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Episodes</button>
          </RouterLink>
          <RouterLink to="/character/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Characters</button>
          </RouterLink>
          <RouterLink to="/location/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Locations</button>
          </RouterLink>
        </div>
      </nav>
  <header class="bg-gray-800 p-4 text-center">
    <h1 class="text-4xl font-bold mt-[100px]">Rick and Morty: The Movie</h1>
    <h2 class="text-3xl font-bold mt-3">Character Details</h2>
  </header> 
  <main class="p-4">
    <div class="container mx-auto p-4">
      <p v-if="charactersError" class="text-red-500 text-lg">Something went wrong...</p>
      <p v-if="charactersLoading" class="text-blue-500 text-lg">Loading...</p>
      <div v-else-if="result">
        <div class="flex flex-col md:flex-row mb-6">
          <div class="flex-shrink-0 p-4">
            <img :src="result.character.image" alt="Character Image" class="w-60 h-60 object-cover rounded-full hover:scale-110 border-4 border-blue-500/100">
          </div>
          <div class="mt-4 ml-4">
            <h3 class="text-4xl font-semibold mb-2 text-blue-500">{{ result.character.name }}</h3>
            <p class="text-gray-400 text-2xl mt-2">Species: {{ result.character.species }}</p>
            <p class="text-gray-400 text-2xl mt-2">Status: {{ result.character.status }}</p>
            <p class="text-gray-400 text-2xl mt-2">Gender: {{ result.character.gender }}</p>
            <p class="text-gray-400 text-2xl mt-2">Location: {{ result.character.location.name }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          <div v-for="ep in result.character.episode" :key="ep.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-110 w-70 p-4">
            <RouterLink :to="'/episodes/' + ep.id">
            <div class="space-y-2">
              <span class="block text-lg font-semibold text-blue-500">{{ ep.name }}</span>
              <span class="block text-md font-medium text-gray-300">{{ ep.episode }}</span>
              <span class="block text-sm text-gray-400">Air Date: {{ ep.air_date }}</span>
              <span class="block text-sm text-gray-400">Created: {{ ep.created }}</span>
            </div>
          </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="bg-gray-800 p-4 text-center">
    <p>&copy; 2024 Rick and Morty: The Movie. All rights reserved. 
      <a target="_blank" href="https://www.figma.com/design/GVFKwGgsVCxHkK2Ox5Bwj0/Rick-and-Morty?node-id=102-2&t=0jwXQHSZ8DJILdMj-0"><i class="fa-brands fa-figma"></i></a> 
      <a target="_blank" href="https://github.com/RedietBT"><i class="fa-brands fa-github ml-2"></i></a>
    </p>
  </footer>
</div>
</template>
