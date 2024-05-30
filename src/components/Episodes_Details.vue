<script setup>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;

const Episode_BY_ID_QUERY = gql`
query {
    episode(id: ${id}) { 
          id
          name
          episode
          air_date
          created
          characters {
            id
            name
            status
            species
            gender
            image
        }
      }
    }
`;

const { result, loading: episodesLoading, error: episodesError } = useQuery(Episode_BY_ID_QUERY);
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
        <h2 class="text-3xl font-bold mt-3">Episode Details</h2>
    </header> 
    <main class="p-4">
        <div class="container mx-auto p-4 relative">
            <p v-if="episodesError" class="text-red-500 text-lg">Something went wrong...</p>
            <p v-if="episodesLoading" class="text-blue-500 text-lg">Loading...</p>
            <div v-else-if="result" class="flex flex-col">
                <div class="episode-details bg-gray-800 shadow-md rounded-lg p-4 hover:scale-110 absolute top-0 left-0">
                    <div class="space-y-2">
                        <span class="block text-lg font-semibold text-blue-500">{{ result.episode.name }}</span>
                        <span class="block text-md font-medium text-gray-300">{{ result.episode.episode }}</span>
                        <span class="block text-sm text-gray-400">Air Date: {{ result.episode.air_date }}</span>
                        <span class="block text-sm text-gray-400">Created: {{ result.episode.created }}</span>
                    </div>
                </div>
                <div class="character-cards-container flex-wrap justify-between overflow-x-auto mt-20 pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="char in result.episode.characters" :key="char.id" class="character-card bg-gray-800 shadow-md rounded-lg p-4 mr-4 flex-none min-w-[150px] hover:scale-110">
                        <RouterLink :to="'/characters/' + char.id">
                        <img :src="char.image" alt="Character Image" class="w-20 h-20 object-cover rounded-full mr-2 justify-center border-4 border-blue-500/100"><br>
                    </RouterLink>
                        <span class="text-blue-500 text-2xl">{{ char.name }}</span><br>
                        <span class="text-gray-400">{{ char.status }}</span><br>
                        <span class="text-gray-400">{{ char.species }}</span><br>
                        <span class="text-gray-400">{{ char.gender }}</span><br>
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
