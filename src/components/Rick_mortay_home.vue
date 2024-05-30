<script setup>
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import {RouterLink} from "vue-router"

import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = [
  'https://i.pinimg.com/564x/8b/e0/ba/8be0baf34d37bf42e82162a533483c6a.jpg',
  'https://i.pinimg.com/564x/1e/b4/5d/1eb45d2da22831745e3bdae3d6016a2e.jpg',
  'https://i.pinimg.com/originals/72/34/49/72344973cd068446e8a75e1ea6183f93.jpg',
  'https://i.pinimg.com/564x/ac/95/f2/ac95f2de25a14f35efc2263e308a257c.jpg',
  'https://i.pinimg.com/564x/e5/8e/6a/e58e6ad2862b803871a2856fde90b19f.jpg'
]

// Define the GraphQL queries
const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

const EPISODES_QUERY = gql`
  query Episodes {
    episodes {
      results {
        id
        name
        episode
        air_date
        created
      }
    }
  }
`

const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`

// Fetch data for each query
const { result: charactersResult, loading: charactersLoading, error: charactersError } = useQuery(CHARACTERS_QUERY)
const { result: episodesResult, loading: episodesLoading, error: episodesError } = useQuery(EPISODES_QUERY)
const { result: locationsResult, loading: locationsLoading, error: locationsError } = useQuery(LOCATIONS_QUERY)

// Log the results for debugging
console.log(charactersResult)
console.log(episodesResult)
console.log(locationsResult)

</script>

<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick and Morty Movie</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body >
    <div class="bg-gray-900 text-gray-400">
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
        <h1 class="text-4xl font-bold text-gray-400 mt-[100px]">Rick and Morty: The Movie</h1>
      </header>
      <main class="p-4">
        <!-- Carousel Section -->
        <section class="mb-8">
          <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="(image, index) in images" :key="index">
              <div class="carousel__item w-full">
                <img :src="image" :alt="'Slide ' + index" class="w-full h-[350px]  rounded-lg">
              </div>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </section>

<!-- Description/Storyline Section -->

            <div class="container mx-auto">
              <!-- First Row -->
              <div class="flex">
                  <div class="w-1/2 bg-gray-900 p-4 m-2 shadow-lg">
                      <div>
                        <section id="description" class="mb-4">
                          <h2 class="text-2xl font-semibold text-gray-400 mb-2">Storyline</h2>
                          <p class="text-gray-400">An animated series on adult-swim about the infinite adventures of Rick, a genius alcoholic and careless scientist, with his grandson Morty, a 14 year-old anxious boy who is not so smart. Together, they explore the infinite universes; causing mayhem and running into trouble.</p>
                      </section>
              
                      <!-- Genre Section -->
                      <section id="genre" class="mb-4">
                          <h2 class="text-2xl font-semibold mb-2">Genre</h2>
                          <p>Animation, Sci-Fi, Comedy</p>
                          <p>"Rick and Morty" merges animated adult comedy with sci-fi adventures across dimensions, featuring dark humor and satire. It explores futuristic technology and alien species while infusing absurdist and black comedy elements.</p>
                      </section>
              
                      <!-- Creators Section -->
                      <section id="creators" class="mb-4">
                          <h2 class="text-2xl font-semibold mb-2">Creators</h2>
                          <p>Dan Harmon, Justin Roiland</p>
                      </section>
              
                      <!-- Stars Section -->
                      <section id="stars" class="mb-4">
                          <h2 class="text-2xl font-semibold mb-2">Stars</h2>
                          <p>Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke</p>
                      </section>
              
                      <!-- Rating Section -->
                      <section id="rating" class="mb-4">
                        <h2 class="text-2xl font-semibold mb-4">Rating</h2>
                          <div class="bg-gray-800 p-6 rounded-lg shadow-md w-1/2 max-w-2xl">
                            <ul class="list-none">
                                <li class="mb-2">
                                    <div class="rating-bar w-1/2 h-3 rounded-full overflow-hidden shadow-lg">
                                        <div class="rating-fill w-92/100"></div>
                                    </div>
                                    <span class="text-gray-300 ml-4">9.2/10 (IMDB)</span>
                                </li>
                            </ul>
                        </div>


                      </section>
                      </div>
                  </div>
                  <div class="w-1/2 bg-gray-900 p-4 m-2 shadow-lg">
                    <div class="container mx-auto">
                      <div class="slider bg-white shadow-lg">
                          <div class="slides">
                              <img src="https://i.pinimg.com/564x/80/17/91/8017910cae86c3cc923ce51c83e7f4d0.jpg" alt="Image 1" class="w-full">
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div class="mt-4 bg-blue-500 p-4 m-2 shadow-lg">
                <p class="text-center"></p>
            </div>
              <!-- Second Row -->
              <div class="mt-4 bg-gray-900 p-4 m-2 shadow-lg">
                  <div>
                     <section id="episodes" class="mb-8">
                      <h1 class="text-4xl font-bold mb-8 text-center">Rick and Morty Episodes</h1>
                      <div class="container mx-auto p-4">
                        <p v-if="episodesError" class="text-red-500 text-lg">Something went wrong...</p>
                        <p v-if="episodesLoading" class="text-blue-500 text-lg">Loading...</p>
                        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          <div v-for="ep in episodesResult?.episodes?.results" :key="ep.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-70 p-4">
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
                        <RouterLink to="/episode/">
                          <div class="flex items-center justify-center">
                            <button type="button" class="flex justify-center items-center rounded-xl w-40 border border-blue-700 bg-blue-500 text-black p-2 mt-4">More on Episodes</button>
                          </div>
                        </RouterLink>
                      </div>
                    </section>
          <!-- Characters Section -->
          <section id="characters" class="mb-8">
            <div class="container mx-auto p-8">
              <div id="app" class="container mx-auto p-8">
                <h1 class="text-4xl font-bold mb-8 text-center">Rick and Morty Characters</h1>
              </div>
              <div class="container mx-auto p-4">
                <p v-if="charactersError" class="text-red-500 text-lg">Something went wrong...</p>
                <p v-if="charactersLoading" class="text-blue-500 text-lg">Loading...</p>
                <div v-else-if="charactersResult" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div v-for="character in charactersResult?.characters?.results" :key="character.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                    <div class="w-full h-48 overflow-hidden flex justify-center items-center">
                      <RouterLink :to="'/characters/' + character.id">
                      <img :src="character.image" alt="Character Image" class="w-48 h-48 object-cover rounded-full mr-2 border-4 border-blue-500/100">
                    </RouterLink>
                    </div>
                    <div class="p-4">
                      <h3 class="text-xl font-semibold mb-2 text-blue-500">{{ character.name }}</h3>
                    </div>
                  </div>
                </div>
                <RouterLink to="/character/">
                  <div class="flex items-center justify-center">
                    <button type="button" class="flex justify-center items-center rounded-xl w-40 border-blue-700 bg-blue-500 text-black p-2 mt-4">More on Characters</button>
                  </div>
                </RouterLink>
              </div>
            </div>
          </section>
        </div>
          <!-- Locations Section -->
          <section id="locations" class="mb-8">
            <div id="app" class="container mx-auto p-8">
                <h1 class="text-4xl font-bold mb-8 text-center">Rick and Morty Locations</h1>
              </div>
               <div class="container mx-auto p-4">
                <p v-if="locationsError" class="text-red-500 text-lg">Something went wrong...</p>
                <p v-if="locationsLoading" class="text-blue-500 text-lg">Loading...</p>
                <div v-else-if="locationsResult" class="space-y-6">
                   <div class="flex flex-wrap overflow-y-auto">
                    <div v-for="loc in locationsResult?.locations?.results" :key="loc.name" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-70 p-4 m-2">
                      <div class="space-y-2">
                        <RouterLink :to="'/locations/' + loc.id">
                        <h3 class="block text-lg font-semibold text-blue-500">{{ loc.name }}</h3>
                      </RouterLink>
                        <span class="block text-md font-medium text-gray-300">{{ loc.type }}</span>
                        <span class="block text-sm text-gray-400">Dimension: {{ loc.dimension }}</span>
                        <span class="block text-sm text-gray-400">Created: {{ loc.created }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <RouterLink to="/location/">
                  <div class="flex items-center justify-center">
                      <button type="button" class="flex justify-center items-center rounded-xl w-40 border-blue-700 bg-blue-500 text-black p-2 mt-4">More on Locations</button>
                    </div>
                  </RouterLink>
                </div>
              </section>
            </div>
          </div>
        </main>
    <footer class="bg-gray-800 p-4 text-center">
        <p>&copy; 2024 Rick and Morty: The Movie. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>
</template>

<style scoped>
      .rating-bar {
            background-color: #f3f4f6;
            position: relative;
        }
        .rating-fill {
            background-color: #4A90E2;
            height: 100%;
            transition: width 0.3s ease-in-out;
        }
  </style>